/**
 * Gemini AMPM — routeLead orchestrator
 * -------------------------------------
 *
 * One function called by all three Astro Action handlers (consult, quote,
 * maintenance). Executes the 6-step pipeline from § "Forms Wiring" of
 * SERVICE_VERTICAL_TEMPLATE.md:
 *
 *   1. Verify Turnstile token (fail = clean { success: false }).
 *   2. Resolve recipient mailbox from (pillar, formType) via PILLAR_MAILBOXES.
 *   3. Send office notification via Resend with `[QUOTE|CONSULT|MAINT — pillar]`
 *      subject prefix and a Reply-To pointing at the enquirer.
 *   4. Send auto-confirm email to the enquirer (fire-and-forget alongside D1
 *      write so the user-facing latency stays low).
 *   5. Parallel D1 write to `lead_submissions` with `send_status` reflecting
 *      the Resend office-notification result. If the office notification
 *      failed, the D1 row carries `send_status='failed'` + the Resend error
 *      — guarantees no silent lost lead per the spec's risk register.
 *   6. Return `{ success: true, thanksPath }` on success, `{ success: false,
 *      error }` otherwise. Quote forms use `thanksPath` for a client-side
 *      redirect; consult/maintenance show inline confirmation.
 *
 * The handler NEVER throws. Every failure mode is mapped to a clean
 * envelope so the form island can render a polite error and the user can
 * still call the fallback DDI.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring".
 */

import type { ActionAPIContext } from 'astro:actions';

import { verifyTurnstile } from './turnstile';
import { sendEmail } from './resend';
import {
  getMailbox,
  getSubjectPrefix,
  type FormType,
} from './mailbox-routing';
import {
  logLead,
  type D1Database,
  type LeadRow,
  type SendStatus,
} from './d1';
import {
  buildAutoConfirmEmail,
  buildOfficeNotificationEmail,
} from './auto-confirm';

// ---------- Input shapes ----------
//
// We accept the loosest superset of the three Zod schemas so the orchestrator
// can be called from any of the three handlers without casts. The Astro
// Action defineAction() schema has already validated the required fields by
// the time we get here, so non-applicable fields are simply `undefined`.

export interface RouteLeadInput {
  // Common
  source: 'hero' | 'gate' | 'primary' | 'maintenance' | 'footer';
  pillar: string;
  variantId: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  pagePath: string;
  turnstileToken: string;

  // Shared contact
  name: string;
  email: string;
  phone?: string;
  message?: string;

  // Quote-only
  company?: string;
  role?: string;
  postcode?: string;
  spaceType?: string;
  approxAreaSqm?: number;
  fileUploadKey?: string;

  // Maintenance-only
  currentSystem?: string;
}

export interface RouteLeadResult {
  success: boolean;
  /** Set on success; quote form redirects client-side, others use inline. */
  thanksPath?: string;
  /** Human-safe error string for inline display; never a stack trace. */
  error?: string;
}

// ---------- Runtime env surface ----------
//
// Astro Action handlers receive `ctx` of type `ActionAPIContext`. On
// Cloudflare Pages, the runtime bindings live on `ctx.locals.runtime.env`
// (already declared in `src/env.d.ts`). We pluck what we need defensively
// so missing bindings degrade to clean failures rather than ReferenceErrors.

interface RuntimeEnv {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  LEAD_DB?: D1Database;
}

function pickRuntimeEnv(ctx: ActionAPIContext): RuntimeEnv {
  const locals = ctx.locals as
    | { runtime?: { env?: Record<string, unknown> } }
    | undefined;
  const env = (locals?.runtime?.env ?? {}) as Record<string, unknown>;
  return {
    RESEND_API_KEY:
      typeof env.RESEND_API_KEY === 'string' ? env.RESEND_API_KEY : undefined,
    TURNSTILE_SECRET_KEY:
      typeof env.TURNSTILE_SECRET_KEY === 'string'
        ? env.TURNSTILE_SECRET_KEY
        : undefined,
    LEAD_DB:
      env.LEAD_DB && typeof (env.LEAD_DB as D1Database).prepare === 'function'
        ? (env.LEAD_DB as D1Database)
        : undefined,
  };
}

/**
 * UUID v4 generator. Uses Web Crypto in workers / modern runtimes, falls
 * back to a Math.random-based generator if `crypto.randomUUID` isn't
 * available (shouldn't happen in Cloudflare Pages but cheap insurance).
 */
function uuidv4(): string {
  const c = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
  if (c?.randomUUID) {
    return c.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (ch) => {
    const r = (Math.random() * 16) | 0;
    const v = ch === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Build the flat field bag we surface to the office notification email. */
function buildOfficeFields(
  input: RouteLeadInput,
  formType: FormType,
): Record<string, string | number | undefined> {
  const base: Record<string, string | number | undefined> = {
    name: input.name,
    email: input.email,
    phone: input.phone,
  };
  if (formType === 'quote') {
    base.company = input.company;
    base.role = input.role;
    base.postcode = input.postcode;
    base.spaceType = input.spaceType;
    base.approxAreaSqm = input.approxAreaSqm;
    base.fileUploadKey = input.fileUploadKey;
  } else if (formType === 'maintenance') {
    base.postcode = input.postcode;
    base.currentSystem = input.currentSystem;
  } else {
    base.message = input.message;
  }
  base.source = input.source;
  base.variantId = input.variantId;
  return base;
}

/**
 * Run the full lead pipeline. Catches everything — returns a clean envelope.
 *
 * @param input    - Validated input from the corresponding defineAction().
 * @param ctx      - Astro Action context (carries Cloudflare runtime env).
 * @param formType - Which form fired this: consult | quote | maintenance.
 */
export async function routeLead(
  input: RouteLeadInput,
  ctx: ActionAPIContext,
  formType: FormType,
): Promise<RouteLeadResult> {
  const id = uuidv4();
  const ts = new Date().toISOString();
  const env = pickRuntimeEnv(ctx);

  // Pre-allocate the D1 row so we can short-circuit any branch into a
  // single tail-call `logLead(...)` + return.
  const baseRow: LeadRow = {
    id,
    ts,
    formType,
    pillar: input.pillar,
    source: input.source,
    variantId: input.variantId,
    pagePath: input.pagePath,
    name: input.name,
    email: input.email,
    phone: input.phone,
    company: input.company,
    role: input.role,
    postcode: input.postcode,
    spaceType: input.spaceType,
    approxAreaSqm: input.approxAreaSqm,
    currentSystem: input.currentSystem,
    message: input.message,
    fileUploadKey: input.fileUploadKey,
    utmSource: input.utmSource,
    utmMedium: input.utmMedium,
    utmCampaign: input.utmCampaign,
    sendStatus: 'skipped' satisfies SendStatus,
  };

  try {
    // Step 1 — Turnstile (fail-closed).
    const tokenOk = await verifyTurnstile(
      input.turnstileToken,
      env.TURNSTILE_SECRET_KEY,
    );
    if (!tokenOk) {
      await logLead(env.LEAD_DB ?? null, {
        ...baseRow,
        sendStatus: 'failed',
        sendError: 'turnstile_failed',
      });
      return {
        success: false,
        error:
          'We could not verify your browser. Please refresh the page and try again.',
      };
    }

    // Step 2 — resolve mailbox + subject.
    const mailbox = getMailbox(input.pillar, formType);
    const subjectPrefix = getSubjectPrefix(input.pillar, formType);

    // Step 3 — office notification email.
    const officeEmail = buildOfficeNotificationEmail({
      formType,
      pillar: input.pillar,
      subjectPrefix,
      fields: buildOfficeFields(input, formType),
      pagePath: input.pagePath,
      utm: {
        source: input.utmSource,
        medium: input.utmMedium,
        campaign: input.utmCampaign,
      },
    });

    const officeSend = await sendEmail({
      to: mailbox,
      subject: officeEmail.subject,
      html: officeEmail.html,
      replyTo: input.email,
      apiKey: env.RESEND_API_KEY ?? '',
    });

    // Step 4 — auto-confirm to the enquirer. Build now, fire in parallel
    // with the D1 write below so the user-facing latency is bounded by
    // whichever of the two is slower (typically D1 < 50ms).
    const confirm = buildAutoConfirmEmail({
      recipientName: input.name,
      formType,
      pillar: input.pillar,
      thanksUrl:
        formType === 'quote'
          ? `https://geminiampm.co.uk/thanks/${encodeURIComponent(input.pillar)}/`
          : undefined,
    });
    const confirmPromise = sendEmail({
      to: input.email,
      subject: confirm.subject,
      html: confirm.html,
      apiKey: env.RESEND_API_KEY ?? '',
    });

    // Step 5 — D1 write, parallel with confirm send.
    const finalRow: LeadRow = {
      ...baseRow,
      mailbox,
      sendStatus: officeSend.ok ? 'sent' : 'failed',
      sendError: officeSend.ok ? undefined : officeSend.error,
      resendId: officeSend.id,
    };
    const [, confirmResult] = await Promise.all([
      logLead(env.LEAD_DB ?? null, finalRow),
      confirmPromise,
    ]);

    // If the office send failed, surface a polite error AND the lead is
    // already in D1 with send_status='failed' for the recovery cron to pick
    // up. The auto-confirm result is best-effort and never gates success.
    if (!officeSend.ok) {
      return {
        success: false,
        error:
          'We could not deliver your enquiry just now. Please try again, or call us directly.',
      };
    }

    // Confirm failure is logged but doesn't fail the user-facing call —
    // the lead is in the office inbox and in D1, which is what matters.
    if (!confirmResult.ok) {
      console.warn('autoConfirmSendFailed', confirmResult.error, id);
    }

    // Step 6 — success envelope. Quote forms redirect client-side; the
    // other two render inline confirmation but get the thanksPath anyway
    // so the island can decide.
    return {
      success: true,
      thanksPath: `/thanks/${input.pillar}/`,
    };
  } catch (err) {
    // Catch-all: write a `failed` D1 row with the exception message and
    // return a clean envelope. Never let the action handler throw.
    const message = err instanceof Error ? err.message : String(err);
    console.error('routeLeadUncaught', message, id);
    await logLead(env.LEAD_DB ?? null, {
      ...baseRow,
      sendStatus: 'failed',
      sendError: `uncaught: ${message}`,
    });
    return {
      success: false,
      error:
        'Something went wrong on our side. Please try again, or call us directly.',
    };
  }
}

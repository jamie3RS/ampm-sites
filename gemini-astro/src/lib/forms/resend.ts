/**
 * Gemini AMPM — Resend REST client
 * ---------------------------------
 *
 * Tiny wrapper around the Resend HTTPS API. We don't pull in the official
 * SDK because:
 *   (a) Cloudflare Pages / Workers prefers fewer Node-shaped deps,
 *   (b) we only ever need POST /emails,
 *   (c) the SDK adds zero retry/observability we couldn't add here.
 *
 * Returns a `{ ok, id?, error? }` envelope rather than throwing. The
 * orchestrator (`routeLead`) needs to be able to log a `send_status='failed'`
 * D1 row for any send that didn't make it out — throwing would skip that
 * write and leak a silent lost lead, which is the single biggest
 * deliverability risk called out in SERVICE_VERTICAL_TEMPLATE.md's
 * "Risk Register" ("Form deliverability blip = silent lost lead").
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring", step 3 of
 *     routeLead(): "Send via Resend with subject [...]".
 */

const RESEND_EMAILS_URL = 'https://api.resend.com/emails';

/** Default From for all transactional sends. Verified domain in Resend. */
export const DEFAULT_FROM = 'Gemini AMPM <enquiries@geminiampm.co.uk>';

export interface SendEmailArgs {
  /** Recipient mailbox (single address; cc/bcc handled upstream if ever needed). */
  to: string;
  /** Subject line — typically already prefixed with `[QUOTE — pillar]` etc. */
  subject: string;
  /** Pre-rendered HTML body. Plain-text fallback derived by Resend. */
  html: string;
  /** Optional Reply-To so the office can hit Reply and land in the enquirer's inbox. */
  replyTo?: string;
  /** Override the default From (rarely needed). */
  from?: string;
  /** Resend API key, sourced from the Cloudflare binding by the caller. */
  apiKey: string;
}

export interface SendEmailResult {
  ok: boolean;
  /** Resend message id (only on success). */
  id?: string;
  /** Human-readable error string (only on failure). */
  error?: string;
}

interface ResendSuccessBody {
  id: string;
}

interface ResendErrorBody {
  name?: string;
  message?: string;
  statusCode?: number;
}

/**
 * Send one transactional email via the Resend REST API. Never throws.
 *
 * Failure modes folded into `{ ok: false, error }`:
 *   - missing apiKey                 -> 'missing_api_key'
 *   - upstream non-2xx               -> `resend_<status>: <message>`
 *   - network error / fetch threw    -> `network_error: <message>`
 *   - upstream 2xx but no id         -> 'resend_no_id'
 */
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  from,
  apiKey,
}: SendEmailArgs): Promise<SendEmailResult> {
  if (!apiKey) {
    return { ok: false, error: 'missing_api_key' };
  }

  const payload: Record<string, unknown> = {
    from: from ?? DEFAULT_FROM,
    to,
    subject,
    html,
  };
  if (replyTo) {
    payload.reply_to = replyTo;
  }

  let res: Response;
  try {
    res = await fetch(RESEND_EMAILS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `network_error: ${message}` };
  }

  if (!res.ok) {
    let detail = '';
    try {
      const body = (await res.json()) as ResendErrorBody;
      detail = body.message ?? body.name ?? '';
    } catch {
      try {
        detail = await res.text();
      } catch {
        detail = '';
      }
    }
    return {
      ok: false,
      error: `resend_${res.status}: ${detail || 'no_detail'}`,
    };
  }

  try {
    const body = (await res.json()) as ResendSuccessBody;
    if (!body.id) {
      return { ok: false, error: 'resend_no_id' };
    }
    return { ok: true, id: body.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `resend_parse_error: ${message}` };
  }
}

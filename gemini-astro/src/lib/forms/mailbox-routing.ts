/**
 * Gemini AMPM — per-pillar mailbox routing
 * -----------------------------------------
 *
 * Resolves the recipient mailbox for a given (pillar, formType) pair, so the
 * office prioritises install vs service vs consultation correctly. Subject
 * prefixes ([QUOTE — pillar], [CONSULT — pillar], [MAINT — pillar]) let
 * the corresponding Microsoft 365 inbox rules sort the new lead into the
 * right Outlook folder before anyone reads it.
 *
 * The table below is the source of truth for the "Forms Wiring" routing
 * table in SERVICE_VERTICAL_TEMPLATE.md. If you change a mailbox here,
 * update the spec and the corresponding Outlook rule in M365 admin too.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring", step 2 of
 *     routeLead(): the per-pillar mailbox table.
 */

import type { PillarSlug } from '../../content/services/types';

export type FormType = 'consult' | 'quote' | 'maintenance';

interface PillarMailboxes {
  /** Section 7 — Form #2 (PRIMARY CONVERSION). Per-pillar quote inbox. */
  quote: string;
  /** Section 2 — Form #1 (qualification gate consultation). Shared inbox. */
  consult: string;
  /** Section 8 — Form #3 (existing-system service / maintenance). Shared inbox. */
  maintenance: string;
}

/**
 * Per-pillar mailbox map. Quote mailboxes are pillar-specific (different
 * sales lead per service line). Consultations + maintenance route to two
 * shared inboxes regardless of pillar — the subject prefix carries the
 * pillar context.
 */
export const PILLAR_MAILBOXES: Record<PillarSlug, PillarMailboxes> = {
  'gas-suppression': {
    quote: 'quotes-gas@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  'fire-alarm': {
    quote: 'quotes-fire@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  'passive-fire': {
    quote: 'quotes-passive@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  'security-access': {
    quote: 'quotes-security@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  ventilation: {
    quote: 'quotes-hvac@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  'm-and-e': {
    quote: 'quotes-me@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
  'small-works': {
    quote: 'quotes-smallworks@geminiampm.co.uk',
    consult: 'consultations@geminiampm.co.uk',
    maintenance: 'service@geminiampm.co.uk',
  },
};

/** Catch-all fallback if `pillar` isn't a recognised slug (defensive only). */
const FALLBACK_MAILBOXES: PillarMailboxes = {
  quote: 'enquiries@geminiampm.co.uk',
  consult: 'consultations@geminiampm.co.uk',
  maintenance: 'service@geminiampm.co.uk',
};

/**
 * Resolve the destination mailbox for (pillar, formType).
 *
 * Unknown pillar → falls back to enquiries@ so we never lose a lead; the
 * routeLead orchestrator logs the unknown pillar in the D1 row so we can
 * audit any fallbacks weekly.
 */
export function getMailbox(
  pillar: string,
  formType: FormType,
): string {
  const mailboxes =
    (PILLAR_MAILBOXES as Record<string, PillarMailboxes>)[pillar] ??
    FALLBACK_MAILBOXES;
  return mailboxes[formType];
}

/**
 * Build the subject prefix for an outgoing office email. Mirrors the
 * pattern called out in the spec: `[QUOTE — pillar]`, `[CONSULT — pillar]`,
 * `[MAINT — pillar]`. Note the en-dash (U+2014) — Outlook rules match it
 * literally.
 */
export function getSubjectPrefix(
  pillar: string,
  formType: FormType,
): string {
  const tag =
    formType === 'quote'
      ? 'QUOTE'
      : formType === 'consult'
        ? 'CONSULT'
        : 'MAINT';
  return `[${tag} — ${pillar}]`;
}

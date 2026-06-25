/**
 * Gemini AMPM — auto-confirm email body builder
 * ----------------------------------------------
 *
 * Inline-styled, mobile-safe HTML email sent to the enquirer immediately
 * after a successful form submission. Spec calls it out as part of step 4
 * of routeLead(): "Auto-confirmation email to enquirer within 30s (Resend),
 * includes office DDI."
 *
 * Design rules — derived from years of UK email-client breakage:
 *   - Inline styles only (Gmail strips `<style>` in some contexts; Outlook
 *     desktop ignores most of it).
 *   - Single-column, max-width 600px.
 *   - System fonts only — no @import; falls back to sans-serif everywhere.
 *   - Mobile-safe: `width="100%"` + `max-width` on the wrapper table.
 *   - Dark text on white background (best deliverability + dark-mode safety).
 *   - No tracking pixels. No remote images other than the small wordmark
 *     (and even that is optional — spec doesn't require it).
 *   - Brand colour `#0A2540` (Gemini navy) used sparingly for the header
 *     stripe; everything else is greyscale so the office DDI stands out.
 *
 * The body is intentionally short: name greeting + what we'll do next +
 * fallback DDI to call + small legal footer. Long-form copy belongs on
 * `/thanks/{pillar}/` — this is the deliverability ping, not a brochure.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring", step 4 of
 *     routeLead().
 */

import type { FormType } from './mailbox-routing';

export interface AutoConfirmArgs {
  /** Enquirer's first name (or full name if we don't have a split). */
  recipientName: string;
  formType: FormType;
  /** Pillar slug — used for the human-readable service name in the body. */
  pillar: string;
  /** Office DDI to surface as the fallback "Prefer to call?" link. */
  officeDDI?: string;
  /** Optional URL of the thanks page, for the "what happens next" CTA. */
  thanksUrl?: string;
}

/** Map pillar slug to a human-readable service name for the email body. */
const PILLAR_LABEL: Record<string, string> = {
  'gas-suppression': 'gas suppression',
  'fire-alarm': 'fire alarm',
  'passive-fire': 'passive fire protection',
  'security-access': 'security and access control',
  ventilation: 'ventilation and air quality',
  'm-and-e': 'mechanical and electrical',
  'small-works': 'small works and reactive',
};

const FORM_TYPE_SUBJECT: Record<FormType, string> = {
  consult: 'We received your consultation request',
  quote: 'We received your quote request',
  maintenance: 'We received your maintenance enquiry',
};

const FORM_TYPE_OPENING: Record<FormType, string> = {
  consult:
    'Thanks for booking a consultation. One of our engineers will call you within 24 hours to talk through your requirements. There is no obligation at any point.',
  quote:
    'Thanks for requesting a quote. We will arrange a free site survey within 48 hours, and you will have a fixed quote within 5 working days. There is no obligation up to that point.',
  maintenance:
    'Thanks for your maintenance enquiry. Our service team will be in touch within one working day to talk through your existing system and the cover you need.',
};

/** HTML-escape user-supplied strings before splicing into the template. */
function esc(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface AutoConfirmEmail {
  subject: string;
  html: string;
}

/**
 * Build the auto-confirm subject + HTML body for an enquirer.
 *
 * Returns `{ subject, html }`. The orchestrator picks the recipient
 * (the email field on the form) and passes everything to `sendEmail`.
 */
export function buildAutoConfirmEmail({
  recipientName,
  formType,
  pillar,
  officeDDI,
  thanksUrl,
}: AutoConfirmArgs): AutoConfirmEmail {
  const pillarLabel = PILLAR_LABEL[pillar] ?? pillar;
  const safeName = esc(recipientName.split(' ')[0] ?? recipientName);
  const safePillar = esc(pillarLabel);
  const safeDDI = officeDDI ? esc(officeDDI) : '';
  const safeThanks = thanksUrl ? esc(thanksUrl) : '';

  const subject = `${FORM_TYPE_SUBJECT[formType]} — Gemini AMPM`;
  const opening = FORM_TYPE_OPENING[formType];

  const ddiBlock = safeDDI
    ? `
        <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.55; color: #1a1a1a;">
          Prefer to talk now? Call us on
          <a href="tel:${safeDDI.replace(/\s+/g, '')}" style="color: #0A2540; font-weight: 600; text-decoration: none;">${safeDDI}</a>
          — Monday to Friday, 8am to 5pm.
        </p>`
    : '';

  const thanksBlock = safeThanks
    ? `
        <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.55; color: #1a1a1a;">
          For an overview of what happens next, see
          <a href="${safeThanks}" style="color: #0A2540; font-weight: 600; text-decoration: underline;">our next-steps page</a>.
        </p>`
    : '';

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f5f7;">
    <tr>
      <td align="center" style="padding: 24px 12px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="background-color: #0A2540; padding: 20px 24px;">
              <p style="margin: 0; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: #ffffff;">Gemini AMPM</p>
              <p style="margin: 4px 0 0; font-size: 12px; color: #c7d2e0;">Fire, security and ventilation since 1997</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 24px 8px;">
              <h1 style="margin: 0 0 12px; font-size: 20px; line-height: 1.3; color: #0A2540;">Hi ${safeName},</h1>
              <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.55; color: #1a1a1a;">${esc(opening)}</p>
              <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.55; color: #1a1a1a;">Your enquiry is about <strong>${safePillar}</strong>. We have logged it and routed it to the right team — you will hear from a named engineer, not a call centre.</p>
              ${ddiBlock}
              ${thanksBlock}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 24px 28px;">
              <p style="margin: 0 0 6px; font-size: 12px; line-height: 1.5; color: #6b7280;">Gemini AMPM Ltd — employee-owned trust, registered in England.</p>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #6b7280;">This message confirms receipt of your enquiry. If it wasn't you, just ignore it.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

/**
 * Build the office-facing notification email body. Plain text-ish HTML
 * with all the fields the sales / service team needs to action the lead,
 * styled to be readable in Outlook desktop, OWA and Apple Mail.
 */
export interface OfficeNotificationArgs {
  formType: FormType;
  pillar: string;
  subjectPrefix: string;
  fields: Record<string, string | number | undefined>;
  pagePath: string;
  utm?: { source?: string; medium?: string; campaign?: string };
}

export function buildOfficeNotificationEmail({
  formType,
  pillar,
  subjectPrefix,
  fields,
  pagePath,
  utm,
}: OfficeNotificationArgs): { subject: string; html: string } {
  const name = String(fields.name ?? '').trim();
  const company = String(fields.company ?? '').trim();
  const headline = company || name || 'new enquiry';
  const subject = `${subjectPrefix} ${headline}`;

  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding: 6px 12px; font-size: 13px; color: #6b7280; vertical-align: top; white-space: nowrap;">${esc(k)}</td>
        <td style="padding: 6px 12px; font-size: 14px; color: #1a1a1a;">${esc(String(v))}</td>
      </tr>`,
    )
    .join('');

  const utmRows = utm
    ? Object.entries(utm)
        .filter(([, v]) => v)
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding: 4px 12px; font-size: 12px; color: #6b7280; white-space: nowrap;">utm_${esc(k)}</td>
          <td style="padding: 4px 12px; font-size: 12px; color: #1a1a1a;">${esc(String(v))}</td>
        </tr>`,
        )
        .join('')
    : '';

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td style="padding: 16px 20px; background-color: #0A2540; color: #ffffff;">
        <p style="margin: 0; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">${esc(formType.toUpperCase())} — ${esc(pillar)}</p>
        <p style="margin: 4px 0 0; font-size: 16px;">${esc(headline)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 16px 8px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          ${rows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 8px 16px;">
        <p style="margin: 0 12px 6px; font-size: 12px; color: #6b7280;">Page: ${esc(pagePath)}</p>
        ${
          utmRows
            ? `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${utmRows}</table>`
            : ''
        }
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

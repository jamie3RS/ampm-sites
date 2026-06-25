/**
 * Gemini AMPM — Astro Actions: consult, quote, maintenance
 * ---------------------------------------------------------
 *
 * Three `defineAction` exports — one per inline form on the Service
 * Vertical template. All three share `commonHidden` (source, pillar,
 * variantId, utmSource, utmMedium, utmCampaign, pagePath, turnstileToken)
 * and all three delegate to the shared `routeLead` orchestrator.
 *
 * Form schemas mirror SERVICE_VERTICAL_TEMPLATE.md § "Forms Wiring" verbatim:
 *
 *   consult      — Section 2, 4 fields  (name, email, phone, message?)
 *   quote        — Section 7, 8 fields  (name, company, role?, email, phone,
 *                                        postcode, spaceType, approxAreaSqm?,
 *                                        fileUploadKey?)
 *   maintenance  — Section 8, 4 fields  (name, email, postcode, currentSystem?)
 *
 * All field validation lives here — handlers never throw. Failures are
 * mapped to `{ success: false, error }` by routeLead, which also writes a
 * D1 row with `send_status='failed'` for every miss, including Turnstile
 * rejection and Resend deliverability blips. That guarantee is the single
 * biggest lost-lead mitigation in the spec's risk register.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring".
 */

import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import { routeLead } from '../lib/forms/route-lead';

/**
 * Shared hidden fields on every form. The template injects these via
 * <input type="hidden"> in each InlineForm island so source + pillar +
 * variant + UTM attribution end up in every D1 row.
 *
 * - `source`         which form on the page fired (hero CTA, gate, primary,
 *                    maintenance, footer mini-form).
 * - `pillar`         pillar slug — drives mailbox routing + thanks page.
 * - `variantId`      A/B variant id; defaults to 'A' so legacy forms work.
 * - `utm*`           captured client-side on page entry into sessionStorage
 *                    and stamped onto every submit.
 * - `pagePath`       full path of the page the form was submitted from,
 *                    so the office knows which leaf / pillar produced it.
 * - `turnstileToken` Cloudflare Turnstile widget response, verified server
 *                    side by routeLead → verifyTurnstile (fail-closed).
 */
const commonHidden = {
  source: z.enum(['hero', 'gate', 'primary', 'maintenance', 'footer']),
  pillar: z.string().min(1),
  variantId: z.string().default('A'),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  pagePath: z.string().min(1),
  turnstileToken: z.string().min(1),
};

export const server = {
  /**
   * Section 2 — Qualification Gate consultation form.
   * 4 fields. Inline confirmation (no client-side redirect).
   * Routes to `consultations@geminiampm.co.uk` with `[CONSULT — pillar]`.
   */
  consult: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Please enter your name.'),
      email: z.string().email('Please enter a valid email address.'),
      phone: z.string().min(7, 'Please enter a contact phone number.'),
      message: z.string().max(500).optional(),
      ...commonHidden,
    }),
    handler: async (input, ctx) => routeLead(input, ctx, 'consult'),
  }),

  /**
   * Section 7 — Primary conversion (quote) form.
   * 8 fields + optional file upload key (R2 object key set client-side
   * after a pre-signed PUT). Client-side redirect to `/thanks/{pillar}/`
   * on success.
   * Routes to per-pillar `quotes-{x}@geminiampm.co.uk` with
   * `[QUOTE — pillar]`.
   */
  quote: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Please enter your name.'),
      company: z.string().min(2, 'Please enter your company name.'),
      role: z.string().max(100).optional(),
      email: z.string().email('Please enter a valid email address.'),
      phone: z.string().min(7, 'Please enter a contact phone number.'),
      postcode: z.string().min(5, 'Please enter a valid UK postcode.'),
      spaceType: z.string().min(1, 'Please choose a space type.'),
      approxAreaSqm: z.coerce.number().positive().optional(),
      fileUploadKey: z.string().optional(),
      ...commonHidden,
    }),
    handler: async (input, ctx) => routeLead(input, ctx, 'quote'),
  }),

  /**
   * Section 8 — Maintenance / service form.
   * 4 fields. Inline confirmation.
   * Routes to `service@geminiampm.co.uk` with `[MAINT — pillar]`.
   */
  maintenance: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Please enter your name.'),
      email: z.string().email('Please enter a valid email address.'),
      postcode: z.string().min(5, 'Please enter a valid UK postcode.'),
      currentSystem: z.string().max(300).optional(),
      ...commonHidden,
    }),
    handler: async (input, ctx) => routeLead(input, ctx, 'maintenance'),
  }),
};

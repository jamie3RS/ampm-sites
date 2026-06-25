/**
 * Gemini AMPM — Cloudflare Turnstile verification
 * ------------------------------------------------
 *
 * Server-side verification of a Turnstile token against Cloudflare's
 * siteverify endpoint. Called from `routeLead()` before we send any email
 * or write to D1, so that invalid / replayed / missing tokens never produce
 * a billable Resend send or a polluted D1 row.
 *
 * Fail-closed policy
 * ------------------
 * If ANY of the following is true, return `false`:
 *   - the token is missing or empty
 *   - the secret is missing or empty (mis-configured environment)
 *   - the upstream fetch throws (network / DNS / Cloudflare outage)
 *   - the upstream returns a non-2xx status
 *   - the upstream returns `{ success: false }`
 *
 * The function never throws — it converts every failure into `false`
 * so the action handler can return a graceful `{ success: false }`
 * without leaking stack traces to the user.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Forms Wiring", step 1 of
 *     routeLead(): "Verify Turnstile token (fail = 400)".
 */

const TURNSTILE_SITEVERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

interface TurnstileSiteverifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
  action?: string;
  cdata?: string;
}

/**
 * Verify a Turnstile token. Fail closed.
 *
 * @param token   - The `cf-turnstile-response` value from the client.
 * @param secret  - The Turnstile secret key (from env / Cloudflare binding).
 * @returns       - `true` only if Cloudflare confirms the token; `false` otherwise.
 */
export async function verifyTurnstile(
  token: string | undefined | null,
  secret: string | undefined | null,
): Promise<boolean> {
  if (!token || !secret) {
    return false;
  }

  try {
    const body = new URLSearchParams();
    body.set('secret', secret);
    body.set('response', token);

    const res = await fetch(TURNSTILE_SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    if (!res.ok) {
      return false;
    }

    const data = (await res.json()) as TurnstileSiteverifyResponse;
    return data.success === true;
  } catch {
    return false;
  }
}

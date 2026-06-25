/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Runtime env (Cloudflare Pages / wrangler dev). Mirrors [vars] in wrangler.toml
// plus any bindings (D1, R2, KV) we add later.
interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly TURNSTILE_SITE_KEY: string;
  readonly TURNSTILE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Cloudflare bindings surfaced via Astro.locals.runtime.env in endpoints/actions.
declare namespace App {
  interface Locals {
    runtime: {
      env: {
        RESEND_API_KEY: string;
        TURNSTILE_SITE_KEY: string;
        TURNSTILE_SECRET_KEY: string;
        // LEAD_DB: D1Database;  // uncomment once the D1 binding is live
      };
    };
  }
}

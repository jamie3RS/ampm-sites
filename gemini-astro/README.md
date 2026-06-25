# gemini-astro

Production Astro 6 build for **geminiampm.co.uk** — the fire/security/ventilation
contractor inside AMPM Group (UK, since 1997, employee-owned).

This folder is the **deployable** site. The static prototype lives next door at
`../gemini-static/` (do not edit) and is the design reference. The older Astro 4
sandbox at `../gemini/` is also reference-only.

## Stack

- Astro 6, `output: 'server'`
- `@astrojs/cloudflare` adapter (Cloudflare Pages, edge SSR)
- `@astrojs/react` for interactive islands (use sparingly)
- `@astrojs/tailwind` driving utility classes against the prototype's CSS-var theme
- TypeScript strict
- Fonts via Google: Big Shoulders Display, Archivo, Quicksand, Fredoka

## Layout

```
src/
  layouts/BaseLayout.astro       # html data-skin="night", head, nav/main/footer slots
  components/Nav.astro           # sticky top nav + DDI phone CTA
  components/Footer.astro        # 4 link cols + accreditation strip
  styles/global.css              # @tailwind base + :root tokens from the prototype
  env.d.ts                       # ImportMetaEnv + Cloudflare runtime locals
public/                          # static assets (logos, accreditation thumbs)
```

## Dev

```bash
npm install
npm run dev          # http://localhost:4321 — Astro dev server
npm run build        # builds to ./dist (Cloudflare worker bundle)
npm run preview      # local preview of the prod bundle
```

Local env: copy any required secrets into `.dev.vars` (gitignored). Public-side
keys (e.g. `TURNSTILE_SITE_KEY`) get injected at build time.

## Deploy

Cloudflare Pages, direct upload of `./dist` (via `wrangler pages deploy ./dist`)
or wired to the Git remote once this lives in a repo. `wrangler.toml` carries
the bindings — D1 (`lead_submissions`) and `nodejs_compat` are already declared.

## Forms + leads

- Astro Actions handle the three form types per pillar (consultation / quote / maintenance).
- Resend sends the routing email; subject prefix encodes the pillar so the office can sort.
- A copy lands in D1 `lead_submissions` for the dashboard at `/admin/`.
- Turnstile (invisible) gates submission server-side — no visible captcha per spec.

## What's next

Gas Suppression pillar first (worst impressions-to-conversion gap), measure 30-day lift,
then roll the same `<ServiceVerticalPage />` density-flex template across the other
6 pillars. See `../../Gemini AMPM/01-website/audits/SERVICE_VERTICAL_TEMPLATE.md`.

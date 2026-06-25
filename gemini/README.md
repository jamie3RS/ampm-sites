# Gemini AMPM — production site (Astro 6)

The production rebuild of geminiampm.co.uk on Astro + Cloudflare Pages, following the 11-section service-vertical template in `../audits/SERVICE_VERTICAL_TEMPLATE.md`.

## What's shipped (Phase 1)

- Astro 6 scaffold
- All 11 section components, statically authored
- **Gas Suppression pillar** as the first fully-built page (worst-converting GSC cluster — 25k impressions, ~0% conversion)
- JSON-LD schema bundle (Service + Offers + BreadcrumbList + FAQPage + HowTo + LocalBusiness)
- Three forms (consult, quote, maintenance) + footer mini-form + sticky mobile CTA bar — wired to `mailto:` fallback
- All client + manufacturer logos lifted from the static prototype

## What's deferred (Phase 2 / 3)

- **Payload CMS 3** for content authoring without redeploys
- **Resend + Cloudflare Turnstile + D1** for proper form submission, attribution and lead-deliverability guarantees
- The other 6 pillars (template ready, just need content authored)
- Live Google reviews chip in the hero trust strip (Cloudflare Cron Trigger + D1 cache)
- Per-pillar mailbox routing rules in Microsoft 365

## Develop locally

```
cd _websites/gemini
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploy

Cloudflare Pages auto-deploys on every push to `main`. Required Pages settings:

| Field | Value |
|---|---|
| Build command | `cd gemini && npm install --no-audit --no-fund && npm run build` |
| Build output directory | `gemini/dist` |
| Root directory | *(blank)* |
| Node version | 22 |

Custom domain: `gemini.ampm.co.uk`.

## File layout

```
gemini/
  src/
    components/    # 11 section components + form components + primitives
    layouts/       # Base.astro wrapping every page
    lib/           # TypeScript content types + JSON-LD schema generators + Gas Suppression content
    pages/         # index.astro (homepage), gas-suppression.astro (first pillar)
    styles/        # Design tokens + base + components
  public/
    assets/        # Logos + cert PDFs (lifted from the static prototype)
```

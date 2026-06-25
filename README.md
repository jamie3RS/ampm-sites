# AMPM Group websites — monorepo

Single git repository for all AMPM Group public-facing websites:

- **`gemini/`** — Gemini AMPM Ltd (geminiampm.co.uk) — first to build
- **`group/`** — AMPM Group umbrella (ampmgroup.co.uk) — second
- **`bs/`** — AMPM Building Services (decision pending: migrate from Ghost or finish on Ghost)

Plus shared package consumed by all three:

- **`_shared-pkg/`** — design tokens, base components, brand pack, content schemas (Payload collections)

## Stack (per AMPM Group programme brief 2026-06-24)

- **Astro 6** with React islands (preserves React/JSX prototype from `01-website/Gemini New Website 220626/`)
- **Payload CMS 3** embedded at `/admin`
- **Cloudflare Pages** hosting + Workers for forms
- **Neon Postgres** serverless for Payload's data
- **Resend** for transactional email (single account, 3 verified sending domains)
- **Turnstile** for spam
- **Cloudflare Web Analytics** (cookieless) + GSC

## What is NOT in this repo

- Business operations content (compliance, contracts, employment, investor portal, internal docs) — those live in the parent `AMPM Group/` folder outside this repo
- Logbook.co.uk — stays on its own Ghost setup, not consolidated
- Live WordPress site for Gemini AMPM (geminiampm.co.uk) — replaced by the Astro build then decommissioned

## Phase 0 status (this commit)

- File scaffolding only — no dependencies installed yet
- Each site folder (`gemini/`, `group/`, `bs/`) is empty pending the week-1 Payload-on-Astro spike
- `_shared-pkg/` has sub-folders ready but not populated
- pnpm workspace declared; nothing built yet

## Next

- Week 1 hard-gated spike: validate Payload-on-Astro embedding works. Pass → ship Astro. Fail → pivot to Ghost(Pro) with bespoke theme.
- Per the `service-vertical-template-design` workflow (running 2026-06-25), build the per-service vertical template once and apply across all 7 Gemini service pillars.
- Reskin design assets in `../companies/gemini-ampm/website/` (none yet) + the existing React preview at `~/Library/CloudStorage/.../Gemini AMPM/01-website/Gemini New Website 220626/` (~60% design complete) inform the build.

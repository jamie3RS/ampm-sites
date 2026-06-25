# Gemini AMPM — renewed website (on the AMPM group design system)

A fresh attempt at renewing **geminiampm.co.uk**, built on the same design
system as the AMPM Building Services site so the two read as one group — while
Gemini keeps its own night / PM→AM "we keep watch" identity. Designed as a
**re-skin within the existing WordPress install**, so no SEO equity is lost.

## Deliverables

| File | What it is |
|---|---|
| `Gemini AMPM Website.html` | The clickable renewed site — home, services overview, 7 service pillars, sectors, why, about, news, casework, contact. Hash-routed. |
| `Gemini AMPM — SEO Migration Map.html` | Printable handoff doc: full URL inventory (live → renewed), redirect register, pre-launch checklist. |

## How it relates to the group

- **Shared DNA with AMPM Building Services:** Big Shoulders + Archivo type, the
  four-colour meridian, the stamp/kicker vocabulary, identical nav/footer chrome.
- **Gemini owns the night:** the homepage runs the inverted PM→AM arc (dusk →
  deep night → dawn handback) with the night-log differentiator; interior pages
  run the Building Services calm-page system in a dark "night" skin.

## Tweaks (toolbar → Tweaks)

- **Night-arc intensity** — Full / Subtle / Still
- **Homepage** — "The Watch" (full night-log story) / "First Light" (calmer, who-we-are led)
- **Interior skin** — Night (dark) / Day (cream)
- **Display face** — Big Shoulders / Archivo Black
- **Accent** — Amber / Blue / Green / Violet

## SEO principle

Every live URL is frozen: the 7 pillars, their ~40 child service pages, the 8
`/sector/…/` pages, news, casework and system pages all keep their exact slugs,
titles and meta. The renewed templates render onto the same addresses — no
redirects needed. See the migration map for the page-by-page spec.

## Files

`g-data.jsx` content model (URLs mirror live) · `g-shell.jsx` nav/footer/helpers ·
`g-home.jsx` both home directions · `g-service.jsx` pillar template ·
`g-pages.jsx` interior pages · `gemini-base.css` (BS sub-page system) +
`gemini-theme.css` (night layer). Imagery is image-slot placeholders for the
client to drop real photos into.

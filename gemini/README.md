# Gemini AMPM — production Astro site

This is the 1:1 Astro port of the React prototype at `../gemini-prototype-src/`.

**Rule:** the prototype is the source of truth. Every piece of data, every component, every line of copy here is a port of what's there. No new content, no new design.

## What changed from prototype → Astro

- **Hash routing → real URL routes** (`/#services` → `/services/`)
- **React + Babel CDN runtime → Astro static build** (faster, SEO-indexable, smaller)
- **`dangerouslySetInnerHTML` → `set:html`** (same semantics)
- **`className` → `class`** (Astro convention)
- **Hook-based scroll/reveal effects → small client `<script>` blocks** (same behaviour)
- **`setRoute(id)` → `href="/page/"`** (real links, no router)

## What stayed identical

- All data in `src/data/site.ts` is a verbatim port of `g-data.jsx`
- `gemini-base.css` and `gemini-theme.css` copied unchanged into `public/`
- `image-slot.js` copied unchanged
- All assets (logos, certs) copied unchanged
- Every component preserves the prototype's JSX structure, classNames, and copy

## Run

```
cd _websites/gemini
npm install
npm run dev      # → http://localhost:4321
npm run build    # → dist/
```

## Deploy

Cloudflare Pages config: `build: cd gemini && npm install --no-audit --no-fund && npm run build` · `output: gemini/dist` · `NODE_VERSION=22`.

// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Gemini AMPM — production Astro 6 build.
// SSR via Cloudflare Pages adapter so Astro Actions (form posts → Resend + D1)
// run on the edge. Tailwind drives the utility layer; React is reserved for
// interactive islands (forms, pricing comparator, etc) — keep islands sparse.
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});

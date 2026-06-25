import type { Config } from 'tailwindcss';

/**
 * Gemini AMPM — Tailwind theme.
 *
 * Mirrors the prototype's :root CSS variables from gemini-base.css and
 * gemini-theme.css so utility classes (bg-m-orange, font-display, etc.)
 * stay in lockstep with the var-driven component CSS. Skin flipping
 * (day vs night) still happens via the [data-skin] attribute on <html>.
 */
const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  darkMode: ['selector', 'html[data-skin="night"]'],
  theme: {
    extend: {
      colors: {
        // AMPM group brand — the four-colour meridian
        'm-orange': '#E8742C',
        'm-blue':   '#2E5FAB',
        'm-green':  '#3D8E2E',
        'm-purple': '#7A2E8F',

        // Day-skin surfaces
        ink:     '#1c1812',
        cream:   '#f9efdd',
        paper:   '#fdfaf2',
        'paper-2':   '#f7f0e2',

        // Night-skin surfaces
        night:        '#0b0e1c',
        'night-2':    '#141a30',
        'night-text': '#f4ead8',
        dusk:         '#2b3558',
        'night-card': '#10162c',

        // Semantic alias — Gemini's identity accent (defaults to orange,
        // exposed as a CSS var so per-page tweak hooks still bite).
        accent: 'var(--g-accent)',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Archivo"', 'sans-serif'],
        body:    ['"Archivo"', '"Helvetica Neue"', 'sans-serif'],
        quick:   ['"Quicksand"', 'system-ui', 'sans-serif'],
        fred:    ['"Fredoka"', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        'pad-x':   'var(--pad-x)',
        'spine-x': 'var(--spine-x)',
      },
      letterSpacing: {
        stamp: '0.04em',
        kicker: '0.16em',
        eyebrow: '0.24em',
      },
    },
  },
  plugins: [],
};

export default config;

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gemini.ampm.co.uk',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});

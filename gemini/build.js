// Cloudflare Pages serves whatever is in gemini/dist/.
// This static prototype has no build step — just copy every source file into dist/.
// Run via: npm run build  (which the Pages project's build command invokes).

import { readdirSync, rmSync, mkdirSync, cpSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'dist';
const SKIP = new Set([
  OUT,
  'node_modules',
  'package.json',
  'package-lock.json',
  '.gitignore',
  '.git',
  '.DS_Store',
  'build.js',
]);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let count = 0;
for (const entry of readdirSync('.')) {
  if (SKIP.has(entry)) continue;
  cpSync(entry, join(OUT, entry), { recursive: true });
  count += 1;
}

console.log(`Copied ${count} top-level entries → ${OUT}/`);

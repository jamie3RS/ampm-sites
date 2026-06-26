import type { APIRoute } from 'astro';
import { PILLARS, ACCREDS, NEWS, SERVICE_AREAS, SECTORS } from '~/data/site';

const SITE = 'https://gemini.ampm.co.uk';
// Used by every URL entry — Google reads lastmod for freshness scoring.
// Update by hand for major content changes; for routine edits the deploy
// timestamp is good enough.
const LASTMOD = '2026-06-26';

const STATIC_URLS = [
  '/',
  '/services/',
  '/sectors/',
  '/areas/',
  '/casestudies/',
  '/news/',
  '/about/',
  '/about/team/',
  '/why/',
  '/contact/',
  '/clients/',
  '/manufacturers/',
  '/accreditations/',
  '/legal/privacy/',
  '/legal/cookies/',
  '/legal/terms/',
  '/legal/modern-slavery/',
  '/legal/complaints/',
];

export const GET: APIRoute = () => {
  const urls = [
    ...STATIC_URLS.map((u) => ({ loc: u, pri: u === '/' ? '1.0' : (u.startsWith('/legal/') ? '0.3' : '0.8') })),
    ...PILLARS.map((p) => ({ loc: `/${p.id}/`, pri: '0.9' })),
    ...SECTORS.map((s) => ({
      loc: `/sectors/${s.slug.replace(/^sector\//, '')}/`,
      pri: '0.8',
    })),
    ...SERVICE_AREAS.map((a) => ({ loc: `/areas/${a.slug}/`, pri: '0.8' })),
    ...NEWS.filter((n) => n.published !== false).map((n) => ({ loc: `/news/${n.slug}/`, pri: '0.6' })),
    ...ACCREDS.map((a) => ({ loc: `/accreditations/${a.slug}/`, pri: '0.6' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.pri}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

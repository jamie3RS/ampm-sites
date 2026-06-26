import type { APIRoute } from 'astro';
import { PILLARS, ACCREDS } from '~/data/site';

const SITE = 'https://gemini.ampm.co.uk';

const STATIC_URLS = [
  '/',
  '/services/',
  '/sectors/',
  '/casestudies/',
  '/news/',
  '/about/',
  '/why/',
  '/contact/',
  '/clients/',
  '/manufacturers/',
  '/accreditations/',
];

export const GET: APIRoute = () => {
  const urls = [
    ...STATIC_URLS.map((u) => ({ loc: u, pri: u === '/' ? '1.0' : '0.8' })),
    ...PILLARS.map((p) => ({ loc: `/${p.id}/`, pri: '0.9' })),
    ...ACCREDS.map((a) => ({ loc: `/accreditations/${a.slug}/`, pri: '0.6' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.pri}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

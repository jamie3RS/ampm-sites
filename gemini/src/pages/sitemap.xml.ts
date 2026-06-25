import type { APIRoute } from 'astro';

const SITE = 'https://gemini.ampm.co.uk';
const URLS = [
  { loc: '/',                         changefreq: 'weekly', priority: '1.0' },
  { loc: '/gas-suppression/',         changefreq: 'weekly', priority: '0.9' },
  { loc: '/fire-alarm/',              changefreq: 'weekly', priority: '0.9' },
  { loc: '/passive-fire/',            changefreq: 'weekly', priority: '0.9' },
  { loc: '/security-access/',         changefreq: 'weekly', priority: '0.9' },
  { loc: '/ventilation/',             changefreq: 'weekly', priority: '0.9' },
  { loc: '/mechanical-electrical/',   changefreq: 'weekly', priority: '0.9' },
  { loc: '/small-works/',             changefreq: 'weekly', priority: '0.9' },
];

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
).join('\n')}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};

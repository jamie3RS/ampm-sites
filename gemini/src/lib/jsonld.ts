// JSON-LD schema helpers. Used by Base.astro to emit a single @graph per
// page covering Organization + LocalBusiness as a baseline, plus any
// page-specific entities (Service, BreadcrumbList, FAQPage, ItemList, etc.)
// passed in via the layout's schemaItems prop.

import { ACCREDS, CONTACT, PILLARS } from '~/data/site';
import type { Pillar, Accred, NewsItem } from '~/data/site';

const SITE = 'https://gemini.ampm.co.uk';

function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, '')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

export function organization() {
  return {
    '@type': 'Organization',
    '@id': SITE + '/#organization',
    name: 'Gemini AMPM',
    legalName: 'Gemini AMPM Ltd',
    url: SITE,
    logo: SITE + '/assets/gemini-logo.png',
    foundingDate: '1997',
    description:
      'Employee-owned UK fire, security, ventilation, gas suppression and passive fire contractor. BAFE, NSI Gold, FIRAS, CHAS Elite, Constructionline Gold. Based in Burgess Hill, West Sussex; serving the South East and the UK.',
    sameAs: [CONTACT.linkedin],
    telephone: CONTACT.phone,
    email: 'info@geminiampm.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 2, Regents Business Centre, Jubilee Road',
      addressLocality: 'Burgess Hill',
      addressRegion: 'West Sussex',
      postalCode: 'RH15 9TL',
      addressCountry: 'GB',
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      contactType: 'sales',
      areaServed: 'GB',
      availableLanguage: 'en-GB',
    }],
    hasCredential: ACCREDS.map((a: Accred) => ({
      '@type': 'EducationalOccupationalCredential',
      name: stripHtml(a.t + ' — ' + a.d),
      url: SITE + '/accreditations/' + a.slug + '/',
    })),
  };
}

export function localBusiness() {
  return {
    '@type': ['LocalBusiness', 'FireProtectionService'],
    '@id': SITE + '/#localbusiness',
    name: 'Gemini AMPM',
    image: SITE + '/og-image.png',
    url: SITE,
    telephone: CONTACT.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 2, Regents Business Centre, Jubilee Road',
      addressLocality: 'Burgess Hill',
      addressRegion: 'West Sussex',
      postalCode: 'RH15 9TL',
      addressCountry: 'GB',
    },
    parentOrganization: { '@id': SITE + '/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'AdministrativeArea', name: 'Greater London' },
      { '@type': 'AdministrativeArea', name: 'South East England' },
    ],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '08:30',
      closes: '17:30',
    }],
  };
}

export function service(p: Pillar) {
  const pageUrl = SITE + '/' + p.id + '/';
  return {
    '@type': 'Service',
    '@id': pageUrl + '#service',
    serviceType: stripHtml(p.full),
    name: stripHtml(p.full),
    description: stripHtml(p.intro),
    provider: { '@id': SITE + '/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'AdministrativeArea', name: 'South East England' },
    ],
    url: pageUrl,
    category: stripHtml(p.name),
  };
}

export function breadcrumb(items: Array<{ name: string; href: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.href.startsWith('http') ? it.href : SITE + it.href,
    })),
  };
}

export function article(n: NewsItem) {
  const pageUrl = SITE + '/news/' + n.slug + '/';
  return {
    '@type': 'Article',
    '@id': pageUrl + '#article',
    headline: stripHtml(n.title),
    description: stripHtml(n.teaser),
    image: n.image || (SITE + '/og-image.png'),
    datePublished: n.date.split('.').reverse().join('-'),
    author: { '@id': SITE + '/#organization' },
    publisher: { '@id': SITE + '/#organization' },
    mainEntityOfPage: pageUrl,
    articleSection: n.cat,
  };
}

/** Wrap a list of entities into the @graph envelope the layout expects. */
export function graph(...items: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), localBusiness(), ...items],
  };
}

/** Default schema: org + local business only. Used when a page doesn't pass anything custom. */
export function defaultGraph() {
  return graph();
}

/** All pillar services bundled — emitted on /services/ and homepage. */
export function allServices() {
  return graph(...PILLARS.map(service));
}

import type { Service } from '~/lib/types';

/**
 * Generate the full JSON-LD schema bundle for a Service page.
 * Returns a single @graph array — search engines deduplicate by @id.
 *
 * Entities: Organization, Service, Offer (AggregateOffer), BreadcrumbList,
 * FAQPage, HowTo, LocalBusiness, WebPage.
 */
export function buildSchemaGraph(svc: Service, siteUrl: string) {
  const pageUrl = `${siteUrl}/${svc.slug}/`;
  const orgId = `${siteUrl}/#organization`;
  const placeId = `${siteUrl}/#place`;

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Gemini AMPM',
    legalName: 'Gemini AMPM Ltd',
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.svg`,
    foundingDate: '1997',
    description:
      'BAFE-registered fire, security, ventilation and gas suppression contractor since 1997. Employee-owned, headquartered in Kent, working across UK commercial estates.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: svc.officeAddress.streetAddress,
      addressLocality: svc.officeAddress.locality,
      addressRegion: svc.officeAddress.region,
      postalCode: svc.officeAddress.postalCode,
      addressCountry: svc.officeAddress.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: svc.regionalDDI.replace('tel:', ''),
        contactType: 'sales',
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
    hasCredential: svc.accreditationStrip.map((a) => ({
      '@type': 'EducationalOccupationalCredential',
      name: a.longName,
      url: `${siteUrl}${a.href}`,
    })),
  };

  // Price range as AggregateOffer from the pricing bands
  const numericPrices = svc.pricingBands
    .flatMap((b) => b.priceRange.match(/\d[\d,]*/g) || [])
    .map((s) => parseInt(s.replace(/,/g, ''), 10))
    .filter((n) => !Number.isNaN(n));
  const lowPrice = numericPrices.length ? Math.min(...numericPrices) : undefined;
  const highPrice = numericPrices.length ? Math.max(...numericPrices) : undefined;

  const service = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: svc.h1.replace(/&amp;/g, '&'),
    serviceType: `${svc.focusKeyword} installation and maintenance`,
    description: svc.metaDescription,
    provider: { '@id': orgId },
    areaServed: svc.coverageRegions.map((r) => ({ '@type': 'Place', name: r })),
    audience: { '@type': 'BusinessAudience', audienceType: 'Commercial and public-sector estate' },
    termsOfService: svc.regulatoryAnchor,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${svc.focusKeyword} systems we install`,
      itemListElement: svc.systemTypes.map((st, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Product',
          name: st.h3,
          brand: st.manufacturer ? { '@type': 'Brand', name: st.manufacturer } : undefined,
          description: st.bestForLine,
        },
      })),
    },
    ...(lowPrice !== undefined && highPrice !== undefined
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'GBP',
            lowPrice: String(lowPrice),
            highPrice: String(highPrice),
            offerCount: String(svc.pricingBands.length),
          },
        }
      : {}),
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: siteUrl + '/services/' },
      { '@type': 'ListItem', position: 3, name: service.name, item: pageUrl },
    ],
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: svc.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = {
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: svc.processHeadline,
    step: svc.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.h3,
      text: s.bodyCopy,
    })),
  };

  const localBusiness = {
    '@type': ['LocalBusiness', 'FireProtectionService'],
    '@id': placeId,
    name: organization.name,
    image: organization.logo,
    url: siteUrl,
    telephone: svc.regionalDDI.replace('tel:', ''),
    address: organization.address,
    areaServed: organization.address.addressCountry,
    parentOrganization: { '@id': orgId },
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    name: svc.metaTitle,
    description: svc.metaDescription,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${pageUrl}#service` },
    primaryImageOfPage: svc.heroImage ? { '@type': 'ImageObject', url: siteUrl + svc.heroImage } : undefined,
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Gemini AMPM',
    publisher: { '@id': orgId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webPage, service, breadcrumb, faqPage, howTo, localBusiness],
  };
}

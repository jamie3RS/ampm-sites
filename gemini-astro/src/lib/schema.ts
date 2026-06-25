/**
 * Gemini AMPM — JSON-LD schema bundle generator
 * ---------------------------------------------
 *
 * One function in, one stringified JSON-LD blob out. The output is a single
 * `@graph` that interleaves the five entity types Google + Schema.org care
 * about for a UK trade-services service vertical page:
 *
 *   1. Service           — the canonical entity for this page; carries the
 *                          provider Organization, audience, areaServed, the
 *                          hasOfferCatalog of named manufacturer products,
 *                          and an AggregateOffer with low/highPrice parsed
 *                          from the pricing bands.
 *   2. Organization      — Gemini AMPM Ltd, foundingDate 1997-01-01,
 *                          ownershipFunding = EOT, full accreditation set
 *                          surfaced via `hasCredential`. Cross-referenced
 *                          from Service.provider by @id.
 *   3. BreadcrumbList    — Home > {Pillar} (> {Leaf} where applicable).
 *   4. FAQPage           — verbatim Q&A pairs from `service.faqs`.
 *   5. HowTo             — the 4 Process steps with deliverable + timing.
 *   6. LocalBusiness     — head office + service area (Place array).
 *
 * Why a single `@graph` rather than five separate <script> tags?
 *   - Lets us reference the Organization once and point Service.provider +
 *     LocalBusiness.parentOrganization at it via @id, which is how Google
 *     dedupes entities at index time.
 *   - One <script> tag means one parse cost for the bot, one validation
 *     surface in Rich Results Test, and one rollback target if anything in
 *     the bundle breaks.
 *
 * Re-anchored per the SEO strategy block of SERVICE_VERTICAL_TEMPLATE.md:
 * Google deprecated visible HowTo / FAQPage rich results in 2023, so we ship
 * this bundle for entity-graph value, NOT for visible SERP wins. Pricing
 * snippets + meta rewrites + URL preservation do the visible-SERP work
 * elsewhere; the schema bundle's job is to feed the knowledge graph cleanly.
 *
 * Spec ref:
 *   /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/
 *     audits/SERVICE_VERTICAL_TEMPLATE.md — § "Schema bundle" + per-pillar
 *     "Schema" briefs in the per-service section.
 */

import type {
  AccreditationSlug,
  ManufacturerSlug,
  PillarSlug,
  PricingBand,
  Service,
} from '../content/services/types';

/* ── Organization-level constants ─────────────────────────────────────────────
 *
 * These are intentionally hard-coded (not Payload-authored) because they
 * describe the *holding* Gemini AMPM Ltd entity, which is identical across
 * every service page. Hoisting them to Payload would invite per-page drift on
 * facts that should be globally consistent (founding date, legal name, EOT
 * status, primary domain). If any of these change, they change once here.
 */

/** Canonical site origin — used for absolute @id URLs throughout the bundle. */
const SITE_ORIGIN = 'https://geminiampm.co.uk';

/** Organization @id — referenced by Service.provider + LocalBusiness.parentOrganization. */
const ORG_ID = `${SITE_ORIGIN}/#organization`;

/** LocalBusiness @id — referenced from Service.areaServed where applicable. */
const LOCAL_BUSINESS_ID = `${SITE_ORIGIN}/#localbusiness`;

/** Legal display name. */
const ORG_LEGAL_NAME = 'Gemini AMPM Ltd';
const ORG_DISPLAY_NAME = 'Gemini AMPM';
const ORG_FOUNDING_DATE = '1997-01-01';

/**
 * Display labels for the accreditation slugs declared in types.ts. Used to
 * synthesise `hasCredential` EducationalOccupationalCredential entries on the
 * provider Organization. Keeping the mapping next to the generator (vs. in
 * types.ts) means a copy tweak — "BAFE SP203-1" vs "BAFE-Registered" — is a
 * one-file edit and doesn't ripple into the section components, which only
 * care about the slug.
 */
const ACCREDITATION_LABELS: Record<AccreditationSlug, string> = {
  bafe: 'BAFE SP203-1',
  fia: 'FIA — Fire Industry Association',
  'nsi-gold': 'NSI Gold',
  firas: 'FIRAS',
  safecontractor: 'SafeContractor',
  chas: 'CHAS',
  ssaib: 'SSAIB',
  niceic: 'NICEIC',
  'gas-safe': 'Gas Safe Register',
  eca: 'ECA — Electrical Contractors Association',
  refcom: 'REFCOM F-Gas',
  'iso-9001': 'ISO 9001 — Quality Management',
  'iso-14001': 'ISO 14001 — Environmental Management',
  'iso-45001': 'ISO 45001 — Occupational Health and Safety',
  constructionline: 'Constructionline',
};

/**
 * Manufacturer slug → display brand name. Used to populate the schema.org
 * Brand reference on each Offer in `hasOfferCatalog`. The list mirrors the
 * `ManufacturerSlug` union exactly so a new manufacturer added to types.ts
 * trips a TypeScript error here until labelled — preventing silent
 * "unknown brand" Offers in the JSON-LD.
 */
const MANUFACTURER_LABELS: Record<ManufacturerSlug, string> = {
  // gas suppression
  fike: 'Fike',
  tyco: 'Tyco',
  'standby-fire': 'Standby Fire',
  kidde: 'Kidde',
  '3m-novec': '3M Novec',
  inergen: 'Inergen',
  // fire alarm
  apollo: 'Apollo',
  hochiki: 'Hochiki',
  hyfire: 'Hyfire',
  advanced: 'Advanced',
  honeywell: 'Honeywell',
  gent: 'Gent',
  scantronic: 'Scantronic',
  // passive fire
  hilti: 'Hilti',
  rockwool: 'Rockwool',
  promat: 'Promat',
  nullifire: 'Nullifire',
  envirograf: 'Envirograf',
  // security
  paxton: 'Paxton',
  suprema: 'Suprema',
  hikvision: 'Hikvision',
  axis: 'Axis Communications',
  avigilon: 'Avigilon',
  galaxy: 'Honeywell Galaxy',
  // ventilation
  hitachi: 'Hitachi',
  mitsubishi: 'Mitsubishi Electric',
  daikin: 'Daikin',
  toshiba: 'Toshiba',
  samsung: 'Samsung',
  panasonic: 'Panasonic',
  // m&e
  trend: 'Trend Controls',
  siemens: 'Siemens',
  schneider: 'Schneider Electric',
  abb: 'ABB',
  tridium: 'Tridium',
};

/**
 * Human-readable pillar labels for breadcrumbs. Hand-curated rather than
 * derived from the slug so that "m-and-e" surfaces as "Mechanical & Electrical"
 * (proper ampersand) and "security-access" surfaces as "Security & Access
 * Control" — both of which a naive slug → title-case transform would mangle.
 */
const PILLAR_LABELS: Record<PillarSlug, string> = {
  'gas-suppression': 'Gas Suppression Systems',
  'fire-alarm': 'Fire Alarm & Evacuation Systems',
  'passive-fire': 'Passive Fire Protection',
  'security-access': 'Security & Access Control',
  ventilation: 'Ventilation & Air Quality',
  'm-and-e': 'Mechanical & Electrical Services',
  'small-works': 'Small Works & Reactive',
};

/**
 * BusinessAudience labels per pillar. The spec's per-service briefs call out
 * specific audience types (e.g. "Data Centre Operator" for gas-suppression);
 * hoisting that to per-pillar defaults keeps `Service.audience` populated
 * without requiring Payload to author an audienceTypes field on every row.
 * If a future service needs a different audience, extend the Service type
 * with an optional override and read it here in preference to the default.
 */
const DEFAULT_AUDIENCE_BY_PILLAR: Record<PillarSlug, string[]> = {
  'gas-suppression': [
    'Data Centre Operator',
    'Facilities Manager',
    'Server Room Owner',
  ],
  'fire-alarm': [
    'Facilities Manager',
    'Building Owner',
    'Responsible Person (Fire Safety Order)',
  ],
  'passive-fire': [
    'Architect',
    'Main Contractor',
    'Building Control Officer',
    'Building Owner',
  ],
  'security-access': [
    'Facilities Manager',
    'Security Manager',
    'Building Owner',
  ],
  ventilation: [
    'Facilities Manager',
    'Main Contractor',
    'Building Services Engineer',
  ],
  'm-and-e': [
    'Main Contractor',
    'Facilities Manager',
    'Building Services Engineer',
  ],
  'small-works': [
    'Facilities Manager',
    'Building Owner',
    'Office Manager',
  ],
};

/**
 * Schema.org `serviceType` label per pillar. Mirrors the per-pillar briefs in
 * the spec doc (search for "Service.serviceType" in SERVICE_VERTICAL_TEMPLATE.md).
 */
const SERVICE_TYPE_BY_PILLAR: Record<PillarSlug, string> = {
  'gas-suppression': 'Gas Suppression System Installation and Maintenance',
  'fire-alarm': 'Fire Alarm System Installation and Maintenance',
  'passive-fire': 'Passive Fire Protection',
  'security-access': 'Security System Installation and Maintenance',
  ventilation: 'HVAC and Ventilation Installation',
  'm-and-e': 'Mechanical and Electrical Contracting',
  'small-works': 'Commercial Reactive Maintenance and Small Works',
};

/**
 * Derive the canonical absolute URL for a service from its taxonomy.
 *
 * Pillar pages live at `/{pillar}/`; leaf pages live at `/{pillar}/{slug}/`.
 * On a pillar row `slug` typically equals the pillar slug (so the function
 * is safe either way), but we key off `isPillar` to remove the ambiguity.
 */
function deriveCanonicalUrl(service: Service): string {
  if (service.isPillar) {
    return `${SITE_ORIGIN}/${service.pillar}/`;
  }
  return `${SITE_ORIGIN}/${service.pillar}/${service.slug}/`;
}

/* ── Public API ───────────────────────────────────────────────────────────── */

/**
 * Currency for the price-range parser. Hardcoded to GBP because every Gemini
 * AMPM service is priced in pounds — exposing this as a parameter would imply
 * multi-currency support that doesn't exist and isn't planned.
 */
type Currency = 'GBP';

export interface ExtractedPriceRange {
  lowPrice: number;
  highPrice: number;
  priceCurrency: Currency;
}

/**
 * Parse a GBP price-range string out of one of the canonical formats the
 * Payload `pricingBands[].priceRange` field uses across the spec's per-pillar
 * briefs:
 *
 *   - "£15,000-£25,000"
 *   - "£15k-£25k"
 *   - "£15,000 – £25,000"        (en-dash variant; copy-editors swap it in)
 *   - "from £85"                 ("from X" — low only, no upper bound)
 *   - "£40,000-£80,000+"         (suffix "+" — high is open, treat as same)
 *   - "£85 per hour"             (single value with a unit — treat as fixed)
 *   - "£85-£140 per engineer per hour"   (range with a unit)
 *
 * We aggregate across an entire `bands` array, returning the minimum lowPrice
 * and the maximum highPrice — exactly what AggregateOffer wants. The function
 * is forgiving: anything it can't parse is skipped, not throw-ed, because a
 * single mis-typed band shouldn't break the entire schema bundle for a page.
 *
 * Tolerance choices:
 *   - "k" suffix → multiply by 1,000 (so "£15k" → 15000).
 *   - Comma thousands separators are stripped before parsing.
 *   - Hyphen, en-dash and em-dash are all treated as range separators.
 *   - Whitespace around the separator is tolerated.
 *   - Trailing "+" is dropped (it signals an open upper bound; the high
 *     number immediately preceding it is still the best estimate we have).
 *
 * Returns lowPrice = Infinity / highPrice = -Infinity ONLY if zero bands
 * parsed — callers should treat that as "no AggregateOffer". We normalise
 * to 0 / 0 in the default-export path to avoid Infinity leaking into JSON.
 */
export function extractPriceRange(bands: PricingBand[]): ExtractedPriceRange {
  let lowPrice = Number.POSITIVE_INFINITY;
  let highPrice = Number.NEGATIVE_INFINITY;

  for (const band of bands ?? []) {
    const parsed = parseBandRange(band?.priceRange ?? '');
    if (parsed === null) continue;
    if (parsed.low < lowPrice) lowPrice = parsed.low;
    if (parsed.high > highPrice) highPrice = parsed.high;
  }

  // Normalise unparseable / empty input to a JSON-safe zero range. Callers
  // that care about "did anything parse?" should compare highPrice >=
  // lowPrice && highPrice > 0 to detect a real signal.
  if (!Number.isFinite(lowPrice) || !Number.isFinite(highPrice)) {
    return { lowPrice: 0, highPrice: 0, priceCurrency: 'GBP' };
  }

  return { lowPrice, highPrice, priceCurrency: 'GBP' };
}

/**
 * Compose the full JSON-LD `@graph` for a service-vertical page and return it
 * as a JSON string ready to drop into a `<script type="application/ld+json">`
 * tag.
 *
 * The output is intentionally a STRING (not an object) so callers don't
 * accidentally double-serialise it via `JSON.stringify` again inside an
 * Astro template's `set:html`. The shape is:
 *
 *   {
 *     "@context": "https://schema.org",
 *     "@graph": [ Service, Organization, BreadcrumbList, FAQPage, HowTo, LocalBusiness ]
 *   }
 *
 * Empty / absent sub-entities are omitted: e.g. a service with no FAQs won't
 * have a FAQPage node, a service with no process steps won't have a HowTo,
 * etc. This keeps Rich Results Test green on partially-authored pages
 * instead of failing the whole bundle on a missing optional section.
 */
export function generateServiceSchema(service: Service): string {
  const graph: object[] = [];

  // Provider Organization — emitted FIRST so downstream nodes can @id-reference it.
  graph.push(buildOrganization(service));

  // Service — the canonical entity for this page.
  graph.push(buildService(service));

  // BreadcrumbList — Home > Pillar (> Leaf).
  graph.push(buildBreadcrumb(service));

  // FAQPage — only if at least one FAQ is authored.
  const faqPage = buildFAQPage(service);
  if (faqPage) graph.push(faqPage);

  // HowTo — only if at least one Process step is authored.
  const howTo = buildHowTo(service);
  if (howTo) graph.push(howTo);

  // LocalBusiness — head office + areaServed.
  graph.push(buildLocalBusiness(service));

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

/* ── Builders ─────────────────────────────────────────────────────────────── */

/**
 * Provider Organization — referenced by `Service.provider` + by
 * `LocalBusiness.parentOrganization` via @id.
 *
 * Carries the time-invariant facts about Gemini AMPM Ltd: legal name,
 * founding date, ownership funding (EOT), the full pillar-filtered
 * accreditation set, primary contact point. The contactPoint is intentionally
 * a `customer service` channel rather than a regional DDI — DDIs belong on
 * the LocalBusiness (operational layer), not the Organization (legal layer).
 */
function buildOrganization(service: Service): object {
  const accreditations = service.accreditationStrip ?? [];

  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_DISPLAY_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_ORIGIN,
    foundingDate: ORG_FOUNDING_DATE,
    /**
     * ownershipFundingInfo is the schema.org-recommended field for EOT /
     * employee-owned status. Phrased as freeform text per the schema.org
     * docs (no controlled vocabulary exists yet for ownership structures).
     */
    ownershipFundingInfo: 'Employee Ownership Trust (EOT)',
    /**
     * One EducationalOccupationalCredential per accreditation. We use the
     * pillar-filtered `accreditationStrip` (not `accreditationsForHero`)
     * because the strip is the full pillar-relevant set — the hero only
     * surfaces 3-4 highest-equity logos for visual reasons.
     */
    hasCredential: accreditations.map((slug) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: ACCREDITATION_LABELS[slug] ?? slug,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: ['en'],
      ...(service.regionalDDI ? { telephone: service.regionalDDI } : {}),
    },
  };
}

/**
 * Service — the canonical entity for this page.
 *
 * Wires together: provider (Organization @id), service type label, area
 * served (Place array drawn from coverageRegions), hasOfferCatalog with one
 * Offer per `systemType` (each carrying a Brand reference to the named
 * manufacturer), an AggregateOffer aggregating across the pricing bands, a
 * BusinessAudience array, and `termsOfService` set to the regulatoryAnchor
 * (e.g. "BS 5839-1" for fire alarm).
 *
 * `serviceType` falls back to "{Pillar Label} — Installation and Maintenance"
 * when the Payload-authored field is absent, so the bundle always emits a
 * non-empty serviceType (Google's validator warns on missing).
 */
function buildService(service: Service): object {
  const pillarLabel = PILLAR_LABELS[service.pillar];
  const canonicalUrl = deriveCanonicalUrl(service);
  const serviceType =
    SERVICE_TYPE_BY_PILLAR[service.pillar] ??
    `${pillarLabel} — Installation and Maintenance`;

  const audience = DEFAULT_AUDIENCE_BY_PILLAR[service.pillar].map((label) => ({
    '@type': 'BusinessAudience',
    audienceType: label,
  }));

  const areaServed = (service.coverageRegions ?? []).map((regionName) => ({
    '@type': 'Place',
    name: regionName,
  }));

  /**
   * hasOfferCatalog — one OfferCatalog per service, with one Offer per
   * authored systemType. Each Offer carries a Brand reference resolved from
   * the manufacturer slug → display-name map at the top of this file.
   *
   * Why Offers (not Products): schema.org's hasOfferCatalog expects Offer
   * entries; a Product entry would model the manufactured device itself
   * (Apollo Discovery panel etc), which is the manufacturer's entity to
   * publish, not ours. We're offering the INSTALLATION SERVICE of that
   * product, which is exactly what Offer.itemOffered represents.
   */
  const offerCatalog = service.systemTypes && service.systemTypes.length > 0
    ? {
        '@type': 'OfferCatalog',
        name: `${pillarLabel} — System Types`,
        itemListElement: service.systemTypes.map((sys) => ({
          '@type': 'Offer',
          name: sys.h3,
          ...(sys.bodyCopy ? { description: sys.bodyCopy } : {}),
          itemOffered: {
            '@type': 'Service',
            name: sys.h3,
            ...(sys.bestForLine ? { description: sys.bestForLine } : {}),
            brand: {
              '@type': 'Brand',
              name: MANUFACTURER_LABELS[sys.manufacturer] ?? sys.manufacturer,
            },
          },
        })),
      }
    : null;

  /**
   * AggregateOffer — aggregated min/max across the pricing bands. We only
   * emit this when at least one band parsed cleanly; otherwise we'd be
   * lying to Google about the price range (lowPrice/highPrice required by
   * schema.org's AggregateOffer if present at all).
   */
  const priceRange = extractPriceRange(service.pricingBands ?? []);
  const aggregateOffer =
    priceRange.highPrice > 0
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: priceRange.priceCurrency,
          lowPrice: priceRange.lowPrice,
          highPrice: priceRange.highPrice,
          offerCount: service.pricingBands?.length ?? 0,
        }
      : null;

  return {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: service.h1,
    serviceType,
    ...(service.subHeadline ? { description: service.subHeadline } : {}),
    url: canonicalUrl,
    provider: { '@id': ORG_ID },
    ...(areaServed.length > 0 ? { areaServed } : {}),
    ...(offerCatalog ? { hasOfferCatalog: offerCatalog } : {}),
    ...(aggregateOffer ? { offers: aggregateOffer } : {}),
    ...(audience.length > 0 ? { audience } : {}),
    ...(service.regulatoryAnchor
      ? { termsOfService: service.regulatoryAnchor }
      : {}),
  };
}

/**
 * BreadcrumbList — Home > {Pillar} (> {Leaf}).
 *
 * For leaf pages (isPillar === false with a parentPillar) we emit a three-
 * step crumb so Google can reconstruct the hierarchy. For pillar pages we
 * emit a two-step crumb. Position numbering is 1-indexed per schema.org.
 */
function buildBreadcrumb(service: Service): object {
  const canonicalUrl = deriveCanonicalUrl(service);
  const items: { '@type': string; position: number; name: string; item: string }[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`,
    },
  ];

  // Determine pillar slug + label + URL. For pillar pages this is the
  // service itself; for leaves the pillar segment is `service.pillar` (the
  // leaf carries its parent pillar's slug in that field, mirroring the
  // Payload `pillar` select used for both row types).
  const pillarSlug = service.pillar;
  const pillarLabel = PILLAR_LABELS[pillarSlug];
  const pillarUrl = `${SITE_ORIGIN}/${pillarSlug}/`;

  items.push({
    '@type': 'ListItem',
    position: 2,
    name: pillarLabel,
    item: pillarUrl,
  });

  // Leaf — append the leaf step.
  if (!service.isPillar) {
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: service.h1,
      item: canonicalUrl,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items,
  };
}

/**
 * FAQPage — verbatim Q&A from `service.faqs`. Returns null when no FAQs are
 * authored so the caller can omit the node entirely (cleaner than emitting
 * a FAQPage with an empty mainEntity, which trips Rich Results validator).
 */
function buildFAQPage(service: Service): object | null {
  const faqs = service.faqs ?? [];
  if (faqs.length === 0) return null;

  return {
    '@type': 'FAQPage',
    '@id': `${deriveCanonicalUrl(service)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * HowTo — the 4 Process steps with deliverable + indicative timing.
 *
 * Returns null when no steps are authored. The `totalTime` field is omitted
 * because indicative timings on Gemini AMPM jobs are per-step ranges
 * ("within 5 working days"), not whole-process durations — synthesising a
 * total would be misleading.
 */
function buildHowTo(service: Service): object | null {
  const steps = service.steps ?? [];
  if (!steps || steps.length === 0) return null;

  return {
    '@type': 'HowTo',
    '@id': `${deriveCanonicalUrl(service)}#howto`,
    name: `How a ${PILLAR_LABELS[service.pillar]} install works at Gemini AMPM`,
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.h3,
      text: step.bodyCopy,
      ...(step.deliverable
        ? {
            // schema.org allows HowToStep.itemListElement → HowToDirection
            // for sub-steps; we use `itemListElement` here to surface the
            // named deliverable as a structured sub-item rather than burying
            // it in the text.
            itemListElement: [
              {
                '@type': 'HowToDirection',
                text: `Deliverable: ${step.deliverable}`,
              },
            ],
          }
        : {}),
      ...(step.indicativeTiming
        ? { performTime: step.indicativeTiming }
        : {}),
    })),
  };
}

/**
 * LocalBusiness — head office (officeAddress) + areaServed Place array.
 *
 * Parented to the Organization via `parentOrganization` so Google groups the
 * LocalBusiness and the Organization as one knowledge-graph entity. We use
 * the generic `LocalBusiness` type rather than a sub-type (e.g. HVACBusiness,
 * SecuritySystemInstaller) because the seven pillars span too many sub-types
 * to commit to one without misrepresenting the others on a pillar page.
 */
function buildLocalBusiness(service: Service): object {
  const office = service.officeAddress;
  const regions = service.coverageRegions ?? [];

  const address = office
    ? {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        ...(office.city ? { addressLocality: office.city } : {}),
        ...(office.postcode ? { postalCode: office.postcode } : {}),
      }
    : null;

  return {
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: ORG_DISPLAY_NAME,
    url: SITE_ORIGIN,
    parentOrganization: { '@id': ORG_ID },
    ...(address ? { address } : {}),
    ...(office?.ddi ? { telephone: office.ddi } : {}),
    areaServed: regions.map((regionName) => ({
      '@type': 'Place',
      name: regionName,
    })),
  };
}

/* ── Internal helpers ─────────────────────────────────────────────────────── */

/**
 * Parse a single price-range string into `{low, high}` numbers. Returns null
 * if nothing usable could be extracted. See the JSDoc on `extractPriceRange`
 * for the canonical input shapes this tolerates.
 *
 * The parsing strategy is deliberately permissive — Payload textareas are
 * authored by humans, so we accept en-dashes, em-dashes, "k" suffixes,
 * "from £X" prefixes, trailing "+" markers and embedded units ("per hour",
 * "per visit"). Anything truly unparseable (no digits at all) returns null.
 */
function parseBandRange(input: string): { low: number; high: number } | null {
  if (!input) return null;

  // Pull every numeric run with its optional "k" suffix out of the string,
  // preserving comma thousands separators. We deliberately match £-prefixed
  // numbers OR bare numbers so "from £85" and "£85 per hour" both work.
  const normalised = input.replace(/[–—]/g, '-'); // en/em-dash → hyphen
  const numberMatches = Array.from(
    normalised.matchAll(/£?\s*([\d,]+(?:\.\d+)?)\s*(k|K)?/g),
  );

  if (numberMatches.length === 0) return null;

  const values = numberMatches
    .map((match) => {
      const raw = match[1].replace(/,/g, '');
      const value = parseFloat(raw);
      if (Number.isNaN(value)) return null;
      const multiplier = match[2] ? 1000 : 1;
      return value * multiplier;
    })
    .filter((v): v is number => v !== null && v > 0);

  if (values.length === 0) return null;

  // "from £X" → low = X, high = X (single-value treatment; AggregateOffer
  // still needs both, so we collapse them).
  if (values.length === 1) {
    return { low: values[0], high: values[0] };
  }

  // Two-or-more values: take min + max. This covers the canonical
  // "£15,000-£25,000" range, the "£85-£140 per engineer per hour" range,
  // and any future copy variant that drops a third comparator into the
  // string (e.g. "£15k-£25k typical, plus £1.8k maintenance" — which we
  // do NOT want to merge into the band; that's why the spec keeps the
  // maintenance band in its own field).
  const low = Math.min(...values);
  const high = Math.max(...values);
  return { low, high };
}

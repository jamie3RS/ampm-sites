/**
 * Service vertical type definitions.
 *
 * Mirrors the Payload CMS `services` collection schema defined in
 * /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/audits/SERVICE_VERTICAL_TEMPLATE.md
 *
 * Source of truth at build time is the .ts content file per service;
 * once Payload is wired this interface stays identical so we can swap
 * the data source without touching `<ServiceVerticalPage />`.
 */

// ---------- Enums / unions ----------

export type PillarSlug =
  | 'gas-suppression'
  | 'fire-alarm'
  | 'passive-fire'
  | 'security-access'
  | 'ventilation'
  | 'm-and-e'
  | 'small-works';

export type DensityPreset = 'long' | 'standard' | 'compact';

export type ManufacturerSlug =
  // gas suppression
  | 'fike'
  | 'tyco'
  | 'standby-fire'
  | 'kidde'
  | '3m-novec'
  | 'inergen'
  // fire alarm
  | 'apollo'
  | 'hochiki'
  | 'hyfire'
  | 'advanced'
  | 'honeywell'
  | 'gent'
  | 'scantronic'
  // passive fire
  | 'hilti'
  | 'rockwool'
  | 'promat'
  | 'nullifire'
  | 'envirograf'
  // security
  | 'paxton'
  | 'suprema'
  | 'hikvision'
  | 'axis'
  | 'avigilon'
  | 'galaxy'
  // ventilation
  | 'hitachi'
  | 'mitsubishi'
  | 'daikin'
  | 'toshiba'
  | 'samsung'
  | 'panasonic'
  // m&e
  | 'trend'
  | 'siemens'
  | 'schneider'
  | 'abb'
  | 'tridium';

export type AccreditationSlug =
  | 'bafe'
  | 'fia'
  | 'nsi-gold'
  | 'firas'
  | 'safecontractor'
  | 'chas'
  | 'ssaib'
  | 'niceic'
  | 'gas-safe'
  | 'eca'
  | 'refcom'
  | 'iso-9001'
  | 'iso-14001'
  | 'iso-45001'
  | 'constructionline';

export type FormSource = 'hero' | 'gate' | 'primary' | 'maintenance' | 'footer';

// ---------- Sub-shapes ----------

export interface UseCase {
  iconSlug: string;
  scenarioLabel: string;
  oneLineTrigger: string;
  optionalSectorPageLink?: string;
}

export interface SystemType {
  /** Anchor for deep-linking from paid ads, e.g. "fm-200" */
  anchorSlug: string;
  /** Manufacturer + product line keyword */
  h3: string;
  manufacturer: ManufacturerSlug;
  /** "Best for…" qualifier shown beneath H3 */
  bestForLine: string;
  /** 60-100 word body */
  bodyCopy: string;
  /** "Accredited installer of…" / partner line */
  accreditationLine?: string;
  optionalDeepLinkURL?: string;
}

export interface Industry {
  iconSlug: string;
  sectorName: string;
  /** 30-50 word intent-matched copy */
  body: string;
  optionalLink?: string;
}

export interface ProcessStep {
  h3: string;
  /** 40-80 word body */
  bodyCopy: string;
  deliverable: string;
  indicativeTiming: string;
  optionalIconSlug?: string;
}

export interface PricingBand {
  bandName: string;
  scopeQualifier: string;
  priceRange: string;
  whatsIncluded: string[];
  whatsExtra: string[];
}

export interface PriceDriver {
  driver: string;
}

export interface FlagshipCaseStudy {
  /** Project name shown on tile */
  name: string;
  /** Address / location qualifier */
  location: string;
  /** Named primary system installed */
  systemInstalled: string;
  /** End client or main contractor named */
  client: string;
  /** Year completed */
  year: number;
  /** 80-word summary */
  summary: string;
  /** Single-line outcome */
  outcome?: string;
  /** Image path relative to /public */
  image?: string;
  imageAlt?: string;
  /** Optional case-study page slug */
  href?: string;
}

export interface ClientLogo {
  name: string;
  /** logo slug; resolves to /public/logos/{slug}.svg */
  slug: string;
  /** Permission flag — only render if true */
  permissionToDisplay: boolean;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  authorOrganisation: string;
  /** Set false where the testimonial is a placeholder pending sign-off */
  verified: boolean;
}

export interface RelatedCaseStudy {
  name: string;
  href: string;
  thumbnail?: string;
}

export interface SpaceTypeOption {
  value: string;
  label: string;
}

export interface ContractInclusion {
  inclusion: string;
}

export interface TrustPillar {
  pillar: string;
}

export interface NamedEngineer {
  name: string;
  qualification: string;
  role: string;
  photo?: string;
}

export interface OfficeLocation {
  city: string;
  postcode: string;
  ddi?: string;
}

export interface FAQ {
  question: string;
  /** 40-80 word answer */
  answer: string;
  optionalInlineCTAAnchor?: string;
  optionalInternalLinkURL?: string;
}

// ---------- Top-level Service interface ----------

export interface Service {
  // Taxonomy
  slug: string;
  pillar: PillarSlug;
  isPillar: boolean;
  parentPillar?: PillarSlug;
  densityPreset: DensityPreset;
  specifierMode: boolean;
  variantId: string;

  // SEO
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;

  // Section 1 — Hero
  h1: string;
  subHeadline: string;
  primaryCTAlabel: string;
  secondaryCTAlabel: string;
  regionalDDI: string;
  accreditationsForHero: AccreditationSlug[];
  heroImage: string;
  heroImageAlt: string;

  // Section 2 — Qualification Gate + Form #1
  gateHeadline: string;
  useCases: UseCase[];
  regulatoryAnchor: string;
  wrongFitRedirect?: PillarSlug;
  consultFormHeadline: string;
  consultSubmitLabel: string;
  consultRoutingMailbox: string;
  consultSubjectPrefix: string;

  // Section 3 — System Types
  systemTypes: SystemType[];
  closingSoftCTA: string;

  // Section 4 — Industries
  industries: Industry[];

  // Section 5 — Process
  steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  processClosingLine: string;
  optionalLinkedCaseStudy?: string;

  // Section 6 — Pricing
  pricingBands: PricingBand[];
  priceDriversList: PriceDriver[];
  humanCaveat: string;
  maintenancePriceCallout: string;

  // Section 7 — Social Proof + Form #2
  flagshipCaseStudy: FlagshipCaseStudy;
  namedClientLogos: ClientLogo[];
  testimonial: Testimonial;
  outcomeStat?: string;
  relatedCaseStudies: RelatedCaseStudy[];
  quoteFormHeadline: string;
  spaceTypeOptions: SpaceTypeOption[];
  quoteSubmitLabel: string;
  responsePromise: string;
  altActionPhone: string;
  quoteRoutingMailbox: string;
  quoteSubjectPrefix: string;
  thanksPageRedirect: string;
  capabilityStatementPDF?: string;

  // Section 8 — Maintenance + Form #3
  maintenanceRegulatoryAnchor: string;
  contractInclusionsList: ContractInclusion[];
  takeOverMessage: string;
  maintenanceFormHeadline: string;
  maintenanceRoutingMailbox: string;
  maintenanceSubjectPrefix: string;

  // Section 9 — Why Gemini
  trustPillars: TrustPillar[];
  accreditationStrip: AccreditationSlug[];
  eotCallout: string;
  namedEngineer: NamedEngineer;
  officeLocations: OfficeLocation[];

  // Section 10 — FAQ
  faqs: FAQ[];
  faqChildPageLink?: string;

  // Section 11 — Footer
  coverageRegions: string[];
  officeAddress: OfficeLocation;
  relatedServices: { slug: string; label: string }[];
  authorByline: {
    name: string;
    qualification: string;
    reviewerName?: string;
  };
  lastReviewedDate: string;
}

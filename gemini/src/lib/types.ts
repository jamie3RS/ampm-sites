/**
 * Service vertical content type — mirrors the Payload schema in
 * audits/SERVICE_VERTICAL_TEMPLATE.md so migration to Payload CMS in
 * Phase 2 is a 1:1 paste.
 */

export type DensityPreset = 'long' | 'standard' | 'compact';

export type PillarId =
  | 'gas-suppression'
  | 'fire-alarm'
  | 'passive-fire'
  | 'security-access'
  | 'ventilation'
  | 'm-and-e'
  | 'small-works';

export interface UseCase {
  iconSlug?: string;
  scenarioLabel: string;
  oneLineTrigger: string;
}

export interface SystemType {
  h3: string;
  manufacturer?: string;
  bestForLine: string;
  bodyCopy: string;
  anchorSlug: string;
}

export interface Industry {
  iconSlug?: string;
  sectorName: string;
  body: string;
}

export interface ProcessStep {
  h3: string;
  bodyCopy: string;
  deliverable: string;
  indicativeTiming: string;
}

export interface PricingBand {
  bandName: string;
  scopeQualifier: string;
  priceRange: string;
  whatsIncluded: string;
  whatsExtra?: string;
}

export interface Client {
  name: string;
  logo?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Accreditation {
  shortName: string;
  longName: string;
  href: string;
  thumb?: string;
}

export interface CaseStudy {
  title: string;
  summary: string;
  href?: string;
  outcomeStat?: string;
}

export interface Service {
  // Taxonomy
  slug: string;
  pillar: PillarId;
  isPillar: boolean;
  densityPreset: DensityPreset;
  specifierMode?: boolean;

  // SEO
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;

  // Section 1: Hero
  h1: string;
  subHeadline: string;
  primaryCTAlabel: string;
  secondaryCTAlabel: string;
  regionalDDI: string;
  regionalDDIDisplay: string;
  accreditationsForHero: Accreditation[];
  heroImage?: string;
  heroImageAlt?: string;

  // Section 2: Qualification + Form 1
  gateHeadline: string;
  useCases: UseCase[];
  regulatoryAnchor: string;
  consultFormHeadline: string;
  consultRoutingMailbox: string;
  consultSubjectPrefix: string;

  // Section 3: System Types
  systemTypesHeadline: string;
  systemTypes: SystemType[];
  closingSoftCTA: string;

  // Section 4: Industries
  industriesHeadline: string;
  industries: Industry[];

  // Section 5: Process
  processHeadline: string;
  steps: ProcessStep[];
  processClosingLine: string;

  // Section 6: Pricing
  pricingHeadline: string;
  pricingBands: PricingBand[];
  priceDrivers: string[];
  humanCaveat: string;
  maintenancePriceCallout: string;

  // Section 7: Social Proof + Form 2
  flagshipCaseStudy: CaseStudy;
  namedClients: Client[];
  testimonial?: Testimonial;
  quoteFormHeadline: string;
  spaceTypeOptions: string[];
  responsePromise: string;
  quoteRoutingMailbox: string;
  quoteSubjectPrefix: string;

  // Section 8: Maintenance Hook + Form 3
  maintenanceHeadline: string;
  maintenanceRegulatoryAnchor: string;
  contractInclusions: string[];
  takeOverMessage: string;
  maintenanceRoutingMailbox: string;
  maintenanceSubjectPrefix: string;

  // Section 9: Why Gemini
  trustPillars: { title: string; body: string }[];
  accreditationStrip: Accreditation[];
  eotCallout: string;
  namedEngineer?: { name: string; role: string; qual: string };

  // Section 10: FAQ
  faqs: FAQ[];

  // Section 11: Footer + schema
  coverageRegions: string[];
  officeAddress: {
    streetAddress: string;
    locality: string;
    postalCode: string;
    region: string;
    country: string;
  };
  relatedServices: { label: string; href: string }[];
}

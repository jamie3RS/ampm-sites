import type { Service } from '~/lib/types';

/**
 * Gas Suppression — the first pillar built end-to-end.
 * Worst GSC cluster (25k impressions, ~0% conversion) so highest leverage.
 * Density preset: 'long' — long-form education in this commercial-intent vertical.
 *
 * When migrating to Payload CMS, every field below maps 1:1 to a Payload field.
 */
export const gasSuppression: Service = {
  slug: 'gas-suppression',
  pillar: 'gas-suppression',
  isPillar: true,
  densityPreset: 'long',

  focusKeyword: 'gas suppression systems',
  metaTitle: 'Gas Suppression Systems — Design, Install, Maintain | BAFE Gemini AMPM',
  metaDescription:
    'BAFE-registered gas suppression installer since 1997 — ProInert IG55, FM-200, Novec 1230, Inergen. Server rooms, data centres, archives. Free UK site survey.',

  // Hero
  h1: 'Gas Suppression Systems — Design, Install & Maintain across the UK',
  subHeadline:
    'Server rooms, data centres, switchgear and archives protected with ProInert IG-55, FM-200, Novec 1230 and Inergen — BAFE-grade design, FIA-aligned install, BS EN 15004 commissioning, since 1997.',
  primaryCTAlabel: 'Get a free site survey',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'BAFE', longName: 'BAFE-Registered', href: '/accreditations/bafe/', thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'FIA',  longName: 'FIA Member',      href: '/accreditations/fia/',  thumb: '/assets/certs/thumbs/fia.png'  },
    { shortName: 'CHAS', longName: 'CHAS Accredited', href: '/accreditations/chas/', thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold', href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  heroImage: '/assets/hero-gas-suppression.svg',
  heroImageAlt: 'Inert-gas suppression cylinders in a UK data-centre suppression room',

  // Qualification gate
  gateHeadline: 'When do you need a gas suppression system?',
  useCases: [
    { iconSlug: 'server',  scenarioLabel: 'Data centre / server room',     oneLineTrigger: 'Mission-critical IT estate where water-based suppression would destroy assets' },
    { iconSlug: 'archive', scenarioLabel: 'Archive / vault / records',     oneLineTrigger: 'Irreplaceable physical assets — legal, financial, heritage' },
    { iconSlug: 'switch',  scenarioLabel: 'Switchgear / electrical room',  oneLineTrigger: 'Live electrical equipment where sprinklers are unsafe' },
    { iconSlug: 'comms',   scenarioLabel: 'Comms / MER / telecoms hub',    oneLineTrigger: 'Always-on infrastructure with zero-downtime tolerance' },
    { iconSlug: 'medical', scenarioLabel: 'Medical imaging / pathology',   oneLineTrigger: 'High-value clinical equipment in regulated environments' },
  ],
  regulatoryAnchor:
    'Designed and commissioned to BS EN 15004 (gaseous extinguishing systems) and BS 6535-2 (clean agent selection). Recharge and integrity testing logged annually.',
  consultFormHeadline: 'Not sure if you need one? Book a free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Gas Suppression]',

  // System types
  systemTypesHeadline: 'The gas suppression systems we design, install and commission',
  systemTypes: [
    {
      h3: 'Fike ProInert IG-55 (inert gas)',
      manufacturer: 'Fike',
      bestForLine: 'Best for data centres and server rooms with occupied or transit-occupied spaces.',
      bodyCopy:
        'A 50/50 argon and nitrogen inert-gas blend that suppresses fire by reducing oxygen to a level that no longer supports combustion — but stays above the threshold humans need to evacuate safely. Leaves no residue, no clean-up cost, and no damage to electronics. Installed by Gemini AMPM at Peterborough Court, Fleet Street (Mace main contractor, 2025).',
      anchorSlug: 'proinert-ig55',
    },
    {
      h3: 'FM-200 / HFC-227ea (chemical agent)',
      manufacturer: 'Tyco / Johnson Controls',
      bestForLine: 'Best for smaller risk areas where a fast knock-down and minimal storage footprint matter.',
      bodyCopy:
        'A chemical clean-agent that extinguishes fire in 10 seconds with no residue. Stored as a liquid in fewer, smaller cylinders than inert-gas systems, so it fits where ProInert won\'t. Compatible with existing pipework on most retrofit upgrades. Listed under BS EN 15004-5.',
      anchorSlug: 'fm-200',
    },
    {
      h3: 'Novec 1230 (sustainable chemical)',
      manufacturer: '3M',
      bestForLine: 'Best for modern data centres with environmental KPIs and corporate ESG reporting.',
      bodyCopy:
        '3M\'s fluorinated ketone alternative to FM-200, with global warming potential of 1 (FM-200 is over 3,000). Increasingly the default specification on new-build commercial data centres. Same fast knock-down, clean residue and compact storage as FM-200.',
      anchorSlug: 'novec-1230',
    },
    {
      h3: 'Inergen IG-541 (inert blend)',
      manufacturer: 'Tyco / Johnson Controls',
      bestForLine: 'Best for occupied spaces — its CO₂ content stimulates human breathing to compensate for lower oxygen.',
      bodyCopy:
        'A blend of nitrogen, argon and CO₂. Behaves like ProInert but its small CO₂ component triggers a deeper-breathing response that maintains blood oxygen during the discharge — favoured in spaces where staff might still be present at activation.',
      anchorSlug: 'inergen',
    },
    {
      h3: 'Standby Fire watermist',
      manufacturer: 'Standby Fire',
      bestForLine: 'Best for risks where gas isn\'t suitable but sprinklers would over-damage.',
      bodyCopy:
        'High-pressure watermist systems suppress fire with a tiny fraction of the water volume of conventional sprinklers, cooling rapidly and displacing oxygen at the seat of the fire. A fallback when room integrity for gas can\'t be achieved.',
      anchorSlug: 'watermist',
    },
    {
      h3: 'Hand-held CO₂ & clean-agent extinguishers',
      manufacturer: 'Standby Fire',
      bestForLine: 'Best as supporting cover — the first-response layer before fixed suppression discharges.',
      bodyCopy:
        'Portable CO₂ and clean-agent extinguishers correctly sized and located across the protected zones, with BAFE-aligned service contracts and visual inspections. Sized and serviced under BS 5306-3 and BS 5306-8.',
      anchorSlug: 'extinguishers',
    },
  ],
  closingSoftCTA:
    'Not sure which agent fits your space, your risk profile and your budget? Book a free consultation — we\'ll talk you through the options and the trade-offs in 30 minutes, no obligation.',

  // Industries
  industriesHeadline: 'Where we install gas suppression',
  industries: [
    { iconSlug: 'datacentre', sectorName: 'Data centres', body: 'Co-location, edge and hyperscale — multi-zone systems with full integration to fire alarm and BMS.' },
    { iconSlug: 'financial',  sectorName: 'Financial services', body: 'Trading floors, comms rooms and disaster-recovery sites — including our flagship Peterborough Court install.' },
    { iconSlug: 'nhs',        sectorName: 'NHS Trusts', body: 'Pathology, medical imaging and IT estate suppression across acute, community and ambulance trusts.' },
    { iconSlug: 'university', sectorName: 'Higher education', body: 'University research server rooms, archives and special-collections vaults.' },
    { iconSlug: 'museum',     sectorName: 'Heritage & museums', body: 'Vaults, conservation labs and stores where water damage would be catastrophic.' },
    { iconSlug: 'utilities',  sectorName: 'Utilities & critical infrastructure', body: 'Substations, control rooms and SCADA estates where downtime isn\'t survivable.' },
    { iconSlug: 'office',     sectorName: 'Corporate occupiers', body: 'Building-wide MER, comms rooms and on-site DR for Fortune-100 occupiers.' },
    { iconSlug: 'public',     sectorName: 'Public sector', body: 'Local authority data estates, archive services and registry vaults.' },
  ],

  // Process
  processHeadline: 'How we deliver a gas suppression system',
  steps: [
    {
      h3: '1. Free site survey',
      bodyCopy:
        'A BAFE-qualified engineer attends site to measure room volume, assess integrity, inspect penetrations, audit existing detection, and identify integration points with your fire alarm and BMS.',
      deliverable: 'Written site report + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We model agent quantity and discharge time to BS EN 15004, specify the cylinder room, draft pipework routes, design the detection and release control, and integrate to your existing fire panel.',
      deliverable: 'BAFE-aligned design pack + fixed-price quote with build programme',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed engineers fit cylinders, pipework, nozzles, detection and control panels with minimal disruption to a live estate. Most installs run out-of-hours or in agreed maintenance windows.',
      deliverable: 'Installation works + room integrity test',
      indicativeTiming: 'Typically 2–6 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'Full discharge-circuit verification, integrity testing, detection-to-release sequence proving, end-user training and an audit-ready evidence pack including agent batch certification.',
      deliverable: 'Commissioning certificate + BAFE-aligned evidence pack + handover training',
      indicativeTiming: '2–5 days at the end of install',
    },
  ],
  processClosingLine:
    'When you\'ve seen the design and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Small server room, single zone',
      scopeQualifier: 'Room volume under 100 m³, single agent type, basic detection',
      priceRange: '£15,000 – £25,000',
      whatsIncluded: 'Cylinders, pipework, nozzles, control panel, detection, commissioning, evidence pack',
      whatsExtra: 'Builder\'s work for cylinder room, fire alarm panel changes if integration needed',
    },
    {
      bandName: 'Mid data centre, multi-zone',
      scopeQualifier: 'Room volume 100–600 m³, multi-zone with cross-zoned detection',
      priceRange: '£40,000 – £80,000',
      whatsIncluded: 'All of the above plus multi-zone control, addressable detection, BMS integration, full integrity testing',
      whatsExtra: 'Phased install over multiple maintenance windows, out-of-hours premium',
    },
    {
      bandName: 'Large data centre, redundant agents',
      scopeQualifier: '600 m³+, dual-agent redundancy, full BS EN 15004 integrity reporting',
      priceRange: '£80,000 – £200,000+',
      whatsIncluded: 'All of the above plus redundant cylinder banks, automatic recharge contracts, 24/7 monitored response',
      whatsExtra: 'Major builder\'s work for cylinder room, structural openings, additional fire alarm capacity',
    },
  ],
  priceDrivers: [
    'Room volume in m³ (the single biggest driver of cylinder count)',
    'Agent choice (Novec 1230 is ~30% more cylinders than ProInert; FM-200 is densest)',
    'Enclosure integrity — leaky rooms need more agent and may need builder\'s work',
    'Integration scope with existing fire alarm panel and BMS',
    'Access difficulty — high-rise, occupied, out-of-hours all add cost',
    'Commissioning depth — annual integrity testing contracts vs one-off',
  ],
  humanCaveat:
    'Every site is different — these are the ranges we see most often on real UK commercial jobs. Your site survey produces a fixed quote you can rely on. We don\'t inflate scope, we don\'t bundle in your maintenance contract, and we tell you which agent we\'d specify even if it\'s not the one with the biggest margin.',
  maintenancePriceCallout:
    'Annual integrity test + servicing from £1,800 per zone.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Peterborough Court — Fleet Street, City of London',
    summary:
      'ProInert IG-55 multi-zone gas suppression across an occupied Grade-A financial-services estate, delivered alongside fire alarm and security packages under Mace as main contractor (2025). Coordinated with live trading-floor operations and tenanted hot-desk floors throughout the install — zero handover defects, full BAFE evidence pack on day of completion.',
    href: '/case-studies/peterborough-court/',
    outcomeStat: 'Zero handover defects · 100% first-time pass on integrity testing',
  },
  namedClients: [
    { name: 'Mace',              logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',             logo: '/assets/clients/wates.png' },
    { name: 'CBRE',              logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',            logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',       logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'TClarke',           logo: '/assets/clients/tclarke.png' },
    { name: 'NHS Medway',        logo: '/assets/clients/nhs-medway.svg' },
    { name: 'Kingston University', logo: '/assets/clients/kingston-university.svg' },
    { name: 'FirstPort',         logo: '/assets/clients/firstport.svg' },
    { name: 'Aviva Investors',   logo: '/assets/clients/aviva.png' },
  ],
  testimonial: {
    quote:
      'Gemini\'s team worked around a live trading floor for the duration of the install. Their commissioning evidence pack was the cleanest we\'ve received from any sub-contractor on the programme.',
    author: 'Project Director',
    role: 'Senior Construction Lead',
    org: 'Mace (Peterborough Court delivery)',
  },
  quoteFormHeadline: 'Request your gas suppression quote',
  spaceTypeOptions: [
    'Data centre / server room',
    'Comms room / MER',
    'Switchgear room',
    'Archive / vault / records',
    'Medical imaging / clinical',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Survey arranged within 48h. Fixed quote within 5 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-gas@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Gas Suppression]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take-over your existing gas suppression maintenance',
  maintenanceRegulatoryAnchor:
    'Annual servicing to BS ISO 14520 and BS EN 15004 — including agent integrity test, hose hydrostatic test, detection circuit verification and discharge-release proving.',
  contractInclusions: [
    'Annual integrity test + cylinder weight check + agent batch verification',
    '4-hour response SLA for any fault that affects discharge readiness',
    'Audit-ready evidence pack issued within 5 working days of every visit',
  ],
  takeOverMessage:
    'Switching maintenance provider is straightforward — we\'ll audit your existing system, identify any compliance gaps your incumbent missed, and run continuity from day one. No long contract lock-in, no hidden recharge clauses.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Gas Suppression]',

  // Why Gemini
  trustPillars: [
    { title: 'BAFE-registered since 1997', body: 'Independently third-party verified design, install, commissioning and maintenance — 28 years on the register.' },
    { title: 'Employee-owned',             body: 'Our engineers own the business. That\'s why our handover packs come back clean, and why we don\'t over-spec to chase margin.' },
    { title: 'Directly employed engineers', body: 'No sub-contracted labour on site. The person who quoted is the person who supervised the install.' },
    { title: 'Audit-ready evidence pack',  body: 'Every job leaves with a BAFE-aligned, golden-thread evidence pack that satisfies your principal designer and your insurer.' },
    { title: 'Out-of-hours as standard',   body: 'Most of our work is done on live, occupied estates. We\'re used to working around your tenants and your shift patterns.' },
    { title: '24/7 monitored response',    body: 'NSI Gold-approved ARC connection means a verified human response within minutes of any fault condition.' },
  ],
  accreditationStrip: [
    { shortName: 'BAFE',              longName: 'BAFE SP203-1 (Design, Install, Commission, Maintain)', href: '/accreditations/bafe/',             thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'FIA',               longName: 'FIA Member',                                            href: '/accreditations/fia/',              thumb: '/assets/certs/thumbs/fia.png' },
    { shortName: 'FIRAS',             longName: 'FIRAS-Certificated (passive fire)',                     href: '/accreditations/firas/',            thumb: '/assets/certs/thumbs/firas.png' },
    { shortName: 'NSI Gold',          longName: 'NSI Gold (security + monitoring)',                      href: '/accreditations/nsi-gold/',         thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'CHAS',              longName: 'CHAS Premium Plus',                                     href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline',  longName: 'Constructionline Gold',                                 href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
    { shortName: 'BESA',              longName: 'BESA Member',                                            href: '/accreditations/besa/',             thumb: '/assets/certs/thumbs/besa.png' },
    { shortName: 'Cyber Essentials',  longName: 'Cyber Essentials Certified',                            href: '/accreditations/cyber-essentials/', thumb: '/assets/certs/thumbs/cyber-essentials.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who do the work are also the owners — that aligns the install quality with the long-term reputation in a way no agency-style sub-contracting can.',
  namedEngineer: {
    name: 'Senior Suppression Engineer',
    role: 'Suppression lead',
    qual: 'BAFE-registered · FIA-trained · 18+ years on UK commercial suppression',
  },

  // FAQ — sourced from real buyer language
  faqs: [
    {
      question: 'What is the difference between FM-200, Novec 1230 and inert gas suppression?',
      answer:
        'FM-200 and Novec 1230 are chemical agents — they extinguish fire by heat absorption and chemical interruption, store as liquid in compact cylinders, and discharge in around 10 seconds. Inert gases (ProInert, Inergen) work by lowering oxygen below the combustion threshold while staying breathable; they need more cylinders and more pipework but are non-chemical and safer for the environment. The right answer depends on room size, occupancy and ESG profile — we walk you through it in the free survey.',
    },
    {
      question: 'How much does a gas suppression system cost?',
      answer:
        'For a small single-zone server room, £15,000–£25,000 is typical. A mid-size multi-zone data centre runs £40,000–£80,000. Large data centres with redundant agent banks and full integrity reporting are £80,000–£200,000+. Annual integrity testing and servicing starts at £1,800 per zone. Your site survey gives you a fixed price — see the pricing bands section above for the drivers that move the number.',
    },
    {
      question: 'Will a gas suppression system harm staff who are in the room when it discharges?',
      answer:
        'Properly designed inert-gas systems (ProInert, Inergen) reduce oxygen to a level that no longer supports combustion but stays above the human threshold for safe evacuation. Inergen specifically contains a small percentage of CO₂ that stimulates deeper breathing to maintain blood oxygen during the discharge. Chemical agents (FM-200, Novec 1230) are designed for human-occupiable spaces at design concentration. All systems include pre-discharge alarms with an evacuation period.',
    },
    {
      question: 'How long does a gas suppression install take?',
      answer:
        'A small single-zone install typically takes 2–3 weeks on site. A mid-size multi-zone install is 4–6 weeks. Large installs are typically phased over multiple maintenance windows to keep the IT estate operational. The clock starts after the design pack is signed off — design and procurement add 4–6 weeks before site work begins.',
    },
    {
      question: 'Does a gas suppression system work alongside our existing fire alarm?',
      answer:
        'Yes — we integrate with all major fire alarm platforms (Apollo, Hochiki, Advanced, Gent Vigilon, Honeywell). The fire alarm provides detection; the suppression release control sits alongside it with its own listed-and-approved release panel, cross-zoned to avoid accidental discharge from a single false alarm.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'A BAFE-aligned commissioning certificate, agent batch certification, integrity test results, discharge calculation summary, as-built drawings, operations and maintenance manuals, and a training record for your facilities team. The full pack is delivered within 5 working days of completion and is suitable for principal designer sign-off and insurer audit.',
    },
    {
      question: 'How often does a gas suppression system need to be tested?',
      answer:
        'BS EN 15004 and BS ISO 14520 require an annual service that includes cylinder weight check, agent batch verification, detection circuit verification and discharge-release proving. Hose pressure tests are typically every 5 years. Integrity testing (room leakage) should be done at install, then every 5 years or after any room alterations.',
    },
    {
      question: 'Can you take over our existing maintenance contract from another supplier?',
      answer:
        'Yes — we run a free transition audit when we take over an existing system. That covers compliance gap analysis, asset register reconciliation, and a one-off catch-up service if anything has slipped through your previous contractor. No long lock-in on our contracts; cancel with 90 days\' notice.',
    },
  ],

  // Footer
  coverageRegions: ['London', 'South East', 'East of England', 'South Central', 'M25 corridor', 'Nationwide for framework partners'],
  officeAddress: {
    streetAddress: 'Unit 1, Riverside Industrial Estate',
    locality: 'Dartford',
    postalCode: 'DA1 5BS',
    region: 'Kent',
    country: 'GB',
  },
  relatedServices: [
    { label: 'Fire Alarm & Evacuation Systems →', href: '/fire-alarm/' },
    { label: 'Passive Fire Protection →',          href: '/passive-fire/' },
    { label: 'Ventilation & Air Quality →',        href: '/ventilation/' },
    { label: 'Security & Access Control →',        href: '/security/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

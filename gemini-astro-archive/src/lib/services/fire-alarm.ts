import type { Service } from '~/lib/types';

/**
 * Fire Alarm & Evacuation — Pillar (long density)
 * Core revenue pillar — BAFE SP203-1 design, install and maintain across the UK since 1997.
 *
 * When migrating to Payload CMS, every field below maps 1:1 to a Payload field.
 */
export const fireAlarm: Service = {
  slug: 'fire-alarm',
  pillar: 'fire-alarm',
  isPillar: true,
  densityPreset: 'long',

  focusKeyword: 'fire alarm installation company',
  metaTitle: 'Fire Alarm Installation Company — BAFE BS 5839-1 | Gemini AMPM',
  metaDescription:
    'BAFE-registered fire alarm installation company since 1997 — Apollo, Hochiki, Hyfire, Advanced, Gent Vigilon. BS 5839-1 design, install, certify. Free UK survey.',

  // Hero
  h1: 'Fire Alarm & Evacuation Systems — BAFE-Registered Design, Install & Maintain across the UK',
  subHeadline:
    'Conventional, addressable, wireless and hybrid fire alarms from Apollo, Hochiki, Hyfire, Advanced, Galaxy and Vigilon — BS 5839-1 compliant from survey to certificate, since 1997.',
  primaryCTAlabel: 'Request my fire alarm quote',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'BAFE',            longName: 'BAFE SP203-1 Registered',  href: '/accreditations/bafe/',            thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'FIA',             longName: 'FIA Member',                href: '/accreditations/fia/',             thumb: '/assets/certs/thumbs/fia.png' },
    { shortName: 'NSI Gold',        longName: 'NSI Gold (fire + security)', href: '/accreditations/nsi-gold/',       thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',    href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  heroImage: '/assets/hero-fire-alarm.svg',
  heroImageAlt: 'Addressable fire alarm control panel commissioned on a UK commercial estate',

  // Qualification gate
  gateHeadline: 'When do you need a new or upgraded fire alarm?',
  useCases: [
    { iconSlug: 'office',     scenarioLabel: 'Commercial offices & HQs',            oneLineTrigger: 'Existing panel obsolete, no spares available, or RRO 2005 audit flagged remedials' },
    { iconSlug: 'healthcare', scenarioLabel: 'Healthcare & NHS estates',            oneLineTrigger: 'Phased evacuation, addressable detection, integration with nurse-call and BMS' },
    { iconSlug: 'education',  scenarioLabel: 'Schools & universities',              oneLineTrigger: 'Multi-block sites, holiday-window installs, BB100 design guidance' },
    { iconSlug: 'heritage',   scenarioLabel: 'Heritage & listed buildings',         oneLineTrigger: 'Cannot route cabling through fabric — wireless or hybrid required' },
    { iconSlug: 'residential', scenarioLabel: 'Purpose-built residential (BSA 2022)',    oneLineTrigger: 'Higher-risk buildings needing golden-thread evidence under the Building Safety Act' },
    { iconSlug: 'retail',     scenarioLabel: 'Retail, leisure & hospitality',       oneLineTrigger: 'Voice-evacuation, public-area cause-and-effect, out-of-hours fit-out windows' },
    { iconSlug: 'industrial', scenarioLabel: 'Industrial & logistics',              oneLineTrigger: 'Large-warehouse aspirating detection, beam detection, multi-panel networks' },
  ],
  regulatoryAnchor:
    'Designed, installed, commissioned and maintained to BS 5839-1 (fire detection and alarm systems, code of practice). Category L1 through L5 and P1/P2 systems specified to the building\'s actual risk profile, not boilerplate.',
  consultFormHeadline: 'Not sure what category or grade you need? Book a free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Fire Alarm & Evacuation]',

  // System types
  systemTypesHeadline: 'The fire alarm and evacuation systems we design, install and commission',
  systemTypes: [
    {
      h3: 'Apollo Discovery (addressable)',
      manufacturer: 'Apollo Fire Detectors',
      bestForLine: 'Best for mid-to-large commercial buildings needing pinpoint detection and graphical zoning.',
      bodyCopy:
        'Apollo Discovery is the UK\'s most widely specified addressable detector range — loop-powered, drift-compensating, multi-sensor heads that report device-by-device to the panel. We install Discovery across commercial offices, mixed-use developments and BSA 2022 higher-risk residential, paired with Advanced MxPro 5 or Kentec Syncro panels. EN 54-7 and EN 54-5 listed. Tens of thousands of devices live across our maintained estate.',
      anchorSlug: 'apollo-discovery',
    },
    {
      h3: 'Hochiki ESP (addressable)',
      manufacturer: 'Hochiki Europe',
      bestForLine: 'Best for healthcare, education and heritage where false-alarm immunity and longevity matter.',
      bodyCopy:
        'Hochiki ESP is the protocol of choice across NHS trusts, university estates and listed buildings — renowned for sensor longevity, low false-alarm rates and broad panel compatibility (Advanced, Kentec, Morley, ESP-X). Designed and built in Kent. We use Hochiki where the client\'s estate strategy demands a 15–20 year detector lifecycle and the lowest unwanted-fire-signals rate on the market.',
      anchorSlug: 'hochiki-esp',
    },
    {
      h3: 'Hyfire Wireless (Partner Plus)',
      manufacturer: 'Hyfire',
      bestForLine: 'Best for heritage buildings, listed sites and fast retrofits where cabling is not an option.',
      bodyCopy:
        'Hyfire is the leading EN 54-25 wireless detection platform in the UK — Gemini AMPM holds Hyfire Partner Plus status, the top accredited installer tier. Two-way radio detectors, sounders and call-points talk back to a translator module wired to any major addressable panel. Ideal for Grade-I and Grade-II listed buildings, churches, schools occupied during install, and retrofits where chasing cable would destroy finishes.',
      anchorSlug: 'hyfire-wireless',
    },
    {
      h3: 'Advanced MxPro 5 (large networked panels)',
      manufacturer: 'Advanced (Halma)',
      bestForLine: 'Best for large multi-panel networked systems across multi-building estates.',
      bodyCopy:
        'Advanced MxPro 5 is the gold-standard large-system panel — up to 200 panels on a single network with full cause-and-effect across the lot, multi-protocol (Apollo + Hochiki + Argus on the same panel), and the AdSpecial bespoke engineering tier for complex sites. We deploy MxPro 5 across hospital trusts, university campuses, financial-services HQs and multi-tower developments where one logical fire alarm has to span dozens of buildings.',
      anchorSlug: 'advanced-mxpro5',
    },
    {
      h3: 'Honeywell Galaxy / Notifier',
      manufacturer: 'Honeywell',
      bestForLine: 'Best for large-scale and integrated systems where fire and security share infrastructure.',
      bodyCopy:
        'The Honeywell stack — Notifier ID3000/Pearl for fire, Galaxy Dimension for intruder, integrated through ESPA or Honeywell\'s own gateway — is the default specification on framework estates that want one manufacturer across life-safety and security. We are factory-trained on Notifier and integrate to existing Galaxy intruder panels on take-over jobs.',
      anchorSlug: 'honeywell-galaxy-notifier',
    },
    {
      h3: 'Gent Vigilon (Honeywell)',
      manufacturer: 'Gent by Honeywell',
      bestForLine: 'Best for acoustic-zoned large estates — hospitals, transport hubs, corporate HQs.',
      bodyCopy:
        'Gent Vigilon is the British-engineered Honeywell-owned panel preferred across NHS acute trusts and large transport estates for its S-Quad multi-sensor and the unmatched cause-and-effect engine. Gent\'s 24-hour engineering support and the panel\'s acoustic-zoning capability make it the standard specification on a lot of healthcare frameworks. We are an approved Gent24 partner.',
      anchorSlug: 'gent-vigilon',
    },
    {
      h3: 'Conventional panels (small offices, single-zone retrofit)',
      manufacturer: 'Apollo, Hochiki, Kentec, Morley',
      bestForLine: 'Best for small offices, single-zone retrofits and Category M manual systems.',
      bodyCopy:
        'Not every building needs an addressable system. For small offices under 500 m², single-zone retail units and Category M manual call-point-only systems, a conventional panel is the right answer — lower install cost, simpler maintenance, fully BS 5839-1 compliant. We design honest specs: addressable where it earns its price, conventional where it doesn\'t.',
      anchorSlug: 'conventional',
    },
  ],
  closingSoftCTA:
    'Not sure which platform suits your building, your panel estate and your budget? Book a free consultation — we\'ll talk you through the trade-offs in 30 minutes, no obligation.',

  // Industries
  industriesHeadline: 'Where we install fire alarm and evacuation systems',
  industries: [
    { iconSlug: 'office',      sectorName: 'Commercial offices',           body: 'Cat-A and Cat-B fit-outs, occupier-led upgrades, multi-tenant base-build integrations across the City and West End.' },
    { iconSlug: 'nhs',         sectorName: 'NHS & healthcare',          body: 'Acute, community and ambulance trusts — Gent Vigilon, Hochiki ESP, phased evacuation, HTM 05-03 alignment.' },
    { iconSlug: 'education',   sectorName: 'Schools, FE & universities', body: 'Summer-holiday installs, BB100 design, multi-block addressable networks across Russell Group and FE estates.' },
    { iconSlug: 'heritage',    sectorName: 'Heritage & listed buildings', body: 'Hyfire wireless installs in Grade-I and Grade-II listed churches, museums and civic buildings.' },
    { iconSlug: 'residential', sectorName: 'Higher-risk residential',        body: 'Building Safety Act 2022 estates — golden-thread evidence, BS 8629 evacuation alert systems where required.' },
    { iconSlug: 'retail',      sectorName: 'Retail, leisure & hospitality', body: 'Voice-evacuation, BS 5839-8 compliance, out-of-hours and trading-window installs.' },
    { iconSlug: 'industrial',  sectorName: 'Industrial, warehouse & logistics', body: 'Aspirating detection (VESDA), beam detection, large-volume coverage with EN 54 listed sounders.' },
    { iconSlug: 'public',      sectorName: 'Public sector & civic',     body: 'Local authority estates, libraries, museums and registry offices — framework-procured upgrades.' },
  ],

  // Process
  processHeadline: 'How we deliver a fire alarm system',
  steps: [
    {
      h3: '1. Free site survey',
      bodyCopy:
        'A BAFE-qualified engineer attends site to walk every protected area, audit the existing panel and detection (if any), measure the building, identify the right BS 5839-1 category (L1 through L5, P1/P2, M), and flag any integration points with sprinklers, AOVs, lift homing, magnetic door-holders and BMS.',
      deliverable: 'Written site report + category recommendation + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We design to BS 5839-1, select the right panel and protocol for your estate strategy, draft loop layouts and cable routes, specify cause-and-effect, and produce a fixed-price quote with a build programme. The design pack is shareable with your fire risk assessor and principal designer.',
      deliverable: 'BS 5839-1 design pack + fixed-price quote + build programme',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed FIA-trained engineers install the panel, run the loops, fit detection, sounders, beacons, call-points and interfaces, and stage the cutover from any existing system with zero gap in life-safety cover. Most installs run out-of-hours or in agreed maintenance windows on occupied estates.',
      deliverable: 'Installation works + as-installed drawings + cause-and-effect matrix',
      indicativeTiming: 'Typically 1–6 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'Full BS 5839-1 commissioning — every device tested, every cause-and-effect proved, sound-pressure levels verified, integration to AOV/lift/BMS demonstrated, end-user training delivered and a BAFE-aligned evidence pack issued.',
      deliverable: 'BAFE commissioning certificate + evidence pack + O&M manual + log book',
      indicativeTiming: '2–5 days at the end of install',
    },
  ],
  processClosingLine:
    'When you\'ve seen the design and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Small office, conventional, single zone',
      scopeQualifier: 'Under 500 m², conventional panel, single zone, basic L4/M coverage',
      priceRange: '£1,500 – £3,500',
      whatsIncluded: 'Panel, detection, sounders, call-points, cable, commissioning, BAFE certificate, log book',
      whatsExtra: 'Containment works above grid, AOV or lift-homing interfaces, asbestos surveys',
    },
    {
      bandName: 'Mid commercial, addressable',
      scopeQualifier: '500–2,000 m², single addressable loop, Cat L2/L3 coverage',
      priceRange: '£3,800 – £12,000',
      whatsIncluded: 'Addressable panel, loop devices, sounders, beacons, cause-and-effect programming, commissioning, BAFE certificate',
      whatsExtra: 'Out-of-hours premium, plenum-rated cable, integration to existing BMS or access control',
    },
    {
      bandName: 'Multi-zone addressable, mid-large building',
      scopeQualifier: '2,000–10,000 m², multi-loop addressable, Cat L1 coverage, phased evacuation',
      priceRange: '£12,000 – £25,000',
      whatsIncluded: 'Multi-loop panel, full L1 detection, voice-evacuation where required, AOV/lift/door-holder interfaces, full evidence pack',
      whatsExtra: 'Asbestos works, builder\'s work, structural penetrations, dilapidations on the outgoing system',
    },
    {
      bandName: 'Networked multi-panel, large estate',
      scopeQualifier: 'Multi-building estate, Advanced MxPro 5 or Gent Vigilon networked, 5+ panels',
      priceRange: '£25,000 – £40,000+',
      whatsIncluded: 'Network of panels, fibre/copper backbone, cross-site cause-and-effect, graphical head-end, full BAFE evidence pack across the estate',
      whatsExtra: 'Phased install over multiple academic or shutdown windows, decant strategy, third-party integration to BMS and ARC',
    },
  ],
  priceDrivers: [
    'BS 5839-1 category required (L1 is roughly 2x the device count of L2)',
    'Addressable vs conventional — addressable hardware is dearer, but cheaper to maintain',
    'Building age and construction — cable containment in old fabric drives day-rate cost',
    'Occupancy — live, occupied estates push work into out-of-hours and weekends',
    'Integration scope — AOV, lift homing, BMS, access control, door-holders, sprinkler interfaces',
    'Cutover strategy from any existing system — zero-gap life-safety adds programme time',
  ],
  humanCaveat:
    'Every building is different — these are the ranges we see most often on real UK commercial jobs. Your site survey produces a fixed quote you can rely on. We don\'t inflate to the highest category that\'ll fit, we don\'t bundle in your maintenance contract, and we tell you which panel platform we\'d specify even when it isn\'t the one with the biggest installer margin.',
  maintenancePriceCallout:
    'BS 5839-1 6-monthly service contracts from £350 per visit.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Peterborough Court — Fleet Street, City of London',
    summary:
      'Multi-zone addressable fire alarm across an occupied Grade-A financial-services estate, integrated with gas suppression and access control, delivered under Mace as main contractor (2025). Cause-and-effect spanned trading floors, tenanted hot-desk floors and the MER suite — commissioned around live operations with zero defects at handover and a full BAFE evidence pack on the day of completion.',
    href: '/case-studies/peterborough-court/',
    outcomeStat: 'Zero handover defects · full BAFE evidence pack on day of completion',
  },
  namedClients: [
    { name: 'Mace',                 logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',                logo: '/assets/clients/wates.png' },
    { name: 'CBRE',                 logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',               logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',          logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'TClarke',              logo: '/assets/clients/tclarke.png' },
    { name: 'Gratte Brothers',      logo: '/assets/clients/gratte-brothers.jpeg' },
    { name: 'NHS Medway',           logo: '/assets/clients/nhs-medway.svg' },
    { name: 'Kingston University',  logo: '/assets/clients/kingston-university.svg' },
    { name: 'FirstPort',            logo: '/assets/clients/firstport.svg' },
  ],
  testimonial: {
    quote:
      'Gemini commissioned the fire alarm around our live trading operations without a single false-alarm event. The cause-and-effect documentation was the cleanest evidence pack we received from any sub-contractor on the programme.',
    author: 'Project Director',
    role: 'Senior Construction Lead',
    org: 'Mace (Peterborough Court delivery)',
  },
  quoteFormHeadline: 'Request your fire alarm quote',
  spaceTypeOptions: [
    'Commercial office / HQ',
    'Healthcare / NHS estate',
    'School / college / university',
    'Heritage or listed building',
    'Higher-risk residential (BSA 2022)',
    'Retail, leisure or hospitality',
    'Industrial / warehouse',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Survey arranged within 48h. Fixed quote within 5 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-fire@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Fire Alarm & Evacuation]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take-over your existing fire alarm maintenance',
  maintenanceRegulatoryAnchor:
    'BS 5839-1 mandates a competent-person service at least every 6 months. Our contracts cover full functional testing, battery checks, sounder verification, cause-and-effect re-proving on any altered zone, and BAFE-aligned documentation issued after every visit.',
  contractInclusions: [
    '6-monthly BS 5839-1 service visit + every device functionally tested over the contract year',
    '4-hour response SLA for any fault that affects life-safety readiness',
    'BAFE-aligned service certificate + log-book entry issued within 5 working days of every visit',
  ],
  takeOverMessage:
    'Switching maintenance provider is straightforward — we run a free transition audit on take-over, identify any BS 5839-1 compliance gaps your incumbent has missed, and run continuity from day one. No long lock-in, no hidden recharge clauses, no surprise bills for parts we haven\'t pre-agreed.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Fire Alarm & Evacuation]',

  // Why Gemini
  trustPillars: [
    { title: 'BAFE SP203-1 registered since 1997',  body: 'Independently third-party verified for design, install, commissioning and maintenance — 28 years on the register, audited annually.' },
    { title: 'Employee-owned',                       body: 'Our engineers own the business. That\'s why our cause-and-effect documents come back clean, and why we don\'t over-spec category to chase margin.' },
    { title: 'Directly employed FIA-trained engineers', body: 'No sub-contracted labour on site. Every engineer is on PAYE, FIA-trained, and the person who quoted is the person who supervises the install.' },
    { title: 'BAFE-aligned evidence pack on every job', body: 'Every install leaves with a golden-thread evidence pack that satisfies your fire risk assessor, your principal designer and your insurer.' },
    { title: 'Out-of-hours as standard',             body: 'Most of our work happens on live, occupied estates. We\'re used to working around your tenants, your shift patterns and your trading hours.' },
    { title: '24/7 NSI Gold monitored response',     body: 'NSI Gold-approved ARC connection means a verified human response within minutes of any fire signal, fault or service-affecting event.' },
  ],
  accreditationStrip: [
    { shortName: 'BAFE',             longName: 'BAFE SP203-1 (Design, Install, Commission, Maintain)', href: '/accreditations/bafe/',             thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'FIA',              longName: 'FIA Member',                                            href: '/accreditations/fia/',              thumb: '/assets/certs/thumbs/fia.png' },
    { shortName: 'NSI Gold',         longName: 'NSI Gold (fire + security monitoring)',                 href: '/accreditations/nsi-gold/',         thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'CHAS',             longName: 'CHAS Premium Plus',                                     href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',                                 href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
    { shortName: 'BESA',             longName: 'BESA Member',                                            href: '/accreditations/besa/',             thumb: '/assets/certs/thumbs/besa.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who do the work are also the owners — that aligns the install quality with the long-term reputation in a way no agency-style sub-contracting model can match.',
  namedEngineer: {
    name: 'Senior Fire Alarm Engineer',
    role: 'Fire alarm design & commissioning lead',
    qual: 'BAFE-registered · FIA-trained · 20+ years on UK commercial fire alarm systems',
  },

  // FAQ — sourced from real buyer language
  faqs: [
    {
      question: 'How much does a commercial fire alarm system cost in the UK?',
      answer:
        'For a small single-zone conventional system in a small office, £1,500–£3,500 is typical. A mid commercial addressable system runs £3,800–£12,000. Multi-zone addressable in a mid-large building is £12,000–£25,000. Networked multi-panel installs across a large estate start at £25,000 and run to £40,000+. BS 5839-1 6-monthly maintenance starts at £350 per visit. Your site survey produces a fixed price — the pricing bands section above lists the drivers that move the number.',
    },
    {
      question: 'What BS 5839-1 category does my building need?',
      answer:
        'BS 5839-1 categories run from M (manual call-points only) through L5 (specific risk areas) up to L1 (detection in every room, including voids). The right category depends on the building\'s fire strategy, the occupancy, the means of escape and the fire risk assessment. We translate the FRA into a category recommendation at survey, justify it in writing, and design to it — we don\'t default to L1 on every job to inflate the device count.',
    },
    {
      question: 'How long does a fire alarm installation take?',
      answer:
        'A small conventional install in an unoccupied office is typically 1–2 weeks on site. A mid commercial addressable install is 2–4 weeks. Multi-zone addressable in a mid-large building is 4–6 weeks. Large networked multi-panel installs are typically phased over multiple maintenance or academic windows. Design and procurement add 4–6 weeks before site work begins. Cutover from any existing system is staged so you never lose life-safety cover.',
    },
    {
      question: 'Can you integrate a new fire alarm with our existing systems?',
      answer:
        'Yes — we integrate with all major platforms (Apollo, Hochiki, Hyfire, Advanced, Gent Vigilon, Honeywell Notifier, Kentec, Morley) and to AOVs, lift-homing, magnetic door-holders, sprinkler flow-switches, voice-evacuation, BMS and access control. On take-over jobs we map the existing cause-and-effect, confirm what stays and what gets replaced, and stage the upgrade so the running system keeps you covered until the new one is signed off.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'A BAFE-aligned BS 5839-1 commissioning certificate, a full cause-and-effect matrix, as-installed loop drawings, device address schedules, sound-pressure-level survey, operations & maintenance manual, a bound site log book, and a training record for the responsible person. The pack is delivered within 5 working days of completion and is suitable for fire risk assessor sign-off, principal designer review and insurer audit.',
    },
    {
      question: 'Can you take over our existing fire alarm maintenance from another provider?',
      answer:
        'Yes — we run a free transition audit on take-over, including a BS 5839-1 compliance gap analysis, asset-register reconciliation, a one-off catch-up service if anything has slipped through your previous contractor, and a fresh log-book set-up. No long lock-in on our contracts; cancel with 90 days\' notice, no exit fees.',
    },
    {
      question: 'Do you work on Building Safety Act 2022 higher-risk residential buildings?',
      answer:
        'Yes — we install, commission and maintain fire alarm and BS 8629 evacuation alert systems on higher-risk residential estates under the Building Safety Act 2022. Every job leaves with the golden-thread evidence the accountable person needs for Building Safety Regulator submissions and the safety case.',
    },
    {
      question: 'Are your wireless fire alarms BS 5839-1 compliant?',
      answer:
        'Yes — the Hyfire wireless systems we install are EN 54-25 listed and fully BS 5839-1 compliant when designed and commissioned correctly. Gemini AMPM holds Hyfire Partner Plus status, the top accredited installer tier. Wireless is the right answer for heritage and listed buildings where cable containment would damage protected fabric, and for fast retrofits where chasing cable is not an option.',
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
    { label: 'Gas Suppression Systems →',         href: '/gas-suppression/' },
    { label: 'Passive Fire Protection →',         href: '/passive-fire/' },
    { label: 'Security & Access Control →',   href: '/security-access/' },
    { label: 'Ventilation & Air Quality →',   href: '/ventilation/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

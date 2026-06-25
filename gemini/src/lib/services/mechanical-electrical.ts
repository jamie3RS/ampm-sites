import type { Service } from '~/lib/types';

/**
 * Mechanical & Electrical Services — Pillar (compact density)
 * Commercial M&E contracting under one accountable team: NICEIC electrical,
 * Gas Safe heating, BMS controls and BSRIA-aligned commissioning, since 1997.
 */
export const mechanicalElectrical: Service = {
  slug: 'mechanical-electrical',
  pillar: 'm-and-e',
  isPillar: true,
  densityPreset: 'compact',
  specifierMode: false,

  focusKeyword: 'commercial M&E contractor',
  metaTitle: 'Commercial M&E Contractor — Design, Install, Maintain | Gemini',
  metaDescription:
    'NICEIC + Gas Safe M&E contractor since 1997 — LV electrical, commercial heating, BMS controls, plant rooms. BS 7671 + CIBSE-aligned. Free UK survey.',

  // Hero
  h1: 'Mechanical & Electrical Services — One Team for Power, Heating, Cooling & Controls across the UK',
  subHeadline:
    'M&E design, install and maintenance under one accountable team — NICEIC electrical, Gas Safe heating, BMS controls and BSRIA-aligned commissioning, since 1997.',
  primaryCTAlabel: 'Request my M&E quote',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'NICEIC',           longName: 'NICEIC Approved Contractor',     href: '/accreditations/niceic/',          thumb: '/assets/certs/thumbs/niceic.png' },
    { shortName: 'Gas Safe',         longName: 'Gas Safe Registered',             href: '/accreditations/gas-safe/',        thumb: '/assets/certs/thumbs/gas-safe.png' },
    { shortName: 'ECA',              longName: 'ECA Member',                      href: '/accreditations/eca/',             thumb: '/assets/certs/thumbs/eca.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',           href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  heroImage: '/assets/hero-mechanical-electrical.svg',
  heroImageAlt: 'Commercial plant room with switchgear, boilers and BMS panel installed by Gemini AMPM',

  // Qualification gate
  gateHeadline: 'When do you need a commercial M&E contractor?',
  useCases: [
    { iconSlug: 'fitout',   scenarioLabel: 'Commercial fit-out',              oneLineTrigger: 'CAT-A or CAT-B fit-out needing coordinated electrical, mechanical and controls under one contractor' },
    { iconSlug: 'plant',    scenarioLabel: 'Plant room refurb',                oneLineTrigger: 'End-of-life boilers, pumps, switchgear or AHUs that need stripping and replacing on a live estate' },
    { iconSlug: 'switch',   scenarioLabel: 'LV distribution upgrade',          oneLineTrigger: 'Switchgear, sub-mains or DBs at capacity, end-of-life or non-compliant with BS 7671' },
    { iconSlug: 'bms',      scenarioLabel: 'BMS / controls upgrade',           oneLineTrigger: 'Trend, Tridium or Siemens head-end at end-of-life, or stranded standalone plant needing front-end integration' },
    { iconSlug: 'heating',  scenarioLabel: 'Commercial heating + HWS',         oneLineTrigger: 'Boiler replacement, plate heat exchangers or low-carbon retrofit with Gas Safe sign-off' },
    { iconSlug: 'lighting', scenarioLabel: 'Lighting + emergency lighting',    oneLineTrigger: 'LED retrofit, emergency lighting compliance to BS 5266 or DALI/KNX controls' },
    { iconSlug: 'ups',      scenarioLabel: 'UPS + standby power',              oneLineTrigger: 'Resilience upgrade — UPS, generator changeover or critical-load segregation' },
  ],
  regulatoryAnchor:
    'Electrical works to BS 7671 (18th Edition) and certified under NICEIC. Gas and heating works under Gas Safe. Mechanical design and commissioning aligned to CIBSE Guides A–M and BSRIA BG 49 (commissioning of plant systems).',
  consultFormHeadline: 'Not sure of the scope yet? Book a free 30-minute M&E consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Mechanical & Electrical Services]',

  // System types
  systemTypesHeadline: 'The M&E systems we design, install and commission',
  systemTypes: [
    {
      h3: 'LV electrical install & distribution',
      manufacturer: 'Schneider / ABB',
      bestForLine: 'Best for new fit-outs, sub-main upgrades and full re-distribution on commercial estates.',
      bodyCopy:
        'Full LV package from incomer to final circuit — main switchgear, sub-mains, distribution boards, containment, small power and final-circuit wiring. Designed to BS 7671 (18th Edition) and certified under NICEIC. We specify Schneider and ABB switchgear as standard, with selective discrimination studies and short-circuit calculations on every install. Test certificates and as-installed drawings issued on handover.',
      anchorSlug: 'lv-electrical',
    },
    {
      h3: 'Commercial heating & hot water',
      manufacturer: 'Gas Safe',
      bestForLine: 'Best for boiler replacements, plate heat exchangers and low-carbon heating retrofits.',
      bodyCopy:
        'Commercial boiler design, install and commissioning under Gas Safe registration — atmospheric and pressurised systems, plate heat exchangers, calorifiers and unvented HWS to G3. Heating distribution sized to CIBSE Guide B with TRVs, variable-speed pumps and weather compensation. Increasingly delivering low-carbon retrofits — heat pumps, hybrid systems and decarbonisation surveys for landlords with NZC commitments.',
      anchorSlug: 'heating-hws',
    },
    {
      h3: 'Building Management Systems (BMS)',
      manufacturer: 'Trend / Tridium / Siemens',
      bestForLine: 'Best for head-end upgrades, stranded-plant integration and multi-site portfolio rollouts.',
      bodyCopy:
        'BMS design, install and front-end integration on Trend IQ, Tridium Niagara and Siemens Desigo. We migrate legacy controllers onto modern IP-backbone networks, integrate third-party plant via BACnet and Modbus, and deliver browser-based dashboards your FM team can actually use. Includes points-list development, graphics build and a 12-month seasonal commissioning return-visit.',
      anchorSlug: 'bms-controls',
    },
    {
      h3: 'Lighting & emergency lighting',
      manufacturer: 'Schneider',
      bestForLine: 'Best for LED retrofits, controls upgrades and BS 5266 emergency-lighting compliance.',
      bodyCopy:
        'Lighting design to CIBSE LG07 (offices) and the relevant LG for the space — LED luminaires, DALI/KNX controls, daylight harvesting and presence detection. Emergency lighting designed, installed and certified to BS 5266-1 with three-hour duration as standard, addressable self-test where the estate justifies it, and annual discharge testing under maintenance.',
      anchorSlug: 'lighting',
    },
    {
      h3: 'Power distribution & UPS',
      manufacturer: 'ABB / Schneider',
      bestForLine: 'Best for resilience upgrades, critical-load segregation and standby-power integration.',
      bodyCopy:
        'Resilient power design for critical estates — UPS sizing and install, generator changeover panels, automatic transfer switches and critical-load segregation. Sized to actual measured load (not nameplate), with proper battery autonomy calculations and run-time projections. Integrates to BMS for alarms and to the fire alarm for E&M shutdowns under BS 5839.',
      anchorSlug: 'power-ups',
    },
    {
      h3: 'Plant room install & commissioning',
      manufacturer: 'BSRIA BG 49 aligned',
      bestForLine: 'Best for end-to-end plant room refurbs where mechanical, electrical and controls run as one programme.',
      bodyCopy:
        'Full plant-room delivery — strip-out, builders\' work coordination, install of boilers, pumps, AHUs, chillers and associated electrical and controls, then commissioned to BSRIA BG 49 with witnessed performance testing. Single contractor accountable for every package, so the controls actually talk to the plant and the FM team gets a working room on day one — not a snag list.',
      anchorSlug: 'plant-room',
    },
  ],
  closingSoftCTA:
    'Not sure which packages you actually need under one contractor versus split across trades? Book a free consultation — we\'ll walk you through where single-source M&E saves you money and where it doesn\'t.',

  // Industries
  industriesHeadline: 'Where we deliver M&E',
  industries: [
    { iconSlug: 'office',     sectorName: 'Commercial offices',          body: 'CAT-A and CAT-B fit-outs, landlord plant refurbs and tenant alterations on occupied estates.' },
    { iconSlug: 'datacentre', sectorName: 'Data centres',                body: 'LV distribution, UPS, standby power and BMS for co-location and edge sites — coordinated with our suppression team.' },
    { iconSlug: 'nhs',        sectorName: 'NHS Trusts',                  body: 'Acute, community and ambulance estate M&E — plant room refurbs and HTM-aligned electrical works.' },
    { iconSlug: 'university', sectorName: 'Higher education',            body: 'Lecture-theatre upgrades, lab fit-outs and campus-wide BMS migration projects.' },
    { iconSlug: 'public',     sectorName: 'Local authority',             body: 'Leisure centres, civic buildings and depot estates — multi-site PPM and capital works.' },
    { iconSlug: 'retail',     sectorName: 'Retail & hospitality',    body: 'New-store fit-outs, refrigeration power and front-of-house lighting controls.' },
    { iconSlug: 'industrial', sectorName: 'Industrial & logistics',  body: 'Warehouse LED retrofits, sub-station upgrades and process-power additions.' },
    { iconSlug: 'residential',sectorName: 'PRS & build-to-rent',     body: 'Landlord-supply LV, communal heating and BMS for FirstPort, Newlon and similar managed portfolios.' },
  ],

  // Process
  processHeadline: 'How we deliver an M&E project',
  steps: [
    {
      h3: '1. Survey',
      bodyCopy:
        'A NICEIC-qualified engineer (plus a Gas Safe engineer where mechanical scope applies) attends site to audit the existing M&E infrastructure, measure spare capacity and identify integration points with your BMS and fire alarm.',
      deliverable: 'Written site report + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design + quote',
      bodyCopy:
        'We produce a coordinated M&E design pack — load calcs to BS 7671, mechanical sizing to CIBSE Guides, BMS points list and a single-line schematic — then issue a fixed-price quote with a build programme you can plan around.',
      deliverable: 'Coordinated M&E design pack + fixed-price quote + programme',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed electrical and mechanical engineers work to the programme — coordinated through a single project manager, with out-of-hours and phased shutdowns built in to keep your estate live throughout.',
      deliverable: 'Installation works + interim test certificates',
      indicativeTiming: 'Typically 4–16 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission + handover',
      bodyCopy:
        'BSRIA BG 49 commissioning records, NICEIC electrical installation certificates, Gas Safe sign-off, BMS graphics walkthrough and a full O&M pack — including a 12-month seasonal commissioning return-visit on plant.',
      deliverable: 'NICEIC EIC + Gas Safe cert + BSRIA records + O&M pack + FM training',
      indicativeTiming: '1–2 weeks at the end of install',
    },
  ],
  processClosingLine:
    'When you\'ve seen the design and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Small commercial M&E package',
      scopeQualifier: 'Single-floor refurb or limited-scope works — e.g. DB change, boiler swap, lighting upgrade',
      priceRange: '£10,000 – £40,000',
      whatsIncluded: 'Design, install, NICEIC / Gas Safe certification, basic O&M pack',
      whatsExtra: 'Builders\' work, asbestos surveys, out-of-hours premium where required',
    },
    {
      bandName: 'Mid fit-out M&E',
      scopeQualifier: 'CAT-A / CAT-B fit-out, multi-floor refresh or coordinated mechanical + electrical refurb',
      priceRange: '£40,000 – £150,000',
      whatsIncluded: 'Full coordinated M&E package, BMS integration, BSRIA-aligned commissioning, complete O&M and as-installed drawings',
      whatsExtra: 'Major switchgear replacement, structural builders\' work, phased shutdown premiums',
    },
    {
      bandName: 'Large fit-out / plant-room refurb',
      scopeQualifier: 'Full plant-room strip-out and rebuild, multi-package M&E across an estate, or whole-floor critical-power upgrade',
      priceRange: '£150,000 – £500,000+',
      whatsIncluded: 'Full M&E delivery, project management, BMS head-end migration, witnessed commissioning, 12-month seasonal return-visit',
      whatsExtra: 'Crane lifts, road closures, weekend possessions, generator hire during plant changeover',
    },
  ],
  priceDrivers: [
    'Scope split — electrical-only is cheaper than coordinated M&E; BMS integration adds 10–20%',
    'Switchgear choice — Schneider / ABB premium tier vs mid-market brands',
    'Live-estate constraints — out-of-hours, phased shutdowns and tenant coordination add cost',
    'Existing infrastructure condition — tired sub-mains, asbestos or non-compliant containment all add scope',
    'BMS integration depth — graphics build, third-party BACnet/Modbus integration and points count',
    'Commissioning depth — witnessed BSRIA BG 49 testing vs basic functional sign-off',
  ],
  humanCaveat:
    'Every site is different — these are the ranges we see most often on real UK commercial jobs. Your site survey produces a fixed quote you can rely on. We won\'t inflate scope, we won\'t bundle in your PPM contract by default, and we\'ll tell you where you\'d be better off splitting a package across specialists rather than taking the full single-source M&E route.',
  maintenancePriceCallout:
    'M&E PPM contracts from £600 per visit.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Coordinated multi-trade M&E fit-out (commercial office, City of London)',
    summary:
      'Project type: a full CAT-B office fit-out delivering LV distribution, commercial heating, lighting controls and a Trend BMS head-end migration under one contractor. The kind of programme where the value of single-source M&E shows up — the controls talk to the plant on day one, the certificates land together, and the FM team takes over a working estate rather than a snag list. References available on request from our named main-contractor clients (Mace, Wates, TClarke).',
  },
  namedClients: [
    { name: 'Mace',              logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',             logo: '/assets/clients/wates.png' },
    { name: 'CBRE',              logo: '/assets/clients/cbre.svg' },
    { name: 'TClarke',           logo: '/assets/clients/tclarke.png' },
    { name: 'Equans',            logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',       logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'Gratte Brothers',   logo: '/assets/clients/gratte-brothers.jpeg' },
    { name: 'Apleona',           logo: '/assets/clients/apleona.png' },
    { name: 'FirstPort',         logo: '/assets/clients/firstport.svg' },
    { name: 'Newlon Housing',    logo: '/assets/clients/newlon.jpeg' },
  ],
  testimonial: {
    quote:
      'Gemini took the full M&E package on a live, occupied floor and ran it without a single defect at handover. The fact that the controls engineer and the electrical engineer worked for the same business was the difference between this job and the last three.',
    author: 'Senior Project Manager',
    role: 'M&E delivery lead',
    org: 'Tier-1 main contractor (London commercial fit-out)',
  },
  quoteFormHeadline: 'Request your M&E quote',
  spaceTypeOptions: [
    'Commercial office fit-out (CAT-A / CAT-B)',
    'Plant room refurb',
    'LV distribution / switchgear upgrade',
    'BMS / controls upgrade',
    'Heating + HWS replacement',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Survey arranged within 48h. Fixed quote within 10 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-me@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Mechanical & Electrical Services]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take over your existing M&E maintenance contract',
  maintenanceRegulatoryAnchor:
    'Planned preventative maintenance to SFG20, with statutory inspections to BS 7671 (EICR), Gas Safe (annual boiler service) and BS 5266 (emergency lighting discharge testing). BMS seasonal commissioning included on annual contracts.',
  contractInclusions: [
    'Statutory tests — EICR, Gas Safe boiler service, emergency lighting discharge, PAT where applicable',
    '4-hour response SLA for any fault that affects life safety or critical occupancy',
    'Audit-ready evidence pack issued within 5 working days of every visit, logged against SFG20',
  ],
  takeOverMessage:
    'Switching M&E maintenance provider is straightforward — we\'ll audit your existing asset register, identify any compliance gaps your incumbent missed (we usually find a few), and run continuity from day one. No long contract lock-in, no hidden call-out clauses.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Mechanical & Electrical Services]',

  // Why Gemini
  trustPillars: [
    { title: 'NICEIC + Gas Safe under one roof',  body: 'Independently third-party verified electrical (NICEIC) and Gas Safe registered for commercial heating — you\'re not coordinating two contractors to get a working plant room.' },
    { title: 'Employee-owned',                    body: 'Our engineers own the business. That\'s why our handover packs come back clean, and why we don\'t over-spec switchgear or boilers to chase margin.' },
    { title: 'Directly employed engineers',       body: 'No sub-contracted labour on M&E site works. The PM who quoted is the PM who runs the install — and the engineers stay on your account at maintenance handover.' },
    { title: 'Audit-ready evidence pack',         body: 'Every job leaves with NICEIC EICs, Gas Safe certs, BSRIA BG 49 commissioning records and an as-installed drawing set that satisfies your principal designer and your insurer.' },
    { title: 'Out-of-hours as standard',          body: 'Most of our M&E work lands on live, occupied estates — out-of-hours shutdowns, weekend possessions and phased changeovers are the norm, not the premium.' },
    { title: '24/7 monitored response',           body: 'NSI Gold-approved ARC connection on integrated systems, plus a 4-hour M&E call-out SLA on PPM contracts for life-safety and critical-occupancy faults.' },
  ],
  accreditationStrip: [
    { shortName: 'NICEIC',           longName: 'NICEIC Approved Contractor',   href: '/accreditations/niceic/',           thumb: '/assets/certs/thumbs/niceic.png' },
    { shortName: 'Gas Safe',         longName: 'Gas Safe Registered',           href: '/accreditations/gas-safe/',         thumb: '/assets/certs/thumbs/gas-safe.png' },
    { shortName: 'ECA',              longName: 'ECA Member',                    href: '/accreditations/eca/',              thumb: '/assets/certs/thumbs/eca.png' },
    { shortName: 'CHAS',             longName: 'CHAS Premium Plus',             href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',         href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who do the work are also the owners — that aligns the install quality, the snag list and the long-term reputation in a way no agency-style M&E sub-contracting can.',
  namedEngineer: {
    name: 'Senior M&E Project Manager',
    role: 'M&E delivery lead',
    qual: 'NICEIC QS · Gas Safe · 20+ years on UK commercial M&E',
  },

  // FAQ — sourced from real buyer language
  faqs: [
    {
      question: 'How much does a commercial M&E fit-out cost?',
      answer:
        'A small commercial M&E package (DB change, boiler swap, lighting refresh) runs £10,000–£40,000. A mid fit-out with coordinated mechanical, electrical and BMS is £40,000–£150,000. A full plant-room refurb or large fit-out is £150,000–£500,000+. PPM contracts start at £600 per visit. Your site survey produces a fixed price — see the pricing bands above for what moves the number.',
    },
    {
      question: 'Are you NICEIC and Gas Safe registered?',
      answer:
        'Yes — Gemini AMPM is a NICEIC Approved Contractor for electrical works (certified to BS 7671 18th Edition) and Gas Safe registered for commercial gas and heating. Both certificates are issued on every relevant job at handover, and both are independently re-assessed annually. You can verify both registrations on the NICEIC and Gas Safe public registers.',
    },
    {
      question: 'How long does a commercial M&E install take?',
      answer:
        'A small package (£10k–£40k) typically runs 2–4 weeks on site. A mid fit-out (£40k–£150k) is 6–10 weeks. A large fit-out or full plant-room refurb is 12–20 weeks, often phased over multiple shutdown windows on live estates. Design and procurement add 4–8 weeks before site work begins, depending on switchgear and boiler lead times.',
    },
    {
      question: 'Can you integrate with our existing BMS and fire alarm?',
      answer:
        'Yes — our controls team works across Trend IQ, Tridium Niagara and Siemens Desigo head-ends, integrating third-party plant via BACnet and Modbus. On the fire-alarm side we integrate with all major platforms (Apollo, Hochiki, Advanced, Gent Vigilon, Honeywell) for E&M shutdowns under BS 5839. We migrate legacy controllers onto modern IP-backbone networks rather than ripping-and-replacing when the existing kit still has life in it.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'NICEIC Electrical Installation Certificates (EICs) for every circuit, Gas Safe commissioning certificates for any gas / heating works, BSRIA BG 49-aligned commissioning records for plant, BMS points list and graphics walkthrough, full O&M manuals, as-installed drawings and a training record for your facilities team. The pack is delivered within 5 working days of completion and is suitable for principal designer sign-off and insurer audit.',
    },
    {
      question: 'Can you take over our existing M&E maintenance contract?',
      answer:
        'Yes — we run a free transition audit when we take over an existing M&E PPM. That covers asset register reconciliation, statutory compliance gap analysis (EICR currency, Gas Safe service dates, emergency lighting discharge records), and a one-off catch-up service if anything has slipped through your previous contractor. No long lock-in on our contracts; cancel with 90 days\' notice.',
    },
    {
      question: 'Do you self-deliver, or sub-contract the trades?',
      answer:
        'We self-deliver. Our electrical and mechanical engineers are directly employed, and since the 2024 transition to an Employee Ownership Trust they\'re also owners of the business. That means the PM who quoted is the PM who runs the install, the engineer who commissioned the BMS is still on your account at maintenance handover, and accountability for snag-free commissioning sits inside one company — not split across three sub-contractors.',
    },
    {
      question: 'Do you work on live, occupied buildings?',
      answer:
        'Most of our M&E work is on live, occupied commercial estates. Out-of-hours shutdowns, phased changeovers, weekend possessions and tenant coordination are the norm rather than the exception. We build the shutdown plan into the programme at design stage and we hold a CHAS Premium Plus accreditation for working safely alongside building users.',
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
    { label: 'Gas Suppression Systems →',           href: '/gas-suppression/' },
    { label: 'Fire Alarm & Evacuation Systems →',   href: '/fire-alarm/' },
    { label: 'Passive Fire Protection →',           href: '/passive-fire/' },
    { label: 'Security & Access Control →',         href: '/security-access/' },
    { label: 'Ventilation & Air Quality →',         href: '/ventilation/' },
  ],
};

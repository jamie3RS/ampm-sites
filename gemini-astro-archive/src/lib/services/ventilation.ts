import type { Service } from '~/lib/types';

/**
 * Ventilation & Air Quality — Pillar (standard density)
 * VRF/VRV air conditioning, MVHR, kitchen extract, smoke ventilation and
 * indoor-air-quality across UK commercial estates — F-Gas certified install,
 * Approved Document F compliance, TR/19 ductwork hygiene.
 */
export const ventilation: Service = {
  slug: 'ventilation',
  pillar: 'ventilation',
  isPillar: true,
  densityPreset: 'standard',
  specifierMode: false,

  focusKeyword: 'commercial ventilation installation',
  metaTitle: 'Commercial Ventilation & Air Conditioning Installation | Gemini AMPM',
  metaDescription:
    'F-Gas certified VRF/VRV, MVHR, kitchen extract and smoke ventilation across the UK. Daikin, Mitsubishi, Hitachi, Toshiba. Doc F compliant since 1997.',

  // Hero
  h1: 'Ventilation & Air Quality Systems — Design, Install & Maintain across the UK',
  subHeadline:
    'VRF/VRV air conditioning, MVHR, kitchen extract, smoke ventilation and indoor-air-quality systems from Daikin, Mitsubishi, Hitachi and Toshiba — Approved Doc F compliance, F-Gas certified install, since 1997.',
  primaryCTAlabel: 'Request my ventilation quote',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'REFCOM',          longName: 'REFCOM F-Gas Certified',     href: '/accreditations/refcom/',          thumb: '/assets/certs/thumbs/refcom.png' },
    { shortName: 'BESA',            longName: 'BESA Member',                href: '/accreditations/besa/',            thumb: '/assets/certs/thumbs/besa.png' },
    { shortName: 'CHAS',            longName: 'CHAS Premium Plus',          href: '/accreditations/chas/',            thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',     href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  heroImage: '/assets/hero-ventilation.svg',
  heroImageAlt: 'Rooftop VRF condensers and ductwork on a UK commercial ventilation install',

  // Qualification gate
  gateHeadline: 'When do you need a commercial ventilation install?',
  useCases: [
    { iconSlug: 'office',       scenarioLabel: 'New office fit-out or refit',         oneLineTrigger: 'CAT-A or CAT-B works needing fresh-air rates that meet Approved Document F' },
    { iconSlug: 'kitchen',      scenarioLabel: 'Commercial kitchen extract',           oneLineTrigger: 'Canopy extract, grease management and TR/19 hygiene compliance' },
    { iconSlug: 'healthcare',   scenarioLabel: 'Healthcare or clinical space',         oneLineTrigger: 'HTM 03-01 air-change rates for theatres, treatment and ward areas' },
    { iconSlug: 'residential',  scenarioLabel: 'High-rise residential MVHR',           oneLineTrigger: 'Building Safety Act stairwell pressurisation and unit-level heat recovery' },
    { iconSlug: 'datacentre',   scenarioLabel: 'Server room or comms cooling',         oneLineTrigger: 'Close-control or VRF spot cooling for 24/7 IT loads' },
    { iconSlug: 'leisure',      scenarioLabel: 'Retail, hospitality or leisure',       oneLineTrigger: 'Comfort cooling, makeup air and odour control for public-facing spaces' },
  ],
  regulatoryAnchor:
    'Designed and commissioned to Approved Document F (ventilation), BS EN 13779 (non-residential ventilation) and the F-Gas Regulations (EU 517/2014 retained law). Kitchen extract cleaned to TR/19, smoke ventilation to BS 9999 and BS 9991.',
  consultFormHeadline: 'Not sure what you need? Book a free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Ventilation & Air Quality]',

  // System types
  systemTypesHeadline: 'The ventilation and air-quality systems we design, install and commission',
  systemTypes: [
    {
      h3: 'Daikin VRV (large commercial air conditioning)',
      manufacturer: 'Daikin',
      bestForLine: 'Best for large multi-floor commercial estates with mixed cooling and heating loads.',
      bodyCopy:
        'Daikin VRV5 and VRV IV heat-recovery systems give floor-by-floor and zone-by-zone control across large commercial buildings, with R-32 refrigerant for lower GWP. We are F-Gas certified to install, charge and decommission across the full VRV range, including the new VRV 5 with integrated leak detection. Specified on multi-floor London commercial fit-outs alongside our M&E packages.',
      anchorSlug: 'daikin-vrv',
    },
    {
      h3: 'Mitsubishi Electric City Multi (mid–large VRF)',
      manufacturer: 'Mitsubishi Electric',
      bestForLine: 'Best for mid-to-large commercial offices and mixed-use estates needing high partial-load efficiency.',
      bodyCopy:
        'Mitsubishi City Multi YNW and R2-Series heat-recovery VRF give simultaneous heating and cooling across zones, with replacement-friendly pipework on retrofit projects. Strong choice on estates where the client already has a Mitsubishi service relationship. We commission to BS EN 378 and provide the full F-Gas leak-check schedule from day one.',
      anchorSlug: 'mitsubishi-city-multi',
    },
    {
      h3: 'Hitachi Set Free (large estate VRF)',
      manufacturer: 'Hitachi',
      bestForLine: 'Best for very large estates where long pipe runs and high external static pressure matter.',
      bodyCopy:
        'Hitachi Set Free Sigma R-32 VRF handles the longest equivalent pipe lengths in the mainstream VRF market — useful on campus-style estates and high-rise commercial where the condenser plant is a long way from the indoor units. We install with full BMS integration and Hitachi airCloud Pro monitoring where the client wants real-time plant visibility.',
      anchorSlug: 'hitachi-set-free',
    },
    {
      h3: 'Toshiba VRF + splits (mid-tier)',
      manufacturer: 'Toshiba',
      bestForLine: 'Best for budget-conscious mid-tier commercial fit-outs and small-to-mid VRF.',
      bodyCopy:
        'Toshiba SMMSu VRF and Shorai Edge splits give a strong price-performance balance for mid-tier commercial projects where Daikin or Mitsubishi sit outside the budget. We hold trained-installer status across the Toshiba range and commission with the full F-Gas register and refrigerant tracking from handover.',
      anchorSlug: 'toshiba-vrf',
    },
    {
      h3: 'MVHR — mechanical ventilation with heat recovery',
      manufacturer: 'Nuaire / Vent-Axia',
      bestForLine: 'Best for high-rise residential, mixed-use and low-energy commercial where heat recovery reduces running cost.',
      bodyCopy:
        'Nuaire MRXBOX and Vent-Axia Sentinel MVHR units recover up to 92% of heat from extract air, satisfying Approved Doc F fresh-air rates without the energy penalty of straight extract. Specified across high-rise residential MVHR projects under the Building Safety Act regime. Commissioned to BSRIA BG 49 with full flow-rate verification on each terminal.',
      anchorSlug: 'mvhr',
    },
    {
      h3: 'Kitchen extract canopies + grease management',
      manufacturer: 'Halton',
      bestForLine: 'Best for commercial kitchens, staff restaurants and hospitality estates.',
      bodyCopy:
        'Halton KVE and KVI canopies with integrated UV and water-wash grease management cut deep-clean intervals and reduce the fire-risk profile of high-volume kitchens. We design to DW/172 (kitchen ventilation), install fan plant and ductwork to BS EN 1505, and provide TR/19-aligned grease-hygiene servicing on the same contract.',
      anchorSlug: 'kitchen-extract',
    },
    {
      h3: 'Smoke ventilation — stairwell pressurisation, AOVs',
      manufacturer: 'Colt / SE Controls / Windows Master',
      bestForLine: 'Best for high-rise residential, schools and any building needing protected escape routes under BS 9999/9991.',
      bodyCopy:
        'Colt mechanical smoke extract, SE Controls AOV (automatic opening vent) panels and Windows Master actuator-driven roof vents — designed and commissioned to BS 9999 (non-residential) or BS 9991 (residential). Critical under the Building Safety Act for any HRRB. We provide the smoke-ventilation strategy report and commissioning evidence in the golden-thread pack.',
      anchorSlug: 'smoke-ventilation',
    },
    {
      h3: 'Ductwork hygiene + service to TR/19',
      manufacturer: 'BESA TR/19',
      bestForLine: 'Best for occupied estates where ductwork has not been cleaned since install or where insurers are asking for evidence.',
      bodyCopy:
        'Full TR/19 (Air) and TR/19 (Grease) ductwork hygiene service — pre- and post-clean PVT (post-verification testing), access-panel installation where missing, and insurer-grade certificate at handover. Often the cheapest single intervention for an estate that has failed a recent insurance audit on air hygiene.',
      anchorSlug: 'ductwork-hygiene',
    },
  ],
  closingSoftCTA:
    'Not sure whether you need VRF, MVHR, or a kitchen-extract retrofit? Book a free consultation — we\'ll walk you through the options, the F-Gas implications and the budget bands in 30 minutes, no obligation.',

  // Industries
  industriesHeadline: 'Where we install commercial ventilation',
  industries: [
    { iconSlug: 'office',       sectorName: 'Commercial offices',          body: 'CAT-A and CAT-B fit-outs, VRF and MVHR across multi-floor estates — including occupied refits with phased plant change-outs.' },
    { iconSlug: 'healthcare',   sectorName: 'NHS Trusts & healthcare',  body: 'HTM 03-01 compliant theatres, treatment rooms, pathology and pharmacy across acute, community and ambulance trusts.' },
    { iconSlug: 'residential',  sectorName: 'High-rise residential',        body: 'MVHR, stairwell pressurisation and AOVs for HRRBs under the Building Safety Act — full golden-thread evidence pack.' },
    { iconSlug: 'university',   sectorName: 'Higher education',             body: 'Lecture theatres, lab ventilation, residence MVHR and student-kitchen extract for UK universities.' },
    { iconSlug: 'leisure',      sectorName: 'Hospitality & leisure',    body: 'Restaurant, gym and event-space cooling, make-up air and odour control to keep public-facing spaces compliant and comfortable.' },
    { iconSlug: 'retail',       sectorName: 'Retail & mixed-use',       body: 'Anchor tenant fit-outs, food-court extract and landlord-side plant upgrades across shopping centres and high-street estates.' },
    { iconSlug: 'datacentre',   sectorName: 'Data & comms rooms',        body: 'Close-control units and VRF spot cooling for 24/7 IT loads — integrated with our gas suppression and fire alarm packages.' },
    { iconSlug: 'public',       sectorName: 'Public sector & local authority', body: 'School, leisure-centre and council-office ventilation upgrades under public-sector framework agreements.' },
  ],

  // Process
  processHeadline: 'How we deliver a commercial ventilation install',
  steps: [
    {
      h3: '1. Free site survey',
      bodyCopy:
        'A REFCOM F-Gas certified engineer attends site to measure space volumes, audit existing plant, assess ductwork routes, identify F-Gas register obligations on any existing system, and confirm Approved Doc F fresh-air targets for the use class.',
      deliverable: 'Written site report + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We model loads to CIBSE Guide A and BS EN 16798, select plant from the manufacturer that best fits your estate, draft ductwork and pipework routes, design controls and BMS integration, and produce a fixed-price quote with build programme.',
      deliverable: 'Design pack + fixed-price quote with build programme',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed engineers fit indoor units, condensers, ductwork, controls and BMS connections with minimal disruption to a live estate. Most installs run out-of-hours, on weekends, or in agreed phased windows around your tenants.',
      deliverable: 'Installation works + pre-commission flow checks',
      indicativeTiming: 'Typically 3–10 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'BSRIA BG 49 commissioning — air-flow verification on every terminal, refrigerant pressure-test and evacuation logs, F-Gas register entries, controls validation, end-user training and an audit-ready evidence pack on day of completion.',
      deliverable: 'Commissioning certificate + F-Gas register + golden-thread evidence pack',
      indicativeTiming: '3–7 days at the end of install',
    },
  ],
  processClosingLine:
    'When you\'ve seen the design and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Single-split air conditioning, small office',
      scopeQualifier: 'One or two rooms, simple wall-mounted or cassette splits, minimal builders\' work',
      priceRange: '£2,500 – £6,000',
      whatsIncluded: 'Indoor units, outdoor condenser, refrigerant pipework, controls, F-Gas commissioning, register entry',
      whatsExtra: 'Builders\' work for condenser location, electrical isolators, condensate routing through finished ceilings',
    },
    {
      bandName: 'Multi-split / small VRF',
      scopeQualifier: 'Single-floor office or small commercial unit, 4–10 indoor units, basic BMS link',
      priceRange: '£6,000 – £30,000',
      whatsIncluded: 'Multi-split or entry VRF plant, branch pipework, controls, commissioning, refrigerant register',
      whatsExtra: 'Out-of-hours premium, ceiling-grid alteration, fire-damper coordination',
    },
    {
      bandName: 'Mid VRF / MVHR mid-commercial',
      scopeQualifier: 'Multi-floor office or mid-rise residential MVHR, full ductwork distribution, BMS integration',
      priceRange: '£30,000 – £100,000',
      whatsIncluded: 'Heat-recovery VRF or MVHR plant, full ductwork, controls, BMS interface, BSRIA BG 49 commissioning, full evidence pack',
      whatsExtra: 'Builders\' work for plantroom, phased install over multiple weekends, structural openings',
    },
    {
      bandName: 'Large VRF / commercial-kitchen extract / smoke ventilation',
      scopeQualifier: 'Large estate VRF, full commercial kitchen extract package, or stairwell pressurisation for an HRRB',
      priceRange: '£100,000 – £250,000+',
      whatsIncluded: 'All of the above plus large condenser banks, multi-canopy kitchen extract with UV/grease management, smoke-vent strategy report, golden-thread evidence pack',
      whatsExtra: 'Major builders\' work, crane-lift for rooftop plant, planning conditions on acoustic enclosures',
    },
  ],
  priceDrivers: [
    'Plant manufacturer (Daikin and Mitsubishi command a premium over Toshiba)',
    'Ductwork run length and number of branches — the single biggest hidden driver on retrofit',
    'Refrigerant volume and F-Gas leak-detection requirements under EU 517/2014',
    'BMS and controls scope — standalone vs full integration to an existing head-end',
    'Access difficulty — high-rise, occupied, out-of-hours all add cost',
    'Acoustic treatment on rooftop plant where planning conditions apply',
  ],
  humanCaveat:
    'Every site is different — these are the ranges we see most often on real UK commercial jobs. Your site survey produces a fixed quote you can rely on. We don\'t inflate scope, we don\'t bundle in your maintenance contract by default, and we tell you which manufacturer we\'d specify even if it\'s not the one with the biggest margin.',
  maintenancePriceCallout:
    'F-Gas service contracts from £400 per visit.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Commercial kitchen extract retrofit — recent project',
    summary:
      'Halton-based canopy and grease-management retrofit across a live commercial kitchen estate, delivered in agreed overnight and weekend windows to keep food service running. Coordinated with the client\'s in-house FM team and TR/19 ductwork hygiene crew so the kitchen reopened compliant the morning after each phase. Healthcare MVHR pipeline projects also in the works — case studies to be published as they complete.',
  },
  namedClients: [
    { name: 'Mace',              logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',             logo: '/assets/clients/wates.png' },
    { name: 'CBRE',              logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',            logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',       logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'TClarke',           logo: '/assets/clients/tclarke.png' },
    { name: 'Gratte Brothers',   logo: '/assets/clients/gratte-brothers.jpeg' },
    { name: 'NHS Medway',        logo: '/assets/clients/nhs-medway.svg' },
    { name: 'Kingston University', logo: '/assets/clients/kingston-university.svg' },
    { name: 'Aviva Investors',   logo: '/assets/clients/aviva.png' },
  ],
  testimonial: {
    quote:
      'Gemini\'s team worked overnight across our kitchen estate so we didn\'t lose a single trading day. The F-Gas register and TR/19 evidence were in our inbox before they left site — that\'s not the norm with HVAC contractors.',
    author: 'Head of Estates',
    role: 'Group FM Lead',
    org: 'Commercial hospitality client',
  },
  quoteFormHeadline: 'Request your ventilation quote',
  spaceTypeOptions: [
    'Office — CAT-A or CAT-B fit-out',
    'Commercial kitchen / hospitality extract',
    'Healthcare / clinical space',
    'High-rise residential MVHR or smoke vent',
    'Data / comms room cooling',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Survey arranged within 48h. Fixed quote within 5 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-hvac@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Ventilation & Air Quality]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take-over your existing ventilation and air-con maintenance',
  maintenanceRegulatoryAnchor:
    'F-Gas Regulation (EU 517/2014 retained law) requires leak-checking on any system holding 5 tonnes CO₂-equivalent or more — quarterly for systems above 50tCO₂e. We hold the full REFCOM company register and log every check to the statutory register.',
  contractInclusions: [
    'F-Gas leak-check schedule + statutory register entries for every visit',
    '4-hour response SLA on plant down in a critical estate (data, healthcare, kitchen)',
    'Audit-ready evidence pack issued within 5 working days of every visit — F-Gas, TR/19 and BSRIA',
  ],
  takeOverMessage:
    'Switching maintenance provider is straightforward — we\'ll audit your existing F-Gas register, identify any compliance gaps your incumbent missed (we find them more often than not), and run continuity from day one. No long contract lock-in, no hidden refrigerant top-up clauses.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Ventilation & Air Quality]',

  // Why Gemini
  trustPillars: [
    { title: 'REFCOM F-Gas certified since 1997', body: 'Independently audited company-level F-Gas certification — the statutory baseline for any contractor charging or recovering refrigerant in the UK.' },
    { title: 'Employee-owned',                   body: 'Our engineers own the business. That\'s why our handover packs come back clean, and why we don\'t over-spec to chase margin on the kit selection.' },
    { title: 'Directly employed engineers',      body: 'No sub-contracted labour on site. The person who quoted is the person who supervised the install — and who turns up for the F-Gas service visit.' },
    { title: 'Audit-ready evidence pack',        body: 'Every job leaves with a golden-thread evidence pack — F-Gas register, BSRIA BG 49 commissioning, TR/19 ductwork, controls validation — that satisfies your principal designer and your insurer.' },
    { title: 'Out-of-hours as standard',         body: 'Most of our work is done on live, occupied estates — trading offices, hospitals, hotels, kitchens. We\'re used to working around your tenants and your shift patterns.' },
    { title: '24/7 monitored response',          body: 'NSI Gold-approved ARC connection on the integrated estates means a verified human response within minutes of any plant fault that risks compliance or comfort.' },
  ],
  accreditationStrip: [
    { shortName: 'REFCOM',           longName: 'REFCOM F-Gas Certified (Company Level)', href: '/accreditations/refcom/',          thumb: '/assets/certs/thumbs/refcom.png' },
    { shortName: 'BESA',             longName: 'BESA Member (Building Engineering Services Association)', href: '/accreditations/besa/', thumb: '/assets/certs/thumbs/besa.png' },
    { shortName: 'CHAS',             longName: 'CHAS Premium Plus',                       href: '/accreditations/chas/',            thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',                   href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
    { shortName: 'Avetta',           longName: 'Avetta Pre-Qualified',                    href: '/accreditations/avetta/',          thumb: '/assets/certs/thumbs/avetta.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who do the work are also the owners — that aligns the install quality, the F-Gas paperwork and the long-term reputation in a way no agency-style HVAC sub-contracting can.',
  namedEngineer: {
    name: 'Senior Ventilation Engineer',
    role: 'HVAC lead',
    qual: 'REFCOM F-Gas certified · BESA TR/19 trained · 20+ years on UK commercial ventilation',
  },

  // FAQ — sourced from real buyer language
  faqs: [
    {
      question: 'How much does a commercial ventilation install cost?',
      answer:
        'For a single-split system in a small office, £2,500–£6,000 is typical. A multi-split or small VRF for a single-floor office runs £6,000–£30,000. Mid VRF or MVHR for a multi-floor commercial estate is £30,000–£100,000. Large VRF, full commercial kitchen extract or smoke ventilation for an HRRB is £100,000–£250,000+. F-Gas service contracts start at £400 per visit. Your site survey produces a fixed quote — see the pricing bands section above for the drivers that move the number.',
    },
    {
      question: 'Do I need F-Gas certification to install air conditioning in the UK?',
      answer:
        'Yes — under the F-Gas Regulation (EU 517/2014 retained as UK law) any contractor installing, charging, leak-checking or decommissioning a refrigerant system above 3kg charge must hold the relevant F-Gas qualifications, and the company must hold REFCOM (or equivalent) company-level certification. Gemini AMPM has held REFCOM since the regulation came in — we log every charge, every recovery and every leak check to the statutory register on your behalf.',
    },
    {
      question: 'What is Approved Document F and does it apply to my building?',
      answer:
        'Approved Document F is the building regulation that sets minimum fresh-air rates for buildings in England (Wales, Scotland and NI have equivalents). It applies to all new builds and to any material change of use or significant refurbishment. For most commercial offices the target is around 10 litres per second per person; healthcare, kitchens and laboratories have specific higher rates set by HTM, DW/172 or BS EN 16798. We design every system to satisfy the relevant standard and provide the commissioning evidence.',
    },
    {
      question: 'How long does a commercial ventilation install take?',
      answer:
        'A simple split or multi-split install for a small office is 1–2 weeks on site. A mid-VRF or MVHR install across a multi-floor commercial estate is typically 4–8 weeks. Large estate VRF, full commercial kitchen extract or smoke ventilation for an HRRB is typically 8–16 weeks, often phased over multiple weekends to keep the estate operational. The clock starts after the design pack is signed off — design and procurement add 4–10 weeks before site work begins depending on plant lead times.',
    },
    {
      question: 'Can you integrate new ventilation plant with our existing BMS?',
      answer:
        'Yes — we integrate with all major BMS platforms (Trend, Cylon, Tridium Niagara, Honeywell, Siemens Desigo). We can sit new VRF, MVHR or AHU plant on the existing head-end with Modbus or BACnet, or provide a standalone controls package if the BMS isn\'t worth extending. We also commission and prove the integration with the BMS provider on site so there\'s no finger-pointing at handover.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'A BSRIA BG 49 commissioning certificate with air-flow readings on every terminal, F-Gas register entries with charge and pressure-test logs, controls validation report, as-built drawings, operations and maintenance manuals, and a training record for your facilities team. For HRRBs we also provide the smoke-ventilation strategy report and golden-thread evidence under the Building Safety Act. The full pack is delivered within 5 working days of completion.',
    },
    {
      question: 'Can you take over our existing ventilation maintenance from another supplier?',
      answer:
        'Yes — we run a free transition audit when we take over an existing estate. That covers F-Gas register reconciliation, compliance gap analysis (we find missed leak checks on around half the estates we audit), asset register reconciliation, and a one-off catch-up service if anything has slipped through your previous contractor. No long lock-in on our contracts; cancel with 90 days\' notice.',
    },
    {
      question: 'Do you do TR/19 ductwork hygiene cleaning as well as install?',
      answer:
        'Yes — TR/19 (Air) and TR/19 (Grease) ductwork hygiene is on the same contract. We do pre-clean and post-clean PVT (post-verification testing), fit access panels where missing, and issue the insurer-grade hygiene certificate. For occupied estates this is often the cheapest single intervention that satisfies an insurer audit, and we can bundle it with the F-Gas service visit to halve your site-attendance count.',
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
    { label: 'Gas Suppression Systems →',          href: '/gas-suppression/' },
    { label: 'Fire Alarm & Evacuation Systems →', href: '/fire-alarm/' },
    { label: 'Passive Fire Protection →',          href: '/passive-fire/' },
    { label: 'Security & Access Control →',     href: '/security-access/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

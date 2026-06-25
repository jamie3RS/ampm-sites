import type { Service } from './types';

/**
 * Gas Suppression — pillar page content.
 *
 * Density preset: 'long' (2,500-2,800 word target).
 * Specifier mode: false (this is not Passive Fire).
 * Source brief: /Users/jamiedawson/Documents/Claude/Projects/Gemini AMPM/01-website/audits/SERVICE_VERTICAL_TEMPLATE.md
 */
export const gasSuppression: Service = {
  // ---------- Taxonomy ----------
  slug: 'gas-suppression-systems',
  pillar: 'gas-suppression',
  isPillar: true,
  densityPreset: 'long',
  specifierMode: false,
  variantId: 'A',

  // ---------- SEO ----------
  focusKeyword: 'gas suppression system installation',
  metaTitle:
    'Gas Suppression System Installation — BAFE, FIA | Gemini AMPM',
  metaDescription:
    'BAFE-grade gas suppression design, install and maintenance across the South East — ProInert IG-55, FM-200, Novec 1230, Inergen. BS EN 15004 commissioning since 1997.',

  // ---------- Section 1 — Hero ----------
  h1: 'Gas Suppression Systems — Design, Install & Maintain across the South East',
  subHeadline:
    'Server rooms, data centres, switchgear and archives protected with ProInert IG-55, FM-200, Novec 1230 and Inergen — BAFE-grade design, FIA-aligned install, BS EN 15004 commissioning, since 1997.',
  primaryCTAlabel: 'Get a free site survey',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: '+44 (0)1634 757 575',
  accreditationsForHero: ['bafe', 'fia', 'safecontractor', 'chas'],
  heroImage: '/images/gas-suppression/hero-server-room-proinert.jpg',
  heroImageAlt:
    'Fike ProInert IG-55 cylinders installed in a London server-room suite by Gemini AMPM',

  // ---------- Section 2 — Qualification Gate + Form #1 ----------
  gateHeadline:
    'When do you need a gas suppression system — and which agent is right?',
  useCases: [
    {
      iconSlug: 'server-rack',
      scenarioLabel: 'New data centre or server room',
      oneLineTrigger:
        'You are fitting out a new IT space and the M&E spec calls for clean-agent fire suppression.',
    },
    {
      iconSlug: 'shield-check',
      scenarioLabel: 'Replacing an end-of-life system',
      oneLineTrigger:
        'Your existing FM-200 or Halon-legacy system is due for agent replacement or full upgrade.',
    },
    {
      iconSlug: 'document-archive',
      scenarioLabel: 'Protecting archives or vaults',
      oneLineTrigger:
        'Irreplaceable records, artwork or evidence need a water-free, residue-free suppression agent.',
    },
    {
      iconSlug: 'lightning-bolt',
      scenarioLabel: 'Switchgear or LV/HV plant',
      oneLineTrigger:
        'You need to protect energised electrical plant where water-based systems are not an option.',
    },
    {
      iconSlug: 'building-office',
      scenarioLabel: 'Occupied financial-services site',
      oneLineTrigger:
        'You need an inert blend safe for occupied trading floors, dealing rooms or control rooms.',
    },
  ],
  regulatoryAnchor:
    'Designed and commissioned to BS EN 15004 and BS 6535-2; integrity-tested to ISO 14520; integrated with fire detection to BS 5839-1.',
  wrongFitRedirect: 'fire-alarm',
  consultFormHeadline:
    'Not sure if you need one? Book a free 30-minute consultation with a BAFE-registered designer.',
  consultSubmitLabel: 'Book my consultation',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — gas-suppression]',

  // ---------- Section 3 — System Types ----------
  systemTypes: [
    {
      anchorSlug: 'fike-proinert-ig55',
      h3: 'Fike ProInert IG-55 — inert gas for occupied data centres',
      manufacturer: 'fike',
      bestForLine:
        'Best for: large server rooms, occupied data halls, financial-services sites where personnel evacuation is not assumed.',
      bodyCopy:
        'ProInert IG-55 is a 50/50 nitrogen-argon blend that suppresses fire by reducing oxygen to a level that stops combustion while remaining safe for occupants and sensitive electronics. Fike’s flow-controlled valve regulates discharge pressure across the hold time, which protects room construction and lets us cover larger volumes with fewer cylinders than first-generation inert systems. Zero ozone-depletion potential, zero global-warming potential, and no agent decomposition products — a long-term defensible choice on sustainability reporting.',
      accreditationLine:
        'Gemini AMPM is an accredited Fike installation partner; ProInert design certified by our BAFE-registered engineers.',
    },
    {
      anchorSlug: 'fm-200',
      h3: 'FM-200 / HFC-227ea — chemical agent for small-to-mid risk areas',
      manufacturer: 'tyco',
      bestForLine:
        'Best for: communications rooms, smaller server cabinets, equipment rooms under ~500 m³ where footprint is tight.',
      bodyCopy:
        'FM-200 (HFC-227ea) is a chemical clean agent that suppresses fire chemically rather than by oxygen reduction, which means much smaller cylinder counts and a smaller plant footprint than inert systems. Discharge in under ten seconds, no residue, safe for energised electronics. We still install FM-200 where space constraints or retrofit conditions rule out inert blends, but we will walk you through the F-Gas phase-down implications and recharge-cost outlook before you commit — Novec 1230 or IG-55 is often the better whole-life choice for new builds.',
      accreditationLine:
        'Designed and commissioned to BS EN 15004; F-Gas-certified handling throughout install and service.',
    },
    {
      anchorSlug: 'novec-1230',
      h3: 'Novec 1230 — sustainable chemical agent for modern data centres',
      manufacturer: '3m-novec',
      bestForLine:
        'Best for: modern data centres, ESG-reporting clients, anywhere FM-200’s global-warming potential is a procurement blocker.',
      bodyCopy:
        'Novec 1230 (3M-developed fluoroketone, now supplied under several brand names) is a liquid-at-room-temperature chemical agent that vaporises on discharge and suppresses chemically. Global-warming potential of 1 versus FM-200’s 3,220, atmospheric lifetime measured in days, and outside F-Gas phase-down scope — which makes it the default chemical agent on most new specifications we see in 2026. Small footprint, fast discharge, electronics-safe. Higher cylinder cost than FM-200 but the procurement maths usually wins on whole-life recharge and ESG reporting.',
      accreditationLine:
        'Installed by FIA-aligned engineers; commissioning to BS EN 15004 with full hold-time integrity testing.',
    },
    {
      anchorSlug: 'inergen-ig541',
      h3: 'Inergen IG-541 — inert blend for occupied spaces',
      manufacturer: 'inergen',
      bestForLine:
        'Best for: trading floors, control rooms, healthcare imaging suites — anywhere the room may be occupied at point of discharge.',
      bodyCopy:
        'Inergen is a blend of nitrogen, argon and CO2 that reduces oxygen to ~12.5% — below the combustion threshold but high enough for short-term human exposure. The CO2 fraction stimulates the body to absorb oxygen more efficiently, which is the technical reason Inergen is the agent of choice on sites where occupants may not be able to evacuate before discharge. Hold-times comfortably exceed BS EN 15004 minimums when we design enclosure integrity in from day one.',
      accreditationLine:
        'BAFE-registered design; door-fan integrity testing on every commission.',
    },
    {
      anchorSlug: 'standby-watermist',
      h3: 'Standby Fire watermist — where gas is not the right answer',
      manufacturer: 'standby-fire',
      bestForLine:
        'Best for: kitchen risks, machinery rooms, situations where enclosure integrity cannot be achieved for a gas hold-time.',
      bodyCopy:
        'Some risks are not suited to gas suppression — leaky enclosures, very large volumes, kitchen-grease risks, or sites where the cost of sealing the room exceeds the cost of an alternative system. Standby Fire high-pressure watermist generates micro-droplets that absorb heat and displace oxygen locally without flooding the space, and we install it where a survey shows gas is the wrong answer. Honest scoping upfront beats a forced-fit at commissioning.',
      accreditationLine:
        'Standby Fire approved installer; commissioned to BS 8458 and BS 8489 as applicable.',
    },
    {
      anchorSlug: 'co2-clean-agent-extinguishers',
      h3: 'Hand-held CO2 and clean-agent extinguishers — supporting cover',
      manufacturer: 'kidde',
      bestForLine:
        'Best for: first-aid cover alongside a fixed system, server-cabinet point protection, mobile electrical risks.',
      bodyCopy:
        'Every fixed gas system needs a hand-held complement for first-aid suppression of small or localised fires. We specify, install and maintain CO2 and clean-agent portables on the same maintenance schedule as the fixed system, with one engineer accountable for the whole envelope — which is a measurable improvement on the typical split between a fire-alarm contractor and an extinguisher subcontractor. BS 5306-3 service intervals, BAFE SP101 servicing.',
      accreditationLine:
        'BAFE SP101-registered extinguisher servicing; Kidde-supplied units across the range.',
    },
  ],
  closingSoftCTA:
    'Not sure which agent is right for your room volume, occupancy and integrity profile? Book a free 30-minute consultation — we will walk you through agent choice, room-volume maths and whole-life cost before you commit to a survey.',

  // ---------- Section 4 — Industries ----------
  industries: [
    {
      iconSlug: 'server-stack',
      sectorName: 'Data centres',
      body: 'Hyperscale and colocation operators rely on inert and clean-agent suppression to protect uptime SLAs and irreplaceable infrastructure. We design around hot-aisle / cold-aisle integrity and integrate with VESDA detection.',
    },
    {
      iconSlug: 'server-rack',
      sectorName: 'Server rooms',
      body: 'On-prem server rooms in financial, legal and professional services sites need fast, residue-free suppression that protects energised electronics and lets staff back in within hours of any event.',
    },
    {
      iconSlug: 'archive-box',
      sectorName: 'Archives & records',
      body: 'Solicitors, accountants, registries and museums protect irreplaceable paper, film and digital archives with water-free suppression. Novec 1230 and IG-55 are the agents we specify most often.',
    },
    {
      iconSlug: 'bank',
      sectorName: 'Financial services',
      body: 'Trading floors, dealing rooms and back-office data halls demand occupant-safe inert blends (Inergen IG-541 or ProInert IG-55) with hold-time evidence packs that satisfy operational-resilience audits.',
    },
    {
      iconSlug: 'museum',
      sectorName: 'Museums & heritage',
      body: 'Listed buildings and heritage collections need suppression that protects without damaging the asset it is protecting. Clean-agent gas systems leave no residue and recover the space immediately post-discharge.',
    },
    {
      iconSlug: 'lightning-bolt',
      sectorName: 'Switchgear & substations',
      body: 'LV and HV switchgear rooms cannot use water-based systems on energised plant. Inert-gas suppression with door-fan-verified hold-times is the defensible answer for DNO-adjacent and CNI sites.',
    },
    {
      iconSlug: 'radio-tower',
      sectorName: 'Telecoms & comms rooms',
      body: 'Mobile-operator hubs, broadcast rooms and emergency-services comms suites need point-of-equipment suppression with remote monitoring and ARC-linked status — built around addressable detection.',
    },
    {
      iconSlug: 'hospital',
      sectorName: 'Healthcare imaging',
      body: 'MRI, CT and PET suites combine high-value equipment, occupied scanning rooms and strict cleanliness requirements. Inert blends suited to occupied spaces are the conventional answer in NHS and private-sector estates.',
    },
    {
      iconSlug: 'shield-lock',
      sectorName: 'Defence & secure facilities',
      body: 'Classified-data rooms, secure communications and SCIF-adjacent estates need suppression that meets both fire-engineering and security-clearance requirements. We hold List X clearance for sensitive deployments.',
    },
  ],

  // ---------- Section 5 — Process ----------
  steps: [
    {
      h3: '1. Free site survey',
      bodyCopy:
        'A BAFE-registered designer attends site, measures room volume and enclosure integrity, reviews existing detection and suppression infrastructure, and confirms the operational and occupancy constraints. We leave the site with a clear understanding of room geometry, agent options that fit, and any enclosure-integrity work that will need to feed into the design.',
      deliverable: 'Survey notes + initial agent shortlist + integrity flags',
      indicativeTiming: 'Booked within 48 hours; survey takes 2–4 hours on site',
      optionalIconSlug: 'clipboard-check',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We model the suppression design to BS EN 15004 — agent calculation, cylinder count, pipe network, nozzle layout, discharge timing — and produce a detection and control-panel design aligned to BS 5839-1. You receive a fixed quote, a design pack, a hold-time prediction and a clear scope of any enclosure-integrity remediation. No surprises at commissioning.',
      deliverable:
        'Fixed quote + design pack + agent calc sheet + hold-time prediction',
      indicativeTiming: 'Fixed quote within 5 working days of survey',
      optionalIconSlug: 'document-text',
    },
    {
      h3: '3. Installation',
      bodyCopy:
        'Directly employed engineers install pipework, cylinders, detection, control panel and signage to the approved design. We work around occupied-site constraints — out-of-hours discharge testing, hot-works permits, restricted-access escorts — and document every deviation from the design pack so the as-built record matches what is actually on site.',
      deliverable: 'Installed system + RAMS + as-built drawings + signage pack',
      indicativeTiming: 'Typical 2–6 weeks depending on zone count',
      optionalIconSlug: 'wrench',
    },
    {
      h3: '4. Commissioning & handover',
      bodyCopy:
        'Door-fan integrity test verifies enclosure hold-time against the design prediction. Detection devices commissioned to BS 5839-1. Cause-and-effect logic tested against signed-off matrix. We issue the full BS EN 15004 commissioning certificate, BAFE handover certificate, O&M manuals and a 12-month defects warranty. Your facilities team gets a walk-through and the on-call number.',
      deliverable:
        'BS EN 15004 commissioning cert + BAFE cert + O&M manuals + 12-month warranty',
      indicativeTiming: '1–3 days commissioning window',
      optionalIconSlug: 'badge-check',
    },
  ],
  processClosingLine:
    'When you have seen the design, the hold-time prediction and the fixed price, you decide. No obligation up to that point.',

  // ---------- Section 6 — Pricing ----------
  pricingBands: [
    {
      bandName: 'Small server room — single zone',
      scopeQualifier: 'Single enclosure, one agent, single detection zone',
      priceRange: '£15,000 – £25,000',
      whatsIncluded: [
        'Single-agent cylinder bank (FM-200, Novec 1230 or small IG-55)',
        'Detection devices to BS 5839-1 with coincidence logic',
        'Control panel + manual release + abort station',
        'Pipe network + nozzles + signage',
        'Door-fan integrity test at commissioning',
        'BS EN 15004 commissioning certificate + 12-month warranty',
      ],
      whatsExtra: [
        'Enclosure-integrity remediation (door seals, slab penetrations)',
        'VESDA aspirating detection',
        'Out-of-hours install on occupied site',
        'Annual maintenance contract',
      ],
    },
    {
      bandName: 'Mid-size data centre — multi-zone',
      scopeQualifier: 'Multiple enclosures, shared cylinder bank, addressable detection',
      priceRange: '£40,000 – £80,000',
      whatsIncluded: [
        'Multi-zone agent design (typically IG-55, IG-541 or Novec 1230)',
        'Shared cylinder bank with directional valves',
        'Addressable detection + cross-zone coincidence',
        'Networked control panel + status repeaters',
        'Integration with site fire-alarm + BMS / DCIM',
        'Door-fan integrity tests per zone',
        'BS EN 15004 commissioning + BAFE certification + 12-month warranty',
      ],
      whatsExtra: [
        'Hot-aisle / cold-aisle containment modifications',
        'VESDA per zone',
        'ARC-linked monitoring',
        'Out-of-hours phased commissioning',
        'Annual maintenance contract',
      ],
    },
    {
      bandName: 'Large data centre — redundant agents + integrity',
      scopeQualifier:
        'Large or multi-site estate, redundant cylinder banks, full integrity programme',
      priceRange: '£80,000 – £200,000+',
      whatsIncluded: [
        'Redundant cylinder banks (N+1 or 2N)',
        'Large-volume IG-55 / IG-541 design with extended hold-time',
        'VESDA aspirating detection across all zones',
        'Networked addressable detection with full BMS / DCIM integration',
        'Full enclosure-integrity programme + door-fan certification',
        'BS EN 15004 commissioning + BAFE certification + 24-month warranty option',
        'Phased commissioning around live operations',
      ],
      whatsExtra: [
        'Civil works for cylinder rooms or external storage',
        'High-voltage switchgear cover (custom design)',
        'On-site engineer cover during commissioning window',
        'Multi-year maintenance + integrity-retest contract',
      ],
    },
  ],
  priceDriversList: [
    { driver: 'Room volume (cubic metres) drives cylinder count and agent mass' },
    {
      driver:
        'Agent choice: chemical agents (FM-200, Novec 1230) sit smaller and cheaper to install; inert blends (IG-55, IG-541) cost more upfront but win on whole-life cost and ESG',
    },
    {
      driver:
        'Enclosure integrity — leaky rooms need door-seal, slab-penetration and ductwork remediation before they will hold a 10-minute concentration',
    },
    {
      driver:
        'Integration scope with existing fire alarm, BMS, DCIM and ARC monitoring',
    },
    {
      driver:
        'Access difficulty — occupied data halls, financial-services trading floors and listed buildings all add programme time',
    },
  ],
  humanCaveat:
    'Every site is different — these are the ranges we see most often on UK projects. Your survey gives you a fixed quote you can rely on, with a full design pack and hold-time prediction before any commitment.',
  maintenancePriceCallout:
    'Annual integrity test + servicing from £1,800 per zone',

  // ---------- Section 7 — Social Proof + Form #2 ----------
  flagshipCaseStudy: {
    name: 'Peterborough Court, Fleet Street',
    location: 'City of London',
    systemInstalled: 'Fike ProInert IG-55 — multi-zone, occupied financial-services site',
    client: 'Mace (main contractor)',
    year: 2025,
    summary:
      'Multi-zone Fike ProInert IG-55 suppression across the data and comms infrastructure of a landmark Fleet Street financial-services occupier. Phased install around live trading operations, full BS EN 15004 commissioning, door-fan integrity testing per zone, and integration with the site addressable fire alarm. Delivered against a fixed programme inside the wider Mace fit-out without operational disruption to the occupying client.',
    outcome:
      'Zero operational downtime during phased commissioning; full BS EN 15004 sign-off achieved on programme.',
    image: '/images/case-studies/peterborough-court-hero.jpg',
    imageAlt:
      'Peterborough Court, Fleet Street — Fike ProInert IG-55 cylinder bank installed by Gemini AMPM',
    href: '/case-studies/peterborough-court/',
  },
  namedClientLogos: [
    { name: 'Mace', slug: 'mace', permissionToDisplay: true },
    { name: 'CBRE', slug: 'cbre', permissionToDisplay: true },
    { name: 'Equans', slug: 'equans', permissionToDisplay: true },
    { name: 'Wates', slug: 'wates', permissionToDisplay: true },
    { name: 'Integral UK', slug: 'integral-uk', permissionToDisplay: true },
    { name: 'TClarke', slug: 'tclarke', permissionToDisplay: true },
    { name: 'Aviva Investors', slug: 'aviva-investors', permissionToDisplay: true },
    { name: 'NHS Medway', slug: 'nhs-medway', permissionToDisplay: true },
  ],
  testimonial: {
    quote:
      'Gemini AMPM delivered the gas suppression package at Peterborough Court without a single disruption to the occupying client. The hold-time evidence pack was exactly what our compliance lead needed, first time.',
    authorName: '[NAME TBC]',
    authorRole: 'Senior Project Manager',
    authorOrganisation: 'Mace',
    verified: false,
  },
  outcomeStat: 'Zero operational downtime during phased commissioning',
  relatedCaseStudies: [
    {
      name: 'NHS Medway — Inergen IG-541 imaging suite',
      href: '/case-studies/nhs-medway-imaging/',
    },
    {
      name: 'City data hall — Novec 1230 retrofit',
      href: '/case-studies/city-data-hall-novec/',
    },
    {
      name: 'Solicitors’ archive — FM-200 protection',
      href: '/case-studies/solicitors-archive-fm200/',
    },
  ],
  quoteFormHeadline:
    'Tell us the room, the agent shortlist and the timescale — we will come back with a fixed quote.',
  spaceTypeOptions: [
    { value: 'server-room', label: 'Server room' },
    { value: 'data-centre', label: 'Data centre / data hall' },
    { value: 'comms-room', label: 'Comms / telecoms room' },
    { value: 'archive', label: 'Archive / records / vault' },
    { value: 'switchgear', label: 'Switchgear / electrical plant' },
    { value: 'imaging-suite', label: 'Healthcare imaging suite' },
    { value: 'trading-floor', label: 'Trading floor / control room' },
    { value: 'other', label: 'Other — tell us in the message' },
  ],
  quoteSubmitLabel: 'Request my gas suppression quote',
  responsePromise:
    'Survey arranged within 48 hours. Fixed quote within 5 working days. No obligation.',
  altActionPhone: '+44 (0)1634 757 575',
  quoteRoutingMailbox: 'quotes-gas@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — gas-suppression]',
  thanksPageRedirect: '/thanks/gas-suppression/',

  // ---------- Section 8 — Maintenance + Form #3 ----------
  maintenanceRegulatoryAnchor:
    'Annual integrity test + servicing to BS EN 15004 and ISO 14520; detection serviced to BS 5839-1.',
  contractInclusionsList: [
    {
      inclusion:
        'BS EN 15004 annual service visit + door-fan integrity test on biennial cycle',
    },
    {
      inclusion:
        '24/7 reactive response with named on-call engineer; 4-hour SLA available',
    },
    {
      inclusion:
        'Full compliance certificate pack — design, install, commissioning and service records kept current',
    },
  ],
  takeOverMessage:
    'Inherited a gas suppression system from a previous contractor? We will take it over on a single annual contract, audit the existing evidence pack, and reissue compliance documentation in your name. No obligation to rip-and-replace unless the equipment genuinely warrants it.',
  maintenanceFormHeadline:
    'Already have a gas suppression system? Book a service or take-over.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — gas-suppression]',

  // ---------- Section 9 — Why Gemini ----------
  trustPillars: [
    { pillar: 'BAFE-registered fire-protection specialist since 1997' },
    { pillar: 'FIA member — Fire Industry Association aligned design and install' },
    { pillar: 'Employee-Owned Trust since 2024 — long-term accountability, not exit-stage flipping' },
    { pillar: 'Directly employed engineers — no labour-only subcontract on critical infrastructure' },
    { pillar: 'Audit-ready evidence pack with every job — design, install, commissioning and service' },
  ],
  accreditationStrip: [
    'bafe',
    'fia',
    'nsi-gold',
    'firas',
    'safecontractor',
    'chas',
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee-Owned Trust in 2024. Every engineer on your site is a beneficial owner of the business — which changes the conversation about quality, accountability and long-term relationship in ways that PE-owned competitors cannot match.',
  namedEngineer: {
    name: '[ENGINEER NAME TBC]',
    qualification: 'BAFE-registered Gas Suppression Designer, FIA member',
    role: 'Senior Gas Suppression Engineer',
    photo: '/images/team/gas-suppression-lead.jpg',
  },
  officeLocations: [
    { city: 'Medway (Kent HQ)', postcode: 'ME2 4DP', ddi: '+44 (0)1634 757 575' },
    { city: 'London (regional office)', postcode: 'EC2A', ddi: '+44 (0)20 3633 7575' },
  ],

  // ---------- Section 10 — FAQ ----------
  faqs: [
    {
      question: 'How much does a gas suppression system cost in the UK?',
      answer:
        'Most UK installs we deliver fall into three bands: a small single-zone server room runs £15,000–£25,000; a mid-size multi-zone data centre is typically £40,000–£80,000; and large or redundant-agent estates run £80,000–£200,000+. The biggest single variable is room volume, followed by agent choice and enclosure-integrity remediation. A free site survey produces the fixed quote.',
      optionalInlineCTAAnchor: '#quote-form',
    },
    {
      question:
        'FM-200 vs Novec 1230 vs IG-55 — which agent should I specify?',
      answer:
        'FM-200 is small-footprint and cheap to install but inside the F-Gas phase-down with rising recharge cost. Novec 1230 is the modern chemical default — small footprint, GWP of 1, outside F-Gas scope. IG-55 (ProInert) is the inert choice for larger occupied spaces — higher install cost, lowest whole-life cost, best ESG story. We will walk through your room volume, occupancy and reporting context on the survey before recommending.',
      optionalInlineCTAAnchor: '#consult-form',
    },
    {
      question: 'Is gas suppression safe in occupied rooms?',
      answer:
        'Yes — inert blends like ProInert IG-55 and Inergen IG-541 are designed for occupied spaces, reducing oxygen below the combustion threshold while remaining safe for short-term human exposure. Chemical agents like Novec 1230 and FM-200 are also safe at design concentrations. We design every system around occupancy assumptions agreed with you upfront, and the commissioning evidence pack documents it.',
    },
    {
      question:
        'What is an integrity test and how often do we need one (BS EN 15004)?',
      answer:
        'A door-fan integrity test pressurises the protected enclosure and measures leakage to predict how long the suppression agent will hold at design concentration. BS EN 15004 requires the predicted hold-time to meet or exceed 10 minutes. We door-fan test at commissioning and on a biennial cycle as part of the maintenance contract, with the evidence pack issued every time.',
    },
    {
      question: 'How often do gas suppression systems need maintenance?',
      answer:
        'Annual service visit covering cylinder weights, valve actuators, pipe network, detection devices and control panel — to BS EN 15004 and BS 5839-1. Biennial door-fan integrity retest. Hand-held extinguishers serviced to BS 5306-3. Our typical contract starts at £1,800 per zone per year for the service visit, with the integrity retest priced separately on the biennial cycle.',
    },
    {
      question:
        'What does it cost to replace the suppression agent after a discharge or end-of-life?',
      answer:
        'Replacement agent cost varies sharply by agent choice. FM-200 recharge has climbed steadily under F-Gas phase-down — budget several thousand pounds per cylinder. Novec 1230 recharge sits in a similar zone but more stably. Inert blends (IG-55, IG-541) recharge for substantially less per kg, which is one of the reasons larger sites favour them. We confirm exact recharge pricing as part of every quote.',
    },
    {
      question:
        'What certification do we get on completion of a gas suppression install?',
      answer:
        'A full BS EN 15004 commissioning certificate covering agent calc, pipe network, detection and cause-and-effect logic; a BAFE handover certificate; door-fan integrity test report; signed-off cause-and-effect matrix; O&M manuals; as-built drawings; and a 12-month defects warranty. The full pack is what compliance and insurance auditors expect to see.',
    },
    {
      question:
        'Can you remove an old system and recharge a replacement under the same contract?',
      answer:
        'Yes. We routinely take over legacy FM-200 or Halon-replacement systems, dismantle the redundant equipment under F-Gas-certified handling, and design a replacement using a current-generation agent. We also offer agent-recharge as a standalone service where the existing system is sound and only the agent is at end of life. F-Gas register kept current throughout.',
    },
  ],
  faqChildPageLink: '/gas-suppression/faqs/',

  // ---------- Section 11 — Footer ----------
  coverageRegions: [
    'Kent',
    'London',
    'Essex',
    'Surrey',
    'Sussex',
    'Hertfordshire',
    'Berkshire',
    'Buckinghamshire',
    'Hampshire',
  ],
  officeAddress: {
    city: 'Medway',
    postcode: 'ME2 4DP',
    ddi: '+44 (0)1634 757 575',
  },
  relatedServices: [
    { slug: 'fire-alarm-systems', label: 'Fire alarm & evacuation systems' },
    { slug: 'passive-fire-protection', label: 'Passive fire protection' },
    { slug: 'security-access-control', label: 'Security & access control' },
    { slug: 'mechanical-electrical', label: 'Mechanical & electrical' },
    { slug: 'small-works-reactive', label: 'Small works & reactive' },
  ],
  authorByline: {
    name: '[ENGINEER NAME TBC]',
    qualification: 'BAFE-registered Gas Suppression Designer, FIA member',
    reviewerName: 'Jamie Dawson — Director, Gemini AMPM Ltd',
  },
  lastReviewedDate: '2026-06-25',
};

export default gasSuppression;

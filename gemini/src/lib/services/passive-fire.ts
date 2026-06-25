import type { Service } from '~/lib/types';

/**
 * Passive Fire Protection — Pillar (standard density)
 * FIRAS-certificated compartmentation, fire stopping and fire-rated doorsets.
 * Positioned for principal contractors and building owners delivering Approved
 * Document B + BS 9999 compliant evidence packs (golden thread).
 */
export const passiveFire: Service = {
  slug: 'passive-fire',
  pillar: 'passive-fire',
  isPillar: true,
  densityPreset: 'standard',
  specifierMode: true,

  focusKeyword: 'passive fire protection contractors',
  metaTitle: 'Passive Fire Protection Contractors — FIRAS Fire Stopping | Gemini AMPM',
  metaDescription:
    'FIRAS-certificated passive fire protection contractors — fire stopping, intumescent coatings, FD30/FD60/FD90 doorsets, compartmentation surveys. Approved Doc B + BS 9999.',

  // Hero
  h1: 'Passive Fire Protection — FIRAS-Certificated Compartmentation, Fire Stopping & Doorsets across the UK',
  subHeadline:
    'Fire stopping, intumescent sealing, fire-rated doorsets, ductwork protection and compartmentation surveys — FIRAS-certificated install, Approved Doc B aligned, BS 9999 evidence pack with every job.',
  primaryCTAlabel: 'Send my drawing set for review',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'FIRAS',           longName: 'FIRAS-Certificated Installer',  href: '/accreditations/firas/',            thumb: '/assets/certs/thumbs/firas.png' },
    { shortName: 'BAFE',            longName: 'BAFE-Registered',                href: '/accreditations/bafe/',             thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'CHAS',            longName: 'CHAS Premium Plus',              href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',         href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  heroImage: '/assets/hero-passive-fire.svg',
  heroImageAlt: 'FIRAS-certificated engineer sealing a service penetration with a Hilti fire-stopping system in a UK commercial riser',

  // Qualification gate
  gateHeadline: 'When do you need a passive fire protection contractor?',
  useCases: [
    { iconSlug: 'drawing',       scenarioLabel: 'Approved Doc B sign-off needed',       oneLineTrigger: 'New-build or major refurb where building control needs FIRAS evidence at handover' },
    { iconSlug: 'compartment',   scenarioLabel: 'Compartmentation survey + remedials',  oneLineTrigger: 'Existing stock where the golden-thread evidence pack is incomplete or missing' },
    { iconSlug: 'door',          scenarioLabel: 'Fire door replacement programme',      oneLineTrigger: 'FD30 / FD60 doorsets failing inspection or non-compliant with current certification' },
    { iconSlug: 'penetration',   scenarioLabel: 'Service penetration sealing',          oneLineTrigger: 'M&E first-fix complete and risers need fire-stopping before plasterboard close-up' },
    { iconSlug: 'steel',         scenarioLabel: 'Structural steel protection',          oneLineTrigger: 'Intumescent coatings to 60, 90 or 120 minute resistance on exposed steel' },
    { iconSlug: 'duct',          scenarioLabel: 'Ductwork & damper fire protection', oneLineTrigger: 'Smoke and fire damper install, drop-test certification or HVAC fire-board wrap' },
    { iconSlug: 'survey',        scenarioLabel: 'Type-4 intrusive survey',              oneLineTrigger: 'Building Safety Act / Higher-Risk Buildings programme requires evidenced compartmentation' },
  ],
  regulatoryAnchor:
    'Designed and installed to Approved Document B and BS 9999, with fire-resistance performance tested to BS 476 parts 20-24 and EN 1366 series. Every job leaves with a FIRAS-certificated installation pack suitable for golden-thread sign-off.',
  consultFormHeadline: 'Not sure what scope you need? Send drawings and we\'ll review them — free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Passive Fire Protection]',

  // System types
  systemTypesHeadline: 'The passive fire protection systems we design, install and certificate',
  systemTypes: [
    {
      h3: 'Fire stopping — penetration seals',
      manufacturer: 'Hilti, Rockwool, Promat, Nullifire',
      bestForLine: 'Best for sealing M&E service penetrations through compartment walls and floors, keeping the fire-resistance rating intact.',
      bodyCopy:
        'Mechanical and electrical penetrations break the fire-resistance line of every compartment they pass through. We seal them with tested systems from Hilti (CFS-CT, CP 680 cast-in sleeves), Rockwool (Firepro), Promat (Promaseal) and Nullifire (FS702 batt and FB750 sealant) — each installed strictly to the manufacturer\'s ETA assessment so the EI rating holds. Photographic register, GPS-tagged, with the tested system datasheet referenced per seal.',
      anchorSlug: 'fire-stopping',
    },
    {
      h3: 'Intumescent coatings on structural steel',
      manufacturer: 'Nullifire, Envirograf',
      bestForLine: 'Best for protecting exposed structural steel to 30, 60, 90 or 120 minute fire resistance.',
      bodyCopy:
        'Thin-film intumescent coatings (Nullifire SC902, Envirograf HW02) applied to exposed structural steelwork — columns, beams, transfer structures — sized to the Hp/A section factor and the required resistance period. Wet-film thickness recorded per member, dry-film verified, with a hatch register against the structural drawing so building control can verify coverage at sign-off.',
      anchorSlug: 'intumescent-coatings',
    },
    {
      h3: 'Fire-rated doorsets (FD30 / FD60 / FD90 / FD120)',
      manufacturer: 'Various certificated suppliers',
      bestForLine: 'Best for new doorset programmes and like-for-like remedials where third-party certification is required.',
      bodyCopy:
        'Factory-certificated doorsets installed to BWF-Certifire or BM TRADA Q-Mark, with the matching ironmongery (hinges, closers, intumescent strips, smoke seals) all kept inside the certification scope. We don\'t mix-and-match hardware — the doorset, the frame, the hinges, the closer and the latch are listed together. Fitting tolerances recorded against the manufacturer\'s installation manual.',
      anchorSlug: 'fire-doorsets',
    },
    {
      h3: 'Fire dampers & ductwork protection',
      manufacturer: 'Hilti, Promat',
      bestForLine: 'Best for HVAC penetrations through fire compartments — drop-tested dampers and fire-board wrap.',
      bodyCopy:
        'Mechanical fire dampers installed in compartment-crossing ductwork with drop-test certification at commissioning and annual re-test under BS 9999. Where dampers aren\'t practical we wrap the duct with Promat Promaduct or equivalent fire-board to maintain the compartment integrity. Access doors fitted for maintenance reach.',
      anchorSlug: 'fire-dampers-ductwork',
    },
    {
      h3: 'Compartmentation surveys & remedial works',
      manufacturer: 'Independent survey methodology',
      bestForLine: 'Best for existing buildings where the as-built compartmentation has drifted from the original design.',
      bodyCopy:
        'Type-1 visual through to Type-4 intrusive surveys against the building\'s fire strategy, scoring every compartment line, every penetration, every doorset and every cavity barrier. Deliverable is a marked-up plan, a defect register with photographic evidence, a costed remedials schedule and a recommended priority order. Re-survey on completion to close the loop with a clean FIRAS pack.',
      anchorSlug: 'compartmentation-surveys',
    },
    {
      h3: 'Cavity barriers & service penetrations',
      manufacturer: 'Rockwool, Siderise',
      bestForLine: 'Best for concealed voids and cavities that are easy to miss but legally required to be sealed.',
      bodyCopy:
        'Horizontal and vertical cavity barriers (Rockwool RockLap, Siderise RH/RV) installed in concealed voids above ceilings, in raised floors, behind dry-lining and within rainscreen build-ups. The points that get missed in handover audits — we treat them as first-fix scope and photograph each one before the close-up trade arrives.',
      anchorSlug: 'cavity-barriers',
    },
  ],
  closingSoftCTA:
    'Not sure which scope your project actually needs? Send the fire strategy and the architect\'s drawings — we\'ll review them, mark up the passive fire packages, and give you an indicative budget within 5 working days. No obligation.',

  // Industries
  industriesHeadline: 'Where we deliver passive fire protection',
  industries: [
    { iconSlug: 'office',     sectorName: 'Commercial offices',        body: 'Cat-A & Cat-B fit-out fire stopping, riser sealing, intumescent steel and fire doorset programmes under main contractor delivery.' },
    { iconSlug: 'nhs',        sectorName: 'NHS Trusts',                body: 'Hospital compartmentation surveys, ward-block fire stopping, fire door replacement programmes across acute and community estates.' },
    { iconSlug: 'residential', sectorName: 'Residential & HRBs',   body: 'High-Risk Buildings under the Building Safety Act — intrusive surveys, cavity barriers, FD60 communal doorset upgrades.' },
    { iconSlug: 'datacentre', sectorName: 'Data centres',              body: 'Riser fire stopping, plant-room compartmentation and fire damper install — co-ordinated with our gas suppression team.' },
    { iconSlug: 'university', sectorName: 'Higher education',          body: 'Halls of residence fire door programmes, lab compartmentation, listed-building intrusive surveys.' },
    { iconSlug: 'heritage',   sectorName: 'Heritage & listed',     body: 'Sensitive compartmentation works that respect conservation consent — surveys, finishes-matched doorsets, hidden fire stopping.' },
    { iconSlug: 'school',     sectorName: 'Schools & academies',   body: 'DfE-aligned fire door inspection programmes, holiday-window remedials, compartmentation survey reports.' },
    { iconSlug: 'public',     sectorName: 'Local authority & social housing', body: 'Block-by-block survey programmes, communal-area doorset upgrades, framework-priced remedial works.' },
  ],

  // Process
  processHeadline: 'How we deliver a passive fire protection package',
  steps: [
    {
      h3: '1. Survey',
      bodyCopy:
        'A FIRAS-certificated surveyor attends site (or reviews drawings if pre-construction), records the as-built compartmentation, every penetration, every doorset and every cavity, and scores each against the fire strategy. Type-1 visual through to Type-4 intrusive depending on scope.',
      deliverable: 'Marked-up plans + photographic defect register + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We select tested fire-stopping systems against each defect (Hilti, Rockwool, Promat, Nullifire ETA assessments), match doorsets and ironmongery to the certification scope, specify intumescent coatings to the Hp/A section factor, and price the package as a fixed lump-sum or framework rate.',
      deliverable: 'Tested-systems schedule + FIRAS-aligned spec + fixed-price quote',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed FIRAS-certificated installers attend site, fire-stop in sequence with M&E first-fix, photograph every seal before close-up, install doorsets to the manufacturer\'s fitting tolerances and record intumescent wet-film thickness per member. Out-of-hours and phased delivery where the estate is live.',
      deliverable: 'Installed works + photographic register + per-seal datasheet reference',
      indicativeTiming: 'Typically 2–8 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'Final FIRAS certification pack issued: every seal indexed against the tested system, every doorset against the certificate scope, every intumescent member against the design thickness. Pack is structured for golden-thread upload and principal designer sign-off.',
      deliverable: 'FIRAS installation certificate + golden-thread evidence pack + as-built mark-up',
      indicativeTiming: '5 working days from final install visit',
    },
  ],
  processClosingLine:
    'When you\'ve seen the spec and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Compartmentation survey + report',
      scopeQualifier: 'Type-1 visual through to Type-4 intrusive, single building or block',
      priceRange: '£1,500 – £5,000',
      whatsIncluded: 'Site survey, marked-up plans, photographic defect register, costed remedials schedule, priority order',
      whatsExtra: 'Intrusive opening-up access (scaffold, plasterboard removal), out-of-hours surveys, asbestos R&D where required',
    },
    {
      bandName: 'Targeted fire-stopping remediation',
      scopeQualifier: 'Defined defect list from survey or building control notice, single phase',
      priceRange: '£5,000 – £25,000',
      whatsIncluded: 'FIRAS-certificated install of tested systems, photographic per-seal register, FIRAS pack at completion',
      whatsExtra: 'Access (MEWP, scaffold), out-of-hours premium, builder\'s work / making good after seal',
    },
    {
      bandName: 'Whole-building fire stopping + doorsets programme',
      scopeQualifier: 'Full passive fire package — stopping, doorsets, dampers, intumescent steel under one contract',
      priceRange: '£25,000 – £100,000+',
      whatsIncluded: 'Co-ordinated install across packages, dedicated FIRAS supervisor, golden-thread evidence pack, post-handover re-inspection',
      whatsExtra: 'Major builder\'s work, structural openings, like-for-like doorset replacement on listed fabric',
    },
  ],
  priceDrivers: [
    'Number of penetrations and their density across the compartment lines',
    'Doorset volume and whether like-for-like fits the existing frame or needs frame replacement',
    'Steel section factor (Hp/A) — heavier sections need less coating, lighter sections need more',
    'Survey type — Type-1 visual is a fraction of Type-4 intrusive that needs opening-up',
    'Access — high-level, occupied, out-of-hours and live-estate all move the rate',
    'Evidence-pack depth — building control sign-off vs HRB golden-thread submission',
  ],
  humanCaveat:
    'Every building is different — these are the ranges we see most often on UK commercial and HRB jobs. Your survey produces a fixed quote you can rely on. We don\'t inflate scope, we don\'t bundle in unnecessary remedials, and we tell you which defects are urgent vs which can sit in a planned programme.',
  maintenancePriceCallout:
    'Annual passive fire re-inspection from £950 per visit.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'NHS Trust acute-block fire-stopping & compartmentation programme (representative)',
    summary:
      'Multi-phase FIRAS-certificated fire-stopping and compartmentation remedial works across a live acute hospital estate — the kind of programme we deliver under NHS framework partners. Riser sealing, ward-block doorset upgrades, intrusive compartmentation survey, all phased around clinical operations and night-shift access. Photographic per-seal register and golden-thread pack at completion. (A specific named project case study is in commission with the client\'s comms team.)',
  },
  namedClients: [
    { name: 'Mace',                logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',               logo: '/assets/clients/wates.png' },
    { name: 'CBRE',                logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',              logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',         logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'Apleona',             logo: '/assets/clients/apleona.png' },
    { name: 'NHS Medway',          logo: '/assets/clients/nhs-medway.svg' },
    { name: 'NHS Chelsea & Westminster', logo: '/assets/clients/nhs-chelwest.png' },
    { name: 'NHS Guy\'s & St Thomas\'', logo: '/assets/clients/nhs-gstt.svg' },
    { name: 'Royal Borough of Kensington & Chelsea', logo: '/assets/clients/rbkc.svg' },
  ],
  testimonial: {
    quote:
      'Their FIRAS pack came back GPS-tagged seal-by-seal — building control signed it off in the first review without a single RFI. That doesn\'t happen with most passive fire sub-contractors.',
    author: 'Senior Project Manager',
    role: 'Construction lead, NHS acute-estate programme',
    org: 'Tier-1 main contractor (NHS framework)',
  },
  quoteFormHeadline: 'Send your drawings — request a passive fire quote',
  spaceTypeOptions: [
    'New-build Cat-A / Cat-B fit-out',
    'Existing building — survey + remedials',
    'High-Risk Building (Building Safety Act)',
    'NHS estate — ward / theatre / plant',
    'School / academy — holiday-window works',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Drawing review within 48h. Fixed quote within 5 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-passive@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Passive Fire Protection]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take-over your passive fire re-inspection programme',
  maintenanceRegulatoryAnchor:
    'Annual passive fire re-inspection under BS 9999 + Regulatory Reform (Fire Safety) Order 2005 — fire doors quarterly per BS 8214, compartmentation reviewed against the fire strategy, dampers drop-tested annually.',
  contractInclusions: [
    'Quarterly fire-door inspection per BS 8214 + annual compartmentation re-survey',
    'Annual fire damper drop-test with witnessed certification',
    'Audit-ready FIRAS-aligned evidence pack issued within 5 working days of every visit',
  ],
  takeOverMessage:
    'Switching passive fire inspection provider is straightforward — we\'ll audit your existing evidence pack, identify compliance gaps your incumbent missed, and run continuity from the next inspection cycle. No long lock-in, no inflated remedials list to justify the take-on.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Passive Fire Protection]',

  // Why Gemini
  trustPillars: [
    { title: 'FIRAS-certificated installers',     body: 'Third-party certificated install scheme — the certification building control and principal designers actually recognise on passive fire packages.' },
    { title: 'Employee-owned',                    body: 'Our engineers own the business. That\'s why the per-seal photo register comes back complete, and why we don\'t over-spec remedials to chase margin.' },
    { title: 'Directly-employed installers',      body: 'No sub-contracted labour on site. The supervisor who quoted is the one who certificates the install — chain of custody, not chain of sub-contractors.' },
    { title: 'Golden-thread evidence pack',       body: 'Every job leaves with a FIRAS-aligned evidence pack structured for HRB golden-thread upload and principal designer sign-off.' },
    { title: 'Out-of-hours as standard',          body: 'Most of our work is done on live, occupied estates — hospitals, offices, schools. We\'re used to working around clinical sessions, tenants and term-time.' },
    { title: '24/7 monitored response',           body: 'Group-wide NSI Gold ARC connection means a verified response when a fire-door fault or damper failure is flagged in your monitored estate.' },
  ],
  accreditationStrip: [
    { shortName: 'FIRAS',           longName: 'FIRAS-Certificated Installer (passive fire)', href: '/accreditations/firas/',            thumb: '/assets/certs/thumbs/firas.png' },
    { shortName: 'CHAS',            longName: 'CHAS Premium Plus',                            href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',                       href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
    { shortName: 'Avetta',          longName: 'Avetta Pre-Qualified',                         href: '/accreditations/avetta/',           thumb: '/assets/certs/thumbs/avetta.png' },
    { shortName: 'BAFE',            longName: 'BAFE-Registered (group-wide)',                 href: '/accreditations/bafe/',             thumb: '/assets/certs/thumbs/bafe.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers and installers who do the work are also the owners — that aligns the FIRAS install quality with the long-term reputation in a way no agency-style sub-contracting can.',
  namedEngineer: {
    name: 'Senior Passive Fire Supervisor',
    role: 'FIRAS install lead',
    qual: 'FIRAS-certificated · BM TRADA fire-door inspector · 15+ years on UK commercial & NHS estate',
  },

  // FAQ
  faqs: [
    {
      question: 'How much does passive fire protection cost?',
      answer:
        'A compartmentation survey + report runs £1,500–£5,000 depending on building size and survey type. Targeted fire-stopping remediation is typically £5,000–£25,000. A whole-building fire-stopping + doorset programme on a commercial fit-out or HRB is £25,000–£100,000+. Annual re-inspection starts at £950 per visit. Your survey produces a fixed price — see the pricing bands section above for the drivers that move the number.',
    },
    {
      question: 'What regulations does passive fire protection need to meet?',
      answer:
        'Approved Document B sets the functional requirements for fire safety in England, with BS 9999 as the supporting code of practice for fire safety in the design and management of buildings. Fire-resistance performance is tested under BS 476 parts 20–24 (UK) and EN 1366 series (European). For High-Risk Buildings, the Building Safety Act 2022 requires a golden-thread evidence pack — our FIRAS packs are structured for golden-thread upload.',
    },
    {
      question: 'How long does a passive fire install take?',
      answer:
        'Targeted fire-stopping remediation typically runs 2–4 weeks on site. A whole-building programme on a commercial fit-out is 4–8 weeks. NHS or live-estate programmes are phased over multiple out-of-hours windows. The clock starts after the survey + design pack is signed off — survey and design adds 2–3 weeks before site work begins.',
    },
    {
      question: 'Can you fire-stop around our existing M&E without us removing the services?',
      answer:
        'Yes — tested fire-stopping systems from Hilti, Rockwool, Promat and Nullifire are designed to be installed around live services. CFS-CT coated boards, FB750 sealant and FS702 batt all retro-fit around existing pipework, cabling and trunking. Where the original penetration is oversized or non-compliant we\'ll quote a making-good package alongside.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'A FIRAS installation certificate, a photographic per-seal register (GPS-tagged), the manufacturer\'s tested-system datasheet referenced per seal, doorset certification per leaf, intumescent dry-film thickness records per steel member, damper drop-test certificates, and as-built mark-ups against the architect\'s drawings. Structured for golden-thread upload and principal designer sign-off.',
    },
    {
      question: 'Can you take over passive fire inspections from another contractor?',
      answer:
        'Yes — we run a free transition audit when we take over. That covers FIRAS-aligned gap analysis on the existing evidence pack, asset register reconciliation against the as-built drawings, and a one-off catch-up inspection if anything has slipped through your previous contractor. No long lock-in on our contracts; cancel with 90 days\' notice.',
    },
    {
      question: 'Are you FIRAS or LPCB or both?',
      answer:
        'We\'re FIRAS-certificated as installers — the third-party install certification scheme operated by Warringtonfire (now part of Element). LPCB (Loss Prevention Certification Board) is the product-side certification body for tested fire-stopping systems themselves — we install LPCB-listed and ETA-assessed products under our FIRAS install certification. Both stamps together is what insurers and building control want to see.',
    },
    {
      question: 'Do you cover Higher-Risk Buildings under the Building Safety Act?',
      answer:
        'Yes — HRB programmes (residential buildings 18m+ or 7 storeys+ with two or more dwellings) need a golden-thread evidence pack maintained through the building\'s life. We deliver Type-3 and Type-4 intrusive surveys, FIRAS-certificated remedial install, and structure the evidence pack for upload to the Building Safety Regulator\'s portal. Worked alongside Accountable Persons on multiple London HRB programmes.',
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
    { label: 'Fire Alarm & Evacuation Systems →', href: '/fire-alarm/' },
    { label: 'Security & Access Control →',     href: '/security-access/' },
    { label: 'Ventilation & Air Quality →',     href: '/ventilation/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

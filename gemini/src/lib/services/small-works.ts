import type { Service } from '~/lib/types';

/**
 * Small Works & Reactive — Pillar (compact density)
 * The always-on service layer: reactive callouts, minor works, system additions,
 * compliance certificates and one-off jobs across fire, security and M&E — direct
 * booking, fixed pricing, same-team accountability, since 1997.
 */
export const smallWorks: Service = {
  slug: 'small-works',
  pillar: 'small-works',
  isPillar: true,
  densityPreset: 'compact',
  specifierMode: false,

  focusKeyword: 'commercial fire and security small works',
  metaTitle: 'Small Works & Reactive — Fire, Security & M&E | Gemini AMPM',
  metaDescription:
    'Reactive callouts, minor works, compliance certificates and system additions across fire, security and M&E — fixed pricing, direct booking, UK-wide since 1997.',

  // Hero
  h1: 'Small Works & Reactive — Fast Response Across Fire, Security and M&E in the UK',
  subHeadline:
    'Reactive callouts, minor works, system additions, compliance certificates and one-off jobs — direct booking, fixed pricing, same-team accountability, since 1997.',
  primaryCTAlabel: 'Book a reactive engineer',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'BAFE',    longName: 'BAFE-Registered',     href: '/accreditations/bafe/',    thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'NICEIC',  longName: 'NICEIC Approved Contractor', href: '/accreditations/niceic/', thumb: '/assets/certs/thumbs/niceic.png' },
    { shortName: 'NSI Gold', longName: 'NSI Gold (security + monitoring)', href: '/accreditations/nsi-gold/', thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'CHAS',    longName: 'CHAS Premium Plus',   href: '/accreditations/chas/',    thumb: '/assets/certs/thumbs/chas.png' },
  ],
  heroImage: '/assets/hero-small-works.svg',
  heroImageAlt: 'Gemini AMPM reactive engineer with marked van attending a UK commercial site callout',

  // Qualification gate
  gateHeadline: 'When do you call us for small works or reactive cover?',
  useCases: [
    { iconSlug: 'alert',    scenarioLabel: 'Fire panel in fault or trouble',   oneLineTrigger: 'Live panel fault, false alarms or zone isolation that needs clearing today' },
    { iconSlug: 'lock',     scenarioLabel: 'Intruder, access or CCTV failure', oneLineTrigger: 'Door reader, ARC link, NVR or detector down and the site is exposed' },
    { iconSlug: 'plug',     scenarioLabel: 'Sub-£10k electrical works',  oneLineTrigger: 'Minor distribution change, new circuits, EICR remedials or fault-finding' },
    { iconSlug: 'cert',     scenarioLabel: 'Compliance certificate needed',    oneLineTrigger: 'EICR, fire-alarm certification, F-Gas report or insurer-driven inspection' },
    { iconSlug: 'extend',   scenarioLabel: 'Fit-out change or zone extension', oneLineTrigger: 'New tenant layout, partition move or extra detection / readers required' },
    { iconSlug: 'gap',      scenarioLabel: 'Servicing top-up between visits',  oneLineTrigger: 'Ad-hoc check or remediation in between scheduled maintenance dates' },
    { iconSlug: 'handover', scenarioLabel: 'Take-over of a system you inherited', oneLineTrigger: 'New site, no records, unknown installer — needs an audit and a certificate' },
  ],
  regulatoryAnchor:
    'Varies by trade — work delivered under whichever standard applies (BS 7671, BS 5839-1, BS EN 50131, BS EN 50132, BS EN 13141, F-Gas Regulation 517/2014 and others). Every job leaves with the right certificate for the trade.',
  consultFormHeadline: 'Not sure if it\'s reactive, minor works or a full project? Book a free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Small Works & Reactive]',

  // System types
  systemTypesHeadline: 'The small works and reactive services we deliver',
  systemTypes: [
    {
      h3: 'Reactive callouts (24/7 across fire, security and M&E)',
      bestForLine: 'Best for live faults that can\'t wait for the next scheduled visit.',
      bodyCopy:
        'A directly-employed engineer dispatched to site for fire panel faults, intruder activations, CCTV failures, access-control lockouts, power loss or HVAC failure. Calls handled by a UK control room, not an offshore answering service. Out-of-hours rates apply between 18:00 and 08:00 and at weekends, but we publish them up front — no surprise surcharges on the invoice.',
      anchorSlug: 'reactive-callouts',
    },
    {
      h3: 'System additions + zone extensions',
      bestForLine: 'Best for fit-out changes, tenant moves and partition reworks.',
      bodyCopy:
        'New detection heads on an existing BS 5839-1 panel, extra door readers wired into an existing Paxton or Net2 head-end, additional CCTV cameras onto an existing NVR, or new sockets and lighting circuits in a reconfigured space. We work with whatever you already have — no rip-and-replace unless the existing kit is genuinely end-of-life. Certificated as an extension of the existing system.',
      anchorSlug: 'system-additions',
    },
    {
      h3: 'Compliance certificates (EICR, fire-alarm certs, F-Gas reports)',
      bestForLine: 'Best for landlords, FMs and insurers chasing the paperwork.',
      bodyCopy:
        'Periodic Electrical Installation Condition Reports (EICR) to BS 7671, fire-alarm service certificates to BS 5839-1, emergency lighting certification to BS 5266-1, and F-Gas inspection reports to Regulation 517/2014. Issued same-week as the visit, lodged in your evidence folder, and flagged with any remedials priced separately so you can decide what to action.',
      anchorSlug: 'compliance-certificates',
    },
    {
      h3: 'Minor electrical works (sub-£10k)',
      bestForLine: 'Best for one-off circuit changes, fault-finding and EICR remedials.',
      bodyCopy:
        'NICEIC-certificated electrical works delivered as a single visit or a short programme — new distribution boards, additional circuits, emergency lighting repairs, EICR C1/C2 remedials, fault-finding on tripping circuits and reactive supply work. Every job leaves with the right BS 7671 Minor Works or Installation Certificate, lodged to NICEIC and emailed to you the same week.',
      anchorSlug: 'minor-electrical',
    },
    {
      h3: 'Door access + intercom upgrades',
      bestForLine: 'Best for ageing fobs, broken readers and tired entry systems.',
      bodyCopy:
        'Reader swaps, fob re-issues, controller upgrades, IP intercom installs (2N, Comelit, Paxton Entry) and integration with existing access platforms. Common on residential blocks where the original analogue intercom has reached end-of-life, and on commercial offices moving from fob to mobile-credential. Commissioned and handed over with the FM team trained on day one.',
      anchorSlug: 'access-intercom',
    },
    {
      h3: 'Annual servicing top-ups + ad-hoc reactive cover',
      bestForLine: 'Best for sites that need cover between scheduled maintenance dates.',
      bodyCopy:
        'A block-hours retainer that gives you a guaranteed engineer slot every month, used however you need it — reactive callouts, top-up servicing, remedials, fit-out tweaks or compliance walk-rounds. Unused hours roll over one month. Sits alongside (not instead of) your statutory servicing contract, and removes the friction of raising a PO for every minor job.',
      anchorSlug: 'block-hours',
    },
  ],
  closingSoftCTA:
    'Not sure if your job is reactive, minor works or a full project? Book a free consultation — we\'ll scope it in 30 minutes and tell you which route is cheapest, no obligation.',

  // Industries
  industriesHeadline: 'Where we deliver small works and reactive cover',
  industries: [
    { iconSlug: 'office',     sectorName: 'Corporate offices',           body: 'Tenant fit-outs, reactive panel faults and access-control changes across Cat-A and Cat-B occupier estates.' },
    { iconSlug: 'datacentre', sectorName: 'Data centres & comms rooms', body: 'Minor works and reactive cover for IT-critical estates where downtime isn\'t survivable.' },
    { iconSlug: 'nhs',        sectorName: 'NHS Trusts',                  body: 'Statutory compliance top-ups, EICRs and reactive callouts across acute, community and ambulance trusts.' },
    { iconSlug: 'university', sectorName: 'Higher education',            body: 'Term-time reactive cover, summer minor works programmes and lab-space alterations.' },
    { iconSlug: 'residential', sectorName: 'Residential block management', body: 'Intercom upgrades, EICR remedials, communal fire panel faults and out-of-hours reactive cover.' },
    { iconSlug: 'public',     sectorName: 'Local authority & public sector', body: 'Framework reactive cover, compliance certificates and minor electrical works across council estates.' },
    { iconSlug: 'retail',     sectorName: 'Retail & hospitality',    body: 'Out-of-hours reactive callouts, EICRs and tenant alteration works that can\'t close the trading floor.' },
    { iconSlug: 'industrial', sectorName: 'Industrial & logistics',  body: 'Warehouse lighting, distribution-board changes, CCTV additions and F-Gas inspections on plant.' },
  ],

  // Process
  processHeadline: 'How a small-works job runs',
  steps: [
    {
      h3: '1. Survey',
      bodyCopy:
        'For anything over a single-visit reactive callout, a directly-employed engineer attends site to scope the work, photograph existing conditions, identify the right certificate, and flag anything that\'ll add cost. Reactive callouts skip this step — the engineer scopes on arrival.',
      deliverable: 'Site notes + photo record + indicative price range',
      indicativeTiming: 'Booked within 3 working days',
    },
    {
      h3: '2. Design & quote',
      bodyCopy:
        'For minor works we issue a fixed-price quote with itemised labour, materials and certification. For reactive jobs we either complete on the first visit (under our hourly rate) or quote a follow-up if parts are needed. No design fees on jobs under £10k.',
      deliverable: 'Fixed-price quote + scope-of-works + programme date',
      indicativeTiming: 'Within 5 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed engineers attend in marked vans with parts, certified to the trade in question. Most small-works jobs are completed in a single visit or a short out-of-hours programme. Larger multi-trade jobs are coordinated by a single Gemini project lead so you\'re not chasing four sub-contractors.',
      deliverable: 'Works completed + as-left photo record',
      indicativeTiming: 'Typically same-week to 2 weeks, depending on parts',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'Every job leaves with the right certificate for the trade — BS 7671 Minor Works or Installation Certificate, BS 5839-1 service cert, F-Gas report, EICR, or access-control commissioning record. Lodged to the relevant body (NICEIC, BAFE, NSI), emailed to you, and stored in your evidence folder.',
      deliverable: 'Trade-correct certificate + invoice + evidence-pack entry',
      indicativeTiming: 'Same week as completion',
    },
  ],
  processClosingLine:
    'You see the price and the programme before any work starts. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Reactive callout (hourly)',
      scopeQualifier: 'Single-engineer attendance, in-hours or out-of-hours',
      priceRange: '£85 – £140 per engineer per hour',
      whatsIncluded: 'Travel within region, first hour on site, diagnosis, parts under £50, written fault report',
      whatsExtra: 'Out-of-hours premium (18:00–08:00, weekends), specialist parts, return visit if parts are non-stock',
    },
    {
      bandName: 'Minor works package',
      scopeQualifier: 'Single-trade job up to a few engineer-days on site',
      priceRange: '£500 – £5,000',
      whatsIncluded: 'Survey, fixed-price quote, labour, standard materials, trade certificate (NICEIC / BAFE / NSI)',
      whatsExtra: 'Builder\'s work, making good, specialist materials, asbestos surveys if pre-2000 fabric',
    },
    {
      bandName: 'Larger one-off / multi-trade small works',
      scopeQualifier: 'Multi-trade scope, phased over a short programme',
      priceRange: '£5,000 – £25,000',
      whatsIncluded: 'Single project lead, all trades coordinated, full certification pack, out-of-hours working where needed',
      whatsExtra: 'Principal-designer duties on CDM-notifiable works, structural builder\'s work, third-party witness testing',
    },
  ],
  priceDrivers: [
    'Trade required (electrical, fire, security, mechanical, F-Gas) — each has its own labour rate and certification cost',
    'Time-of-day — out-of-hours (18:00–08:00 + weekends) attracts a premium we publish up front',
    'Travel zone — in M25 corridor vs wider South-East vs UK-wide framework call',
    'Parts availability — stocked vs special-order (special-order can add 1–3 weeks)',
    'Access difficulty — live occupied space, high-rise, lift restrictions, dock access all add time',
    'Certification depth — a fault clearance vs a full insurer-grade EICR carry very different paperwork loads',
  ],
  humanCaveat:
    'Small works pricing depends on what you actually need on the day — these ranges are what we see most often on real UK commercial jobs. Reactive callouts are billed hourly with the rate agreed before we dispatch. Minor works get a fixed quote after survey. We don\'t inflate scope to chase margin, we don\'t bundle the work into a long-term contract you don\'t need, and we tell you when a job is too small to be worth attending separately.',
  maintenancePriceCallout:
    'Block-hours retainer from £900 / month (10 engineer-hours, unused hours roll over one month).',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Always-on small works & reactive cover across the Gemini client base',
    summary:
      'No single flagship — small works runs as a continuous service layer across our existing client estate. A typical week covers reactive fire-panel callouts on residential blocks, EICR remedials on corporate fit-outs, intercom upgrades on managed-block portfolios, F-Gas inspections on retail HVAC, and minor electrical works between scheduled maintenance dates. The same directly-employed engineers attend, the same UK control room takes the calls, and every job leaves with the right certificate for the trade.',
  },
  namedClients: [
    { name: 'CBRE',                logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',              logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',         logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'Apleona',             logo: '/assets/clients/apleona.png' },
    { name: 'TClarke',             logo: '/assets/clients/tclarke.png' },
    { name: 'Gratte Brothers',     logo: '/assets/clients/gratte-brothers.jpeg' },
    { name: 'FirstPort',           logo: '/assets/clients/firstport.svg' },
    { name: 'Newlon Housing Trust', logo: '/assets/clients/newlon.jpeg' },
    { name: 'NHS Medway',          logo: '/assets/clients/nhs-medway.svg' },
    { name: 'RBKC',                logo: '/assets/clients/rbkc.svg' },
  ],
  testimonial: {
    quote:
      'We logged the fault at 19:40, Gemini had a marked van on site by 21:15, panel reset and a written report by the morning. That\'s the response time we pay a retainer for and rarely see delivered.',
    author: 'Building Manager',
    role: 'Residential portfolio FM',
    org: 'Central London block management client',
  },
  quoteFormHeadline: 'Request a small-works quote or book a reactive engineer',
  spaceTypeOptions: [
    'Corporate office / fit-out',
    'Residential block / managed estate',
    'Data centre / comms room',
    'NHS / public sector site',
    'Retail / hospitality unit',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Reactive engineer dispatched within 4 working hours in-hours. Survey within 3 working days. Fixed quote within 5.',
  quoteRoutingMailbox: 'quotes-smallworks@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Small Works & Reactive]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Put us on retainer for ad-hoc reactive cover',
  maintenanceRegulatoryAnchor:
    'Block-hours retainer runs alongside (not instead of) your statutory servicing — BS 5839-1 fire-alarm servicing, BS 7671 periodic inspection, BS EN 50131 intruder servicing and F-Gas Regulation 517/2014 inspections remain on their own schedules.',
  contractInclusions: [
    'Guaranteed monthly engineer-hours, unused hours roll over one month',
    '4-hour response SLA in working hours, 8-hour out-of-hours, across fire, security and M&E',
    'Single point of contact + monthly hours statement, no PO friction on minor jobs',
  ],
  takeOverMessage:
    'Most clients come to us after a poor experience with a reactive provider that didn\'t turn up, charged surprise out-of-hours rates, or couldn\'t certify their own work. We run a free 30-minute consultation, audit your current arrangement, and tell you honestly whether a retainer would save you money — or whether you\'re better off pay-as-you-go.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Small Works & Reactive]',

  // Why Gemini
  trustPillars: [
    { title: 'Multi-trade certified since 1997',  body: 'BAFE, NICEIC, NSI Gold and F-Gas registered — one supplier with the right certificate for whichever trade the job needs.' },
    { title: 'Employee-owned',                    body: 'Our engineers own the business. That\'s why callouts turn into honest invoices and reactive jobs don\'t get padded.' },
    { title: 'Directly-employed engineers',       body: 'No sub-contracted callout chains. The engineer who attends is on our payroll and accountable to our control room.' },
    { title: 'Trade-correct certificate every time', body: 'Every visit leaves with the right paperwork for the trade — Minor Works cert, BAFE service record, F-Gas report or EICR — lodged the same week.' },
    { title: 'Out-of-hours as standard',          body: 'Most reactive work happens evenings and weekends. Our published out-of-hours rates are the rates — no last-minute surcharges.' },
    { title: '24/7 monitored response',           body: 'UK control room, not offshore answering service. NSI Gold-approved for ARC handling on intruder and security jobs.' },
  ],
  accreditationStrip: [
    { shortName: 'BAFE',              longName: 'BAFE SP203-1 (Design, Install, Commission, Maintain)', href: '/accreditations/bafe/',             thumb: '/assets/certs/thumbs/bafe.png' },
    { shortName: 'NICEIC',            longName: 'NICEIC Approved Contractor',                            href: '/accreditations/niceic/',           thumb: '/assets/certs/thumbs/niceic.png' },
    { shortName: 'NSI Gold',          longName: 'NSI Gold (security + monitoring)',                      href: '/accreditations/nsi-gold/',         thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'CHAS',              longName: 'CHAS Premium Plus',                                     href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline',  longName: 'Constructionline Gold',                                 href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who attend your callouts are also the owners — that aligns reactive response and invoice honesty with the long-term reputation in a way no agency-style sub-contracting can.',
  namedEngineer: {
    name: 'Reactive Operations Lead',
    role: 'Small works & reactive lead',
    qual: 'NICEIC-qualified · BAFE-trained · 20+ years on UK commercial reactive',
  },

  // FAQ — sourced from real buyer language
  faqs: [
    {
      question: 'How much does a reactive callout cost?',
      answer:
        'In-hours (08:00–18:00 Mon–Fri) is £85–£110 per engineer per hour including travel within region and the first hour on site. Out-of-hours and weekend rates are £115–£140. Parts under £50 are included; anything specialist is quoted before we order. We agree the rate before we dispatch — no surprise surcharges on the invoice.',
    },
    {
      question: 'Do you need a long-term contract for reactive cover?',
      answer:
        'No. You can book a one-off callout or minor-works job with no commitment beyond that visit. We offer a block-hours retainer from £900/month that gives you guaranteed engineer-hours and a faster SLA, but it\'s optional. Most clients start ad-hoc and move to a retainer once they\'ve seen the response and the paperwork.',
    },
    {
      question: 'How quickly can you get an engineer to site?',
      answer:
        'In-hours reactive within 4 working hours across the M25 corridor and South-East. Out-of-hours typically 6–8 hours. Block-hours retainer clients get a 4-hour SLA across the full 24/7 window. Larger framework partners (NHS, local authority) work to whichever SLA is in the framework.',
    },
    {
      question: 'Can you extend an existing fire alarm or access-control system that someone else installed?',
      answer:
        'Yes. We work with all major fire-alarm platforms (Apollo, Hochiki, Advanced, Gent Vigilon, Honeywell, Kentec, Morley) and all major access-control heads (Paxton, Net2, Salto, HID, Vanderbilt). We commission additions as an extension of the existing system and re-certify the affected zones — not a full system replacement unless the existing kit is genuinely end-of-life.',
    },
    {
      question: 'What certificate do we get at handover?',
      answer:
        'Whichever certificate the trade requires. For electrical work, a BS 7671 Minor Works or Installation Certificate lodged to NICEIC. For fire alarm, a BS 5839-1 service or commissioning certificate aligned to BAFE SP203-1. For F-Gas, a Regulation 517/2014 inspection report. For security, an NSI commissioning record. All issued the same week as the visit.',
    },
    {
      question: 'Can you take over reactive cover from our current provider?',
      answer:
        'Yes — and we do this often. We run a free 30-minute consultation to understand the gaps in your current arrangement (missed SLAs, surprise charges, missing certificates), then either pick up ad-hoc or set up a block-hours retainer. No transition fee, no lock-in on our contracts, cancel with 30 days\' notice.',
    },
    {
      question: 'Do you cover sites outside London and the South-East?',
      answer:
        'Yes — for framework partners (national FMs, NHS Trusts, multi-site corporates) we cover the UK. For one-off reactive bookings we\'re strongest across London, the M25 corridor, South-East, East of England and South Central. Outside that we\'ll quote travel honestly — sometimes it\'s cheaper for you to use a local supplier and we\'ll say so.',
    },
    {
      question: 'How long does a typical minor-works job take from quote to completion?',
      answer:
        'Quote within 5 working days of survey. Most single-trade minor works jobs are on site within 2–3 weeks of quote acceptance and completed in a single visit or short out-of-hours programme. Multi-trade jobs (e.g. fit-out alterations touching fire, security and M&E) typically run 3–6 weeks. Parts lead-time on special-order items can extend this — we tell you up front.',
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
    { label: 'Fire Alarm & Evacuation →',       href: '/fire-alarm/' },
    { label: 'Passive Fire Protection →',           href: '/passive-fire/' },
    { label: 'Security & Access Control →',     href: '/security-access/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

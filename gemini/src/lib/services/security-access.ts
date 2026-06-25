import type { Service } from '~/lib/types';

/**
 * Security & Access Control — Pillar (standard density)
 * NSI Gold integrated security: access control, intruder, CCTV and PSIM
 * for commercial and CNI estates — installer-led, ARC-monitored, since 1997.
 */
export const securityAccess: Service = {
  slug: 'security-access',
  pillar: 'security-access',
  isPillar: true,
  densityPreset: 'standard',
  specifierMode: false,

  focusKeyword: 'access control installer commercial',
  metaTitle: 'Access Control Installer Commercial — NSI Gold | Gemini AMPM',
  metaDescription:
    'NSI Gold access control, intruder and CCTV installer since 1997 — Paxton, Suprema, Hikvision, Axis, Avigilon. BS EN 50131 + 50132. Free UK site survey.',

  // Hero
  h1: 'Security & Access Control — NSI Gold Design, Install & Maintain across the UK',
  subHeadline:
    'Access control, intruder alarms, CCTV and integrated security from Paxton, Suprema, Hikvision, Axis and Avigilon — NSI Gold install since 1997, BS EN 50132 commissioning, ARC-linked monitoring.',
  primaryCTAlabel: 'Request my security system quote',
  secondaryCTAlabel: 'See how it works',
  regionalDDI: 'tel:+441322865000',
  regionalDDIDisplay: '01322 865 000',
  accreditationsForHero: [
    { shortName: 'NSI Gold', longName: 'NSI Gold (Security + Monitoring)', href: '/accreditations/nsi-gold/', thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'SSAIB', longName: 'SSAIB Approved', href: '/accreditations/ssaib/', thumb: '/assets/certs/thumbs/ssaib.png' },
    { shortName: 'CHAS', longName: 'CHAS Premium Plus', href: '/accreditations/chas/', thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Cyber Essentials', longName: 'Cyber Essentials Certified', href: '/accreditations/cyber-essentials/', thumb: '/assets/certs/thumbs/cyber-essentials.png' },
  ],
  heroImage: '/assets/hero-security-access.svg',
  heroImageAlt: 'Paxton access-control reader and IP CCTV camera at a UK commercial building entrance',

  // Qualification gate
  gateHeadline: 'When do you need a commercial access control or CCTV system?',
  useCases: [
    { iconSlug: 'office',     scenarioLabel: 'Multi-tenant commercial building', oneLineTrigger: 'Tenant-zoned access, visitor management and audit-trail reporting across floors' },
    { iconSlug: 'warehouse',  scenarioLabel: 'Warehouse / logistics estate',     oneLineTrigger: 'Yard, loading-bay and goods-in/out control with ANPR and door interlock' },
    { iconSlug: 'school',     scenarioLabel: 'School / further education',       oneLineTrigger: 'Safeguarding-driven door control, visitor sign-in and lockdown integration' },
    { iconSlug: 'nhs',        scenarioLabel: 'NHS / clinical estate',            oneLineTrigger: 'Role-based access to drug stores, theatres and IT rooms with full audit log' },
    { iconSlug: 'datacentre', scenarioLabel: 'Data centre / comms room',         oneLineTrigger: 'Biometric and dual-credential access to halls, cages and meet-me rooms' },
    { iconSlug: 'retail',     scenarioLabel: 'Retail / hospitality',             oneLineTrigger: 'Stockroom, cash-office and back-of-house control with HR integration' },
    { iconSlug: 'cni',        scenarioLabel: 'Critical national infrastructure', oneLineTrigger: 'Multi-site PSIM with control-room integration and verified ARC response' },
  ],
  regulatoryAnchor:
    'Designed and commissioned to BS EN 50131 (intruder), BS EN 50132 (CCTV), BS 8418 (detector-activated CCTV) and BS 7858 (vetted personnel). NSI Gold-audited every 12 months.',
  consultFormHeadline: 'Not sure which platform fits your estate? Book a free 30-minute consultation.',
  consultRoutingMailbox: 'consultations@geminiampm.co.uk',
  consultSubjectPrefix: '[CONSULT — Security & Access Control]',

  // System types
  systemTypesHeadline: 'The security and access control systems we design, install and commission',
  systemTypes: [
    {
      h3: 'Paxton Net2 / Paxton10 (access control)',
      manufacturer: 'Paxton',
      bestForLine: 'Best for SME-to-mid commercial estates that want a UK-supported, installer-friendly platform.',
      bodyCopy:
        'Paxton Net2 remains the workhorse of UK commercial access control — up to 1,000 doors, robust hardware, free site-licence software, and a deep installer base if you ever need a second opinion. Paxton10 layers integrated IP video and cloud management on top for sites that want CCTV and access in one pane. We hold Paxton Platinum installer status and have specified Net2 on dozens of London-and-South-East commercial fit-outs.',
      anchorSlug: 'paxton',
    },
    {
      h3: 'Suprema BioStar 2 (biometric + mobile)',
      manufacturer: 'Suprema',
      bestForLine: 'Best for large estates, data centres and high-value spaces that need biometric or mobile credentials.',
      bodyCopy:
        'Suprema BioStar 2 is the platform of choice when fingerprint, face or mobile-credential authentication is required at the door — data halls, pharma clean-rooms, drug stores and high-value comms. Open-API integration to most HR and visitor systems, and full GDPR-compliant template-on-card biometric storage where data residency matters. We integrate Suprema readers behind Paxton or Honeywell head-ends where the client wants a single management UI.',
      anchorSlug: 'suprema',
    },
    {
      h3: 'Honeywell Galaxy intruder (NSI Gold Grade 3)',
      manufacturer: 'Honeywell',
      bestForLine: 'Best for commercial intruder detection where insurer or police-response criteria demand Grade 3.',
      bodyCopy:
        'Honeywell Galaxy Dimension and Flex panels installed and commissioned to BS EN 50131-1 Grade 3 — the standard most commercial insurers and the police URN scheme expect. Dual-path signalling via Dualcom or CSL to an NSI Gold-approved ARC, with cause-and-effect zoning that mirrors your access control schedule. Maintained under NSI Gold service contract with audit-ready logs.',
      anchorSlug: 'honeywell-galaxy',
    },
    {
      h3: 'Hikvision IP CCTV (4K + analytics)',
      manufacturer: 'Hikvision',
      bestForLine: 'Best for commercial estates where 4K coverage and competitive lifecycle cost matter most.',
      bodyCopy:
        'Hikvision AcuSense and DeepInView ranges deliver 4K IP CCTV with on-camera analytics — line-crossing, intrusion, loitering and ANPR — recorded to enterprise-grade NVRs with RAID and dual-NIC. We commission to BS EN 50132-7 with documented camera field-of-view, lux levels and retention period, and we apply Cyber Essentials-aligned hardening to every camera before handover.',
      anchorSlug: 'hikvision',
    },
    {
      h3: 'Axis IP CCTV (enterprise + ATEX)',
      manufacturer: 'Axis Communications',
      bestForLine: 'Best for enterprise specifiers and hazardous environments where Axis is the standing standard.',
      bodyCopy:
        'Axis remains the enterprise default on most blue-chip and CNI estates — long firmware support, open ONVIF integration, AXIS Camera Station or third-party VMS, and a full ATEX range for fuel, chemical and offshore environments. Slightly higher per-camera cost than Hikvision but the firmware-lifecycle and supply-chain assurance are why most enterprise security managers continue to specify it.',
      anchorSlug: 'axis',
    },
    {
      h3: 'Avigilon analytics CCTV (large-site + ANPR)',
      manufacturer: 'Avigilon (Motorola Solutions)',
      bestForLine: 'Best for large sites where AI-driven search, appearance-matching and ANPR replace control-room headcount.',
      bodyCopy:
        'Avigilon Unity and Alta deliver AI-driven self-learning analytics, Appearance Search and ANPR at site scale — the platform we specify when a client needs to scan hours of footage in seconds or correlate a vehicle plate across multiple sites. Integrates natively with Avigilon Access Control Manager for a single-vendor PSIM-style deployment.',
      anchorSlug: 'avigilon',
    },
    {
      h3: 'Salto electronic locks (BLE + mobile)',
      manufacturer: 'Salto Systems',
      bestForLine: 'Best for heritage, hospitality and multi-tenant estates where wiring every door isn\'t viable.',
      bodyCopy:
        'Salto wireless and stand-alone electronic locks let you bring listed, heritage and multi-tenant doors into a single access schedule without hard-wiring — BLE mobile credentials via the JustIN app, or RFID card. SVN data-on-card means even off-line locks honour central revocation. Integrates with Salto KS cloud or behind a Paxton / Suprema head-end.',
      anchorSlug: 'salto',
    },
    {
      h3: 'Integrated PSIM platforms (multi-site CNI)',
      manufacturer: 'Genetec / Milestone / AMAG',
      bestForLine: 'Best for multi-site CNI estates and central control rooms that need a single situational-awareness layer.',
      bodyCopy:
        'Where a client runs multiple disparate systems — access, CCTV, intruder, perimeter, BMS and fire — we design and integrate a PSIM (Physical Security Information Management) overlay using Genetec Security Center, Milestone XProtect Corporate or AMAG Symmetry. Single operator view, cause-and-effect rules, automated incident workflow and complete audit replay.',
      anchorSlug: 'psim',
    },
  ],
  closingSoftCTA:
    'Not sure which combination fits your site, your insurer and your IT policy? Book a free consultation — we\'ll walk you through the trade-offs in 30 minutes, no obligation.',

  // Industries
  industriesHeadline: 'Where we install security and access control',
  industries: [
    { iconSlug: 'office',     sectorName: 'Commercial offices',     body: 'Multi-tenant fit-outs, head-office estates and Cat-A/Cat-B integration with the landlord base-build system.' },
    { iconSlug: 'financial',  sectorName: 'Financial services',     body: 'Trading floors, dealing rooms and DR sites — Peterborough Court being our flagship Mace-led example.' },
    { iconSlug: 'datacentre', sectorName: 'Data centres',           body: 'Biometric hall access, cage-level dual-credential control, integrated ANPR and ARC-linked intruder.' },
    { iconSlug: 'nhs',        sectorName: 'NHS Trusts',             body: 'Drug-store and theatre access control, safeguarded entry and lockdown integration across acute trusts.' },
    { iconSlug: 'university', sectorName: 'Higher education',       body: 'Campus-wide Paxton/Suprema rollouts with student-card integration and lecture-theatre scheduling.' },
    { iconSlug: 'warehouse',  sectorName: 'Logistics & warehousing', body: 'ANPR-controlled yards, dock-door interlock and goods-in/out audit aligned with your WMS.' },
    { iconSlug: 'public',     sectorName: 'Public sector & local authority', body: 'Civic centres, leisure facilities and housing-team field offices with central management.' },
    { iconSlug: 'cni',        sectorName: 'Critical national infrastructure', body: 'PSIM-integrated multi-site estates with vetted BS 7858 personnel and ARC-linked verified response.' },
  ],

  // Process
  processHeadline: 'How we deliver a security and access control system',
  steps: [
    {
      h3: '1. Free site survey',
      bodyCopy:
        'An NSI-qualified engineer walks the site, identifies doors and camera positions, audits existing infrastructure and cabling routes, reviews insurer or police URN requirements, and maps integration points with HR, visitor management and your IT network.',
      deliverable: 'Written site report + door schedule + camera field-of-view plan + indicative budget range',
      indicativeTiming: 'Booked within 5 working days',
    },
    {
      h3: '2. Design & fixed quote',
      bodyCopy:
        'We produce a BS EN 50131 / 50132-aligned design pack — door schedule, head-end architecture, network diagram, camera coverage drawings, ARC signalling path and a Cyber Essentials-aligned hardening spec — with a fixed-price quote and programme.',
      deliverable: 'NSI Gold-aligned design pack + fixed quote with programme',
      indicativeTiming: 'Within 10 working days of survey',
    },
    {
      h3: '3. Install',
      bodyCopy:
        'Our directly-employed, BS 7858-vetted engineers install readers, controllers, cameras, panels and network infrastructure with minimal disruption to a live estate. Most installs run out-of-hours or in agreed maintenance windows; we coordinate with your IT team on VLAN and certificate provisioning.',
      deliverable: 'Installation works + commissioning of every door and every camera',
      indicativeTiming: 'Typically 2–6 weeks on site, depending on scope',
    },
    {
      h3: '4. Commission & handover',
      bodyCopy:
        'Door-by-door and camera-by-camera commissioning to BS EN 50132-7, ARC connection testing, cause-and-effect proving, end-user training and an audit-ready evidence pack including NSI certification, asset register and as-built drawings.',
      deliverable: 'NSI Gold commissioning certificate + evidence pack + handover training',
      indicativeTiming: '2–5 days at the end of install',
    },
  ],
  processClosingLine:
    'When you\'ve seen the design and the price, you decide. No obligation up to that point.',

  // Pricing
  pricingHeadline: 'Honest pricing bands',
  pricingBands: [
    {
      bandName: 'Small commercial, single site',
      scopeQualifier: 'Access control on up to ~15 doors plus a Grade 2/3 intruder system, single site',
      priceRange: '£4,000 – £10,000',
      whatsIncluded: 'Paxton or equivalent controllers, readers, REX hardware, intruder panel, detection, ARC connection, commissioning, evidence pack',
      whatsExtra: 'Containment / cabling beyond accessible voids, ad-hoc builder\'s work, after-hours premium',
    },
    {
      bandName: 'Mid commercial, integrated access + CCTV + intruder',
      scopeQualifier: 'Up to ~60 doors, 16–64 IP cameras, Grade 3 intruder, single head-end',
      priceRange: '£10,000 – £40,000',
      whatsIncluded: 'All of the above plus IP CCTV (Hikvision/Axis), NVR with RAID, switch infrastructure, HR/visitor integration, full Cyber Essentials hardening',
      whatsExtra: 'Phased install over multiple windows, PSIM overlay, biometric reader upgrades, ANPR add-on',
    },
    {
      bandName: 'Multi-site / CNI',
      scopeQualifier: 'Multi-site PSIM, biometric, ANPR, perimeter detection, ARC-verified response',
      priceRange: '£40,000 – £200,000+',
      whatsIncluded: 'All of the above plus PSIM platform (Genetec / Milestone / AMAG), multi-site replication, BS 7858-vetted commissioning, 24/7 NSI Gold ARC',
      whatsExtra: 'Bespoke API integrations, custom analytics, control-room build, ongoing penetration testing',
    },
  ],
  priceDrivers: [
    'Door count and reader type (proximity vs biometric vs mobile-credential)',
    'Camera count, resolution (1080p / 4K) and on-camera analytics requirement',
    'Intruder grade (Grade 2 vs Grade 3) and police URN / insurer driven signalling path',
    'Integration scope — HR, visitor management, BMS, fire alarm, existing PSIM',
    'Cabling and containment difficulty — listed, occupied or high-rise sites add cost',
    'Monitoring and maintenance — ARC-linked verified response vs unmonitored',
  ],
  humanCaveat:
    'Every site is different — these are the ranges we see most often on real UK commercial jobs. Your site survey produces a fixed quote you can rely on. We don\'t inflate door counts, we don\'t bundle in your maintenance contract, and we\'ll tell you which platform we\'d specify even if it\'s not the one with the biggest margin.',
  maintenancePriceCallout:
    'NSI Gold service contracts from £450 per visit.',

  // Social proof + quote form
  flagshipCaseStudy: {
    title: 'Peterborough Court — Fleet Street, City of London',
    summary:
      'Integrated Paxton access control and Hikvision IP CCTV delivered alongside our fire alarm and gas suppression packages under Mace as main contractor (2025). Coordinated with live trading-floor operations, tenant moves and the landlord base-build security platform throughout — full NSI Gold evidence pack issued on day of completion.',
    href: '/case-studies/peterborough-court/',
    outcomeStat: 'Zero handover defects · single-pane access + CCTV across the estate',
  },
  namedClients: [
    { name: 'Mace',                logo: '/assets/clients/mace.jpeg' },
    { name: 'Wates',               logo: '/assets/clients/wates.png' },
    { name: 'CBRE',                logo: '/assets/clients/cbre.svg' },
    { name: 'Equans',              logo: '/assets/clients/equans.png' },
    { name: 'Integral UK',         logo: '/assets/clients/integral-uk.jpeg' },
    { name: 'Apleona',             logo: '/assets/clients/apleona.png' },
    { name: 'NHS Chelsea & Westminster', logo: '/assets/clients/nhs-chelwest.png' },
    { name: 'Kingston University', logo: '/assets/clients/kingston-university.svg' },
    { name: 'Royal Borough of Kensington & Chelsea', logo: '/assets/clients/rbkc.svg' },
    { name: 'Aviva Investors',     logo: '/assets/clients/aviva.png' },
  ],
  testimonial: {
    quote:
      'Gemini integrated the access control, CCTV and intruder packages without a single tenant impact. Their commissioning evidence pack passed the landlord\'s security audit first time — rare on a site like this.',
    author: 'Project Director',
    role: 'Senior Construction Lead',
    org: 'Mace (Peterborough Court delivery)',
  },
  quoteFormHeadline: 'Request your security system quote',
  spaceTypeOptions: [
    'Commercial office / multi-tenant',
    'Warehouse / logistics',
    'Data centre / comms',
    'NHS / clinical',
    'Education / campus',
    'Other — tell us in the brief',
  ],
  responsePromise: 'Survey arranged within 48h. Fixed quote within 5 working days. No obligation.',
  quoteRoutingMailbox: 'quotes-security@geminiampm.co.uk',
  quoteSubjectPrefix: '[QUOTE — Security & Access Control]',

  // Maintenance hook + form 3
  maintenanceHeadline: 'Take over your existing security maintenance',
  maintenanceRegulatoryAnchor:
    'NSI Gold-audited annual servicing to BS EN 50131 (intruder), BS EN 50132 (CCTV) and BS 8418 (detector-activated CCTV) — including detection circuit verification, camera focus and retention audit, ARC path test and battery/standby check.',
  contractInclusions: [
    'Annual NSI Gold service visit + remote health-check between visits',
    '4-hour response SLA for any fault affecting detection, recording or ARC signalling',
    'Audit-ready evidence pack issued within 5 working days of every visit',
  ],
  takeOverMessage:
    'Switching maintenance provider is straightforward — we\'ll audit your existing system, identify any compliance gaps your incumbent missed, port the police URN where relevant, and run continuity from day one. No long contract lock-in, no hidden re-commissioning clauses.',
  maintenanceRoutingMailbox: 'service@geminiampm.co.uk',
  maintenanceSubjectPrefix: '[MAINT — Security & Access Control]',

  // Why Gemini
  trustPillars: [
    { title: 'NSI Gold since 1997',            body: 'Independently third-party audited every 12 months on design, install, commissioning and maintenance — the highest UK security industry standard.' },
    { title: 'Employee-owned',                 body: 'Our engineers own the business. That\'s why our commissioning packs come back clean and we don\'t over-specify cameras to chase margin.' },
    { title: 'Directly employed, BS 7858-vetted', body: 'No sub-contracted labour on site. Every engineer is BS 7858 security-vetted, and the person who quoted is the person who supervised the install.' },
    { title: 'Audit-ready evidence pack',      body: 'Every job leaves with an NSI Gold-aligned evidence pack — door schedule, camera field-of-view, ARC path test, Cyber Essentials hardening — that satisfies your insurer and your IT auditor.' },
    { title: 'Out-of-hours as standard',       body: 'Most of our work is on live, occupied estates. We\'re used to working around your tenants, your trading hours and your shift patterns.' },
    { title: '24/7 NSI Gold ARC response',     body: 'NSI Gold-approved Alarm Receiving Centre connection means a verified human response within minutes of any activation, with police URN where eligible.' },
  ],
  accreditationStrip: [
    { shortName: 'NSI Gold',         longName: 'NSI Gold (Security + Monitoring)',         href: '/accreditations/nsi-gold/',         thumb: '/assets/certs/thumbs/nsi-gold.png' },
    { shortName: 'SSAIB',            longName: 'SSAIB Approved Contractor',                 href: '/accreditations/ssaib/',            thumb: '/assets/certs/thumbs/ssaib.png' },
    { shortName: 'CHAS',             longName: 'CHAS Premium Plus',                         href: '/accreditations/chas/',             thumb: '/assets/certs/thumbs/chas.png' },
    { shortName: 'Constructionline', longName: 'Constructionline Gold',                     href: '/accreditations/constructionline/', thumb: '/assets/certs/thumbs/constructionline.png' },
    { shortName: 'Cyber Essentials', longName: 'Cyber Essentials Certified',                href: '/accreditations/cyber-essentials/', thumb: '/assets/certs/thumbs/cyber-essentials.png' },
  ],
  eotCallout:
    'Gemini AMPM transitioned to an Employee Ownership Trust in 2024. The 50+ engineers who do the work are also the owners — that aligns the install quality with the long-term reputation in a way no agency-style sub-contracting can.',
  namedEngineer: {
    name: 'Senior Security Engineer',
    role: 'Security & access lead',
    qual: 'NSI Gold-registered · BS 7858-vetted · Paxton Platinum · 15+ years on UK commercial integrated security',
  },

  // FAQ — real buyer language
  faqs: [
    {
      question: 'How much does a commercial access control system cost?',
      answer:
        'For a small commercial site with access control on up to ~15 doors plus a Grade 2/3 intruder system, £4,000–£10,000 is typical. A mid-size integrated system covering ~60 doors plus 16–64 IP CCTV cameras runs £10,000–£40,000. Multi-site PSIM-integrated CNI deployments start at £40,000 and can exceed £200,000 depending on scope. Your site survey produces a fixed price — see the pricing bands section above for what moves the number.',
    },
    {
      question: 'Do we need NSI Gold or will SSAIB be enough for our insurer?',
      answer:
        'Both NSI Gold and SSAIB are recognised by UK insurers and police forces operating the URN scheme. NSI Gold is the more demanding audit and is usually preferred for higher-grade commercial, CNI and financial-services estates. Gemini hold both. The right answer depends on your insurer\'s wording — we check that for you in the survey before designing to the wrong standard.',
    },
    {
      question: 'How long does an access control + CCTV install take?',
      answer:
        'A small single-site install is typically 2–3 weeks on site. A mid-size integrated install across a commercial floor or two is 4–6 weeks. Larger multi-site or PSIM deployments are usually phased over several months in agreed maintenance windows. The clock starts after the design pack is signed off — design and procurement add 3–5 weeks before site work begins.',
    },
    {
      question: 'Can you integrate with our existing access control, CCTV or HR system?',
      answer:
        'Yes. We routinely integrate Paxton, Suprema, Honeywell, Avigilon, Genetec, Milestone, AMAG, Salto and others — either as the head-end or as a sub-system behind a different head-end. We integrate to HR systems for joiner/leaver automation (Workday, SAP SuccessFactors, BambooHR) and to visitor-management platforms (Proxyclick, SwipedOn, OfficeRnD). We tell you up-front where integration is genuinely seamless and where it needs middleware.',
    },
    {
      question: 'Will the CCTV system pass GDPR and our IT security audit?',
      answer:
        'Yes. Every CCTV deployment ships with documented camera fields-of-view, retention period, lawful-basis statement and DPIA support material. We apply Cyber Essentials-aligned hardening to every camera and NVR before handover — default passwords changed, firmware current, unused services disabled, certificate-based 802.1X where the IT team requires it. ICO CCTV Code-of-Practice templates are part of the evidence pack.',
    },
    {
      question: 'What certification do we get at handover?',
      answer:
        'An NSI Gold-aligned commissioning certificate, door-by-door and camera-by-camera test record, ARC path-test results, asset register, as-built drawings, network diagram, Cyber Essentials hardening checklist, operations and maintenance manuals, and a training record for your facilities team. The full pack is delivered within 5 working days of completion and is suitable for insurer audit and principal designer sign-off.',
    },
    {
      question: 'Can you take over our existing security maintenance contract?',
      answer:
        'Yes — we run a free transition audit when we take over an existing system. That covers NSI compliance gap analysis, asset register reconciliation, ARC signalling re-pointing, police URN porting where eligible, and a one-off catch-up service if anything has slipped through your previous contractor. No long lock-in on our contracts; cancel with 90 days\' notice.',
    },
    {
      question: 'Do you provide 24/7 monitored response?',
      answer:
        'Yes. We connect intruder and detector-activated CCTV systems via dual-path signalling (Dualcom or CSL) to an NSI Gold-approved Alarm Receiving Centre with verified human response within minutes, and police URN issue where the site meets ACPO criteria. Out-of-hours engineer call-out runs from the same service contract.',
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
    { label: 'Passive Fire Protection →',           href: '/passive-fire/' },
    { label: 'Ventilation & Air Quality →',     href: '/ventilation/' },
    { label: 'Mechanical & Electrical Services →', href: '/mechanical-electrical/' },
  ],
};

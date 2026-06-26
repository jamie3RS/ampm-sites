// Gemini AMPM — content model.
// VERBATIM port of ../gemini-prototype-src/g-data.jsx. Same arrays, same
// strings, same HTML entities. The prototype is source-of-truth.

// ─── Colour map (the four-colour group meridian) ─────────────────────────────
export const COL = {
  orange: 'var(--m-orange)',
  green:  'var(--m-green)',
  blue:   'var(--m-blue)',
  purple: 'var(--m-purple)',
} as const;

// ─── Types (so callers get autocomplete; runtime is identical to the prototype)
export interface PillarChild { name: string; slug: string; }
export interface FAQ { q: string; a: string; }
export interface Pillar {
  id: string;
  no: string;
  name: string;
  full: string;
  slug: string;
  colour: string;
  time: string;
  shift: string;
  short: string;
  intro: string;
  children: PillarChild[];
  drivers: string;
  /** SEO override — defaults to `${full} — Gemini AMPM` if absent. Keep ≤60 chars. */
  metaTitle?: string;
  /** SEO override — defaults to `short` truncated to 155 chars. */
  metaDescription?: string;
  /** Optional FAQ block for FAQPage schema + on-page FAQ section. */
  faqs?: FAQ[];
}
export interface Sector { name: string; slug: string; colour: string; blurb: string; }
export interface Proof  { big: string; lbl: string; }
export interface Why    { n: string; t: string; d: string; }
export interface NightLogEntry { t: string; e: string; }
export interface Client {
  nm: string;
  logo: string | null;
  logoMode?: 'keep' | 'invert';
  link: string | null;
  featured: boolean;
  sector: string;
  what: string;
}
export interface ClientSector { id: string; name: string; }
export interface Manufacturer {
  nm: string;
  logo: string | null;
  logoMode?: 'keep' | 'invert';
  link: string | null;
  featured: boolean;
  cat: string;
  what: string;
}
export interface ManufacturerCategory { id: string; name: string; }
export interface NewsItem {
  cat: string;
  date: string;
  slug: string;
  title: string;
  teaser: string;
  image?: string;
  /** Optional full article body as HTML (paragraphs, headings, lists). When
      absent the article page renders a "full article coming soon" placeholder. */
  body?: string;
  /** Optional named author byline (defaults to "Gemini AMPM team"). */
  author?: string;
}
export interface CaseItem { tag: string; sector: string; scope: string; image?: string; }
export interface Accred {
  t: string;
  slug: string;
  d: string;
  h1: string;
  pdf: string | null;
  thumb: string | null;
  weight: 'strong' | 'moderate' | 'weak';
  pillars: string[];
  verify: string;
  verify_label: string;
  meta_title: string;
  meta_desc: string;
  lede: string;
  covers: string[];
  means: string;
}

// ─── PILLARS — seven service pillars; slugs mirror live geminiampm.co.uk URLs
export const PILLARS: Pillar[] = [
  {
    id: 'fire',
    no: '01',
    name: 'Fire Systems',
    full: 'Fire Systems',
    slug: 'fire-alarm-evacuation-systems',
    colour: COL.orange,
    time: '23:00',
    shift: 'Systems live',
    metaTitle: 'Fire Alarm Installer UK — BAFE Registered Since 1997 | Gemini AMPM',
    metaDescription: 'BS 5839-1 fire alarms, AOV smoke extract, disabled refuge and PAVA — designed, installed and 24/7 monitored. BAFE-registered (ID 302260) since 1997.',
    short: 'Fire alarms and evacuation, AOV smoke extract, disabled refuge and PAVA &mdash; designed, installed and maintained to current British standards, with monitored response when the alarm actually sounds.',
    intro: 'Fire systems, end to end &mdash; <strong>fire detection and evacuation alarms, AOV smoke extract, disabled refuge and PAVA, designed, installed, commissioned and maintained to the current British standards that apply to each system type</strong>. From a single panel replacement to a campus-wide addressable system, with planned maintenance and 24/7 monitored response behind it. An answered alarm, not just a recording.',
    children: [
      { name: 'Fire Extinguishers', slug: 'fire-alarm-evacuation-systems/fire-extinguishers' },
      { name: 'Fire Alarm Installation', slug: 'fire-alarm-evacuation-systems/fire-alarm-installation' },
      { name: 'Fire Alarm Service &amp; Maintenance', slug: 'fire-alarm-evacuation-systems/fire-alarm-service-maintenance' },
      { name: 'Evacuation Alert Systems', slug: 'fire-alarm-evacuation-systems/fire-alarm-evacuation-alert-systems' },
      { name: 'Wireless Systems', slug: 'fire-alarm-evacuation-systems/fire-alarm-wireless-systems' },
      { name: 'Fire Alarm Monitoring', slug: 'fire-alarm-evacuation-systems/fire-alarm-monitoring' },
      { name: 'Hybrid Systems', slug: 'fire-alarm-evacuation-systems/fire-alarm-hybrid-systems' },
      { name: 'Nimbus Connect &mdash; real-time monitoring', slug: 'fire-alarm-evacuation-systems/nimbus-connect-real-time-fire-system-monitoring-control' },
      { name: 'Fire Alarm Remedial Works', slug: 'passive-fire-systems/fire-alarm-remedial-works' },
    ],
    drivers: 'BS&nbsp;5839-1:2025 brings the latest revision into force, the Building Safety Act tightens the golden thread, and Awaab&rsquo;s Law reshapes landlord response times. Detection, evacuation and monitoring are no longer optional line items.',
  },
  {
    id: 'passive',
    no: '02',
    name: 'Passive Fire',
    full: 'Passive Fire Systems',
    slug: 'passive-fire-systems',
    colour: COL.purple,
    time: '01:30',
    shift: 'Holding the line',
    metaTitle: 'Passive Fire Protection Contractors UK — FIRAS Certified | Gemini AMPM',
    metaDescription: 'Fire doors, fire stopping, compartmentation and barriers — FIRAS-certificated installers. Building Safety Act golden-thread evidence with every job.',
    short: 'Fire doors, fire stopping, compartmentation, barriers and risk assessments &mdash; the protection that works without anyone pressing a button.',
    intro: 'Passive fire protection is the part of the building that holds the line on its own &mdash; <strong>compartmentation, fire stopping, fire doors and barriers</strong> that contain a fire long enough for everyone to get out. Surveyed, installed and certificated, with audit-ready records the responsible person can actually hand over.',
    children: [
      { name: 'Fire Doors', slug: 'passive-fire-systems/fire-doors' },
      { name: 'Fire Stopping', slug: 'passive-fire-systems/fire-stopping' },
      { name: 'Compartmentation &amp; Fire Stopping', slug: 'passive-fire-systems/compartmentation-and-fire-stopping' },
      { name: 'Fire Safety Signage', slug: 'passive-fire-systems/fire-safety-signage' },
      { name: 'Fire Risk Assessments', slug: 'passive-fire-systems/fire-risk-assessments' },
      { name: 'Fire Barriers', slug: 'passive-fire-systems/fire-barriers' },
    ],
    drivers: 'Post-Grenfell scrutiny, the Building Safety Act and Higher-Risk Building duties have put compartmentation and fire-door integrity under the spotlight. Landlords and FM teams need surveyed, evidenced, audit-ready passive fire works.',
  },
  {
    id: 'security',
    no: '03',
    name: 'Security &amp; Access',
    full: 'Security &amp; Access Control',
    slug: 'security-access-control',
    colour: COL.green,
    time: '02:47',
    shift: 'On watch',
    metaTitle: 'Security & Access Control — NSI Gold Installer UK | Gemini AMPM',
    metaDescription: 'Intruder alarms, CCTV, access control and 24/7 ARC-monitored response — NSI Gold approved installer. From SME estates to CNI multi-site security.',
    short: 'Intruder alarms, CCTV, access control, door entry and 24/7 monitoring &mdash; the systems that stay awake after the last person leaves.',
    intro: 'Security for buildings that don&rsquo;t stop mattering at 6pm &mdash; <strong>intruder alarms, CCTV, access control, door entry and monitored response</strong>. Designed, installed and watched, so an event at 2am is answered and attended, not just recorded for the morning.',
    children: [
      { name: 'CCTV &amp; Surveillance', slug: 'security-access-control/security-systems-cctv' },
      { name: 'Door Entry', slug: 'security-access-control/security-systems-door-entry' },
      { name: 'Intruder Alarms', slug: 'security-access-control/intruders-alarms' },
      { name: 'Control Centre &amp; Monitoring', slug: 'security-access-control/control-centre-monitoring' },
      { name: 'Access Control', slug: 'security-access-control/security-systems-access-control' },
      { name: 'Security Remedial Works', slug: 'security-access-control/security-systems-remedial-works' },
    ],
    drivers: 'Integrated, monitored security is increasingly written into FM contracts and insurance requirements &mdash; CCTV with answered response, access control that ties to the fire strategy, and a control centre that does more than store footage.',
  },
  {
    id: 'ventilation',
    no: '04',
    name: 'Ventilation &amp; Air Quality',
    full: 'Ventilation &amp; Air Quality',
    slug: 'ventilation-air-quality',
    colour: COL.blue,
    time: '03:55',
    shift: 'Keeping it breathing',
    metaTitle: 'Ventilation, AOV & Air Quality — Commercial UK | Gemini AMPM',
    metaDescription: 'AHU/ductwork install, AOV smoke extract, fire-damper testing, TR/19 hygiene and commissioning across UK commercial estates. Statutory testing covered.',
    short: 'AHU and ductwork install, service and repair, fire-damper testing, ventilation hygiene, AOV smoke extract, air conditioning and commissioning.',
    intro: 'The air system is life-safety and building-performance at once &mdash; <strong>AHU and ductwork, AOV smoke extract, fire-damper testing, ventilation hygiene and air conditioning</strong>. Installed, serviced, tested and commissioned so smoke moves the right way in an emergency and the building breathes properly the rest of the time.',
    children: [
      { name: 'AHU &amp; Duct Installation', slug: 'ventilation-air-quality/ventilation-systems-ahu-duct-install' },
      { name: 'Service &amp; Repair', slug: 'ventilation-air-quality/ventilation-systems-service-repair' },
      { name: 'Fire Damper Testing', slug: 'ventilation-air-quality/fire-damper-testing' },
      { name: 'Ventilation Hygiene', slug: 'ventilation-air-quality/ventilation-hygiene' },
      { name: 'AOV Smoke Extract Systems', slug: 'ventilation-air-quality/aov-smoke-extract-systems' },
      { name: 'Air Conditioning', slug: 'ventilation-air-quality/air-conditioning' },
      { name: 'Commissioning', slug: 'ventilation-air-quality/commissioning' },
      { name: 'Pressure Testing', slug: 'ventilation-air-quality/pressure-testing' },
    ],
    drivers: 'Fire-damper testing and AOV smoke-extract maintenance are statutory obligations that are routinely missed. Ventilation hygiene (TR/19) and indoor air quality are rising up the FM agenda for healthcare, hospitality and care environments.',
  },
  {
    id: 'gas',
    no: '05',
    name: 'Gas Suppression',
    full: 'Gas Suppression Systems',
    slug: 'gas-suppression-systems',
    colour: COL.orange,
    time: '04:30',
    shift: 'Mission-critical',
    metaTitle: 'Gas Suppression Systems UK — Data Centres, Comms | Gemini AMPM',
    metaDescription: 'Inert and chemical gas suppression — FM-200, Novec 1230, IG-55 — for data centres, comms rooms, archives. Design, install, integrity test, maintain.',
    faqs: [
      {
        q: 'What is a gas suppression system, and when do I need one?',
        a: 'A gas suppression system extinguishes a fire by displacing or absorbing oxygen and heat with a clean agent &mdash; no water, no residue, no clean-up. They&rsquo;re used wherever water-based suppression would do more damage than the fire itself: data centres, comms rooms, switchgear rooms, archives, museum stores, MRI rooms and laboratories. If your asset register includes equipment that can&rsquo;t be replaced overnight or data that can&rsquo;t be re-keyed, gas is the right answer.',
      },
      {
        q: 'What&rsquo;s the difference between inert gas (IG-55, Inergen) and chemical agents (FM-200, Novec 1230)?',
        a: '<strong>Inert gas</strong> (e.g. ProInert IG-55, Inergen IG-541) is a blend of naturally-occurring gases &mdash; argon, nitrogen, CO&sub2; &mdash; that reduces oxygen below the combustion threshold while remaining breathable. Larger cylinder banks, slower discharge, environmentally neutral. <strong>Chemical agents</strong> (FM-200 / HFC-227ea, Novec 1230) are synthetic clean agents stored as a liquid that vapourise on discharge, absorbing heat and interrupting the combustion reaction. Smaller cylinder count, faster discharge (typically 10 seconds), but higher global-warming potential (FM-200) or premium cost (Novec 1230). Choice depends on room volume, environmental policy and budget.',
      },
      {
        q: 'How is a system designed and how long does it take?',
        a: 'A site survey establishes room volume, integrity, ventilation, occupancy and existing detection. From the survey we model agent quantity to <strong>BS EN 15004</strong> (gaseous extinguishing systems) and BS&nbsp;6535-2 (clean-agent selection), specify the cylinder room, draft pipework and nozzles, and integrate the detection and release control. Typical timelines: small single-zone install 2&ndash;3 weeks on site; mid multi-zone 4&ndash;6 weeks; large data centres phased over maintenance windows. Design and procurement add 4&ndash;6 weeks before site work begins.',
      },
      {
        q: 'How much does a gas suppression system cost?',
        a: 'Indicative ranges from real UK commercial jobs: small single-zone server room &pound;15k&ndash;&pound;25k; mid multi-zone data centre &pound;40k&ndash;&pound;80k; large data centre with redundant agents and full integrity reporting &pound;80k&ndash;&pound;200k+. Drivers: room volume (the single biggest factor), agent choice, enclosure integrity, integration scope with the existing fire alarm and BMS, access difficulty, and commissioning depth. Annual integrity testing and servicing typically from &pound;1,800 per zone. Your site survey produces a fixed quote.',
      },
      {
        q: 'Will a gas suppression system harm staff who are in the room when it discharges?',
        a: 'Properly designed systems are <strong>designed for human-occupiable spaces</strong> at their design concentration. Inert systems reduce oxygen to a level that no longer supports combustion but remains breathable; Inergen specifically contains a small CO&sub2; component that stimulates deeper breathing during discharge. Chemical agents at design concentration are safe for occupants. All systems include a pre-discharge alarm with an evacuation period so the room can be vacated before agent release.',
      },
      {
        q: 'Will a gas suppression system work alongside our existing fire alarm?',
        a: 'Yes &mdash; we integrate with every major fire alarm platform (Apollo, Hochiki, Advanced, Gent Vigilon, Honeywell). The fire alarm provides cross-zoned detection; the suppression release control sits alongside it on its own listed-and-approved release panel, with the cause-and-effect engineered to require confirmation from two independent detectors before discharge. That prevents accidental discharge from a single false alarm.',
      },
      {
        q: 'How often does a gas suppression system need to be serviced and tested?',
        a: 'BS EN 15004 / BS ISO 14520 require an annual service: cylinder weight check, agent batch verification, detection circuit verification and discharge-release proving. Hose pressure tests are typically every 5 years. <strong>Room integrity testing</strong> (often called the &ldquo;door fan test&rdquo;) should be done at install, then every 5 years or after any alteration that might affect room sealing &mdash; cable penetrations, new ductwork, removed walls. Servicing contracts from &pound;1,800 per zone per year.',
      },
      {
        q: 'Can you take over our existing gas suppression maintenance contract?',
        a: 'Yes. We run a <strong>free transition audit</strong> when we take over an existing system &mdash; compliance gap analysis, asset register reconciliation, and a one-off catch-up service if anything has slipped through the previous contractor. Our maintenance contracts have no long lock-in (90 days&rsquo; notice) and no hidden recharge clauses. Whatever your incumbent has on the system, we&rsquo;ll service it &mdash; we&rsquo;re cross-trained on every major manufacturer.',
      },
    ],
    short: 'Inert and chemical gas suppression &mdash; design, install, repair and maintenance for data centres, comms rooms and irreplaceable assets.',
    intro: 'When water would do more damage than the fire, the answer is gas &mdash; <strong>inert and chemical suppression for data centres, comms rooms, archives and mission-critical plant</strong>. Designed, installed, integrity-tested and maintained, with commissioning and client training delivered on the day. Our benchmark clients call us their benchmark contractor.',
    children: [
      { name: 'Inert Gas Suppression', slug: 'gas-suppression-systems/inert-gas-suppression-systems' },
      { name: 'Chemical Gas Suppression', slug: 'gas-suppression-systems/chemical-gas-suppression-systems' },
      { name: 'Maintenance &amp; Servicing', slug: 'gas-suppression-systems/maintenance-and-servicing-of-gas-suppression-systems' },
      { name: 'System Installations', slug: 'gas-suppression-systems/gas-suppression-system-installations' },
      { name: 'System Repairs', slug: 'gas-suppression-systems/gas-suppression-system-repairs' },
      { name: 'System Maintenance', slug: 'gas-suppression-systems/gas-suppression-system-maintenance' },
      { name: 'Gas Suppression FAQ', slug: 'gas-suppression-systems/gas-suppression-system-faq' },
    ],
    drivers: 'Data-centre growth and the value of irreplaceable digital and physical assets are driving demand for clean-agent suppression that protects without water damage &mdash; designed and integrity-tested to a standard that survives audit.',
  },
  {
    id: 'smallworks',
    no: '06',
    name: 'Small Works &amp; Remedials',
    full: 'Small Works &amp; Project Remedials',
    slug: 'small-works-project-remedials',
    colour: COL.green,
    time: '05:20',
    shift: 'Closing actions',
    metaTitle: 'Small Works & Remedials — Fast Compliance Close-Out | Gemini AMPM',
    metaDescription: 'Closing out fire risk assessment actions, snags and minor projects — by the team that already knows the building. No new contract needed.',
    short: 'The remedial actions, snags and small projects that close out a compliance report &mdash; handled quickly, by the team that already knows the building.',
    intro: 'Most compliance reports end with a list of actions. <strong>Small Works &amp; Project Remedials is how those actions get closed</strong> &mdash; the remedials, snags and smaller projects across fire, security, ventilation and passive fire, handled by the team that already knows the building, without standing up a whole new contract.',
    children: [],
    drivers: 'Fire risk assessments, condition surveys and audits generate a constant stream of remedial actions. Clients want one accountable contractor to close them out &mdash; not a new procurement exercise for every line item.',
  },
  {
    id: 'me',
    no: '07',
    name: 'Mechanical &amp; Electrical',
    full: 'Mechanical &amp; Electrical Services',
    slug: 'mechanical-electrical-services',
    colour: COL.blue,
    time: '05:50',
    shift: 'First shift prep',
    metaTitle: 'M&E Services — Power, Heating, Controls UK | Gemini AMPM',
    metaDescription: 'Mechanical and electrical works that tie life-safety systems into the building — power, BMS, lighting, plant rooms. Coordinated with fire and security.',
    short: 'Mechanical and electrical services that tie the life-safety and building systems together &mdash; power, distribution and supporting M&amp;E.',
    intro: 'The mechanical and electrical layer that the life-safety systems depend on &mdash; <strong>power, distribution, supporting M&amp;E and integration</strong> across fire, security and ventilation. Delivered in coordination with the rest of the building so the safety-critical systems have the infrastructure they need.',
    children: [],
    drivers: 'Life-safety systems are only as reliable as the M&amp;E behind them. Clients increasingly want the supporting mechanical and electrical works held by the same accountable contractor, not split across trades.',
  },
];

export const heroPillars = ['fire', 'security', 'ventilation', 'passive'] as const;

export const SECTORS: Sector[] = [
  { name: 'Residential &amp; Social Housing', slug: 'sector/residential-social-housing', colour: COL.green,
    blurb: 'Ensuring safe and secure living environments for housing associations, landlords, and developers.' },
  { name: 'IT Data Centres', slug: 'sector/it-data-centres', colour: COL.blue,
    blurb: 'Securing mission-critical environments with fire suppression and high-security access control solutions.' },
  { name: 'Restaurants &amp; Hotels', slug: 'sector/restaurants-hotels', colour: COL.orange,
    blurb: 'Helping hospitality businesses meet safety standards while maintaining seamless operations.' },
  { name: 'Commercial &amp; Retail Buildings', slug: 'sector/commercial-and-retail-buildings', colour: COL.purple,
    blurb: 'Compliant fire, gas suppression, passive fire, security and ventilation for office blocks, retail parks and mixed-use developments.' },
  { name: 'Warehouses &amp; Storage Units', slug: 'sector/warehouses-storage-units', colour: COL.blue,
    blurb: 'Protecting high-capacity warehouses and storage facilities with systems built around stock, access and continuity.' },
  { name: 'Care Homes', slug: 'sector/care-homes', colour: COL.green,
    blurb: 'Compliant fire alarms, security, passive fire protection and specialist extract cleaning for kitchens and laundries.' },
  { name: 'Healthcare &amp; NHS Hospitals', slug: 'sector/healthcare-facilities-including-nhs-hospitals', colour: COL.orange,
    blurb: 'Supporting environments where patient safety, clinical continuity and controlled evacuation strategies are critical.' },
  { name: 'Educational Institutions', slug: 'sector/educational-institutions', colour: COL.purple,
    blurb: 'Keeping schools, colleges and campuses safe without disrupting the open, welcoming environments students need.' },
];

export const PROOF: Proof[] = [
  { big: '1997',    lbl: 'Protecting the South East&rsquo;s buildings since' },
  { big: 'EOT',     lbl: 'Employee-owned &mdash; every member has a stake in the result' },
  { big: '24/7',    lbl: 'Monitored response &mdash; an answered alarm, every time' },
  { big: 'UK-WIDE', lbl: 'Commercial &amp; public-sector work across the UK' },
];

export const WHY: Why[] = [
  { n: '01', t: 'Employee-owned &amp; trusted', d: 'As an Employee Ownership Trust, every team member shares an investment in delivering quality service and outstanding results &mdash; not a brief, an ownership stake.' },
  { n: '02', t: 'Safety &amp; compliance first', d: 'BSI and regulatory-compliant solutions across BS&nbsp;5839, the Building Safety Act golden thread and the standards your audit teams actually check against.' },
  { n: '03', t: 'Specialists in large-scale buildings', d: 'Hospitals, data centres, social housing, leisure centres and commercial estates &mdash; complex, safety-critical environments delivered with minimal disruption to live operations.' },
  { n: '04', t: 'Innovative &amp; sustainable', d: 'As buildings evolve, so do we &mdash; energy-efficient systems, smart building integration and sustainable fire and security technologies.' },
];

export const NIGHTLOG: NightLogEntry[] = [
  { t: '23:41', e: 'Perimeter check &mdash; all zones sealed. <strong>Armed.</strong>' },
  { t: '01:12', e: 'Zone 4 motion &mdash; fox on the loading bay. <strong>Verified, stood down.</strong>' },
  { t: '02:47', e: 'Smoke head 2F-11 &mdash; pre-alarm. <strong>Engineer dispatched, 18&nbsp;min.</strong>' },
  { t: '04:30', e: 'Suppression panel heartbeat &mdash; comms room nominal. <strong>Logged.</strong>' },
  { t: '06:02', e: 'Systems disarmed for first shift. <strong>Handed back.</strong>' },
];

export const CLIENT_SECTORS: ClientSector[] = [
  { id: 'tier-1-contractors',    name: 'Tier-1 main contractors' },
  { id: 'facilities-management', name: 'Facilities management' },
  { id: 'me-building-services',  name: 'M&amp;E and building services' },
  { id: 'fit-out',               name: 'Fit-out and refurbishment' },
  { id: 'healthcare',            name: 'Healthcare &mdash; NHS Trusts' },
  { id: 'education',             name: 'Higher education' },
  { id: 'public-housing',        name: 'Public sector &amp; housing' },
  { id: 'occupiers',             name: 'End clients &amp; occupiers' },
];

export const CLIENTS: Client[] = [
  // Tier-1 main contractors
  { nm: 'Mace',                 logo: 'assets/clients/mace.jpeg',        logoMode: 'keep', link: 'https://www.macegroup.com/',   featured: true,  sector: 'tier-1-contractors', what: 'Fire, gas suppression &amp; security packages on commercial fit-outs incl. Peterborough Court.' },
  { nm: 'Wates',                logo: 'assets/clients/wates.png',                          link: 'https://www.wates.co.uk/',     featured: true,  sector: 'tier-1-contractors', what: 'Fire &amp; security packages on commercial schemes.' },
  { nm: 'Kier',                 logo: 'assets/clients/kier.svg',         logoMode: 'keep', link: 'https://www.kier.co.uk/',      featured: false, sector: 'tier-1-contractors', what: 'Fire &amp; security packages on commercial schemes.' },
  { nm: 'Bancroft',             logo: 'assets/clients/bancroft.png',                       link: 'https://bancroft.co.uk/',      featured: false, sector: 'tier-1-contractors', what: 'Fire &amp; security packages on commercial schemes.' },

  // Facilities management
  { nm: 'Equans',               logo: 'assets/clients/equans.png',       logoMode: 'keep', link: 'https://www.equans.co.uk/',    featured: true,  sector: 'facilities-management', what: 'Passive fire remedial works &mdash; AP-supervised, client-commended delivery.' },
  { nm: 'Apleona',              logo: 'assets/clients/apleona.png',      logoMode: 'keep', link: 'https://www.apleona.com/',     featured: false, sector: 'facilities-management', what: 'Fire &amp; security packages on FM-managed estates (UK + European portfolio reach).' },
  { nm: 'Integral UK',          logo: 'assets/clients/integral-uk.jpeg', logoMode: 'keep', link: 'https://www.integral.co.uk/',  featured: true,  sector: 'facilities-management', what: 'Long-term FM framework partner (JLL-owned) &mdash; life-safety &amp; compliance across UK portfolios.' },
  { nm: 'CBRE',                 logo: 'assets/clients/cbre.svg',         logoMode: 'keep', link: 'https://www.cbre.co.uk/',      featured: true,  sector: 'facilities-management', what: 'Long-term FM framework partner (via CBRE Managed Services Ltd) &mdash; life-safety, maintenance and compliance across CBRE-managed UK portfolios.' },

  // M&E + building services peers
  { nm: 'TClarke',              logo: 'assets/clients/tclarke.png',      logoMode: 'keep', link: 'https://tclarke.co.uk/',                 featured: true,  sector: 'me-building-services', what: 'Specialist fire &amp; security packages on M&amp;E-led commercial schemes.' },
  { nm: 'Gratte Brothers',      logo: 'assets/clients/gratte-brothers.jpeg', logoMode: 'keep', link: 'https://grattebrothers.com/',        featured: false, sector: 'me-building-services', what: 'Fire &amp; security packages on London M&amp;E projects.' },
  { nm: 'JBS Ltd',              logo: 'assets/clients/jbs.svg',                            link: 'https://www.jbs-ltd.co.uk/',             featured: false, sector: 'me-building-services', what: 'Fire &amp; security packages alongside Jaguar building-services delivery.' },
  { nm: 'Maze Engineering',     logo: 'assets/clients/maze-engineering.png', logoMode: 'keep', link: 'https://maze-engineering.co.uk/',    featured: false, sector: 'me-building-services', what: 'Fire &amp; security packages on multi-trade projects.' },
  { nm: 'Sale Group',           logo: 'assets/clients/sale-group.svg',   logoMode: 'keep', link: 'https://www.salegroup.co.uk/',           featured: false, sector: 'me-building-services', what: 'Fire &amp; security packages alongside building-services delivery (family-owned, est. 2000).' },
  { nm: 'PIP Electrics',        logo: null,                                            link: null,                                          featured: false, sector: 'me-building-services', what: 'Fire alarm &amp; safety packages alongside electrical delivery.' },
  { nm: 'Borough Engineering Services', logo: null,                                    link: null,                                          featured: false, sector: 'me-building-services', what: 'Fire &amp; security packages on engineering-services projects.' },
  { nm: 'Select Plant Hire',    logo: 'assets/clients/select-plant-hire.png', logoMode: 'keep', link: 'https://www.selectplant.co.uk/',     featured: false, sector: 'me-building-services', what: "Site fire-safety packages on heavy-civils and plant programmes (Laing O'Rourke)." },

  // Fit-out and refurbishment
  { nm: 'ARC Group London',     logo: 'assets/clients/arc-group.svg',                      link: 'https://arcgroupuk.com/',                featured: false, sector: 'fit-out', what: 'Fire &amp; security packages on commercial refurbishment programmes.' },
  { nm: 'AIS Interiors',        logo: 'assets/clients/ais-interiors.svg', logoMode: 'keep', link: 'https://ais-interiors.com/',            featured: false, sector: 'fit-out', what: 'Fire &amp; security packages on interior fit-out projects.' },
  { nm: 'Guild Prime',          logo: 'assets/clients/guild-prime.png',                    link: 'https://guildprime.com/',                featured: false, sector: 'fit-out', what: 'Fire &amp; security packages on London projects.' },
  { nm: 'Mala',                 logo: 'assets/clients/mala.svg',         logoMode: 'keep', link: 'https://www.mala.co.uk/',                featured: false, sector: 'fit-out', what: 'Fire &amp; security packages on commercial projects.' },

  // Healthcare — NHS Trusts (6)
  { nm: 'Guy&rsquo;s and St Thomas&rsquo; NHS FT', logo: 'assets/clients/nhs-gstt.svg', logoMode: 'keep', link: 'https://www.guysandstthomas.nhs.uk/', featured: false, sector: 'healthcare', what: 'Fire safety packages on major London teaching-hospital estates.' },
  { nm: 'Chelsea &amp; Westminster Hospital NHS FT', logo: 'assets/clients/nhs-chelwest.png', logoMode: 'keep', link: 'https://www.chelwest.nhs.uk/', featured: false, sector: 'healthcare', what: 'Fire, ventilation &amp; suppression packages on central-London teaching hospital estates.' },
  { nm: 'NHS Medway',           logo: 'assets/clients/nhs-medway.svg',   logoMode: 'keep', link: 'https://www.medway.nhs.uk/',             featured: true,  sector: 'healthcare', what: 'Fire, ventilation &amp; gas suppression packages on Medway NHS estates (Trust + ICB).' },
  { nm: 'Sussex Community NHS FT', logo: null,                                              link: 'https://www.sussexcommunity.nhs.uk/',  featured: false, sector: 'healthcare', what: 'Fire safety packages across community-healthcare estates.' },
  { nm: 'South East Coast Ambulance NHS FT', logo: 'assets/clients/nhs-secamb.svg', logoMode: 'keep', link: 'https://www.secamb.nhs.uk/', featured: false, sector: 'healthcare', what: 'Fire &amp; security packages on ambulance-trust facilities.' },
  { nm: 'Salisbury NHS FT',     logo: 'assets/clients/nhs-salisbury.png', logoMode: 'keep', link: 'https://www.salisbury.nhs.uk/',         featured: false, sector: 'healthcare', what: 'Fire safety and ventilation packages on acute-hospital estates.' },

  // Higher education
  { nm: 'Kingston University',  logo: 'assets/clients/kingston-university.svg', logoMode: 'keep', link: 'https://www.kingston.ac.uk/', featured: true,  sector: 'education', what: 'Fire &amp; security packages on educational estate works.' },
  { nm: 'University of Bath',   logo: 'assets/clients/university-of-bath.svg',  logoMode: 'keep', link: 'https://www.bath.ac.uk/',     featured: false, sector: 'education', what: 'Fire &amp; security packages on higher-education campus estates.' },

  // Public sector + housing
  { nm: 'Royal Borough of Kensington &amp; Chelsea', logo: 'assets/clients/rbkc.svg', logoMode: 'keep', link: 'https://www.rbkc.gov.uk/', featured: true,  sector: 'public-housing', what: 'Fire safety packages on social housing and public-building works.' },
  { nm: 'FirstPort',            logo: 'assets/clients/firstport.svg',    logoMode: 'keep', link: 'https://www.firstport.co.uk/',           featured: true,  sector: 'public-housing', what: "Fire safety packages on residential property portfolios (UK's largest residential property manager)." },
  { nm: 'Newlon Housing',       logo: 'assets/clients/newlon.jpeg',      logoMode: 'keep', link: 'https://www.newlon.org.uk/',             featured: true,  sector: 'public-housing', what: 'Fire safety packages on London housing-association estates.' },
  { nm: 'Moat Homes',           logo: null,                                                link: 'https://www.moat.co.uk/',                featured: false, sector: 'public-housing', what: 'Fire safety packages on London housing-association estates.' },

  // End clients + corporate occupiers
  { nm: 'Aviva Investors',      logo: 'assets/clients/aviva.png',        logoMode: 'keep', link: 'https://www.avivainvestors.com/',        featured: true,  sector: 'occupiers', what: 'Fire safety and compliance packages on Aviva Investors&rsquo; London office portfolio.' },
  { nm: 'Richmond Pharmacology', logo: null,                                               link: 'https://www.richmondpharmacology.com/',  featured: false, sector: 'occupiers', what: 'Fire safety and ventilation packages on clinical-research facilities.' },
];

export const MANUFACTURER_CATEGORIES: ManufacturerCategory[] = [
  { id: 'fire-detection',     name: 'Fire detection &amp; alarm' },
  { id: 'pava-evac',          name: 'PAVA &amp; voice evacuation' },
  { id: 'suppression',        name: 'Gas suppression &amp; extinguishers' },
  { id: 'passive-fire',       name: 'Passive fire &amp; fire-stopping' },
  { id: 'security',           name: 'Security, access &amp; video' },
  { id: 'hvac',               name: 'HVAC &amp; air conditioning' },
  { id: 'ventilation',        name: 'Ventilation, AOV &amp; smoke control' },
  { id: 'trade-distribution', name: 'Trade distributors &amp; merchants' },
];

export const MANUFACTURERS: Manufacturer[] = [
  // Fire detection + alarm (8)
  { nm: 'Apollo',         logo: null, link: 'https://www.apollo-fire.co.uk/', featured: true,  cat: 'fire-detection', what: 'Industry-standard fire detectors (Series 65, XP95, Discovery, CoreProtocol).' },
  { nm: 'Hochiki',        logo: null, link: 'https://www.hochikieurope.com/', featured: true,  cat: 'fire-detection', what: 'ESP addressable fire detection &mdash; strong in healthcare, education, heritage.' },
  { nm: 'Hyfire',         logo: null, link: 'https://www.hyfirewireless.com/', featured: true,  cat: 'fire-detection', what: 'EN 54-25 wireless fire alarm manufacturer &mdash; Gemini holds Partner Plus status.' },
  { nm: 'Advanced',       logo: null, link: 'https://www.advancedco.com/',   featured: false, cat: 'fire-detection', what: 'UK fire-panel manufacturer (MxPro 5, Axis EN) &mdash; large networked systems.' },
  { nm: 'Galaxy',         logo: null, link: 'https://www.security.honeywell.com/', featured: false, cat: 'fire-detection', what: 'Honeywell-owned intruder + fire panels (also Fire-Lite).' },
  { nm: 'Vigilon',        logo: null, link: 'https://www.gent.co.uk/',       featured: false, cat: 'fire-detection', what: 'Gent (Honeywell) fire detection &mdash; acoustic-zoned, large-estate.' },
  { nm: 'Scantronic',     logo: null, link: 'https://www.eaton.com/gb/en-gb/catalog/security.html', featured: false, cat: 'fire-detection', what: 'Eaton-owned intruder alarm panels (Scantronic / Cooper Security).' },
  { nm: 'Firesense',      logo: null, link: 'https://www.firesense.co.uk/',  featured: false, cat: 'fire-detection', what: 'UK fire alarm products &amp; equipment supplier.' },

  // PAVA / voice evacuation (2)
  { nm: 'Baldwin Boxall', logo: null, link: 'https://www.baldwinboxall.co.uk/', featured: false, cat: 'pava-evac', what: 'UK PAVA / voice alarm / disabled-refuge / fire-telephone manufacturer.' },
  { nm: 'Penton UK',      logo: null, link: 'https://www.pentonuk.co.uk/',   featured: false, cat: 'pava-evac', what: 'UK manufacturer of public address &amp; voice-alarm systems &mdash; BAFE SP203-1 specialism.' },

  // Suppression (2)
  { nm: 'Fike',           logo: null, link: 'https://www.fike.com/',          featured: true,  cat: 'suppression', what: 'US suppression manufacturer (ProInert IG55, FM-200, Inergen, Novec 1230) &mdash; installed at Peterborough Court.' },
  { nm: 'Standby Fire',   logo: null, link: 'https://www.standbyfire.co.uk/', featured: false, cat: 'suppression', what: 'UK extinguisher supplier &amp; service partner.' },

  // Passive fire (2)
  { nm: 'Nullifire',      logo: null, link: 'https://www.nullifire.com/',     featured: false, cat: 'passive-fire', what: 'Sherwin-Williams intumescent coatings, sealants &amp; fire-stopping systems.' },
  { nm: 'A Muller',       logo: null, link: null,                              featured: false, cat: 'passive-fire', what: 'Passive fire sealant systems.' },

  // Security (5)
  { nm: 'Salto',          logo: null, link: 'https://www.saltosystems.com/',  featured: true,  cat: 'security', what: 'Electronic locks, BLE &amp; mobile-credential access control.' },
  { nm: 'TDSi',           logo: null, link: 'https://www.tdsi.co.uk/',        featured: true,  cat: 'security', what: 'UK access control + door entry &mdash; strong commercial footprint.' },
  { nm: 'ADT',            logo: null, link: 'https://www.adt.co.uk/',         featured: true,  cat: 'security', what: 'Johnson Controls monitoring &amp; intruder alarm services.' },
  { nm: 'Genetec',        logo: null, link: 'https://www.genetec.com/',       featured: false, cat: 'security', what: 'Canadian unified security platform (Security Center: access + video + intrusion).' },
  { nm: '2N',             logo: null, link: 'https://www.2n.com/',            featured: false, cat: 'security', what: 'Axis-owned IP intercom, door entry &amp; video door entry.' },
  { nm: 'CAME UK',        logo: null, link: 'https://www.came-uk.com/',       featured: false, cat: 'security', what: 'Italian access automation &mdash; gates, barriers, intercom, access control.' },

  // HVAC / air conditioning (7)
  { nm: 'Mitsubishi Electric', logo: null, link: 'https://les.mitsubishielectric.co.uk/', featured: true, cat: 'hvac', what: 'VRF, splits, AHU &mdash; major UK commercial air-conditioning brand.' },
  { nm: 'Daikin',         logo: null, link: 'https://www.daikin.co.uk/',      featured: true,  cat: 'hvac', what: 'VRV / VRF and splits &mdash; market-leading air conditioning.' },
  { nm: 'Hitachi',        logo: null, link: 'https://www.hitachiaircon.com/', featured: true,  cat: 'hvac', what: 'Set Free VRF and splits for large estate applications.' },
  { nm: 'Toshiba',        logo: null, link: 'https://www.toshiba-aircon.co.uk/', featured: false, cat: 'hvac', what: 'VRF and split-system air conditioning.' },
  { nm: 'Fujitsu',        logo: null, link: 'https://www.fujitsu-general.com/uk/', featured: false, cat: 'hvac', what: 'Splits and VRF air conditioning.' },
  { nm: 'Samsung',        logo: null, link: 'https://www.samsung.com/uk/business/air-conditioning/', featured: false, cat: 'hvac', what: 'VRF and splits air conditioning.' },
  { nm: 'LG',             logo: null, link: 'https://www.lg.com/uk/business/air-conditioner', featured: false, cat: 'hvac', what: 'VRF and split-system air conditioning.' },

  // Ventilation + AOV + smoke control (14)
  { nm: 'Colt',           logo: null, link: 'https://www.coltinfo.co.uk/',    featured: true,  cat: 'ventilation', what: 'Natural ventilation, smoke control &amp; AOV systems.' },
  { nm: 'Nuaire',         logo: null, link: 'https://www.nuaire.co.uk/',      featured: true,  cat: 'ventilation', what: 'MVHR and commercial ventilation systems.' },
  { nm: 'Halton',         logo: null, link: 'https://www.halton.com/',        featured: false, cat: 'ventilation', what: 'Kitchen ventilation, AHUs &amp; air-quality systems.' },
  { nm: 'Vent-Axia',      logo: null, link: 'https://www.vent-axia.com/',     featured: false, cat: 'ventilation', what: 'Extraction and MVHR systems.' },
  { nm: 'ActionAir',      logo: null, link: 'https://www.actionair.co.uk/',   featured: false, cat: 'ventilation', what: 'Fire dampers and smoke shafts.' },
  { nm: 'SE Controls',    logo: null, link: 'https://www.secontrols.com/',    featured: false, cat: 'ventilation', what: 'AOV and smoke-control actuators.' },
  { nm: 'Elta Fans',      logo: null, link: 'https://www.eltafans.com/',      featured: false, cat: 'ventilation', what: 'Extraction fans for commercial applications.' },
  { nm: 'Windows Master', logo: null, link: 'https://www.windowmaster.com/',  featured: false, cat: 'ventilation', what: 'Natural ventilation actuators for AOV systems.' },
  { nm: 'Flakt Group',    logo: null, link: 'https://www.flaktgroup.com/',    featured: false, cat: 'ventilation', what: 'Air handling and ventilation systems.' },
  { nm: 'Lindab',         logo: null, link: 'https://www.lindab.com/',        featured: false, cat: 'ventilation', what: 'Ductwork and ventilation components.' },
  { nm: 'Swegon',         logo: null, link: 'https://www.swegon.com/',        featured: false, cat: 'ventilation', what: 'AHU and ventilation systems.' },
  { nm: 'Systemair',      logo: null, link: 'https://www.systemair.com/',     featured: false, cat: 'ventilation', what: 'Fans and air-handling units.' },
  { nm: 'Trox',           logo: null, link: 'https://www.troxuk.co.uk/',      featured: false, cat: 'ventilation', what: 'Air diffusion and dampers.' },
  { nm: 'VTS',            logo: null, link: 'https://www.vtsgroup.com/',      featured: false, cat: 'ventilation', what: 'Air handling units.' },

  // Trade distributors (5)
  { nm: 'Edmundsons',     logo: null, link: 'https://www.edmundson-electrical.co.uk/', featured: false, cat: 'trade-distribution', what: 'UK&rsquo;s largest independent electrical wholesaler.' },
  { nm: 'Travis Perkins', logo: null, link: 'https://www.travisperkins.co.uk/',        featured: false, cat: 'trade-distribution', what: 'UK&rsquo;s largest builders&rsquo; merchant &mdash; heavy / general trade supplies.' },
  { nm: 'CEF',            logo: null, link: 'https://www.cef.co.uk/',                  featured: false, cat: 'trade-distribution', what: 'City Electrical Factors &mdash; UK electrical wholesaler.' },
  { nm: 'HSS Hire',       logo: null, link: 'https://www.hss.com/',                    featured: false, cat: 'trade-distribution', what: 'UK plant &amp; tool hire partner.' },
  { nm: 'ADI Global Distribution', logo: null, link: 'https://www.adiglobaldistribution.com/uk', featured: false, cat: 'trade-distribution', what: 'Security &amp; fire trade distributor (ADI Gardiner).' },
];

// Stock images: free-licence Unsplash photos, sized 1200w q=72. Placeholder
// only — to be swapped for owned project photography when commissioned.
const UNSPLASH = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const NEWS: NewsItem[] = [
  { cat: 'Company News', date: '26.06.2026', slug: 'homes-england-imaf-supplier-panel-application',
    title: 'Gemini AMPM applies to the Homes England IMAF supplier panel',
    teaser: 'Gemini AMPM has submitted an application to join the Interim Measures Alarm Fund supplier panel &mdash; the government scheme replacing waking-watch costs in residential buildings under remediation.',
    image: UNSPLASH('1564013799919-ab600027ffc6'),
    author: 'the Gemini AMPM team',
    body: `
<p>Gemini AMPM has applied to join the <strong>Interim Measures Alarm Fund (IMAF)</strong> supplier panel administered by <a href="https://www.gov.uk/guidance/interim-measures-alarm-fund-imaf-guidance" target="_blank" rel="noopener noreferrer">Homes England</a>. The application is currently under review; once approved, Gemini will be eligible to quote for and deliver IMAF-funded interim fire alarm installations across residential buildings in England.</p>

<h3>What is IMAF?</h3>

<p>The Interim Measures Alarm Fund is a UK government scheme launched on <strong>1 April 2026</strong> and managed by Homes England. It funds the installation of interim common fire alarm systems in residential buildings and student accommodation where remediation works are ongoing and where existing fire safety strategies depend on <strong>waking-watch arrangements</strong>.</p>

<p>The fund&rsquo;s stated purpose is to &ldquo;reduce the prolonged use of interim fire safety measures and encourage progress towards more permanent fire safety remediation.&rdquo; In practice that means giving Responsible Persons a route to install a properly designed alarm system &mdash; reducing reliance on round-the-clock human fire wardens, lowering the cost burden on leaseholders, and helping residents stay safely in their homes while permanent works progress.</p>

<h3>Why it matters for building managers and leaseholders</h3>

<p>Waking-watch arrangements have been a contentious feature of the post-Grenfell remediation landscape. They are expensive (typically billed back to leaseholders), they are operationally fragile (turnover, gaps in cover, training inconsistency), and they can run for years where remediation programmes are complex.</p>

<p>IMAF gives Responsible Entities and Responsible Persons a route to fund the installation of a <strong>BS 5839-1 Category L5 common fire alarm system</strong> &mdash; sized to the specific fire safety objectives identified in the building&rsquo;s fire risk assessment &mdash; without that capital cost falling on the leaseholders. The fund pays on completion of works and submission of evidence, against quotes provided by suppliers on the approved panel.</p>

<p>Hotels are explicitly excluded from the scheme. Applications must come from the Responsible Entity or Responsible Person (or an authorised representative), not from individual leaseholders.</p>

<h3>What the supplier panel requires</h3>

<p>Only firms on the Homes England IMAF supplier panel can quote for and undertake work funded by the scheme. The technical bar is set by the published guidance:</p>

<ul>
  <li>Systems must be <strong>designed to BS 5839-1 for a Category L5 system</strong>, configured to the specific fire safety objectives identified by the building&rsquo;s risk assessment</li>
  <li>Work must be <strong>designed, installed and commissioned by an appropriately qualified, third-party accredited competent person</strong></li>
  <li>Systems may need to be capable of being upgraded to the <strong>BS 8629 specification</strong> (the standard for evacuation alert systems in residential blocks)</li>
  <li>Quotes are submitted to Homes England for review against programme benchmarks before works proceed</li>
</ul>

<p>The &ldquo;third-party accredited competent person&rdquo; requirement is the technical gate: it is met by being registered under recognised industry schemes such as <strong>BAFE SP203-1</strong>, which independently audits design, installation, commissioning and maintenance of fire detection and alarm systems against BS 5839-1.</p>

<h3>Why Gemini AMPM applied</h3>

<p>Gemini AMPM is BAFE registered (ID 302260) under SP203-1, has 27 years of continuous trading in fire detection and alarm systems, and works extensively across the UK residential and social housing sector &mdash; including longstanding relationships with FirstPort, Newlon Housing, Moat Homes and the Royal Borough of Kensington &amp; Chelsea, alongside Tier-1 contractors delivering fire alarm packages on commercial fit-out programmes.</p>

<p>The IMAF panel application is a natural fit. The credentials the scheme requires (BAFE registration, BS 5839-1 design and install competence, evidence-pack discipline at handover) are the same credentials we maintain day-to-day for our existing residential client base. The application is now with Homes England for review; we&rsquo;ll update this article when the outcome is confirmed.</p>

<h3>What residential building managers should consider now</h3>

<p>If you are currently operating waking-watch arrangements in a residential building undergoing remediation, IMAF is worth investigating directly. The official <a href="https://www.gov.uk/guidance/interim-measures-alarm-fund-imaf-guidance" target="_blank" rel="noopener noreferrer">Homes England IMAF guidance</a> and <a href="https://www.gov.uk/guidance/apply-to-the-interim-measures-alarm-fund-imaf" target="_blank" rel="noopener noreferrer">application guidance</a> are the source-of-truth for eligibility, application process and funded scope.</p>

<p>Once Gemini&rsquo;s supplier-panel application is confirmed, we will be able to quote directly under the scheme. In the meantime, if you would like an early conversation about your building &mdash; the current waking-watch arrangement, the proposed alarm category, the practical install constraints &mdash; <a href="/contact/">our team can attend a survey within 5 working days</a>. We&rsquo;ll work to BS 5839-1 with full BAFE-aligned evidence regardless of how the funding route is structured.</p>

<p><em>This article will be updated when Homes England confirms the outcome of the supplier panel application.</em></p>
` },
  { cat: 'Fire Alarm',      date: '19.05.2026', slug: 'wireless-fire-alarm-systems-when-to-choose',
    title: 'Wireless fire alarm systems &mdash; when wireless beats wired (and when it doesn&rsquo;t)',
    teaser: 'Wireless fire alarm systems have caught up with wired on reliability and certification. Here&rsquo;s when wireless is the right choice.',
    image: UNSPLASH('1567427017947-545c5f8d16ad') },
  { cat: 'Gas Suppression', date: '19.05.2026', slug: 'gas-suppression-vs-sprinklers-data-centres',
    title: 'Gas suppression vs sprinklers for data centres &mdash; which protects what',
    teaser: 'Inert gas, chemical agent, or sprinklers &mdash; a clear comparison framework for IT and mission-critical environments.',
    image: UNSPLASH('1558494949-ef010cbdcc31'),
    author: 'the Gemini AMPM suppression team',
    body: `
<p>Every data-centre fire-protection conversation eventually arrives at the same fork in the road: <strong>gas suppression or sprinklers?</strong> Both are mature, both are accepted by insurers, both can be designed to current British Standards. They are not, however, interchangeable. Choosing wrong means either over-spending on capital cost or accepting downstream risk you didn&rsquo;t fully price in.</p>

<p>This is the framework we use on every survey to decide which one belongs where.</p>

<h3>What the two technologies actually do</h3>

<p><strong>Sprinklers</strong> &mdash; designed to BS EN 12845 &mdash; suppress a fire by releasing water from heads activated by heat. They cool the fuel below its ignition point and saturate the seat of the fire. Modern installations use pre-action systems, where two events (smoke detection followed by sprinkler-head activation) are required before water is released; this is the standard pattern in occupied data spaces where accidental discharge from a single fault would be catastrophic.</p>

<p><strong>Gas suppression</strong> &mdash; designed to BS EN 15004 &mdash; extinguishes the fire chemically or by displacing oxygen, with no water in the room at all. The two principal families are <strong>inert gases</strong> (ProInert IG-55, Inergen IG-541) that reduce oxygen below the combustion threshold while remaining breathable, and <strong>chemical clean agents</strong> (FM-200, Novec 1230) that interrupt the combustion reaction in a 10-second discharge and leave no residue.</p>

<h3>The damage profile is the deciding factor</h3>

<p>For a typical white-space rack hall, the real question isn&rsquo;t &ldquo;will it extinguish the fire?&rdquo; &mdash; both will. The question is what the room looks like an hour later, and what your business continuity plan costs from that point.</p>

<p>A sprinkler discharge in a rack hall will saturate every server in the throw radius, plus everything beneath. Even where pre-action design prevents nuisance discharge, an actual activation event typically writes off the affected racks. Sprinkler water also carries dissolved minerals and pipe-system corrosion; servers that survive the initial soak often fail in the following weeks from corrosion damage that wasn&rsquo;t immediately visible.</p>

<p>Gas suppression, by contrast, leaves the room <strong>operationally recoverable within hours</strong>. Inert gas systems leave nothing behind; chemical agents leave a fine residue that&rsquo;s easily removed. Servers that weren&rsquo;t directly involved in the fire continue to operate. The downtime is the discharge itself plus the recharge and re-validation cycle.</p>

<h3>Where each one belongs</h3>

<p><strong>Gas suppression is the right answer for:</strong></p>
<ul>
  <li>Live rack halls and server rooms with concurrent business operations</li>
  <li>Comms rooms and MERs where downtime ripples through the wider estate</li>
  <li>UPS rooms, switchgear rooms, and battery rooms (subject to the agent being electrically safe for the equipment present)</li>
  <li>Archives, vaults and irreplaceable physical assets &mdash; museums, records offices, legal archives</li>
  <li>Plant rooms supporting clinical, broadcast or financial-services critical infrastructure</li>
</ul>

<p><strong>Sprinklers remain the right answer for:</strong></p>
<ul>
  <li>Building-wide protection of corridors, offices, warehouses and unmanned zones outside the data hall</li>
  <li>Spaces where room integrity for gas can&rsquo;t practically be achieved (large open floor plates, frequent door movements, large penetrations)</li>
  <li>Risk areas where the asset value is low and the consequence of water damage is acceptable</li>
  <li>Sites where insurer specification mandates sprinkler coverage as a baseline</li>
</ul>

<p>In a typical mid-size data-centre estate we see both technologies working in parallel: <strong>pre-action sprinklers as the building&rsquo;s primary fire-protection layer</strong>, with <strong>gas suppression overlaid on the rack halls, MERs and switchgear rooms</strong> where water cannot be tolerated.</p>

<h3>What insurers and regulators expect</h3>

<p>Both technologies satisfy the Regulatory Reform (Fire Safety) Order 2005 when correctly designed, installed and maintained. Insurer scrutiny tends to focus on:</p>

<ul>
  <li><strong>Design competence</strong> &mdash; LPC-aligned for sprinklers, BAFE / FIA-aligned for gas. Third-party certification of the installer is increasingly written into commercial insurance schedules.</li>
  <li><strong>Room integrity</strong> for gas systems &mdash; the &ldquo;door fan test&rdquo; that proves the room will hold the agent at concentration for the required hold time. Without a current integrity certificate, the gas system effectively isn&rsquo;t there.</li>
  <li><strong>Servicing regime</strong> &mdash; annual at minimum for both; weight checks and agent verification for gas systems; flow tests and head replacement programmes for sprinklers.</li>
  <li><strong>Documentation</strong> &mdash; design, install, commissioning and maintenance records kept as part of the building&rsquo;s &ldquo;golden thread&rdquo; under the Building Safety Act 2022.</li>
</ul>

<h3>Cost framing</h3>

<p>Headline capital costs vary, but indicative ranges from real UK installations are useful framing:</p>

<ul>
  <li><strong>Pre-action sprinkler system</strong> for a typical data-centre rack hall: &pound;25k&ndash;&pound;60k+ depending on building integration cost</li>
  <li><strong>Gas suppression</strong> for the same room: &pound;40k&ndash;&pound;100k+ depending on agent choice and volume</li>
  <li><strong>Annual maintenance</strong>: sprinklers from &pound;1.2k per zone; gas from &pound;1.8k per zone</li>
</ul>

<p>On paper, sprinklers win on capital cost. <strong>On total cost of ownership over the asset lifecycle, the calculation flips</strong> the moment you price in the value of equipment that survives a localised fire because the room wasn&rsquo;t flooded. For most mission-critical data-centre estates, gas suppression in the rack halls is the cheaper option once the second incident has been priced in.</p>

<h3>What we&rsquo;d recommend</h3>

<p>If you&rsquo;re designing a new data hall or specifying protection for a mission-critical estate refresh, our standard recommendation is:</p>

<ol>
  <li>Sprinklers as the building-wide baseline, pre-action where they enter occupied data spaces.</li>
  <li>Gas suppression overlaid on rack halls, MERs, switchgear and UPS rooms where the agent and room volume support a workable design.</li>
  <li>Integrity testing on the gas-protected rooms at commissioning and every five years thereafter (or after any building works that could affect sealing).</li>
  <li>An annual integrated service contract covering both technologies, with a single contractor accountable for the evidence pack the insurer and Responsible Person will ask for.</li>
</ol>

<p>If you&rsquo;d like a survey on an existing data-centre estate, or a design review on a new build, our suppression team can attend within 5 working days. We&rsquo;re BAFE-registered, FIA members, and we&rsquo;ve installed the full range of agents on UK estates from single-rack comms rooms to the multi-zone fit-out on Mace&rsquo;s Peterborough Court project. <a href="/contact/">Get in touch</a>.</p>
` },
  { cat: 'Compliance',      date: '19.05.2026', slug: 'awaabs-law-fire-safety-2026',
    title: 'Awaab&rsquo;s Law and fire safety: what social housing landlords need to know in 2026',
    teaser: 'Awaab&rsquo;s Law is reshaping how landlords respond to hazards &mdash; what it means for fire-safety compliance and response times.',
    image: UNSPLASH('1564013799919-ab600027ffc6') },
  { cat: 'Company News',    date: '17.11.2025', slug: 'flagship-success-at-peterborough-court',
    title: 'Flagship success at Peterborough Court',
    teaser: 'Gemini AMPM delivers a landmark fire, gas suppression and security project in the City of London.',
    image: UNSPLASH('1486325212027-8081e485255e') },
  { cat: 'Company News',    date: '17.11.2025', slug: 'gemini-ampms-transition-to-employee-ownership-a-new-era-of-shared-success',
    title: 'Our transition to Employee Ownership: a new era of shared success',
    teaser: 'In 2024 Gemini AMPM made a bold, future-focused decision to transition into an Employee Ownership Trust.',
    image: UNSPLASH('1521737604893-d14cc237f11d') },
  { cat: 'Fire Alarm',      date: '17.11.2025', slug: 'understanding-the-2025-update-to-bs-5839-1-key-changes-and-implications',
    title: 'Understanding the 2025 update to BS 5839-1: key changes and implications',
    teaser: 'BS 5839-1:2025 is the latest revision of the British Standard governing fire detection in non-domestic premises.',
    image: UNSPLASH('1551434678-e076c223a692') },
];

export const CASES: CaseItem[] = [
  { tag: 'Gas · Fire · Security', sector: 'Peterborough Court, City of London', scope: 'Landmark fire, gas suppression and security project delivered in a live City building.',
    image: UNSPLASH('1486325212027-8081e485255e') },
  { tag: 'Passive Fire',          sector: 'Longfield Court &mdash; social housing', scope: 'Full-time site foreman, resident-sensitive delivery, consistently positive tenant feedback.',
    image: UNSPLASH('1564013799919-ab600027ffc6') },
  { tag: 'Ventilation',           sector: 'Leisure centre &mdash; local authority', scope: 'Works completed in an operational leisure centre with minimal disruption to daily operation.',
    image: UNSPLASH('1576091160550-2173dba999ef') },
];

// Per-pillar hero/case stock images — used as fallback on the pillar page
// representative-case cards. Swap when real project photography lands.
export const PILLAR_STOCK_IMAGE: Record<string, string> = {
  fire:        UNSPLASH('1567427017947-545c5f8d16ad'),
  passive:     UNSPLASH('1581094271901-8022df4466f9'),
  security:    UNSPLASH('1551434678-e076c223a692'),
  ventilation: UNSPLASH('1576091160550-2173dba999ef'),
  gas:         UNSPLASH('1558494949-ef010cbdcc31'),
  smallworks:  UNSPLASH('1518005020951-eccb494ad742'),
  me:          UNSPLASH('1553413077-190dd305871c'),
};

export const CONTACT = {
  phone: '0330 043 0080',
  phone2: '0845 872 5999',
  address: 'Unit 2, Regents Business Centre, Jubilee Road, Burgess Hill, West Sussex RH15 9TL',
  linkedin: 'https://www.linkedin.com/company/geminiampm/',
  portal: 'https://uptickhq.com/uk/powered-by-uptick/sign-in/?workspace=geminiampm',
} as const;

export const ACCREDS: Accred[] = [
  {
    t: 'BAFE', slug: 'bafe-registered',
    d: 'Fire safety register &middot; ID 302260',
    h1: 'BAFE registered fire alarm company',
    pdf: 'assets/certs/bafe.pdf', thumb: 'assets/certs/thumbs/bafe.png',
    weight: 'strong', pillars: ['fire'],
    verify: 'https://www.bafe.org.uk/find-registered-company/', verify_label: 'BAFE find-a-registered-company',
    meta_title: 'BAFE Registered Fire Alarm Company — Gemini AMPM (ID 302260)',
    meta_desc: 'BAFE-registered fire detection and alarm system installer (ID 302260). Design, install, commission and maintain under SP203-1 — third-party certificated. Gemini AMPM.',
    lede: 'BAFE is the independent third-party certification body for the UK fire-safety industry. Gemini AMPM is BAFE registered (ID 302260) under <strong>SP203-1</strong>, the scheme that covers the design, installation, commissioning and maintenance of fire detection and alarm systems. The scheme is regularly audited by BAFE and aligned with BS&nbsp;5839-1, the British Standard for fire detection and alarm systems in non-domestic premises.',
    covers: [
      '<strong>Design</strong> of fire detection and alarm systems to BS 5839-1 category L1–L5, M and P',
      '<strong>Installation</strong> to the agreed design, with proper cable routing, fixing and fire-stopping',
      "<strong>Commissioning</strong> — proving every device, every cause-and-effect, every interface to the building's other systems",
      '<strong>Maintenance</strong> — periodic inspection and servicing under BS 5839-1 Section 6',
      '<strong>Competent persons</strong> — engineers individually assessed against the SP203-1 competency framework',
    ],
    means: "For a Responsible Person under the Regulatory Reform (Fire Safety) Order 2005, BAFE registration is the cleanest single signal that the fire alarm work is being done by a third-party-certificated contractor. It's specified in most public-sector tenders and is increasingly a baseline requirement on commercial PQQs. The certificate above is verifiable on the BAFE register.",
  },
  {
    t: 'NSI Gold', slug: 'nsi-gold',
    d: 'Security systems &middot; highest grade',
    h1: 'NSI Gold approved security installer',
    pdf: 'assets/certs/nsi-gold.pdf', thumb: 'assets/certs/thumbs/nsi-gold.png',
    weight: 'strong', pillars: ['security'],
    verify: 'https://www.nsi.org.uk/find-a-company/', verify_label: 'NSI find-a-company',
    meta_title: 'NSI Gold Security Installer — Gemini AMPM',
    meta_desc: "NSI Gold approved for intruder alarms, CCTV, access control and monitored security. The highest tier of the National Security Inspectorate's installer scheme.",
    lede: "NSI Gold is the highest tier of the National Security Inspectorate's installer approval scheme — a UKAS-accredited certification covering quality management (ISO 9001), product compliance and the technical standards for each security service we install. Gemini AMPM is NSI Gold approved across <strong>intruder alarms, CCTV, access control and monitored security systems</strong>.",
    covers: [
      '<strong>Intruder alarms</strong> to BS EN 50131 grades 2 and 3 with PD 6662 + BS 8243 (sequential confirmation, ARC-monitored signalling)',
      '<strong>CCTV</strong> to BS EN 62676 series, including operational requirements and image quality',
      '<strong>Access control</strong> to BS EN 60839-11',
      '<strong>Detector-Activated CCTV</strong> (DA-CCTV) under BS 8418, for monitored visual verification',
      '<strong>Police and Fire &amp; Rescue Service response</strong> confirmation per the relevant force/brigade requirements',
      'Annually audited Quality Management System under ISO 9001 — the gating step between Bronze, Silver and Gold',
    ],
    means: 'NSI Gold is the spec-line a security buyer reaches for when the police-response or insurance terms require a third-party-approved installer. Most commercial insurance policies for unmanned premises require systems installed by NSI Gold (or SSAIB Gold equivalent). Police response in most UK forces requires an Alarm Receiving Centre, NSI Gold signalling, and a URN — the chain of approvals starts here.',
  },
  {
    t: 'FIRAS', slug: 'firas-passive-fire',
    d: 'Passive fire &middot; warringtonfire',
    h1: 'FIRAS approved passive fire installer',
    pdf: 'assets/certs/firas.pdf', thumb: 'assets/certs/thumbs/firas.png',
    weight: 'strong', pillars: ['passive'],
    verify: 'https://www.firas.co.uk/installer-directory', verify_label: 'FIRAS installer directory',
    meta_title: 'FIRAS Approved Passive Fire Installer — Gemini AMPM',
    meta_desc: 'Third-party certificated passive fire installer under FIRAS — fire stopping, fire doors and compartmentation. The audit-ready trail for golden-thread compliance.',
    lede: 'FIRAS is the <strong>third-party certification scheme run by warringtonfire</strong> for the passive fire protection industry. It covers the installation of fire-stopping, fire doors, fire-rated walls and floors, compartmentation and barriers — the parts of the building that contain a fire long enough for everyone to get out. Gemini AMPM holds FIRAS approval, with each engineer carded individually.',
    covers: [
      '<strong>Fire stopping</strong> — sealing penetrations in compartment walls and floors with tested, certificated systems',
      '<strong>Fire doors</strong> — supply, install, inspect and maintain to BS 8214 / BS EN 1634',
      "<strong>Compartmentation</strong> — walls, floors and ceiling voids assembled per the building's fire strategy",
      '<strong>Cavity barriers</strong> — vertical and horizontal barriers in voids and cavities per BS 5839-1 + Approved Document B',
      "<strong>Photographic records and certified-as-fitted documentation</strong> for every penetration — the audit-trail the Building Safety Act now demands",
    ],
    means: "Post-Grenfell, post-Hackitt and post-Building Safety Act 2022, the <strong>golden thread</strong> of evidence for passive fire works is now a legal duty for higher-risk buildings. FIRAS-certificated installation gives the responsible person an audit-ready trail — the right product, fitted by an assessed installer, with photographic evidence — at handover and through the building's life. That documentation is what the Building Safety Regulator and insurers actually want to see.",
  },
  {
    t: 'CHAS', slug: 'chas-elite',
    d: 'Elite accreditation',
    h1: 'CHAS Elite approved contractor',
    pdf: 'assets/certs/chas.pdf', thumb: 'assets/certs/thumbs/chas.png',
    weight: 'strong', pillars: ['fire','passive','security','ventilation','gas','me'],
    verify: 'https://portal.chas.co.uk/', verify_label: 'CHAS portal',
    meta_title: 'CHAS Elite Approved Contractor — Gemini AMPM',
    meta_desc: 'CHAS Elite accredited — the top tier of the Contractors Health and Safety Assessment Scheme, covering H&amp;S, environmental, quality and financial standing.',
    lede: "CHAS — the Contractors Health and Safety Assessment Scheme — is the UK's longest-established SSIP (Safety Schemes in Procurement) assessment body. <strong>CHAS Elite</strong> is its premium tier: alongside the standard H&amp;S assessment, it adds environmental, quality and financial-standing checks, meeting the <strong>Common Assessment Standard</strong> that lets a single accreditation satisfy most main contractors and public-sector PQQs.",
    covers: [
      '<strong>Health and safety</strong> policy and procedures assessed against the SSIP core criteria',
      '<strong>Environmental management</strong> — ISO 14001-aligned policy, waste, sustainability',
      '<strong>Quality management</strong> — ISO 9001-aligned processes',
      '<strong>Financial standing</strong> — Companies House checks, insurance verification',
      "<strong>Common Assessment Standard</strong> — recognised by Builders' Conference, Constructionline, Achilles Verify, Build UK and most Tier-1 main contractors",
    ],
    means: 'For a fire &amp; security contractor working on commercial estates and main-contractor sites, CHAS Elite is the <strong>default PQQ tick</strong>. A single accreditation that satisfies the H&amp;S, environmental and financial pre-qualification of nearly every commercial procurement portal in the UK — and the saved hours on PQQ paperwork compound over the year.',
  },
  {
    t: 'Constructionline', slug: 'constructionline-gold',
    d: 'Gold member',
    h1: 'Constructionline Gold member',
    pdf: 'assets/certs/constructionline.pdf', thumb: 'assets/certs/thumbs/constructionline.png',
    weight: 'moderate', pillars: ['fire','passive','security','ventilation','me'],
    verify: 'https://www.constructionline.co.uk/', verify_label: 'Constructionline',
    meta_title: 'Constructionline Gold Member — Gemini AMPM',
    meta_desc: "Constructionline Gold accredited — the highest pre-qualification tier in the UK's leading construction-supplier register, used by buyers across public and private sector.",
    lede: "Constructionline is the UK's most-used pre-qualification register for the construction supply chain — the place main contractors and public-sector buyers go to verify a supplier before issuing a tender invitation. <strong>Gold</strong> is the highest tier: the supplier profile plus the full SSIP-aligned H&amp;S assessment, environmental, quality, financial and equality checks.",
    covers: [
      'Standard Constructionline supplier registration (insurance, accreditations, trade scopes)',
      'SSIP-equivalent <strong>health &amp; safety</strong> assessment (PAS 91-aligned)',
      'Environmental management (ISO 14001-aligned)',
      'Quality management (ISO 9001-aligned)',
      'Equality, anti-bribery, modern slavery declarations',
      'Financial standing check',
    ],
    means: 'Most main contractors filter their tender invitation list through Constructionline — Gold members appear in the highest-trust band. For a fire &amp; security subcontractor bidding into commercial fit-out and refurbishment, this is the routine route to the tender list.',
  },
  {
    t: 'SafeContractor', slug: 'safecontractor-approved',
    d: 'Approved contractor',
    h1: 'SafeContractor approved',
    pdf: 'assets/certs/safecontractor.pdf', thumb: 'assets/certs/thumbs/safecontractor.png',
    weight: 'moderate', pillars: ['fire','passive','security','ventilation'],
    verify: 'https://www.safecontractor.com/', verify_label: 'SafeContractor (Alcumus)',
    meta_title: 'SafeContractor Approved — Gemini AMPM',
    meta_desc: 'SafeContractor (Alcumus) approved — SSIP-aligned health &amp; safety pre-qualification accepted by 350+ UK clients and main contractors.',
    lede: "SafeContractor (run by Alcumus) is one of the UK's most widely accepted SSIP health &amp; safety assessment schemes — used by <strong>over 350 client organisations</strong> including main contractors, public-sector bodies and large commercial landlords. Gemini AMPM holds SafeContractor approval, audited annually against the Common Assessment Standard.",
    covers: [
      'Health &amp; safety policy and management arrangements',
      'Risk assessment and method-statement processes',
      'Training, qualifications, competency records',
      'Reporting and incident investigation',
      'Annual reassessment against the SSIP core criteria',
    ],
    means: "Where a buyer asks &ldquo;are you SSIP?&rdquo; — SafeContractor is the answer. It's the cheapest single way to satisfy the H&amp;S pre-qualification for most commercial work. Carried alongside CHAS Elite, it covers virtually every client procurement portal.",
  },
  {
    t: 'Cyber Essentials', slug: 'cyber-essentials-certified',
    d: 'Certified',
    h1: 'Cyber Essentials certified',
    pdf: 'assets/certs/cyber-essentials.pdf', thumb: 'assets/certs/thumbs/cyber-essentials.png',
    weight: 'moderate', pillars: [],
    verify: 'https://iasme.co.uk/cyber-essentials/', verify_label: 'IASME (NCSC scheme)',
    meta_title: 'Cyber Essentials Certified — Gemini AMPM',
    meta_desc: 'Cyber Essentials certified by IASME — the NCSC-backed UK government scheme covering five technical controls for ransomware, phishing and basic-attack resilience.',
    lede: '<strong>Cyber Essentials</strong> is the UK Government-backed cybersecurity certification, owned by the National Cyber Security Centre (NCSC) and assessed by IASME. It covers five technical controls — boundary firewalls, secure configuration, user access control, malware protection and patch management — designed to <strong>block the volume attacks</strong> (commodity malware, phishing, ransomware) that account for the bulk of UK SME incidents.',
    covers: [
      '<strong>Boundary firewalls</strong> and internet gateways configured to block unsolicited traffic',
      '<strong>Secure configuration</strong> — default passwords removed, unnecessary services disabled',
      '<strong>User access control</strong> — least-privilege, MFA on admin accounts, leavers process',
      '<strong>Malware protection</strong> — endpoint protection, application whitelisting where appropriate',
      '<strong>Patch management</strong> — security updates applied within 14 days of release for high/critical vulnerabilities',
    ],
    means: "Cyber Essentials is a <strong>mandatory requirement for most central government contracts</strong> since 2014, and increasingly a baseline expectation for NHS Trusts, councils and large commercial buyers. For a fire &amp; security contractor handling building access data, CCTV recordings and resident contact details, it's the published proof that we hold supplier data to a recognised standard.",
  },
  {
    t: 'BESA', slug: 'besa-member',
    d: 'Building Engineering Services Assoc.',
    h1: 'BESA member',
    pdf: 'assets/certs/besa.pdf', thumb: 'assets/certs/thumbs/besa.png',
    weight: 'moderate', pillars: ['ventilation'],
    verify: 'https://www.thebesa.com/', verify_label: 'BESA',
    meta_title: 'BESA Member — Gemini AMPM',
    meta_desc: 'Building Engineering Services Association member — UK trade body for the M&amp;E and ventilation sector, custodian of TR/19 and other technical standards.',
    lede: 'The <strong>Building Engineering Services Association (BESA)</strong> is the UK trade body for the building-engineering sector — heating, ventilation, air conditioning, refrigeration and plumbing. BESA publishes the technical standards the industry actually works to, including <strong>TR/19 (ventilation hygiene)</strong>, the standard ventilation systems are surveyed and cleaned against.',
    covers: [
      'Recognition as a competent member firm of the trade body',
      "Subscription to BESA's published technical standards (TR/19, TR/20, SFG20 schedules)",
      'Access to the BESA Charter for service quality and consumer protection',
      "Membership in industry forums on ventilation hygiene, fire-damper testing, and the Building Safety Act's ventilation duties",
    ],
    means: 'BESA membership signals that the M&amp;E and ventilation work is delivered to the published industry standards — relevant for clients specifying TR/19-compliant ventilation hygiene programmes, fire-damper testing under BS 9999 or HVAC commissioning to CIBSE guidance.',
  },
  {
    t: 'FIA', slug: 'fia-member',
    d: 'Fire Industry Association',
    h1: 'Fire Industry Association member',
    pdf: 'assets/certs/fia.pdf', thumb: 'assets/certs/thumbs/fia.png',
    weight: 'weak', pillars: ['fire'],
    verify: 'https://www.fia.uk.com/', verify_label: 'Fire Industry Association',
    meta_title: 'FIA Member — Gemini AMPM',
    meta_desc: 'Fire Industry Association member — the UK trade body for the fire-protection sector, active in BS 5839 standards revision and the post-Grenfell golden-thread response.',
    lede: "The <strong>Fire Industry Association (FIA)</strong> is the UK's largest fire-protection trade body, representing manufacturers, installers and service providers across fire detection and alarm, fire suppression, passive fire and emergency lighting. FIA membership is a sign of active participation in the industry's response to standards revisions — BS 5839-1, the Building Safety Act, Awaab's Law and the post-Grenfell golden-thread duties.",
    covers: [
      "Membership of the industry's main trade body",
      'Participation in FIA technical councils (Detection &amp; Alarm, Suppression, Passive Fire, Emergency Lighting)',
      'Continuous-professional-development access for engineers',
      'Visibility on the FIA-approved company register',
    ],
    means: 'For a buyer due-diligencing a fire-safety contractor, FIA membership signals industry engagement — the firm is in the rooms where the standards are written, not just installing to them.',
  },
  {
    t: 'FPA', slug: 'fpa-member',
    d: 'Fire Protection Association',
    h1: 'Fire Protection Association',
    pdf: null, thumb: null,
    weight: 'weak', pillars: ['fire'],
    verify: 'https://www.thefpa.co.uk/', verify_label: 'Fire Protection Association',
    meta_title: 'FPA — Gemini AMPM',
    meta_desc: "Fire Protection Association — the UK's national fire-safety organisation, publisher of the LPC Rules and the RC technical guidance series.",
    lede: "The <strong>Fire Protection Association (FPA)</strong> is the UK's national fire-safety organisation, funded by the insurance industry. It publishes the influential <strong>Loss Prevention Council (LPC) Rules for Automatic Sprinkler Installations</strong>, the <strong>Design Guide for the Fire Protection of Buildings</strong>, and the RC (Recommended Code) series of technical guidance — the documents insurers default to when specifying fire protection for higher-risk premises.",
    covers: [
      'Access to FPA technical guidance and the RC series',
      'LPC-rules-aware approach to sprinkler and suppression specification',
      'Industry training and CPD',
      'Insurer-aligned best-practice guidance',
    ],
    means: 'FPA membership matters for the insurer-driven end of the fire-protection market — sprinkler design, high-value premises and warehouses where the specification is being written by the underwriter rather than the architect.',
  },
  {
    t: 'British Safety Council', slug: 'british-safety-council',
    d: 'Member',
    h1: 'British Safety Council member',
    pdf: 'assets/certs/british-safety-council.pdf', thumb: 'assets/certs/thumbs/british-safety-council.png',
    weight: 'weak', pillars: [],
    verify: 'https://www.britsafe.org/', verify_label: 'British Safety Council',
    meta_title: 'British Safety Council Member — Gemini AMPM',
    meta_desc: 'British Safety Council member — the international charity for workplace health, safety and wellbeing. Audited safety management and culture.',
    lede: 'The <strong>British Safety Council</strong> is the international not-for-profit charity for workplace health, safety and wellbeing. Its membership scheme provides audited safety-management benchmarking, training access and a framework for continuously improving safety culture — beyond the procedural minimum the SSIP schemes assess.',
    covers: [
      "Members' safety-management audits and gap analysis",
      'Access to British Safety Council training and qualifications',
      'The annual International Safety Awards programme',
      'Industry forums on mental health, wellbeing and safety leadership',
    ],
    means: 'British Safety Council membership signals investment in safety culture beyond the compliance line — relevant for clients whose CSR or ESG procurement criteria look past the SSIP box-tick toward continuous improvement.',
  },
  {
    t: 'Avetta', slug: 'avetta-member',
    d: 'Member',
    h1: 'Avetta approved supplier',
    pdf: 'assets/certs/avetta.pdf', thumb: 'assets/certs/thumbs/avetta.png',
    weight: 'weak', pillars: [],
    verify: 'https://www.avetta.com/', verify_label: 'Avetta',
    meta_title: 'Avetta Approved Supplier — Gemini AMPM',
    meta_desc: 'Avetta approved — the supplier prequalification platform used by global enterprise clients to verify health &amp; safety, insurance, sustainability and modern-slavery compliance.',
    lede: "<strong>Avetta</strong> is a global supply-chain risk-management platform used by enterprise clients — major commercial landlords, retail estates and global facilities managers — to pre-qualify suppliers. Membership means we appear in those clients' approved-supplier registers, with our H&amp;S, insurance, sustainability and modern-slavery declarations audited annually.",
    covers: [
      'Avetta-audited health and safety, insurance and financial-standing documentation',
      'Modern slavery declaration and supply-chain risk attestations',
      'Sustainability and environmental management evidence',
      'Annual reassessment against client-specific criteria',
    ],
    means: "Avetta opens doors with <strong>enterprise clients</strong> that don't use Constructionline or CHAS — particularly US-headquartered occupiers, large retail estates and the FM divisions of multinational property companies.",
  },
];

export const ACCRED_IDS = ACCREDS.map((a) => a.slug);
export const ACCRED_BY_SLUG: Record<string, Accred> = Object.fromEntries(ACCREDS.map((a) => [a.slug, a]));

// ─── REP_CASES from g-service.jsx (per-pillar representative projects)
export const REP_CASES: Record<string, CaseItem[]> = {
  fire: [
    { tag: 'Fire · Addressable', sector: 'NHS hospital — South East', scope: 'Phased addressable fire-alarm replacement delivered across a live, occupied clinical estate.' },
    { tag: 'Fire · Maintenance', sector: 'Managed estate — London',   scope: 'Planned maintenance and monitoring contract across a multi-building commercial portfolio.' },
    { tag: 'Fire · Wireless',    sector: 'Listed building — Sussex',  scope: 'Wireless detection where cabling would have damaged a heritage interior.' },
  ],
  passive: [
    { tag: 'Passive · Remediation',   sector: 'Longfield Court — social housing', scope: 'Compartmentation and fire-door remediation with a full-time site foreman and resident liaison.' },
    { tag: 'Passive · Fire doors',    sector: 'Residential block — London',       scope: 'Fire-door survey, remediation and certificated replacement programme.' },
    { tag: 'Passive · Fire stopping', sector: 'Commercial fit-out — City',        scope: 'Service-penetration fire stopping coordinated with the M&E install.' },
  ],
  security: [
    { tag: 'Security · Integrated', sector: 'Data centre — South East',   scope: 'High-security access control and CCTV with monitored response on a mission-critical site.' },
    { tag: 'Security · Access',     sector: 'Education campus — London',  scope: 'Campus-wide access control balancing an open environment with controlled zones.' },
    { tag: 'Security · CCTV',       sector: 'Logistics — Kent',           scope: 'HD surveillance with remote monitoring across a high-capacity warehouse.' },
  ],
  ventilation: [
    { tag: 'Ventilation · AOV',      sector: 'Residential tower — London',          scope: 'AOV smoke-extract maintenance and fire-damper testing across a high-rise.' },
    { tag: 'Ventilation · Service',  sector: 'Leisure centre — local authority',    scope: 'Ductwork service and repair completed around live public operation.' },
    { tag: 'Ventilation · Hygiene',  sector: 'Care home — South East',              scope: 'Kitchen and laundry extract cleaning to TR/19, with certificated records.' },
  ],
  gas: [
    { tag: 'Gas · Inert',        sector: 'Peterborough Court — City of London', scope: 'Landmark gas-suppression package within a flagship fire and security project.' },
    { tag: 'Gas · Clean-agent',  sector: 'Comms room — South East',             scope: 'Chemical-agent suppression design, install and integrity testing for a critical comms room.' },
    { tag: 'Gas · Maintenance',  sector: 'Data centre — London',                scope: 'Planned servicing and integrity testing across multiple suppression zones.' },
  ],
  smallworks: [
    { tag: 'Small Works · Remedials', sector: 'Mixed portfolio — South East', scope: 'Closing out FRA and audit actions across fire, passive and security in one programme.' },
    { tag: 'Small Works · Snags',     sector: 'Commercial — London',          scope: 'Post-handover snagging and minor remedial works on a recently completed fit-out.' },
    { tag: 'Small Works · Reactive',  sector: 'Managed estate — Surrey',      scope: 'Reactive remedial visits triggered by routine maintenance findings.' },
  ],
  me: [
    { tag: 'M&E · Power',       sector: 'Commercial — London',      scope: 'Distribution and power works supporting a fire and security systems upgrade.' },
    { tag: 'M&E · Integration', sector: 'Estate — South East',      scope: 'Mechanical and electrical works tying life-safety systems into the building services.' },
    { tag: 'M&E · Supporting',  sector: 'Healthcare — South East',  scope: 'Supporting M&E for a phased detection and suppression installation.' },
  ],
};

// ─── TEAM — leadership profiles for /about/team/ ──────────────────────────────
// Bios use only facts from the AMPM Group business plan (May 2026). No
// invented detail. Add new members by appending to this array; the team page
// auto-renders them grouped by `tier`.
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  tier: 'group-leadership' | 'operational-leadership' | 'academy';
  /** Bio as HTML — paragraphs separated by <br /> or wrapped in <p>. */
  bio: string;
  /** Optional named clients/projects/specialisms for the "what they own" line. */
  ownsLine?: string;
  linkedin?: string;
  /** Optional photo path (relative to /assets/). Falls back to initials placeholder. */
  photo?: string;
  /** Meridian colour for the initials placeholder. */
  accent: 'orange' | 'blue' | 'green' | 'purple';
}

export const TEAM: TeamMember[] = [
  {
    slug: 'jamie-dawson',
    name: 'Jamie Dawson',
    role: 'Chair, AMPM Group · Co-founder, Gemini AMPM',
    tier: 'group-leadership',
    bio: '<p>Jamie co-founded Gemini AMPM and led the business from start-up through 27 years of continuous trading, into the Employee Ownership Trust transition in October 2024 and on to the formation of <strong>AMPM Group</strong>. He chairs the Group, drives strategy, runs the investor relationships, and signs off the acquisition pipeline.</p><p>Like Luke and Dan, Jamie came up through a trades apprenticeship &mdash; the conviction behind the <strong>AMPM Academy</strong> launching in September 2026 is personal as well as commercial.</p>',
    ownsLine: 'Group strategy · investor relationships · acquisition pipeline · AMPM Academy founding patron',
    accent: 'orange',
  },
  {
    slug: 'luke-finney',
    name: 'Luke Finney',
    role: 'Commercial Director, AMPM Group · Co-founder, Gemini AMPM',
    tier: 'group-leadership',
    bio: '<p>Luke co-founded Gemini AMPM and is now Commercial Director of AMPM Group. He owns commercial strategy across the Group &mdash; estimating, bid management and new-business development &mdash; and works the long-term Tier-1 contractor and FM-framework relationships that anchor the client book.</p><p>A trades-apprenticeship background (the same path Jamie and Dan came through) underwrites a commercial style that engineers trust: the price the building sees is the price the engineer can deliver.</p>',
    ownsLine: 'Commercial strategy · estimating · bid management · new business across the Group',
    accent: 'blue',
  },
  {
    slug: 'dan-small',
    name: 'Dan Small',
    role: 'Managing Director, AMPM Group · former MD, Gemini AMPM',
    tier: 'group-leadership',
    bio: '<p>Dan is the operational lead across every trading division of the Group and the <strong>longest-serving member of the management team</strong>. As former MD of Gemini AMPM he carries the deepest set of client and supply-chain relationships in the business &mdash; from Mace on Peterborough Court to Equans, FirstPort, Moat Homes and the wider Tier-1 supply chain.</p><p>Day-to-day delivery, divisional P&amp;L, and the operational integration of any acquired business sit on Dan&rsquo;s desk. Same trades-apprenticeship route as Jamie and Luke.</p>',
    ownsLine: 'Operations across all eight divisions · client relationships · supply chain · acquisition integration',
    accent: 'green',
  },
];
export const GROUP: GroupItem[] = [
  { tag: 'This company',    t: 'Gemini AMPM',            current: true,                                  d: 'Fire, security, ventilation, gas suppression and passive fire since 1997. Employee-owned. The life-safety specialist of the group.' },
  { tag: 'Sister company',  t: 'AMPM Building Services', href: 'https://ampmbuilding.services',          d: 'MEPH, commercial fit-out, fabric and groundworks &mdash; the daytime building-services arm. AM &rarr; PM.' },
  { tag: 'The wider group', t: 'AMPM Group',             href: 'https://ampmgroup.co.uk',                d: 'The mothership: shared standards, shared operating stack, one palette. Several companies, one accountable group.' },
];

// ─── NAV_LINKS from g-shell.jsx ───────────────────────────────────────────────
export interface NavLink { href: string; label: string; }
export const NAV_LINKS: NavLink[] = [
  { href: '/services/',    label: 'Services' },
  { href: '/sectors/',     label: 'Sectors' },
  { href: '/areas/',       label: 'Areas' },
  { href: '/casestudies/', label: 'Casework' },
  { href: '/news/',        label: 'News' },
  { href: '/about/',       label: 'About' },
  { href: '/contact/',     label: 'Contact' },
];

// ─── SERVICE_AREAS — local-SEO landing pages, one per region ──────────────
export interface ServiceArea {
  slug: string;
  name: string;
  longName: string;
  /** Short blurb shown on the /areas/ index. */
  blurb: string;
  /** Lede paragraph on the area page (HTML allowed). */
  intro: string;
  /** Outward postcode prefixes covered, e.g. ['EC', 'WC', 'E', 'N']. */
  postcodes: string[];
  /** "Within X" line for the area page. */
  travelTime: string;
  /** Sectors particularly strong in this area. */
  topSectors: string[];
  /** Optional list of named projects/clients located here. */
  notableProjects: string[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'london',
    name: 'London',
    longName: 'Greater London',
    blurb: 'City, West End, Canary Wharf, the whole capital &mdash; commercial estates, financial services, NHS Trusts and listed buildings.',
    intro: 'Gemini AMPM has been working across Greater London since 1997 &mdash; <strong>commercial fit-outs in the City and West End, NHS estates, residential towers, listed buildings and data centres.</strong> Our engineers are within reach of every London postcode and travel daily for surveys, planned maintenance and out-of-hours installs.',
    postcodes: ['EC', 'WC', 'E', 'N', 'NW', 'SE', 'SW', 'W', 'IG', 'EN', 'HA', 'UB', 'TW', 'KT', 'BR', 'CR', 'DA', 'RM'],
    travelTime: 'Within 75 min from our Burgess Hill HQ',
    topSectors: ['Tier-1 main contractors', 'Facilities management', 'NHS Trusts', 'Higher education', 'Commercial &amp; retail buildings', 'IT data centres'],
    notableProjects: ['Peterborough Court, Fleet Street (Mace, 2025)', 'Aviva Investors London office portfolio', 'Guy&rsquo;s and St Thomas&rsquo; NHS estate'],
  },
  {
    slug: 'south-east',
    name: 'South East',
    longName: 'South East England',
    blurb: 'Sussex, Kent, Surrey, Hampshire, Berkshire &mdash; the home region. Commercial, healthcare, education and housing estates across the South East.',
    intro: 'The South East is our home region &mdash; Burgess Hill HQ, engineers based across <strong>Sussex, Kent, Surrey, Hampshire and Berkshire</strong>. Same-day reactive response, planned maintenance routes optimised for travel time, and a long history with the region&rsquo;s NHS Trusts, housing associations and main contractors.',
    postcodes: ['BN', 'RH', 'TN', 'CT', 'ME', 'GU', 'SO', 'PO', 'RG', 'SL', 'OX', 'KT', 'CR', 'BR', 'DA'],
    travelTime: 'Same-day reactive across most of the region',
    topSectors: ['Public sector &amp; housing', 'NHS Trusts', 'Educational institutions', 'Care homes', 'Commercial &amp; retail buildings'],
    notableProjects: ['NHS Medway', 'Salisbury NHS FT', 'South East Coast Ambulance NHS FT', 'Kingston University', 'University of Bath'],
  },
  {
    slug: 'west-sussex',
    name: 'West Sussex',
    longName: 'West Sussex',
    blurb: 'Home county. Crawley, Chichester, Horsham, Worthing, Burgess Hill &mdash; our HQ and densest coverage.',
    intro: 'West Sussex is home &mdash; our HQ is in <strong>Burgess Hill, RH15</strong>. Daily routes across Crawley, Chichester, Horsham, Worthing, Bognor and the rural belts. Same-day reactive cover across the whole county and the most engineer time of any single area.',
    postcodes: ['RH', 'BN', 'PO'],
    travelTime: 'Same-day reactive · HQ in Burgess Hill',
    topSectors: ['Public sector &amp; housing', 'Care homes', 'Educational institutions', 'Commercial &amp; retail buildings', 'Restaurants &amp; hotels'],
    notableProjects: [],
  },
  {
    slug: 'east-sussex',
    name: 'East Sussex',
    longName: 'East Sussex',
    blurb: 'Brighton, Eastbourne, Hastings, Lewes &mdash; coastal and downland coverage from our Burgess Hill base.',
    intro: 'East Sussex is on our doorstep &mdash; same-day reactive cover from <strong>Brighton and Hove eastward to Hastings</strong>, plus the South Downs villages in between. NHS estates, social housing, hospitality and the leisure-centre estate across the coast all sit within our standard planned-maintenance routes.',
    postcodes: ['BN', 'TN'],
    travelTime: 'Same-day reactive · planned routes daily',
    topSectors: ['Public sector &amp; housing', 'Care homes', 'Restaurants &amp; hotels', 'Educational institutions'],
    notableProjects: [],
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    longName: 'Surrey',
    blurb: 'Guildford, Woking, Reigate, Epsom, Croydon-border &mdash; commercial and public-sector estates across the county.',
    intro: 'Surrey is one of our most active regions outside our home county &mdash; commercial estates along the A3, Woking and Guildford office parks, Reigate and Redhill town centres, and the public-sector estate across the county. Engineers based locally for same-day response.',
    postcodes: ['GU', 'KT', 'RH', 'SM', 'CR'],
    travelTime: 'Within 45 min from HQ for most of the county',
    topSectors: ['Commercial &amp; retail buildings', 'Educational institutions', 'Care homes', 'Public sector &amp; housing'],
    notableProjects: ['Kingston University'],
  },
  {
    slug: 'kent',
    name: 'Kent',
    longName: 'Kent',
    blurb: 'Maidstone, Canterbury, Medway, Ashford, Dartford &mdash; NHS Trusts, social housing, schools and commercial estates.',
    intro: 'Active across Kent &mdash; from the Medway towns up to Dartford and across to Canterbury and Ashford. <strong>NHS Medway</strong> is one of our longest-standing healthcare clients, and we work on social housing, schools and commercial estates across the county.',
    postcodes: ['ME', 'CT', 'DA', 'TN', 'BR'],
    travelTime: 'Within 60 min from HQ',
    topSectors: ['NHS Trusts', 'Public sector &amp; housing', 'Educational institutions', 'Care homes'],
    notableProjects: ['NHS Medway (Trust + ICB)'],
  },
  {
    slug: 'hampshire',
    name: 'Hampshire',
    longName: 'Hampshire',
    blurb: 'Southampton, Portsmouth, Winchester, Basingstoke &mdash; commercial and healthcare estates across the county.',
    intro: 'Across Hampshire &mdash; from <strong>Southampton and Portsmouth</strong> harbour-side commercial estates up to Winchester and Basingstoke. NHS Trusts, university campuses, commercial parks and the marine/leisure sector along the coast.',
    postcodes: ['SO', 'PO', 'RG', 'GU', 'SP'],
    travelTime: 'Within 90 min from HQ',
    topSectors: ['NHS Trusts', 'Educational institutions', 'Commercial &amp; retail buildings', 'Restaurants &amp; hotels'],
    notableProjects: ['South East Coast Ambulance NHS FT', 'Salisbury NHS FT (border)'],
  },
  {
    slug: 'berkshire',
    name: 'Berkshire',
    longName: 'Berkshire',
    blurb: 'Reading, Slough, Bracknell, Maidenhead, Windsor &mdash; the Thames Valley commercial belt.',
    intro: 'Berkshire is one of the densest commercial-estate counties outside London &mdash; <strong>the Thames Valley along the M4</strong>, Reading and Slough headquartered businesses, Bracknell tech parks, Windsor and Maidenhead. We work across the corridor on commercial fit-outs, data centres and managed estates.',
    postcodes: ['RG', 'SL'],
    travelTime: 'Within 90 min from HQ',
    topSectors: ['Facilities management', 'IT data centres', 'Commercial &amp; retail buildings', 'Educational institutions'],
    notableProjects: [],
  },
  {
    slug: 'oxfordshire',
    name: 'Oxfordshire',
    longName: 'Oxfordshire',
    blurb: 'Oxford, Bicester, Banbury, Witney &mdash; university estates, science parks and the M40 commercial belt.',
    intro: 'Oxfordshire sits on our north-western arc &mdash; <strong>university and college estates in Oxford</strong>, science-park commercial along the A34, Bicester and Banbury manufacturing and logistics. Planned-maintenance routes cover the county fortnightly; reactive cover via the wider South East team.',
    postcodes: ['OX'],
    travelTime: 'Within 2 hrs from HQ',
    topSectors: ['Educational institutions', 'Commercial &amp; retail buildings', 'Warehouses &amp; storage units'],
    notableProjects: [],
  },
  {
    slug: 'hertfordshire',
    name: 'Hertfordshire',
    longName: 'Hertfordshire',
    blurb: 'Watford, St Albans, Hemel Hempstead, Stevenage, Hatfield &mdash; commercial estates, data centres and the M25 northern arc.',
    intro: 'Hertfordshire is part of our active M25-northern coverage &mdash; <strong>Watford, St Albans, Hemel Hempstead, Stevenage and Hatfield</strong>. Data centres, commercial parks, NHS estates and the housing-association portfolios across the county. Planned routes weekly, reactive same-week.',
    postcodes: ['AL', 'SG', 'WD', 'HP', 'EN'],
    travelTime: 'Within 90 min from HQ',
    topSectors: ['Facilities management', 'IT data centres', 'NHS Trusts', 'Public sector &amp; housing', 'Commercial &amp; retail buildings'],
    notableProjects: [],
  },
  {
    slug: 'essex',
    name: 'Essex',
    longName: 'Essex',
    blurb: 'Chelmsford, Colchester, Basildon, Southend, the M25 eastern arc &mdash; commercial, port-side and residential.',
    intro: 'Essex sits along our M25 eastern arc &mdash; <strong>Chelmsford, Colchester, Basildon, Brentwood and Southend</strong>. Port-side commercial, logistics, healthcare estates and the residential housing-association portfolios up the eastern corridor. Planned routes weekly, reactive same-week.',
    postcodes: ['CM', 'CO', 'IG', 'RM', 'SS', 'EN'],
    travelTime: 'Within 2 hrs from HQ',
    topSectors: ['Public sector &amp; housing', 'Warehouses &amp; storage units', 'Commercial &amp; retail buildings', 'NHS Trusts'],
    notableProjects: [],
  },
  {
    slug: 'buckinghamshire',
    name: 'Buckinghamshire',
    longName: 'Buckinghamshire',
    blurb: 'Milton Keynes, Aylesbury, High Wycombe, Amersham &mdash; commercial parks, logistics and the M40/M1 corridor.',
    intro: 'Buckinghamshire covers the M40 and M1-adjacent corridor &mdash; <strong>Milton Keynes logistics and commercial parks</strong>, Aylesbury and High Wycombe town-centre estates, and the Amersham and Chesham commuter belt. Planned routes fortnightly, reactive same-week.',
    postcodes: ['HP', 'MK', 'SL'],
    travelTime: 'Within 2 hrs from HQ',
    topSectors: ['Warehouses &amp; storage units', 'Commercial &amp; retail buildings', 'Educational institutions'],
    notableProjects: [],
  },
  {
    slug: 'wiltshire',
    name: 'Wiltshire',
    longName: 'Wiltshire',
    blurb: 'Swindon, Salisbury, Chippenham, Trowbridge &mdash; at the western edge of our standard service range.',
    intro: 'Wiltshire is at the <strong>western edge of our standard service range</strong> &mdash; Swindon, Salisbury, Chippenham, Trowbridge and the rural rest. Covered for framework partners and named clients (Salisbury NHS FT among them); one-off commercial work assessed case-by-case for travel-cost vs project-value fit.',
    postcodes: ['SN', 'SP', 'BA'],
    travelTime: 'Within 2.5 hrs from HQ',
    topSectors: ['NHS Trusts', 'Public sector &amp; housing', 'Commercial &amp; retail buildings'],
    notableProjects: ['Salisbury NHS FT'],
  },
  {
    slug: 'm25-corridor',
    name: 'M25 corridor',
    longName: 'M25 corridor',
    blurb: 'The orbital ring &mdash; Heathrow to Dartford, Croydon to Watford. Logistics, commercial parks, data centres, transport hubs.',
    intro: 'The M25 ring is a high-density commercial estate &mdash; <strong>data centres, logistics parks, transport hubs, airport-adjacent commercial</strong>. We work extensively across the orbital, with FM partners on framework contracts and direct relationships with end occupiers.',
    postcodes: ['UB', 'TW', 'KT', 'SM', 'CR', 'BR', 'DA', 'RM', 'IG', 'EN', 'WD', 'HA'],
    travelTime: 'Within 90 min from HQ',
    topSectors: ['Facilities management', 'IT data centres', 'Warehouses &amp; storage units', 'Commercial &amp; retail buildings'],
    notableProjects: ['CBRE-managed estates (orbital)', 'Integral UK framework portfolio'],
  },
];

// ─── SUN_COLOURS from g-shell.jsx (day-arc palette for the nav scroll effect)
export const SUN_COLOURS = [
  '#131A4A','#181C50','#1C1E56','#20205C','#252263','#2A246A','#302671','#362878','#3C297F','#422B86',
  '#482D8C','#4F2D90','#572D90','#5F2D8E','#67308C','#6F3489','#793886','#823C82','#8C407C','#964474',
  '#A1486C','#AB4D62','#B45356','#BC5849','#C25E3C','#C76430','#CC6A2D','#D26F2C','#DC732B','#E8742C',
];

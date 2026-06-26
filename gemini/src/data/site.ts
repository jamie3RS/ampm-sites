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
export interface NewsItem { cat: string; date: string; slug: string; title: string; teaser: string; image?: string; }
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
  { cat: 'Fire Alarm',      date: '19.05.2026', slug: 'wireless-fire-alarm-systems-when-to-choose',
    title: 'Wireless fire alarm systems &mdash; when wireless beats wired (and when it doesn&rsquo;t)',
    teaser: 'Wireless fire alarm systems have caught up with wired on reliability and certification. Here&rsquo;s when wireless is the right choice.',
    image: UNSPLASH('1567427017947-545c5f8d16ad') },
  { cat: 'Gas Suppression', date: '19.05.2026', slug: 'gas-suppression-vs-sprinklers-data-centres',
    title: 'Gas suppression vs sprinklers for data centres &mdash; which protects what',
    teaser: 'Inert gas, chemical agent, or sprinklers &mdash; a clear comparison framework for IT and mission-critical environments.',
    image: UNSPLASH('1558494949-ef010cbdcc31') },
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

// ─── GROUP from g-pages.jsx (About page) ──────────────────────────────────────
export interface GroupItem { tag: string; t: string; current?: boolean; href?: string; d: string; }
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
  { href: '/casestudies/', label: 'Casework' },
  { href: '/news/',        label: 'News' },
  { href: '/about/',       label: 'About' },
  { href: '/contact/',     label: 'Contact' },
];

// ─── SUN_COLOURS from g-shell.jsx (day-arc palette for the nav scroll effect)
export const SUN_COLOURS = [
  '#131A4A','#181C50','#1C1E56','#20205C','#252263','#2A246A','#302671','#362878','#3C297F','#422B86',
  '#482D8C','#4F2D90','#572D90','#5F2D8E','#67308C','#6F3489','#793886','#823C82','#8C407C','#964474',
  '#A1486C','#AB4D62','#B45356','#BC5849','#C25E3C','#C76430','#CC6A2D','#D26F2C','#DC732B','#E8742C',
];

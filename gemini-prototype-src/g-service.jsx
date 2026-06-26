// Gemini AMPM — service pillar detail page (one template, all seven pillars).
// SEO note: every child service is rendered with its LIVE URL shown, making the
// preserved deep-link structure explicit for whoever builds the WordPress redesign.

const REP_CASES = {
  fire: [
    { tag: "Fire · Addressable", sector: "NHS hospital — South East", scope: "Phased addressable fire-alarm replacement delivered across a live, occupied clinical estate." },
    { tag: "Fire · Maintenance", sector: "Managed estate — London", scope: "Planned maintenance and monitoring contract across a multi-building commercial portfolio." },
    { tag: "Fire · Wireless", sector: "Listed building — Sussex", scope: "Wireless detection where cabling would have damaged a heritage interior." },
  ],
  passive: [
    { tag: "Passive · Remediation", sector: "Longfield Court — social housing", scope: "Compartmentation and fire-door remediation with a full-time site foreman and resident liaison." },
    { tag: "Passive · Fire doors", sector: "Residential block — London", scope: "Fire-door survey, remediation and certificated replacement programme." },
    { tag: "Passive · Fire stopping", sector: "Commercial fit-out — City", scope: "Service-penetration fire stopping coordinated with the M&E install." },
  ],
  security: [
    { tag: "Security · Integrated", sector: "Data centre — South East", scope: "High-security access control and CCTV with monitored response on a mission-critical site." },
    { tag: "Security · Access", sector: "Education campus — London", scope: "Campus-wide access control balancing an open environment with controlled zones." },
    { tag: "Security · CCTV", sector: "Logistics — Kent", scope: "HD surveillance with remote monitoring across a high-capacity warehouse." },
  ],
  ventilation: [
    { tag: "Ventilation · AOV", sector: "Residential tower — London", scope: "AOV smoke-extract maintenance and fire-damper testing across a high-rise." },
    { tag: "Ventilation · Service", sector: "Leisure centre — local authority", scope: "Ductwork service and repair completed around live public operation." },
    { tag: "Ventilation · Hygiene", sector: "Care home — South East", scope: "Kitchen and laundry extract cleaning to TR/19, with certificated records." },
  ],
  gas: [
    { tag: "Gas · Inert", sector: "Peterborough Court — City of London", scope: "Landmark gas-suppression package within a flagship fire and security project." },
    { tag: "Gas · Clean-agent", sector: "Comms room — South East", scope: "Chemical-agent suppression design, install and integrity testing for a critical comms room." },
    { tag: "Gas · Maintenance", sector: "Data centre — London", scope: "Planned servicing and integrity testing across multiple suppression zones." },
  ],
  smallworks: [
    { tag: "Small Works · Remedials", sector: "Mixed portfolio — South East", scope: "Closing out FRA and audit actions across fire, passive and security in one programme." },
    { tag: "Small Works · Snags", sector: "Commercial — London", scope: "Post-handover snagging and minor remedial works on a recently completed fit-out." },
    { tag: "Small Works · Reactive", sector: "Managed estate — Surrey", scope: "Reactive remedial visits triggered by routine maintenance findings." },
  ],
  me: [
    { tag: "M&E · Power", sector: "Commercial — London", scope: "Distribution and power works supporting a fire and security systems upgrade." },
    { tag: "M&E · Integration", sector: "Estate — South East", scope: "Mechanical and electrical works tying life-safety systems into the building services." },
    { tag: "M&E · Supporting", sector: "Healthcare — South East", scope: "Supporting M&E for a phased detection and suppression installation." },
  ],
};

const ServicePillarPage = ({ id, setRoute, skin }) => {
  useReveal("svc-" + id);
  const p = PILLARS.find((x) => x.id === id) || PILLARS[0];
  const others = PILLARS.filter((x) => x.id !== id);
  const cases = REP_CASES[id] || REP_CASES.fire;
  const dark = skin === "night";

  return (
    <div className="page" {...(dark ? { "data-nav-dark": "" } : {})}>
      <span className="pageglow"></span>
      <div className="shell">
        <section className="sec p-hero nightband" data-nav-dark>
          <div className="reveal"><span className="svc-bar accent" style={{ background: p.colour }}></span></div>
          <div className="reveal"><Kicker dark>Services &middot; {p.no}</Kicker></div>
          <h1 className="reveal d1" dangerouslySetInnerHTML={{ __html: p.full }} />
          <p className="lede reveal d2" dangerouslySetInnerHTML={{ __html: p.intro }} />
          <div className="reveal d3" style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Book a survey</a>
            <a className="btn line sm" href="#services" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>All services</a>
          </div>
        </section>

        {p.children.length > 0 ? (
          <section className="sec tight">
            <div className="reveal" style={{ marginBottom: 28 }}>
              <Kicker>What we cover</Kicker>
              <h2 className="dhead sm">Every {p.name.replace(/&amp;/g, "&")} service,<br />one accountable team.</h2>
            </div>
            <div className="kids reveal">
              {p.children.map((c) => (
                <a className="kid" key={c.slug}
                   href={"https://geminiampm.co.uk/" + c.slug + "/"}
                   target="_blank" rel="noopener noreferrer">
                  <span className="kn" dangerouslySetInnerHTML={{ __html: c.name }} />
                  <span className="ku">geminiampm.co.uk/{c.slug}/</span>
                </a>
              ))}
            </div>
            <p className="case-note">Each service keeps its own page &mdash; and its existing web address &mdash; so the search ranking earned over the years carries straight into the renewed site.</p>
          </section>
        ) : (
          <section className="sec tight">
            <div className="intro2 reveal">
              <div>
                <Kicker>What we cover</Kicker>
                <h2 className="dhead sm">Scope,<br />in brief.</h2>
              </div>
              <p className="body" dangerouslySetInnerHTML={{ __html: p.short }} />
            </div>
          </section>
        )}

        <section className="sec tight">
          <div className="intro2 reveal">
            <div>
              <Kicker>Why it matters now</Kicker>
              <h2 className="dhead sm">Where the work<br />is coming from.</h2>
            </div>
            <p className="body" dangerouslySetInnerHTML={{ __html: p.drivers }} />
          </div>
        </section>

        <section className="sec">
          <div className="reveal" style={{ marginBottom: 30 }}>
            <Kicker>Representative projects</Kicker>
            <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: p.name + " work, in the field." }} />
          </div>
          <div className="caselist reveal">
            {cases.map((c, i) => (
              <div className="case-card" key={i} onClick={() => setRoute("casestudies")}>
                <image-slot id={"g-rc-" + id + "-" + i} shape="rect" class="ci" style={{ width: "100%", height: "200px", display: "block" }}
                  placeholder={"CASE — " + p.name.replace(/&amp;/g, "&")}></image-slot>
                <span className="ctag" style={{ background: p.colour, position: "absolute" }} dangerouslySetInnerHTML={{ __html: c.tag }} />
                <h4>[{c.sector}]</h4>
                <p className="cs" dangerouslySetInnerHTML={{ __html: c.scope }} />
              </div>
            ))}
          </div>
          <p className="case-note">Representative of the {p.name.replace(/&amp;/g, "&")} work we deliver. Named, full case studies and PQQ references available on request.</p>
        </section>

        <section className="sec tight line-top">
          <div className="reveal" style={{ marginBottom: 22 }}>
            <Kicker>Sectors</Kicker>
            <h2 className="dhead sm">Built for the most<br />demanding buildings.</h2>
          </div>
          <div className="sectorchips reveal">
            {SECTORS.map((s) => (
              <span key={s.slug} className="sectorchip" onClick={() => setRoute("sectors")}>
                <span className="sw" style={{ background: s.colour }}></span>
                <span dangerouslySetInnerHTML={{ __html: s.name }} />
              </span>
            ))}
          </div>
        </section>

        <section className="sec tight line-top">
          <div className="reveal" style={{ marginBottom: 22 }}>
            <Kicker>The rest of the offer</Kicker>
            <h2 className="dhead sm">One contractor,<br />the whole building.</h2>
          </div>
          <div className="otherlines reveal">
            {others.map((o) => (
              <div className="otherline" key={o.id} onClick={() => setRoute(o.id)}>
                <span className="ol-l"><span className="ol-sw" style={{ background: o.colour }}></span><span className="ol-nm" dangerouslySetInnerHTML={{ __html: o.name }} /></span>
                <span className="ol-go">&rarr;</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="band" data-nav-dark style={{ background: p.colour, color: "#fff" }}>
        <div className="shell">
          <div className="cta-split reveal">
            <div>
              <Kicker dark>Talk to us about {p.name.replace(/&amp;/g, "&")}</Kicker>
              <h2 className="dhead sm" style={{ color: "#fff" }}>Get the building<br />surveyed this week.</h2>
              <p className="body" style={{ color: "rgba(255,255,255,0.9)", marginTop: 16 }}>
                A named engineer, not a call centre, comes back within 24 hours. Tell us the building, the system and where you are with compliance.
              </p>
            </div>
            <div className="cta-row2" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation &rarr;</a>
              <a className="btn ghost" href="#why" onClick={(e) => { e.preventDefault(); setRoute("why"); }}>Why choose Gemini</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { REP_CASES, ServicePillarPage });

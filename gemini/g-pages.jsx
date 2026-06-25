// Gemini AMPM — interior pages (calm "daylight chapters" on the BS sub-page
// system, in the night skin). Routes mirror the live IA & URLs.

const PageHero = ({ kicker, h1, lede, ctas }) => (
  <section className="sec p-hero nightband" data-nav-dark>
    <div className="reveal"><Kicker dark>{kicker}</Kicker></div>
    <h1 className="reveal d1" dangerouslySetInnerHTML={{ __html: h1 }} />
    {lede && <p className="lede reveal d2" dangerouslySetInnerHTML={{ __html: lede }} />}
    {ctas && <div className="reveal d3" style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>{ctas}</div>}
  </section>
);

const PageWrap = ({ skin, children }) => (
  <div className="page" {...(skin === "night" ? { "data-nav-dark": "" } : {})}>
    <span className="pageglow"></span>
    <div className="shell">{children}</div>
  </div>
);

const ContactBand = ({ setRoute }) => (
  <section className="band ink" data-nav-dark>
    <div className="shell">
      <div className="cta-split reveal">
        <div>
          <Kicker dark>Talk to us</Kicker>
          <h2 className="dhead sm" style={{ color: "#fff" }}>One call covers<br />the whole building.</h2>
        </div>
        <div className="cta-row2" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation &rarr;</a>
          <a className="btn ghost" href="#services" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>See all services</a>
        </div>
      </div>
    </div>
  </section>
);

// Real accreditation wall (reused on Why + About). Tile hover flips to
// reveal the cert thumbnail; click navigates to the cert's own page where
// the full PDF and scope detail live.
const AccredWall = ({ head, setRoute }) => (
  <section className="sec tight">
    <div className="reveal" style={{ marginBottom: 24 }}>
      <Kicker>Accreditations</Kicker>
      <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: head || "Certified to<br />the standard." }} />
    </div>
    <div className="acc-wall reveal">
      {ACCREDS.map((a, i) => {
        const go = (e) => { if (setRoute) { e.preventDefault(); setRoute(a.slug); } };
        const front = (
          <div className="face front">
            <div className="t">{a.t}</div>
            <div className="d" dangerouslySetInnerHTML={{ __html: a.d }} />
            <div className="acc-go" aria-hidden="true">Read more →</div>
          </div>
        );
        const back = a.thumb ? (
          <div className="face back" style={{ backgroundImage: "url(" + a.thumb + ")" }} aria-hidden="true" />
        ) : null;
        const inner = back ? <div className="flipper">{front}{back}</div> : front;
        return (
          <a className="cell linked" key={i} href={"#" + a.slug} onClick={go}>{inner}</a>
        );
      })}
    </div>
    <p className="case-note">Held and maintained live &mdash; click any accreditation to see the certificate and what it means. References and PQQ submissions available on request.</p>
  </section>
);

// ——— Accreditations index — /about-us/accreditations/ ———
const AccreditationsIndexPage = ({ setRoute, skin }) => {
  useReveal("accreditations");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Accreditations" h1="The marks behind<br />the work."
        lede="Every system we install lands on a building where someone — a Responsible Person, a building manager, a tenant — has to trust it. The accreditations on this page are the third-party-audited reasons that trust is reasonable. Each one is verifiable on its awarding body's register; each certificate is on its dedicated page below." />
      <AccredWall head="Every cert, on its own page." setRoute={setRoute} />
      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>Verification</Kicker>
            <h2 className="dhead sm">Don't take our<br />word for it.</h2>
          </div>
          <div>
            <p className="body">Each accreditation page links to the awarding body's own register so the certificate can be verified directly. The certificates themselves are uploaded as PDFs — current versions only, held by us and renewed on the schedule the awarding body audits to.</p>
            <p className="body">For tender or PQQ submissions, copies of the live certificates and our references are available on request. Email <a href="mailto:info@geminiampm.co.uk">info@geminiampm.co.uk</a> or call <a href={"tel:" + String(CONTACT.phone).replace(/\s+/g, "")}>{CONTACT.phone}</a>.</p>
          </div>
        </div>
      </section>
    </PageWrap>
  );
};

// ——— Single accreditation page — /about-us/accreditations/<slug>/ ———
const AccreditationPage = ({ slug, setRoute, skin }) => {
  useReveal("accreditation-" + slug);
  const a = ACCRED_BY_SLUG[slug];
  if (!a) return <PageWrap skin={skin}><PageHero kicker="Accreditation" h1="Not found" lede="" /></PageWrap>;
  const relatedPillars = (a.pillars || []).map((pid) => PILLARS.find((p) => p.id === pid)).filter(Boolean);
  return (
    <PageWrap skin={skin}>
      <PageHero kicker={"Accreditation · " + a.t} h1={a.h1} lede={a.lede} />

      <section className="sec tight">
        <div className="acc-detail reveal">
          <div className="acc-detail-copy">
            <Kicker>What it covers</Kicker>
            <ul className="acc-covers">
              {(a.covers || []).map((c, i) => <li key={i} dangerouslySetInnerHTML={{ __html: c }} />)}
            </ul>
          </div>
          <div className="acc-detail-cert">
            {a.thumb ? (
              <a className="acc-cert-card" href={a.pdf} target="_blank" rel="noopener noreferrer">
                <img src={a.thumb} alt={"Gemini AMPM " + a.t + " certificate"} />
                <span className="acc-cert-go">View certificate PDF ↗</span>
              </a>
            ) : (
              <div className="acc-cert-card pending">
                <span className="acc-cert-pending">Certificate PDF pending</span>
                <span className="acc-cert-pending-sub">Membership held; current certificate being uploaded.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>What it means for clients</Kicker>
            <h2 className="dhead sm">Why this matters<br />on a real job.</h2>
          </div>
          <div>
            <p className="body" dangerouslySetInnerHTML={{ __html: a.means }} />
            {a.verify ? (
              <p className="body" style={{ marginTop: 16 }}>
                <a className="btn line sm" href={a.verify} target="_blank" rel="noopener noreferrer">Verify on {a.verify_label} ↗</a>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {relatedPillars.length > 0 ? (
        <section className="sec tight">
          <div className="reveal" style={{ marginBottom: 24 }}>
            <Kicker>Where we apply this</Kicker>
            <h2 className="dhead sm">The work it underpins.</h2>
          </div>
          <div className="acc-pillars reveal">
            {relatedPillars.map((p) => (
              <a key={p.id} className="acc-pillar" href={"#" + p.id}
                 onClick={(e) => { e.preventDefault(); setRoute(p.id); }}>
                <span className="t" dangerouslySetInnerHTML={{ __html: p.name }} />
                <span className="d" dangerouslySetInnerHTML={{ __html: p.short }} />
                <span className="go" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="sec tight">
        <div className="reveal" style={{ marginBottom: 24 }}>
          <Kicker>The full set</Kicker>
          <h2 className="dhead sm">All twelve accreditations.</h2>
        </div>
        <div className="acc-siblings reveal">
          {ACCREDS.filter((x) => x.slug !== a.slug).map((x) => (
            <a key={x.slug} className="acc-sibling" href={"#" + x.slug}
               onClick={(e) => { e.preventDefault(); setRoute(x.slug); }}>
              <span className="t">{x.t}</span>
              <span className="d" dangerouslySetInnerHTML={{ __html: x.d }} />
            </a>
          ))}
        </div>
        <p className="case-note" style={{ marginTop: 24 }}>
          <a href="#accreditations" onClick={(e) => { e.preventDefault(); setRoute("accreditations"); }}>← Back to the accreditations index</a>
        </p>
      </section>

      {/* JSON-LD: EducationalOccupationalCredential */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalCredential",
        "name": a.t + " — Gemini AMPM Ltd",
        "credentialCategory": "Industry accreditation",
        "recognizedBy": { "@type": "Organization", "name": a.verify_label || a.t, "url": a.verify },
        "about": { "@type": "Organization", "name": "Gemini AMPM Ltd", "url": "https://geminiampm.co.uk" },
        "url": "https://geminiampm.co.uk/about-us/accreditations/" + a.slug + "/",
      }) }} />
    </PageWrap>
  );
};

// ——— Services overview ———
const ServicesPage = ({ setRoute, skin }) => {
  useReveal("services");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Services" h1="Everything that keeps<br />a building safe<br />after dark."
        lede="Fire, security, ventilation, gas suppression and passive fire &mdash; <strong>seven service lines, one accountable, employee-owned team.</strong> Designed, installed, monitored and maintained for the South East&rsquo;s most demanding commercial and public-sector buildings."
        ctas={<a className="btn sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation</a>} />
      <section className="sec tight">
        {PILLARS.map((p) => (
          <div className="svc-detail link reveal" key={p.id} onClick={() => setRoute(p.id)}>
            <div className="lead-col">
              <span className="no">{p.no}</span>
              <span className="swatch" style={{ background: p.colour }}></span>
            </div>
            <div>
              <h3 className="nm" dangerouslySetInnerHTML={{ __html: p.full }} />
              <p className="scope" dangerouslySetInnerHTML={{ __html: p.short }} />
            </div>
            <div>
              <p className="aside-l">Why now</p>
              <p className="driver" dangerouslySetInnerHTML={{ __html: p.drivers }} />
            </div>
          </div>
        ))}
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Sectors ———
const SectorsPage = ({ setRoute, skin }) => {
  useReveal("sectors");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Sectors" h1="The buildings<br />we keep safe."
        lede="We work across commercial and public-sector buildings in complex, safety-critical environments &mdash; <strong>from hospitals and data centres to social housing, hospitality and education.</strong> Each sector has its own compliance demands; our teams know them." />
      <section className="sec tight">
        <div className="sec-index reveal">
          {SECTORS.map((s) => (
            <div className="sec-card" key={s.slug} onClick={() => setRoute("contact")}>
              <span className="sw" style={{ background: s.colour }}></span>
              <h3 dangerouslySetInnerHTML={{ __html: s.name }} />
              <p dangerouslySetInnerHTML={{ __html: s.blurb }} />
              <span className="url">geminiampm.co.uk/{s.slug}/</span>
            </div>
          ))}
        </div>
        <p className="case-note">Each sector keeps its own landing page and existing web address &mdash; the renewed design drops straight onto the URLs already ranking.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Why choose Gemini ———
const WhyPage = ({ setRoute, skin }) => {
  useReveal("why");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Why choose Gemini" h1="Owned by the<br />people who<br />do the work."
        lede="Safety and security sit at the heart of everything we do. As an <strong>employee-owned business (EOT)</strong>, every member of the team has a vested interest in delivering the highest standard &mdash; not a brief to hit, an ownership stake to protect." />
      <section className="sec tight">
        <div className="principles reveal">
          {WHY.map((w) => (
            <div className="principle" key={w.n}>
              <span className="n">{w.n}</span>
              <div>
                <h4 dangerouslySetInnerHTML={{ __html: w.t }} />
                <p dangerouslySetInnerHTML={{ __html: w.d }} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <AccredWall head="Owned by our people.<br />Audited by everyone else." setRoute={setRoute} />
      <section className="sec tight">
        <div className="statband reveal">
          {PROOF.map((c, i) => (
            <div className="cell" key={i}>
              <div className="big">{c.big}</div>
              <div className="lbl" dangerouslySetInnerHTML={{ __html: c.lbl }} />
            </div>
          ))}
        </div>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— About ———
const GROUP = [
  { tag: "This company", t: "Gemini AMPM", current: true, d: "Fire, security, ventilation, gas suppression and passive fire since 1997. Employee-owned. The life-safety specialist of the group." },
  { tag: "Sister company", t: "AMPM Building Services", href: "https://ampm.co.uk", d: "MEPH, commercial fit-out, fabric and groundworks &mdash; the daytime building-services arm. AM &rarr; PM." },
  { tag: "The wider group", t: "AMPM Group", href: "https://ampmgroup.co.uk", d: "The mothership: shared standards, shared operating stack, one palette. Several companies, one accountable group." },
];

const AboutPage = ({ setRoute, skin }) => {
  useReveal("about");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="About us" h1="The night shift<br />of AMPM Group."
        lede="Gemini AMPM has protected the South East&rsquo;s buildings since <strong>1997</strong>. In 2024 we became an Employee Ownership Trust &mdash; and today we&rsquo;re the life-safety specialist within AMPM Group, working alongside our daytime sister company on the buildings that can&rsquo;t afford to get safety wrong." />
      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>Who we are</Kicker>
            <h2 className="dhead sm">Specialists in<br />the difficult buildings.</h2>
          </div>
          <div>
            <p className="body">We work with construction firms, facilities-management providers, property owners and businesses across the UK &mdash; <strong>keeping their buildings compliant, safe and operational 24/7.</strong></p>
            <p className="body">Hospitals, data centres, social housing, leisure centres, schools and commercial estates: the environments where evacuation strategy, clinical continuity and controlled access actually matter. We design, install, monitor and maintain the systems that hold them safe &mdash; and we&rsquo;re owned by the engineers who deliver them.</p>
          </div>
        </div>
      </section>
      <section className="sec tight">
        <div className="reveal" style={{ marginBottom: 24 }}>
          <Kicker>The group</Kicker>
          <h2 className="dhead sm">One group,<br />around the clock.</h2>
        </div>
        <div className="grp-grid reveal">
          {GROUP.map((g, i) => {
            const cls = "cell" + (g.current ? " current" : "") + (g.href ? " linked" : "");
            const inner = (
              <>
                <span className="tag">{g.tag}</span>
                <h3 dangerouslySetInnerHTML={{ __html: g.t }} />
                <p dangerouslySetInnerHTML={{ __html: g.d }} />
                {g.href ? <span className="cell-go" aria-hidden="true">Visit ↗</span> : null}
              </>
            );
            return g.href
              ? <a className={cls} key={i} href={g.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              : <div className={cls} key={i}>{inner}</div>;
          })}
        </div>
      </section>
      <AccredWall head="The accreditations<br />behind the work." setRoute={setRoute} />
      <section className="sec tight">
        <div className="statband reveal">
          {PROOF.map((c, i) => (
            <div className="cell" key={i}><div className="big">{c.big}</div><div className="lbl" dangerouslySetInnerHTML={{ __html: c.lbl }} /></div>
          ))}
        </div>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— News ———
const NewsPage = ({ setRoute, skin }) => {
  useReveal("news");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="News &amp; insights" h1="From the<br />control room."
        lede="Standards change, regulations tighten, and buildings get more complex. We write about what that means in practice &mdash; <strong>fire, security, ventilation and compliance, explained by the people doing the work.</strong>" />
      <section className="sec tight">
        <div className="news-index reveal">
          {NEWS.map((n) => (
            <div className="ni-card" key={n.slug} onClick={() => setRoute("contact")}>
              <image-slot id={"g-newsidx-" + n.slug} shape="rect" class="img" style={{ width: "100%", height: "200px", display: "block" }}
                placeholder={n.cat + " — article image"}></image-slot>
              <div className="meta"><span className="cat">{n.cat}</span><span>{n.date}</span></div>
              <h4 dangerouslySetInnerHTML={{ __html: n.title }} />
              <p dangerouslySetInnerHTML={{ __html: n.teaser }} />
              <span className="url">geminiampm.co.uk/{n.slug}/</span>
            </div>
          ))}
        </div>
        <p className="case-note">Every existing article keeps its URL &mdash; the renewed design re-skins the post template without breaking a single ranking link.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Case studies ———
const CaseStudiesPage = ({ setRoute, skin }) => {
  useReveal("casestudies");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Casework" h1="Proof, not<br />promises."
        lede="A landmark City project, social-housing remediation delivered around residents, leisure-centre works completed without closing the doors &mdash; <strong>the kind of jobs that only go well when the same team owns the outcome.</strong>" />
      <section className="sec tight">
        <div className="caselist reveal">
          {CASES.map((c, i) => (
            <div className="case-card" key={i} onClick={() => setRoute("contact")}>
              <image-slot id={"g-case-" + i} shape="rect" class="ci" style={{ width: "100%", height: "210px", display: "block" }}
                placeholder={"CASE — " + c.tag}></image-slot>
              <span className="ctag" style={{ background: "var(--m-orange)", position: "absolute" }} dangerouslySetInnerHTML={{ __html: c.tag }} />
              <h4 dangerouslySetInnerHTML={{ __html: c.sector }} />
              <p className="cs" dangerouslySetInnerHTML={{ __html: c.scope }} />
            </div>
          ))}
        </div>
        <p className="case-note">A selection. Full case studies and client references available on request &mdash; including PQQ-ready evidence for tenders.</p>
      </section>
      <ContactBand setRoute={setRoute} />
    </PageWrap>
  );
};

// ——— Contact ———
const ContactPage = ({ setRoute, skin, phone }) => {
  useReveal("contact");
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Contact" h1="Tell us about<br />the building."
        lede="A named engineer comes back within 24 hours &mdash; not a call centre. <strong>Tell us the building, the system and where you are with compliance,</strong> and we&rsquo;ll take it from there." />
      <section className="sec tight">
        <div className="contact-grid">
          <div className="reveal">
            <div className="routes2" style={{ gridTemplateColumns: "1fr" }}>
              <div className="route">
                <p className="rl">Call us</p>
                <div className="rv"><a href={tel}>{phone}</a></div>
                <p className="rs">Out of hours? The line is monitored &mdash; an answered call, every time.</p>
              </div>
              <div className="route stack">
                <p className="rl">Email</p>
                <div className="rv"><a href="mailto:info@geminiampm.co.uk">info@geminiampm.co.uk</a></div>
              </div>
              <div className="route stack">
                <p className="rl">Find us</p>
                <div className="rv" style={{ fontSize: "20px", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: CONTACT.address }} />
              </div>
              <div className="route stack">
                <p className="rl">Existing client</p>
                <div className="rv" style={{ fontSize: "20px" }}><a href={CONTACT.portal} target="_blank" rel="noopener noreferrer">Client portal ↗</a></div>
                <p className="rs">Log work, track jobs and view reports through the AMPM client portal.</p>
              </div>
            </div>
          </div>
          <form className="cform reveal d1" onSubmit={(e) => e.preventDefault()}>
            <input className="f" type="text" placeholder="Name" />
            <input className="f" type="text" placeholder="Company" />
            <input className="f" type="email" placeholder="Email" />
            <input className="f" type="tel" placeholder="Phone" />
            <select className="f" defaultValue="">
              <option value="" disabled>Service required…</option>
              {PILLARS.map((p) => <option key={p.id} dangerouslySetInnerHTML={{ __html: p.full }} />)}
            </select>
            <textarea className="f" rows="3" placeholder="The building, the system, where you are with compliance"></textarea>
            <button className="btn" type="submit">Request a consultation</button>
            <p className="sla">We respond within 24 hours · Mon–Fri</p>
          </form>
        </div>
      </section>
    </PageWrap>
  );
};

// ——— Clients directory — full list at /clients/, grouped by sector ———
const ClientsDirectoryPage = ({ setRoute, skin }) => {
  useReveal("clients");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Clients" h1="Every client<br />we work with."
        lede={"The 12 on our home page are the ones we lead with &mdash; but they aren&rsquo;t the whole story. " +
              "What follows is the full set of named clients across the sectors we serve: Tier-1 main contractors, " +
              "FM partners, the M&amp;E and building-services peer network, fit-out specialists, the NHS Trusts we " +
              "work with on hospital and ambulance estates, higher-education campuses, public sector and housing " +
              "associations, and the corporate occupiers who trust our compliance work."} />

      {CLIENT_SECTORS.map((sector) => {
        const inSector = CLIENTS.filter((c) => c.sector === sector.id);
        if (inSector.length === 0) return null;
        return (
          <section className="sec tight" key={sector.id}>
            <div className="reveal" style={{ marginBottom: 18 }}>
              <Kicker>{inSector.length} {inSector.length === 1 ? "client" : "clients"}</Kicker>
              <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: sector.name }} />
            </div>
            <div className="cdir-grid reveal">
              {inSector.map((c) => {
                const logoClass = "cdir-logo" + (c.logoMode === "keep" ? " cdir-logo--keep" : "");
                const inner = (
                  <>
                    {c.logo
                      ? <img className={logoClass} src={c.logo} alt={c.nm + " logo"} loading="lazy" />
                      : <span className="cdir-logo cdir-logo--text" dangerouslySetInnerHTML={{ __html: c.nm }} />}
                    <span className="cdir-nm" dangerouslySetInnerHTML={{ __html: c.nm }} />
                    <span className="cdir-what" dangerouslySetInnerHTML={{ __html: c.what }} />
                  </>
                );
                return c.link
                  ? <a className="cdir-cell" key={c.nm} href={c.link} target="_blank" rel="noopener noreferrer">{inner}</a>
                  : <div className="cdir-cell" key={c.nm}>{inner}</div>;
              })}
            </div>
          </section>
        );
      })}

      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>Work with us</Kicker>
            <h2 className="dhead sm">Looking for a contractor<br />who answers the night call?</h2>
          </div>
          <div>
            <p className="body">If you&rsquo;re building, refurbishing, managing or occupying a commercial property and need fire, security, ventilation or gas suppression delivered by a team that gets compliance right, get in touch.</p>
            <p className="body" style={{ marginTop: 16 }}>
              <a className="btn line sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Contact our team &rarr;</a>
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD: ItemList for the clients directory */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Gemini AMPM clients",
        "url": "https://geminiampm.co.uk/clients/",
        "numberOfItems": CLIENTS.length,
        "itemListElement": CLIENTS.map((c, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": c.nm.replace(/&[a-z]+;|&#\d+;/g, ""),
          "url": c.link || undefined,
        })),
      }) }} />
    </PageWrap>
  );
};

// ——— Manufacturers directory — full list at /manufacturers/, grouped by category ———
const ManufacturersDirectoryPage = ({ setRoute, skin }) => {
  useReveal("manufacturers");
  return (
    <PageWrap skin={skin}>
      <PageHero kicker="Manufacturers" h1="Brands we install,<br />maintain &amp; specify."
        lede={"From Fike ProInert IG55 on Peterborough Court to Hyfire wireless systems and the air-conditioning majors &mdash; " +
              "these are the manufacturers and trade partners we install and maintain across UK commercial estates. " +
              "Approved installer with several; long-term framework with others. Use this to validate compatibility before " +
              "calling, or to find the brand specified on your drawings."} />

      {MANUFACTURER_CATEGORIES.map((cat) => {
        const inCat = MANUFACTURERS.filter((m) => m.cat === cat.id);
        if (inCat.length === 0) return null;
        return (
          <section className="sec tight" key={cat.id}>
            <div className="reveal" style={{ marginBottom: 18 }}>
              <Kicker>{inCat.length} {inCat.length === 1 ? "brand" : "brands"}</Kicker>
              <h2 className="dhead sm" dangerouslySetInnerHTML={{ __html: cat.name }} />
            </div>
            <div className="cdir-grid reveal">
              {inCat.map((m) => {
                const logoClass = "cdir-logo" + (m.logoMode === "keep" ? " cdir-logo--keep" : "");
                const inner = (
                  <>
                    {m.logo
                      ? <img className={logoClass} src={m.logo} alt={m.nm + " logo"} loading="lazy" />
                      : <span className="cdir-logo cdir-logo--text" dangerouslySetInnerHTML={{ __html: m.nm }} />}
                    <span className="cdir-nm" dangerouslySetInnerHTML={{ __html: m.nm }} />
                    <span className="cdir-what" dangerouslySetInnerHTML={{ __html: m.what }} />
                  </>
                );
                return m.link
                  ? <a className="cdir-cell" key={m.nm} href={m.link} target="_blank" rel="noopener noreferrer">{inner}</a>
                  : <div className="cdir-cell" key={m.nm}>{inner}</div>;
              })}
            </div>
          </section>
        );
      })}

      <section className="sec tight">
        <div className="intro2 reveal">
          <div>
            <Kicker>Specifier?</Kicker>
            <h2 className="dhead sm">Need a quote on a<br />specified brand?</h2>
          </div>
          <div>
            <p className="body">Working from a drawing set or specification that names one of these brands? Send us the spec and we&rsquo;ll come back with a fixed quote, certified install and audit-ready evidence pack.</p>
            <p className="body" style={{ marginTop: 16 }}>
              <a className="btn line sm" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Send a specification &rarr;</a>
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD: ItemList for the manufacturers directory */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Manufacturers Gemini AMPM installs and maintains",
        "url": "https://geminiampm.co.uk/manufacturers/",
        "numberOfItems": MANUFACTURERS.length,
        "itemListElement": MANUFACTURERS.map((m, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": m.nm.replace(/&[a-z]+;|&#\d+;/g, ""),
          "url": m.link || undefined,
        })),
      }) }} />
    </PageWrap>
  );
};

Object.assign(window, { ServicesPage, SectorsPage, WhyPage, AboutPage, NewsPage, CaseStudiesPage, ContactPage, AccreditationsIndexPage, AccreditationPage, ClientsDirectoryPage, ManufacturersDirectoryPage });

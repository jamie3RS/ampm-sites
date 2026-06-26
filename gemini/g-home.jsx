// Gemini AMPM — homepage. The inverted arc: PM → AM, one night on watch.
// Two directions, switched by the `concept` tweak:
//   "watch"      — full night-log storytelling (the differentiator)
//   "firstlight" — calmer, who-we-are led, closer to the live structure

const STАRS = null; // (guard against accidental cyrillic dupes)
const STAR_FIELD = [
  [220, 14], [340, 38], [480, 72], [620, 8], [780, 55], [960, 85], [1140, 24],
  [1320, 64], [1520, 12], [1700, 78], [1900, 42], [2100, 90], [2320, 18],
  [2560, 58], [2800, 30], [3050, 74], [3300, 10], [3550, 48], [3800, 67], [4050, 33],
];

const Stars = () => (
  <div className="stars" aria-hidden="true">
    <span className="moonglow" style={{ top: "360px", right: "5%" }}></span>
    {STAR_FIELD.map(([top, left], i) => (
      <span key={i} className={"star" + (i % 2 ? " s2" : "")} style={{ top: top + "px", left: left + "%" }}></span>
    ))}
  </div>
);

const HeroFig = () => (
  <figure className="gfig reveal d2">
    <image-slot id="g-hero" shape="rect" style={{ width: "100%", height: "clamp(300px,38vw,460px)", display: "block" }}
      src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=72"
      placeholder="NIGHT — the building / city after dark"></image-slot>
    <figcaption className="gcap">After hours &mdash; when the building empties, the systems stay on · Peterborough Court, Fleet Street &middot; London</figcaption>
  </figure>
);

const Ribbon = () => {
  const hero = heroPillars.map((id) => PILLARS.find((p) => p.id === id));
  return (
    <div className="gribbon reveal">
      <div className="bar">
        {hero.map((p, i) => (
          <a key={p.id} className="seg" href={"#" + p.id} style={{ background: p.colour }}
             onClick={(e) => { e.preventDefault(); window.__setRoute(p.id); }}>
            <span dangerouslySetInnerHTML={{ __html: p.name }} /><small>{p.no}</small>
          </a>
        ))}
      </div>
      <div className="legend">
        <span>PM &mdash; the watch begins</span>
        <span>Employee-owned &middot; monitored 24/7</span>
        <span>AM &mdash; handed back</span>
      </div>
    </div>
  );
};

const ServiceLedger = ({ setRoute }) => (
  <section className="gwrap gservices">
    <GStamp time="23:00" shift="Systems live" />
    <h2 className="gh2 reveal">What&rsquo;s on<br /><span className="lt">while you&rsquo;re off.</span></h2>
    <div>
      {PILLARS.map((p) => (
        <a key={p.id} className="gsvc reveal" href={"#" + p.id}
           onClick={(e) => { e.preventDefault(); setRoute(p.id); }}>
          <span className="num">{p.no}</span>
          <span className="nm" dangerouslySetInnerHTML={{ __html: p.name + '<span class="sw" style="background:' + p.colour + '"></span>' }} />
          <p dangerouslySetInnerHTML={{ __html: p.short }} />
          <span className="go">&rarr;</span>
        </a>
      ))}
    </div>
    <div className="gglass gproof reveal" style={{ marginTop: "clamp(40px,5vw,60px)" }}>
      {PROOF.map((c, i) => (
        <div className="cell" key={i}>
          <div className="big">{c.big}</div>
          <div className="lbl" dangerouslySetInnerHTML={{ __html: c.lbl }} />
        </div>
      ))}
    </div>
  </section>
);

const TheWatch = () => (
  <section className="gwrap gwatch">
    <GStamp time="02:47" shift="The watch" />
    <h2 className="gh2 reveal">While you<br /><span className="lt">were out.</span></h2>
    <div className="cols">
      <div className="story reveal">
        <p>
          Most security companies sell you boxes on the wall. <strong>We sell you the night&rsquo;s
          sleep</strong> &mdash; systems that are designed, installed, watched and answered, not just
          fitted and forgotten.
        </p>
        <p>
          Fire detection, suppression, intruder and access &mdash; monitored from one control centre,
          with an engineer who responds. Every line in the log is a real kind of night for our
          clients. <strong>The difference is who&rsquo;s awake when it happens.</strong>
        </p>
      </div>
      <div className="gglass glog reveal d1">
        <div className="hd"><span className="dotlive"></span>Night log &mdash; [site name]</div>
        {NIGHTLOG.map((r, i) => (
          <div className="row" key={i}>
            <span className="t">{r.t}</span>
            <span dangerouslySetInnerHTML={{ __html: r.e }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section className="gwrap gwatch">
    <GStamp time="22:10" shift="Who we are" />
    <h2 className="gh2 reveal">Employee-owned.<br /><span className="lt">Safety-led.</span></h2>
    <div className="gwho reveal" style={{ marginTop: 8 }}>
      {WHY.map((w) => (
        <div className="cell" key={w.n}>
          <span className="n">{w.n}</span>
          <h4 dangerouslySetInnerHTML={{ __html: w.t }} />
          <p dangerouslySetInnerHTML={{ __html: w.d }} />
        </div>
      ))}
    </div>
  </section>
);

const SectorsTeaser = ({ setRoute }) => (
  <section className="gwrap gclients">
    <GStamp time="03:30" shift="Who we protect" />
    <h2 className="gh2 reveal">The buildings<br /><span className="lt">we keep safe.</span></h2>
    <div className="gsector-grid reveal">
      {SECTORS.map((s) => (
        <a key={s.slug} className="gsector" href={"#sectors"} onClick={(e) => { e.preventDefault(); setRoute("sectors"); }}>
          <span className="sw" style={{ background: s.colour }}></span>
          <span className="nm" dangerouslySetInnerHTML={{ __html: s.name }} />
          <p className="bl" dangerouslySetInnerHTML={{ __html: s.blurb }} />
        </a>
      ))}
    </div>
  </section>
);

const ClientsRow = ({ setRoute }) => {
  // Home grid shows the 12 featured tiles (curation in CLIENTS_CURATION.md).
  // Full directory of all named clients lives at /clients/ (route id: "clients").
  const featured = CLIENTS.filter((c) => c.featured);
  return (
    <section className="gwrap gclients" style={{ paddingTop: "clamp(70px,8vw,100px)" }}>
      <GStamp time="04:30" shift="Trusted by" />
      <h2 className="gh2 reveal">The company<br /><span className="lt">we keep.</span></h2>
      <div className="gglass gclient-row reveal">
        {featured.map((c, i) => {
          const logoClass = "gclient-logo" + (c.logoMode === "keep" ? " gclient-logo--keep" : "");
          const inner = (
            <>
              {c.logo
                ? <img className={logoClass} src={c.logo} alt={c.nm + " logo"} loading="lazy" />
                : <span className="gclient-logo gclient-logo--text" dangerouslySetInnerHTML={{ __html: c.nm }} />}
              <span className="nm" dangerouslySetInnerHTML={{ __html: c.nm }} />
              <span className="what" dangerouslySetInnerHTML={{ __html: c.what }} />
            </>
          );
          return c.link
            ? <a className="gclient gclient--linked" key={i} href={c.link} target="_blank" rel="noopener noreferrer">{inner}</a>
            : <div className="gclient" key={i}>{inner}</div>;
        })}
      </div>
      <div className="reveal" style={{ textAlign: "center", marginTop: "clamp(24px, 3vw, 36px)" }}>
        <a className="gpill" href="#clients"
           onClick={(e) => { if (setRoute) { e.preventDefault(); setRoute("clients"); } }}>
          See every client we work with &rarr;
        </a>
      </div>
    </section>
  );
};

const NewsTeaser = ({ setRoute }) => (
  <section className="gwrap gclients" style={{ paddingTop: "clamp(70px,8vw,100px)" }}>
    <GStamp time="05:10" shift="Latest insights" />
    <h2 className="gh2 reveal">From the<br /><span className="lt">control room.</span></h2>
    <div className="gnews-row reveal">
      {NEWS.slice(0, 3).map((n) => (
        <a key={n.slug} className="gnews" href={"#news"} onClick={(e) => { e.preventDefault(); setRoute("news"); }}>
          <image-slot id={"g-news-" + n.slug} shape="rect" class="ni" style={{ width: "100%", height: "196px", display: "block" }}
            placeholder={n.cat + " — article image"}></image-slot>
          <div className="meta"><span className="cat">{n.cat}</span><span>{n.date}</span></div>
          <h4 dangerouslySetInnerHTML={{ __html: n.title }} />
          <p dangerouslySetInnerHTML={{ __html: n.teaser }} />
        </a>
      ))}
    </div>
  </section>
);

const DawnHandback = ({ setRoute, phone }) => (
  <div className="gdaybreak">
    <section className="gwrap gdawn">
      <GStamp time="06:12" shift="First light" />
      <h2 className="gh2 reveal">Handed back,<br />every morning.</h2>
      <p className="lead reveal d1">
        The building opens, the systems disarm, and the night&rsquo;s log is in your inbox before
        your coffee. <strong>That&rsquo;s the product: an uneventful morning</strong> &mdash; and a
        building that stayed compliant, safe and operational while you slept.
      </p>
      <div className="gcta reveal d1" style={{ marginTop: 0 }}>
        <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation</a>
        <a className="btn line" href={"tel:" + String(phone).replace(/\s+/g, "")}>{phone}</a>
      </div>
      <a className="gsister reveal d2" href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">
        <span className="txt">
          <strong>Daytime building works? That&rsquo;s our sister company.</strong>
          AMPM Building Services &mdash; MEPH, commercial fit-out, fabric and groundworks. Same group, same standard, the day shift: AM &rarr; PM.
        </span>
        <span className="arrow">{"↗"}</span>
      </a>
    </section>
  </div>
);

const AccredBand = () => (
  <section className="gwrap gclients" style={{ paddingTop: "clamp(70px,8vw,100px)" }}>
    <GStamp time="04:50" shift="Accredited" />
    <h2 className="gh2 reveal">Certified to<br /><span className="lt">the standard.</span></h2>
    <div className="gaccred reveal">
      {ACCREDS.map((a, i) => (
        <div className="cell" key={i}>
          <span className="t">{a.t}</span>
          <span className="d" dangerouslySetInnerHTML={{ __html: a.d }} />
        </div>
      ))}
    </div>
  </section>
);

const GeminiHome = ({ setRoute, phone, concept }) => {
  useReveal("home-" + concept);
  const watch = concept !== "firstlight";
  React.useEffect(() => { window.__setRoute = setRoute; }, [setRoute]);
  return (
    <>
      <div className="ghome" data-nav-dark data-screen-label="Gemini AMPM — homepage">
        <Stars />
        <div className="gspine"></div>

        <header className="gwrap ghero">
          {watch
            ? <GStamp time="18:42" shift="The building empties" />
            : <GStamp time="—" shift="Around the clock" />}
          <h1 className="reveal">
            {watch
              ? <>PM <span className="arr">&rarr;</span> AM.<br />We keep<br />watch.</>
              : <>We protect<br />buildings.<br /><span style={{ color: "rgba(244,234,216,0.5)" }}>Day &amp; night.</span></>}
          </h1>
          <div className="sub-row">
            <div className="reveal d1">
              <p className="standfirst">
                {watch
                  ? <>Fire, security, ventilation and passive fire for the South East&rsquo;s most demanding buildings &mdash; <strong>designed, installed, monitored and maintained since 1997.</strong> When the last person leaves, we&rsquo;re still on.</>
                  : <>An <strong>award-winning, employee-owned provider</strong> of fire and security safety systems, asset management and property maintenance &mdash; keeping commercial and public-sector buildings compliant, safe and operational, 24/7.</>}
              </p>
              <div className="gcta">
                <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); setRoute("contact"); }}>Request a consultation</a>
                <a className="btn line" href="#services" onClick={(e) => { e.preventDefault(); setRoute("services"); }}>Our services</a>
              </div>
            </div>
            <HeroFig />
          </div>
        </header>

        <Ribbon />
        <ServiceLedger setRoute={setRoute} />
        {watch ? <TheWatch /> : <WhoWeAre />}
        <SectorsTeaser setRoute={setRoute} />
        {watch && <ClientsRow setRoute={setRoute} />}
        <AccredBand />
        <NewsTeaser setRoute={setRoute} />
      </div>

      <DawnHandback setRoute={setRoute} phone={phone} />
    </>
  );
};

Object.assign(window, { GeminiHome });

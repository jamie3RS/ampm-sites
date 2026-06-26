// Gemini AMPM — shared shell components. Same vocabulary as AMPM Building
// Services (the group DNA) — moon mark in place of the sun, est-1997 line.

// Top-level routes mirror the live information architecture.
const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "sectors", label: "Sectors" },
  { id: "casestudies", label: "Casework" },
  { id: "news", label: "News" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// ——— Moon mark (the group sun-mark, lower half) ———
const MoonMark = () => <span className="moonmark" aria-hidden="true" />;

// ——— Gemini AMPM logo — production PNG artwork from the design handoff.
// Nav uses the compact "notag" lockup; Footer uses the full lockup with
// strapline (className="lg"). Two variants stack and CSS swaps which is
// visible depending on the surface — cream on dark, charcoal on light. ———
const GeminiLogo = ({ className = "" }) => {
  const isLg = (" " + className + " ").indexOf(" lg ") >= 0;
  const lightSrc = isLg ? "assets/gemini-logo.png" : "assets/gemini-logo-notag.png";
  const darkSrc  = isLg ? "assets/gemini-logo-rev.png" : "assets/gemini-logo-notag-rev.png";
  return (
    <span className={"glogo " + className} aria-label="Gemini AMPM — Asset Management Planned Maintenance">
      <img className="glogo-img glogo-img--light" src={lightSrc} alt="" aria-hidden="true" />
      <img className="glogo-img glogo-img--dark"  src={darkSrc}  alt="Gemini AMPM" />
    </span>
  );
};

// ——— Four-colour meridian (shared with the group) ———
const Meridian = ({ className = "fmer" }) => (
  <span className={className} aria-hidden="true">
    <span style={{ background: "var(--m-green)" }} />
    <span style={{ background: "var(--m-purple)" }} />
    <span style={{ background: "var(--m-orange)" }} />
    <span style={{ background: "var(--m-blue)" }} />
  </span>
);

// ——— Stamp marker (dark home arc) ———
const GStamp = ({ time, shift }) => (
  <div className="gstamp reveal">
    <span className="tick"></span>{time}<span className="shift">{shift}</span>
  </div>
);

// ——— Kicker (sub-pages) ———
const Kicker = ({ children, dark }) => (
  <div className={"kicker" + (dark ? " on-dark" : "")}>{children}</div>
);

// ——— Day-arc colour palette — pre-dawn → first light, top→bottom.
// 30 evenly-spaced stops with VISIBLE delta per step. Starts at a deep
// blue-violet (not jet black) so the first scroll inch already shows
// movement; warms steadily through indigo → purple → rose → peach;
// lands on the Gemini brand orange (#E8742C) at the bottom of the page.
// ~3.3% scroll per stop — each shift is small but perceptible. ———
const SUN_COLOURS = [
  "#131A4A","#181C50","#1C1E56","#20205C","#252263","#2A246A","#302671","#362878","#3C297F","#422B86",
  "#482D8C","#4F2D90","#572D90","#5F2D8E","#67308C","#6F3489","#793886","#823C82","#8C407C","#964474",
  "#A1486C","#AB4D62","#B45356","#BC5849","#C25E3C","#C76430","#CC6A2D","#D26F2C","#DC732B","#E8742C"
];

// ——— Nav ———
const Nav = ({ route, setRoute, phone }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const rootEl = document.documentElement;
    let ticking = false;
    const update = () => {
      ticking = false;
      nav.classList.toggle("scrolled", window.scrollY > 10);
      let dark = false;
      document.querySelectorAll("[data-nav-dark]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < 64 && r.bottom > 0) dark = true;
      });
      nav.classList.toggle("dark", dark);
      const max = rootEl.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const idx = Math.min(SUN_COLOURS.length - 1, Math.floor(p * SUN_COLOURS.length));
      rootEl.style.setProperty("--sun-color", SUN_COLOURS[idx]);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    const t1 = setTimeout(update, 250);
    const t2 = setTimeout(update, 700);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); clearTimeout(t1); clearTimeout(t2); };
  }, [route]);

  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  const tel = "tel:" + String(phone).replace(/\s+/g, "");
  return (
    <nav className="nav dark" id="nav" ref={ref} data-screen-label="Nav">
      <svg className="sunmark" viewBox="0 0 32 32" aria-hidden="true">
        <circle className="sun-disc" cx="16" cy="16" r="10" />
      </svg>
      <a className="wm" href="#home" onClick={go("home")}>
        <GeminiLogo />
      </a>
      <span className="est">Fire &amp; Security &middot; est.&nbsp;1997</span>
      <div className="links">
        {NAV_LINKS.map((p) => (
          <a key={p.id} href={"#" + p.id} className={route === p.id ? "active" : ""} onClick={go(p.id)}>{p.label}</a>
        ))}
      </div>
      <a className="phone" href={tel}>{phone}</a>
    </nav>
  );
};

// ——— Footer (sister of the AMPM Building Services footer) ———
const Footer = ({ setRoute, phone }) => {
  const go = (id) => (e) => { e.preventDefault(); setRoute(id); };
  return (
    <footer className="foot" data-nav-dark>
      <div className="foot-inner">
        <div>
          <div className="fwm"><GeminiLogo className="lg" /></div>
          <p className="ftag">
            Fire, security, ventilation, gas suppression and passive fire &mdash; designed, installed, monitored and maintained since 1997. An employee-owned company of AMPM Group.
          </p>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            {PILLARS.map((p) => (
              <li key={p.id}><a href={"#" + p.id} onClick={go(p.id)} dangerouslySetInnerHTML={{ __html: p.full }} /></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#about" onClick={go("about")}>About us</a></li>
            <li><a href="#why" onClick={go("why")}>Why choose Gemini</a></li>
            <li><a href="#sectors" onClick={go("sectors")}>Sectors</a></li>
            <li><a href="#casestudies" onClick={go("casestudies")}>Case studies</a></li>
            <li><a href="#news" onClick={go("news")}>News &amp; insights</a></li>
            <li><a href={CONTACT.portal} target="_blank" rel="noopener noreferrer">Client portal ↗</a></li>
          </ul>
        </div>
        <div>
          <h5>Get in touch</h5>
          <ul>
            <li><a href={"tel:" + String(phone).replace(/\s+/g, "")}>{phone}</a></li>
            <li><a href="mailto:info@geminiampm.co.uk">info@geminiampm.co.uk</a></li>
            <li className="muted" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: CONTACT.address }} />
          </ul>
          <h5 style={{ marginTop: 22 }}>AMPM Group</h5>
          <ul>
            <li><a href="https://ampmgroup.co.uk" target="_blank" rel="noopener noreferrer">ampmgroup.co.uk ↗</a></li>
            <li><a href="https://ampm.co.uk" target="_blank" rel="noopener noreferrer">AMPM Building Services ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-meta">
        <span>&copy; {new Date().getFullYear()} Gemini AMPM Ltd &middot; An AMPM Group company &middot; est.&nbsp;1997</span>
        <span>Employee-owned (EOT) &middot; Burgess Hill, West Sussex</span>
      </div>
    </footer>
  );
};

// ——— Reveal on scroll (plain geometry — robust in sandboxed iframes) ———
const useReveal = (dep) => {
  React.useEffect(() => {
    let raf = 0, killed = false;
    const all = () => Array.prototype.slice.call(document.querySelectorAll(".reveal:not(.in)"));
    const pass = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      all().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -50) el.classList.add("in");
      });
    };
    const onScroll = () => { if (!raf && !killed) raf = requestAnimationFrame(pass); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    pass();
    const t1 = setTimeout(pass, 300);
    const t2 = setTimeout(pass, 900);
    const t3 = setTimeout(() => { document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in")); }, 1600);
    return () => { killed = true; window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dep]);
};

// ——— Page-top scroll helper used by every sub-page ———
const ScrollTop = ({ dep }) => {
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [dep]);
  return null;
};

Object.assign(window, { NAV_LINKS, MoonMark, GeminiLogo, Meridian, GStamp, Kicker, Nav, Footer, useReveal, ScrollTop });

/* ============================================================
   Kaylee Xiao — Home page + 3 hero variants.
   ============================================================ */
(function () {
const { KXKicker, KXH3, KXP, KXHL, KXSection, KXBand, KXExploreCard, KXSiteButton, KX_IMG } = window;

const TAGLINE = "A student at NYU Steinhardt who loves to make things — video, music, graphic design, and anything creative.";

/* ---- HERO A · floating cutout (centered, typographic) ---- */
function HeroFloat({ setPage }) {
  return (
    <div style={{ position: 'relative', background: 'var(--site-cover-bg)', overflow: 'hidden',
      height: 'calc(100dvh - var(--kx-header-h, 64px))', minHeight: 460,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ position: 'absolute', zIndex: 1, margin: 0, fontFamily: 'var(--site-display)',
        fontSize: 'clamp(64px,15vw,180px)', letterSpacing: '.04em', color: 'var(--site-text)',
        textAlign: 'center', lineHeight: .9, top: '50%', transform: 'translateY(-50%)', width: '100%' }}>
        Kaylee<br/>Xiao
      </h1>
      <img src={KX_IMG + 'cover-1000.webp'} alt="Kaylee Xiao" style={{ position: 'absolute', bottom: 0,
        left: '50%', transform: 'translateX(-50%)', zIndex: 2, height: '92%', width: 'auto',
        objectFit: 'contain', objectPosition: 'bottom' }} />
      <div style={{ position: 'absolute', bottom: 26, zIndex: 3, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <KXSiteButton onClick={() => setPage('Portfolio')}>View Portfolio</KXSiteButton>
        <button onClick={() => setPage('Contact')} style={ghostBtn}>Get in touch</button>
      </div>
    </div>
  );
}

/* ---- HERO B · editorial split ---- */
function HeroSplit({ setPage }) {
  return (
    <div style={{ background: 'var(--site-cover-bg)' }}>
      <div className="kx-hero-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr',
        gap: 40, alignItems: 'center', maxWidth: 1100, margin: '0 auto', padding: '70px 40px' }}>
        <div>
          <KXKicker>Hello, I'm</KXKicker>
          <h1 style={{ margin: '0 0 .25em', fontFamily: 'var(--site-display)',
            fontSize: 'clamp(56px,8.5vw,110px)', lineHeight: .9, letterSpacing: '.03em', color: 'var(--site-text)' }}>
            Kaylee<br/>Xiao
          </h1>
          <KXP style={{ fontSize: 21, maxWidth: 460 }}>{TAGLINE}</KXP>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 22 }}>
            <KXSiteButton onClick={() => setPage('Portfolio')}>View Portfolio</KXSiteButton>
            <button onClick={() => setPage('Contact')} style={ghostBtn}>Get in touch</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: 'var(--site-container2)', borderRadius: 'var(--radius-site-lg)',
            padding: 18, boxShadow: '0 16px 40px rgba(0,0,0,.16)', maxWidth: 420, width: '100%' }}>
            <img src={KX_IMG + 'welcome-1000.webp'} alt="Kaylee" style={{ width: '100%', display: 'block',
              borderRadius: 8 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- HERO C · minimal band + avatar ---- */
function HeroMinimal({ setPage }) {
  return (
    <div style={{ background: 'var(--site-cover-bg)', minHeight: 520, display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '60px 40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 }}>
        <img src={KX_IMG + 'highschool-1000.webp'} alt="Kaylee Xiao" style={{ width: 168, height: 168,
          objectFit: 'cover', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,.18)',
          border: '4px solid var(--site-bg)' }} />
        <div style={{ fontFamily: 'var(--site-nav)', fontSize: 18, letterSpacing: '.22em',
          textTransform: 'uppercase', color: 'var(--site-selected)', marginTop: 16 }}>Portfolio & Resume</div>
        <h1 style={{ margin: '.1em 0', fontFamily: 'var(--site-display)', fontSize: 'clamp(58px,11vw,140px)',
          letterSpacing: '.05em', lineHeight: .9, color: 'var(--site-text)' }}>Kaylee Xiao</h1>
        <KXP style={{ fontSize: 20, maxWidth: 540, textAlign: 'center' }}>{TAGLINE}</KXP>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 14 }}>
          <KXSiteButton onClick={() => setPage('Portfolio')}>View Portfolio</KXSiteButton>
          <button onClick={() => setPage('Contact')} style={ghostBtn}>Get in touch</button>
        </div>
      </div>
    </div>
  );
}

const ghostBtn = {
  appearance: 'none', cursor: 'pointer', padding: '0.8em 1.6em',
  background: 'transparent', color: 'var(--site-text)',
  border: '2px solid var(--site-accent)', borderRadius: 'var(--radius-site)',
  fontFamily: 'var(--site-body)', fontWeight: 900, fontSize: '1.05em', letterSpacing: '.02em',
};

const HEROES = { float: HeroFloat, split: HeroSplit, minimal: HeroMinimal };

/* ---- HOME ---- */
function Home({ setPage, hero }) {
  const Hero = HEROES[hero] || HeroFloat;
  return (
    <>
      <Hero setPage={setPage} />
      <KXSection img={KX_IMG + 'welcome-1000.webp'} alt="Kaylee" bg="var(--site-container)">
        <KXKicker>Welcome</KXKicker>
        <KXH3>Hi, I'm Kaylee — <br/>nice to meet you!</KXH3>
        <KXP>I'm Kaylee (<KXHL>Yingrui Xiao</KXHL>), a student at <KXHL>NYU Steinhardt</KXHL> studying
          Media, Culture, and Communication. I love to make things: <KXHL>video</KXHL>, <KXHL>music</KXHL>,
          <KXHL> graphic design</KXHL>, and anything creative.</KXP>
        <KXP>This website is where my education, experiences, and creative work live. Take a look around!</KXP>
      </KXSection>
      <KXBand bg="var(--site-container2)">
        <KXKicker>Explore</KXKicker>
        <KXH3 style={{ marginBottom: 28 }}>Where to next?</KXH3>
        <div className="kx-explore-grid" style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          <KXExploreCard label="About" blurb="Who I am beyond the résumé — and what I love to create." onClick={() => setPage('About')} />
          <KXExploreCard label="Education" blurb="NYU Steinhardt, coursework, and where it started." onClick={() => setPage('Education')} />
          <KXExploreCard label="Experiences" blurb="Internships, leadership, and creative work." onClick={() => setPage('Experiences')} />
          <KXExploreCard label="Portfolio" blurb="Documentaries, design, and a site I coded by hand." onClick={() => setPage('Portfolio')} />
        </div>
      </KXBand>
    </>
  );
}

window.KXHome = Home;
})();

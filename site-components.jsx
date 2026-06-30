/* ============================================================
   Kaylee Xiao — portfolio site, shared chrome + helpers.
   Built on the Kaylee Xiao Design System components.
   Exports building blocks to window for the pages + app files.
   ============================================================ */

const DS = window.KayleeXiaoDesignSystem_fb95c0;
const { SiteButton, Field, ThemeToggle, Icon } = DS;

const IMG = 'assets/images/';
const ILL = 'assets/illustrations/';

const NAV = ['About', 'Education', 'Experiences', 'Portfolio', 'Contact'];

/* ---------- typographic helpers ---------- */
const Kicker = ({ children }) => (
  <div className="kx-kicker" style={{
    fontFamily: 'var(--site-nav)', fontSize: 18, letterSpacing: '.18em',
    textTransform: 'uppercase', color: 'var(--site-selected)', marginBottom: 14,
  }}>{children}</div>
);
const H3 = ({ children, style }) => (
  <h3 style={{ margin: '0 0 .35em', fontFamily: 'var(--site-heading)', fontSize: 'clamp(30px,4.4vw,46px)',
    lineHeight: 1.05, color: 'var(--site-text)', ...style }}>{children}</h3>
);
const H4 = ({ children, style }) => (
  <h4 style={{ margin: '1em 0 .2em', fontFamily: 'var(--site-body)', fontWeight: 900,
    fontSize: 22, color: 'var(--site-text)', ...style }}>{children}</h4>
);
const P = ({ children, style }) => (
  <p style={{ fontFamily: 'var(--site-body)', fontSize: 19, lineHeight: 1.6,
    color: 'var(--site-text)', maxWidth: 560, margin: '0 0 .8em', textWrap: 'pretty', ...style }}>{children}</p>
);
const HL = ({ children }) => (
  <span style={{ background: 'var(--site-highlight)', fontWeight: 900, padding: '0 .15em',
    borderRadius: 2, color: '#3a2f29' }}>{children}</span>
);

/* ---------- header / nav (menu top-right) ---------- */
function Header({ page, setPage, open, setOpen }) {
  const ref = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const set = () => document.documentElement.style.setProperty('--kx-header-h', el.offsetHeight + 'px');
    set();
    const ro = new ResizeObserver(set); ro.observe(el);
    window.addEventListener('resize', set);
    return () => { ro.disconnect(); window.removeEventListener('resize', set); };
  }, []);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const bar = scrolled || open;
  return (
    <header ref={ref} style={{
      position: 'sticky', top: 0, zIndex: 30,
      backgroundColor: scrolled ? 'color-mix(in srgb, var(--site-cover-bg) 80%, transparent)'
                                 : (open ? 'var(--site-cover-bg)' : 'transparent'),
      backdropFilter: scrolled ? 'saturate(1.1) blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(1.1) blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 18px rgba(0,0,0,.10)' : 'none',
      borderBottom: bar ? '1px solid color-mix(in srgb, var(--site-text) 12%, transparent)'
                        : '1px solid transparent',
      transition: 'background-color .3s ease, box-shadow .3s ease, border-color .3s ease',
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 30px',
    }}>
      <a onClick={() => { setPage('Home'); setOpen(false); }} style={{
        cursor: 'pointer', textDecoration: 'none', fontFamily: 'var(--site-wordmark)',
        fontSize: 30, color: 'var(--site-text)', letterSpacing: '.01em', lineHeight: 1 }}>Kaylee Xiao</a>

      <button onClick={() => setOpen(!open)} className="kx-burger" aria-label="Menu" style={{
        background: 'none', border: 'none', cursor: 'pointer', color: 'var(--site-icon)', display: 'none' }}>
        <Icon name={open ? 'close' : 'menu'} size={30} />
      </button>

      <nav className="kx-nav" data-open={open} style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        {NAV.map(n => (
          <a key={n} onClick={() => { setPage(n); setOpen(false); }} style={{
            cursor: 'pointer', textDecoration: 'none', fontFamily: 'var(--site-nav)', fontSize: 20,
            padding: '6px 4px', color: n === page ? 'var(--site-selected)' : 'var(--site-text)',
            borderBottom: n === page ? '2px solid var(--site-selected)' : '2px solid transparent',
          }}
          onMouseOver={e => { if (n !== page) e.currentTarget.style.color = 'var(--site-link)'; }}
          onMouseOut={e => { if (n !== page) e.currentTarget.style.color = 'var(--site-text)'; }}
          >{n}</a>
        ))}
      </nav>
    </header>
  );
}

/* ---------- subpage cover band ----------
   layered:  portrait overlaps the big title (home-style hero)
   slotId:   render a user-fillable <image-slot> instead of a fixed <img> */
function Cover({ title, img, sub, layered, slotId, slotPlaceholder, big }) {
  if (layered) {
    const media = slotId
      ? <image-slot id={slotId} src={img} shape="rect" className="kx-hero-portrait"
          placeholder={slotPlaceholder || 'Drop your photo here'}
          style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            zIndex: 2, display: 'block', height: '92%', width: 'auto', maxWidth: '96vw' }}></image-slot>
      : <img src={img} alt={title} className="kx-hero-portrait" style={{ position: 'absolute', bottom: 0, left: '50%',
          transform: 'translateX(-50%)', zIndex: 2, height: '92%', width: 'auto', maxWidth: 'none',
          objectFit: 'contain', objectPosition: 'bottom' }} />;
    return (
      <div style={{ position: 'relative', height: 'calc(100dvh - var(--kx-header-h, 64px))',
        minHeight: 460, background: 'var(--site-cover-bg)', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="kx-hero-name" style={{ position: 'absolute', zIndex: 1, margin: 0, fontFamily: 'var(--site-display)',
          fontSize: 'clamp(64px,15vw,180px)', letterSpacing: '.05em', color: 'var(--site-text)',
          textAlign: 'center', lineHeight: .9, top: '50%', transform: 'translateY(-50%)', width: '100%' }}>{title}</h2>
        {img && media}
        {sub && <p style={{ position: 'absolute', bottom: 24, zIndex: 3, fontFamily: 'var(--site-body)',
          fontSize: 18, color: 'var(--site-text)', maxWidth: 600, textAlign: 'center',
          padding: '0 20px' }}>{sub}</p>}
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', minHeight: 360, background: 'var(--site-cover-bg)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', padding: '60px 20px' }}>
      <h2 style={{ position: 'relative', zIndex: 1, margin: 0, fontFamily: 'var(--site-display)',
        fontSize: 'clamp(56px,11vw,120px)', letterSpacing: '.05em', color: 'var(--site-text)',
        textAlign: 'center', lineHeight: .92 }}>{title}</h2>
      {img && <img src={img} alt={title} style={{ position: 'relative', zIndex: 2,
        maxHeight: 300, maxWidth: '94vw', width: 'auto', marginTop: 10 }} />}
      {sub && <p style={{ position: 'relative', zIndex: 2, fontFamily: 'var(--site-body)', fontSize: 20,
        color: 'var(--site-text)', maxWidth: 600, textAlign: 'center', marginTop: 18 }}>{sub}</p>}
    </div>
  );
}

/* ---------- two-column content section ---------- */
function Section({ img, alt, children, bg, reverse }) {
  return (
    <div style={{ background: bg }}>
      <div className="kx-two-col" data-reverse={reverse ? 'true' : 'false'}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
          maxWidth: 1060, margin: '0 auto', padding: '64px 40px' }}>
        <div style={{ order: reverse ? 2 : 1, justifySelf: 'center', width: '100%' }}>
          <img src={img} alt={alt} style={{ width: '100%', maxWidth: 460, borderRadius: 10,
            display: 'block', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,.14)' }} />
        </div>
        <div style={{ order: reverse ? 1 : 2 }}>{children}</div>
      </div>
    </div>
  );
}

/* ---------- generic centered band ---------- */
function Band({ children, bg, narrow }) {
  return (
    <div style={{ background: bg, padding: '64px 40px' }}>
      <div style={{ maxWidth: narrow ? 720 : 1060, margin: '0 auto' }}>{children}</div>
    </div>
  );
}

/* ---------- timeline entry (experiences / education) ---------- */
function Entry({ role, org, dates, location, points, tags }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 28,
      padding: '30px 0', borderTop: '1px solid color-mix(in srgb, var(--site-text) 16%, transparent)' }}
      className="kx-entry">
      <div>
        <div style={{ fontFamily: 'var(--site-body)', fontWeight: 900, fontSize: 17,
          color: 'var(--site-selected)' }}>{dates}</div>
        {location && <div style={{ fontFamily: 'var(--site-body)', fontSize: 15,
          color: 'var(--site-link)', marginTop: 4 }}>{location}</div>}
      </div>
      <div>
        <h4 style={{ margin: 0, fontFamily: 'var(--site-heading)', fontSize: 26,
          color: 'var(--site-text)', lineHeight: 1.1 }}>{role}</h4>
        <div style={{ fontFamily: 'var(--site-body)', fontWeight: 900, fontSize: 18,
          color: 'var(--site-text)', opacity: .8, margin: '4px 0 14px' }}>{org}</div>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {points.map((pt, i) => (
            <li key={i} style={{ fontFamily: 'var(--site-body)', fontSize: 17, lineHeight: 1.55,
              color: 'var(--site-text)', textWrap: 'pretty' }}>{pt}</li>
          ))}
        </ul>
        {tags && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>}
      </div>
    </div>
  );
}

/* ---------- pill tag ---------- */
const Tag = ({ children }) => (
  <span style={{ fontFamily: 'var(--site-body)', fontWeight: 900, fontSize: 13, letterSpacing: '.04em',
    textTransform: 'uppercase', padding: '6px 12px', borderRadius: 'var(--radius-pill-sm)',
    background: 'color-mix(in srgb, var(--site-selected) 22%, transparent)', color: 'var(--site-text)' }}>{children}</span>
);

/* ---------- explore card (home -> subpage) ---------- */
function ExploreCard({ label, blurb, onClick }) {
  return (
    <button onClick={onClick} style={{
      textAlign: 'left', cursor: 'pointer', border: 'none', borderRadius: 'var(--radius-site-lg)',
      background: 'var(--site-cover-bg)', padding: '26px 26px', display: 'flex', flexDirection: 'column',
      gap: 8, boxShadow: '0 6px 18px rgba(0,0,0,.08)', transition: 'transform .25s var(--ease-standard), box-shadow .25s' }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,.16)'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,.08)'; }}>
      <span style={{ fontFamily: 'var(--site-heading)', fontSize: 26, color: 'var(--site-text)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--site-body)', fontSize: 16, lineHeight: 1.5, color: 'var(--site-text)', opacity: .8 }}>{blurb}</span>
      <span style={{ fontFamily: 'var(--site-nav)', fontSize: 15, letterSpacing: '.14em', textTransform: 'uppercase',
        color: 'var(--site-selected)', marginTop: 6 }}>View →</span>
    </button>
  );
}

/* ---------- portfolio project card (clickable -> modal) ---------- */
function ProjectCard({ slotId, category, title, desc, accent, bodyBg, src, hasVideo, onOpen }) {
  return (
    <div role="button" tabIndex={0} onClick={onOpen}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen && onOpen(); } }}
      style={{ cursor: 'pointer', borderRadius: 'var(--radius-site-lg)', overflow: 'hidden',
        background: 'var(--site-cover-bg)', boxShadow: '0 8px 22px rgba(0,0,0,.10)', display: 'flex',
        flexDirection: 'column', transition: 'transform .25s var(--ease-standard), box-shadow .25s' }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 34px rgba(0,0,0,.18)'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(0,0,0,.10)'; }}>
      <div style={{ position: 'relative', height: 220, background: accent || 'var(--site-container2)' }}>
        {src
          ? <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'var(--site-display)', fontSize: 64,
              color: 'color-mix(in srgb, var(--site-text) 28%, transparent)' }}>{title.charAt(0)}</div>}
        {hasVideo && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
            justifyContent: 'center', pointerEvents: 'none' }}>
            <span style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(0,0,0,.42)',
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="24" viewBox="0 0 22 24" fill="#fff"><path d="M0 0l22 12L0 24z"/></svg>
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: '20px 22px 22px', background: bodyBg || 'transparent' }}>
        <Tag>{category}</Tag>
        <h4 style={{ margin: '12px 0 6px', fontFamily: 'var(--site-heading)', fontSize: 24,
          color: 'var(--site-text)', lineHeight: 1.1 }}>{title}</h4>
        <p style={{ margin: 0, fontFamily: 'var(--site-body)', fontSize: 16, lineHeight: 1.55,
          color: 'var(--site-text)', opacity: .82, textWrap: 'pretty' }}>{desc}</p>
        <span style={{ display: 'inline-block', marginTop: 14, fontFamily: 'var(--site-nav)', fontSize: 14,
          letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--site-selected)' }}>
          {hasVideo ? 'Watch & read →' : 'View details →'}</span>
      </div>
    </div>
  );
}

/* ---------- project detail modal ----------
   media priority: videoFile (local <video>) > video (iframe embed URL) > src (cover image) */
function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    if (!project) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [project]);
  if (!project) return null;
  const p = project;
  let media;
  if (p.videoFile) {
    media = <video controls playsInline src={p.videoFile} poster={p.src}
      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }} />;
  } else if (p.video) {
    media = <iframe src={p.video} title={p.title} allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={{ width: '100%', height: '100%', border: 'none' }} />;
  } else if (p.src) {
    media = <img src={p.src} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
  } else {
    media = <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'var(--site-container2)', color: 'var(--site-text)',
      fontFamily: 'var(--site-body)', fontSize: 16, opacity: .7, textAlign: 'center', padding: 24 }}>
      Video / stills coming soon</div>;
  }
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 60,
      background: 'rgba(40,32,28,.55)', backdropFilter: 'blur(4px)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '4vh 4vw' }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', background: 'var(--site-bg)',
        borderRadius: 'var(--radius-site-lg)', overflow: 'hidden', maxWidth: 1140, width: '100%',
        maxHeight: '94vh', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 80px rgba(0,0,0,.4)' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14,
          zIndex: 2, width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'rgba(0,0,0,.45)', color: '#fff', display: 'flex', alignItems: 'center',
          justifyContent: 'center' }}>
          <Icon name="close" size={22} />
        </button>
        {!p.gallery && <div style={{ width: '100%', aspectRatio: p.embedTall ? '3/4' : '16/9', maxHeight: '72vh', background: '#000', flexShrink: 0 }}>{media}</div>}
        <div style={{ padding: '32px 44px 40px', overflowY: 'auto' }}>
          <Tag>{p.category}</Tag>
          <h3 style={{ margin: '12px 0 14px', fontFamily: 'var(--site-heading)', fontSize: 38,
            color: 'var(--site-text)', lineHeight: 1.05 }}>{p.title}</h3>
          {(p.long || p.desc).split('\n').map((para, i) => (
            <p key={i} style={{ fontFamily: 'var(--site-body)', fontSize: 18, lineHeight: 1.7,
              color: 'var(--site-text)', margin: '0 0 .9em', maxWidth: 760, textWrap: 'pretty' }}>{para}</p>
          ))}
          {p.gallery && <div style={{ display: 'flex', flexDirection: 'column', gap: 30, margin: '24px 0 30px' }}>
            {p.gallery.map((g, i) => (
              <figure key={i} style={{ margin: 0 }}>
                {g.label && <div style={{ fontFamily: 'var(--site-nav)', fontSize: 12, letterSpacing: '.14em',
                  textTransform: 'uppercase', color: 'var(--site-selected)', marginBottom: 10 }}>{g.label}</div>}
                <div style={{ background: g.bg || '#fff', borderRadius: 'var(--radius-site)', overflow: 'hidden',
                  border: '1px solid var(--site-container2)' }}>
                  <img src={g.src} alt={g.caption || p.title} style={{ width: '100%', display: 'block' }} />
                </div>
                {g.caption && <figcaption style={{ fontFamily: 'var(--site-body)', fontSize: 15, lineHeight: 1.55,
                  color: 'var(--site-selected)', marginTop: 10, maxWidth: 720, textWrap: 'pretty' }}>{g.caption}</figcaption>}
              </figure>
            ))}
          </div>}
          {p.meta && p.meta.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 34px', margin: '18px 0 4px' }}>
              {p.meta.map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: 'var(--site-nav)', fontSize: 12, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: 'var(--site-selected)', marginBottom: 3 }}>{k}</div>
                  <div style={{ fontFamily: 'var(--site-body)', fontSize: 16, fontWeight: 700,
                    color: 'var(--site-text)' }}>{v}</div>
                </div>
              ))}
            </div>
          )}
          {p.tags && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
            {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
          </div>}
          {(p.links || (p.link ? [p.link] : [])).length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
            {(p.links || [p.link]).map((lk, i) => (
              <a key={i} href={lk.href} target="_blank" rel="noopener" style={{ display: 'inline-flex',
                alignItems: 'center', gap: 8, fontFamily: 'var(--site-body)', fontWeight: 900, fontSize: 16,
                color: i === 0 ? '#fff' : 'var(--site-text)', background: i === 0 ? 'var(--site-accent)' : 'transparent',
                border: i === 0 ? 'none' : '2px solid var(--site-accent)', padding: '.7em 1.4em',
                borderRadius: 'var(--radius-site)', textDecoration: 'none' }}>{lk.label} →</a>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}

/* ---------- footer ---------- */
function Footer({ setPage }) {
  return (
    <footer style={{ background: 'var(--site-footer)', padding: '46px 30px 40px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <img src="assets/logos/icon.webp" alt="Kaylee Xiao — home" onClick={() => setPage('Home')}
          style={{ height: 84, width: 'auto', cursor: 'pointer' }} />
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
          {NAV.map(n => (
            <a key={n} onClick={() => setPage(n)} style={{ cursor: 'pointer', fontFamily: 'var(--site-nav)',
              fontSize: 16, color: '#fff', opacity: .92, textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <div style={{ fontFamily: 'var(--site-body)', fontSize: 14, color: '#fff', opacity: .85 }}>
          © {new Date().getFullYear()} Kaylee Xiao
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  KX_NAV: NAV, KX_IMG: IMG, KX_ILL: ILL,
  KXKicker: Kicker, KXH3: H3, KXH4: H4, KXP: P, KXHL: HL, KXTag: Tag,
  KXHeader: Header, KXCover: Cover, KXSection: Section, KXBand: Band,
  KXEntry: Entry, KXExploreCard: ExploreCard, KXProjectCard: ProjectCard, KXProjectModal: ProjectModal, KXFooter: Footer,
  KXSiteButton: SiteButton, KXField: Field, KXThemeToggle: ThemeToggle, KXIcon: Icon,
});

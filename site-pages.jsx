/* ============================================================
   Kaylee Xiao — About, Education, Experiences, Portfolio, Contact.
   ============================================================ */
(function () {
const { KXKicker, KXH3, KXH4, KXP, KXHL, KXTag, KXCover, KXSection, KXBand,
        KXEntry, KXProjectCard, KXProjectModal, KXSiteButton, KXField, KX_IMG } = window;

/* ---------------- ABOUT ---------------- */
function About() {
  const skills = [
    'Adobe Creative Suite', 'Figma', 'Graphic Design', 'CapCut', 'Photography', 'Filming',
    'HTML & CSS', 'Web Design', 'Microsoft Office Suite', 'Social Media Strategy',
    'Strategic Content Development',
  ];
  const langs = ['Mandarin — fluent', 'English — fluent', 'Korean — conversational'];
  return (
    <>
      <KXCover title="About" img="assets/cutout-about.webp" layered />
      <KXSection img="assets/about-creator.webp" alt="Kaylee in the mountains" bg="var(--site-container)">
        <KXKicker>Who am I?</KXKicker>
        <KXH3>A creator at heart</KXH3>
        <KXP>I'm Kaylee — in Chinese, <KXHL>Yingrui Xiao</KXHL>. I'm a <KXHL>student</KXHL>,
          <KXHL> vlogger</KXHL>, <KXHL>photographer</KXHL>, and amateur <KXHL>music producer</KXHL>.
          I love to create — anything related to creative and media work.</KXP>
        <KXP>I study Media, Culture, and Communication at NYU Steinhardt, with a foot in the business
          of entertainment and a camera always close by. Whether it's editing a documentary, designing
          a magazine cover, or shooting a vlog, I'm happiest when I'm making something.</KXP>
      </KXSection>
      <KXBand bg="var(--site-container2)">
        <KXKicker>What I do</KXKicker>
        <KXH3 style={{ marginBottom: 24 }}>Skills & tools</KXH3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
          {skills.map(s => <KXTag key={s}>{s}</KXTag>)}
        </div>
        <KXH4 style={{ marginTop: 0 }}>Languages</KXH4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {langs.map(s => <KXTag key={s}>{s}</KXTag>)}
        </div>
      </KXBand>
    </>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  return (
    <>
      <KXCover title="Education" img="assets/cover4.webp" layered />
      <KXSection img="assets/freshman.webp" alt="Kaylee with friends, freshman year" bg="var(--site-container)">
        <KXKicker>2024 – 2028</KXKicker>
        <KXH3>New York University · Steinhardt</KXH3>
        <KXP><KXHL>Bachelor of Science in Media, Culture, and Communication</KXHL> — New York, NY.</KXP>
        <KXP>Minor in the Business of Entertainment, Media, and Technology, and in Integrated Design
          and Media. Overall GPA <KXHL>3.957</KXHL> · NYU Steinhardt Dean's List (2024–25, 2025–26).</KXP>
        <KXH4>Relevant coursework</KXH4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
          {['Business Structure of the Music Industry', 'Methods in Media Studies',
            'Entertainment & Media Industries', 'Television Management', 'Critical Video',
            'Media and Culture of Money', 'Critical Making'].map(c => <KXTag key={c}>{c}</KXTag>)}
        </div>
      </KXSection>
      <KXSection img="assets/studentcouncil.webp" alt="Kaylee with the Student Council" bg="var(--site-container2)" reverse>
        <KXKicker>2021 – 2024</KXKicker>
        <KXH3>Vanke Meisha Academy</KXH3>
        <KXP>I completed my high school diploma in <KXHL>Shenzhen, China</KXHL>, where I served on
          the Student Council as a Prefect and sang in the Choir — and first fell for editing,
          design, and storytelling.</KXP>
      </KXSection>
    </>
  );
}

/* ---------------- EXPERIENCES ---------------- */
function Experiences() {
  return (
    <>
      <KXCover title="Experiences" img="assets/cutout-experiences.webp" layered />
      <KXBand bg="var(--site-container)">
        <KXEntry
          dates="May – Aug 2025" location="Shenzhen, China"
          role="News Center Intern" org="Shenzhen Media Group (SZMG)"
          points={[
            'Managed official social media accounts; edited and uploaded daily news videos reaching 7M+ nationwide followers and driving continued audience growth.',
            'Wrote and edited WeChat Official Account articles for the Minsheng News Division — health and wellness coverage and healthcare/social-welfare campaigns, each with 400+ views.',
            'Produced commercial video content and worked with talent during on-site filming to advertise featured products.',
            'Directed a commercial live-streaming event — overseeing show flow, cueing, and real-time stage coordination — peaking at 1,200+ concurrent viewers.',
          ]}
          tags={['Video Editing', 'Social Media', 'Live Production']} />
        <KXEntry
          dates="May 2022 – May 2024"
          role="Publicity Coordinator & Think Tank Member" org="Student Council"
          points={[
            'Organized Orientation Week for 700+ participants, helping new students adjust and build community.',
            "Managed the Council's WeChat Official Account, producing written and video content for branding and event notices.",
            'Led the planning and execution of "Thanksgiving Week" — gratitude notes, DIY crafts, and photo-collage activities to strengthen the student–faculty bond.',
          ]}
          tags={['Event Planning', 'Content', 'Leadership']} />
        <KXEntry
          dates="Sept 2021 – May 2024"
          role="Editor & Designer" org="Magazine Club"
          points={[
            "Managed the club's WeChat Official Account — wrote, edited, and published literary articles averaging 500+ views each.",
            'Developed feature columns including original poems, film reviews, and short stories, and interviewed students and faculty to highlight personal narratives.',
            "Designed magazine covers and cultural merchandise for the annual journal release, strengthening the club's visual identity.",
          ]}
          tags={['Editorial', 'Graphic Design', 'Branding']} />
        <KXEntry
          dates="2018 – Present"
          role="Vlogger & Content Creator" org="RedNote & WeChat Channel"
          points={[
            'Film and edit vlogs documenting my life and experiences as an international student.',
            'Share college application tips, TOEFL practice guides, and CTB competition experiences.',
            'Collaborate with brands for commercial promotion and produce sponsored content.',
          ]}
          tags={['Vlogging', 'Editing', 'Brand Collabs']} />
      </KXBand>
    </>
  );
}

/* ---------------- PORTFOLIO ----------------
   To embed a video on any project, set ONE of:
     video:     'https://www.youtube.com/embed/XXXX'  (or Vimeo/Bilibili embed URL)
     videoFile: 'assets/videos/my-edit.mp4'            (a local file in the project)
   Add `src` for a cover image, `long` for the full write-up (use \n for paragraphs),
   `meta` for the detail rows, and `link` for an external "watch on …" button. */
function Portfolio() {
  const [active, setActive] = React.useState(null);
  const film = [
    { id: 'roughtrade', category: 'Documentary', title: 'Rough Trade NYC',
      desc: 'An ethnographic short documentary on the people and culture of an independent NYC record store.',
      long: 'Shot and edited as part of my media studies coursework, this documentary presents our ethnographic study of Rough Trade NYC, a two-level independent record store located in Rockefeller Center, Manhattan. Founded in London in 1976, Rough Trade has grown into an international brand that now holds about 30% of the UK vinyl market, operating ten stores worldwide — seven in the UK, two in New York City, and one in Berlin. The Rough Trade Above store opened in 2021, and the new Rough Trade Below performance space followed in April 2025. Beyond selling vinyl across genres, the store also offers books, cassettes, and merchandise, and regularly hosts live events that connect artists and fans.\nThrough two two-hour observation sessions and four interviews with staff and customers, we explored Rough Trade as both a retail space and a community that thrives at the intersection of tradition and technology. Our research focuses on the tension between the digital streaming industry and the persistence of physical media. We ask: what keeps a record store thriving in an age when music is instantly available online? Is vinyl today simply a symbol of nostalgia, or has it taken on new meanings of authenticity, belonging, and resistance in the digital era? This project aims to capture how Rough Trade continues to reinvent what it means to experience music together in a physical space.',
      meta: [['Role', 'Director / Editor'], ['Type', 'Ethnographic doc'], ['Year', '2025']],
      video: 'https://www.youtube-nocookie.com/embed/S6CiHQ_IUQ4',
      src: 'assets/portfolio-roughtrade.webp', accent: 'var(--site-container2)',
      link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=S6CiHQ_IUQ4' },
      tags: ['Filming', 'Editing', 'Sound'] },
    { id: 'cellist', category: 'Documentary', title: 'Portrait of a Cellist',
      desc: 'An intimate short documentary, shot, directed, and edited entirely by me.',
      long: 'A short documentary shot, directed, and edited entirely by me — an intimate portrait of a cellist and a day in her life, tracing her journey from backstage preparation to final performance. Through this single day, the film unfolds a much longer story: over a decade of discipline, growth, and emotional commitment to music.\nThe documentary centers on Eva, an NYU student who has been playing the cello since third grade. What began as childhood music lessons gradually became a defining part of her identity. Beyond her technical training, her relationship with music expanded into a connection with Chinese traditional music, where she performs in Chinese orchestras and now serves as the president of the Chinese Traditional Music Club at New York University.\nStructured around the natural timeline of a gala performance — preparation, rehearsal, performance, and the curtain call — the film unfolds in these four chapters. It uses observational B-roll as its narrative backbone. Footage of makeup, tuning, backstage waiting, rehearsals, and live performance will be interwoven with interviews reflecting on her childhood, years of training, moments of frustration, and the role music has played in shaping her life.\nAt its core, the driving question is: What does it mean to grow up with a Western instrument and carry it over with her own understanding, and incorporate Chinese traditional music elements and techniques?',
      meta: [['Role', 'Solo — everything'], ['Type', 'Portrait doc'], ['Year', '2025']],
      video: 'https://www.youtube-nocookie.com/embed/_dpPQhYM1Rk',
      src: 'assets/portfolio-cellist.webp', accent: 'var(--site-container2)',
      link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=_dpPQhYM1Rk' },
      tags: ['Directing', 'Cinematography', 'Editing'] },
    { id: 'rangerover', category: 'Video Editing', title: 'Range Rover BTS Vlog',
      desc: 'A behind-the-scenes vlog I edited of a Range Rover commercial shoot, posted on the talent’s Douyin.',
      long: 'A behind-the-scenes vlog I edited from a commercial shooting collaboration with Range Rover, following one of our compères/talent through the day of the shoot.\nRather than the commercial itself, this is the personal, on-set story — the energy between takes, the crew, and the talent — cut for her own Douyin account.',
      meta: [['Role', 'Editor'], ['Brand', 'Range Rover'], ['Platform', 'Douyin (talent’s account)'], ['Made at', 'SZMG']],
      src: 'assets/portfolio-rangerover.webp',
      link: { label: 'Watch on Douyin', href: 'https://v.douyin.com/TaaY3ZO33MY/' },
      tags: ['Video Editing', 'BTS', 'Social'] },
  ];
  const design = [
    { id: 'rps', category: 'UI / UX Design', title: 'Rock Paper Scissors',
      desc: 'A playful mobile game UI/UX — paper-white canvas, electric indigo, and pastel result cards.',
      long: 'A playful mobile game UI/UX design for Rock Paper Scissors — built around a paper-white canvas, electric-indigo accents, and soft pastel result cards.\nThe project covers the full flow: lobby, match, and win/lose states, with custom illustrated hand icons.',
      meta: [['Role', 'UI / UX Designer'], ['Tools', 'Figma'], ['Year', '2025']],
      src: 'assets/portfolio-rps.webp', accent: 'var(--site-container2)',
      video: 'https://embed.figma.com/proto/6DTAYKLHzkPqfDUZjs1eS5/Rock-Paper-Scissor?node-id=251-405&scaling=scale-down&content-scaling=fixed&page-id=214%3A5107&starting-point-node-id=214%3A5192&embed-host=share',
      embedTall: true,
      links: [
        { label: 'Open prototype in Figma', href: 'https://www.figma.com/proto/6DTAYKLHzkPqfDUZjs1eS5/Rock-Paper-Scissor?node-id=251-405&p=f&scaling=scale-down&content-scaling=fixed&page-id=214%3A5107&starting-point-node-id=214%3A5192' },
        { label: 'View design file in Figma', href: 'https://www.figma.com/design/6DTAYKLHzkPqfDUZjs1eS5/Rock-Paper-Scissor?node-id=214-5107' },
      ],
      tags: ['Figma', 'UI', 'Illustration'] },
    { id: 'cards', category: 'Graphic Design', title: 'Playing Card Set',
      desc: 'Illustrated court cards — the same animal cast drawn across three distinct styles.',
      long: 'A Bauhaus-inspired playing-card system designed in Adobe Illustrator. Rather than relying on traditional drawing, the brief was to build complex, modular characters from simple geometric shapes — replacing the traditional pips (♠♥♦♣) with a circle, a triangle, a square, and a fourth pip of my own design. These shapes became the building blocks of the entire deck.\nI focused most of my effort on perfecting the court cards — King, Queen, and Jack. The same cast of animal characters (cats, mice, and foxes) is constructed entirely from the pip shapes.\nThe project was an exercise in contrast, hierarchy, and rigor — applying Gestalt unity and modularity to develop a cohesive system, and committing to a tight set of self-imposed rules and one shape language across the whole deck.',
      meta: [['Role', 'Illustrator / Designer'], ['Tools', 'Adobe Illustrator'], ['Cards', 'King · Queen · Jack']],
      src: 'assets/cards/printed-faces.webp', accent: 'var(--site-container2)',
      gallery: [
        { src: 'assets/cards/facecard-1.webp', label: 'Court cards — pixel & rounded', bg: '#fff', caption: 'Pixel-art treatment (top) and soft rounded treatment (bottom) of the mouse, cat, and fox characters.' },
        { src: 'assets/cards/facecard-2.webp', label: 'Court cards — geometric & rounded', bg: '#fff', caption: 'The same characters drawn as sharp geometric triangles (top) and rounded shapes (bottom).' },
        { src: 'assets/cards/back-pattern.webp', label: 'Card back', bg: '#fff', caption: 'A tiled pattern of the animal faces, designed for the back of every card.' },
        { src: 'assets/cards/printed-faces.webp', label: 'Printed deck — faces', bg: '#f4f1ec', caption: 'The court cards printed and cut as a physical deck.' },
        { src: 'assets/cards/printed-backs.webp', label: 'Printed deck — backs', bg: '#f4f1ec', caption: 'The patterned backs on the finished printed cards.' },
      ],
      tags: ['Illustration', 'Graphic Design', 'Adobe Illustrator'] },
    { id: 'magazine', category: 'Editorial Design', title: 'Magazine Club Designs',
      desc: 'Cover and visual identity for the Magazine Club’s annual journal — featuring Volume 7, “洄 / Reverse.”',
      long: 'Covers and cultural merchandise designed for the annual journal release during my time leading design in the Magazine Club — strengthening the club’s visual identity across print and merch.\nShown here is Volume 7 (2024) of Vanke Meisha Academy’s “Tide” magazine, titled “洄” (Reverse). The cover carries the theme in moving water — swirling currents and eddies framing the hand-brushed character 洄. I also worked on several of the issue’s feature columns — the Photography Column, the bilingual Tide Interview, and the 3-Line Love-Letters. The spreads below are excerpts from the printed magazine.',
      meta: [['Role', 'Editor & Designer'], ['Issue', 'No. 7 · 洄 / Reverse'], ['Year', '2024'], ['Magazine', 'Tide · Vanke Meisha Academy']],
      src: 'assets/magazine-vol7-cover.webp', accent: 'var(--site-container2)',
      gallery: [
        { src: 'assets/magazine-vol7.webp', label: 'Tide — Volume 7 (2024) · 洄 / Reverse', bg: '#eaf4fb', caption: '“洄” — to flow back — is both motion and stillness: the surge that stirs beneath calm water. As we race forward through time, memory pulls us upstream, back toward the spray that once broke against the banks. This issue invites you to drift back through the words and let your thoughts migrate home.' },
        { src: 'assets/magazine-photography.webp', label: 'Photography Column · 摄影专栏', bg: '#f3e9c9', caption: 'Reader photography on the “洄 / Reverse” theme, captured across phones and cameras.' },
        { src: 'assets/magazine-interview.webp', label: 'Tide Interview · 潮间漫谈', bg: '#e4eee2', caption: 'A bilingual interview column — this issue, English teacher Nick McNamara on AI and the value of literature.' },
        { src: 'assets/magazine-loveletters.webp', label: '3-Line Love-Letters · 三行情书', bg: '#f7e3e8', caption: 'A reader column of three-line love poems, paired with photography.' },
      ],
      tags: ['Editorial', 'Branding', 'Print'] },
  ];
  const web = [
    { id: 'website', category: 'Web · HTML, CSS & JS', title: 'My Personal Website',
      desc: 'A personal site I designed and built by hand in HTML, CSS, and JavaScript — the original of this portfolio.',
      long: 'A personal website I designed and built entirely by hand in HTML, CSS, and JavaScript — the original version that this portfolio grew out of.\nIt was where I first learned to translate a visual idea into structured, styled pages from scratch, and to add interactivity: a light/dark theme toggle that remembers your choice, a scroll-aware header, and a collapsible mobile menu. The live site is embedded below — use its own menu to move between About, Education, Experiences, Portfolio, and Contact.',
      meta: [['Role', 'Designer / Developer'], ['Built with', 'HTML · CSS · JavaScript'], ['Pages', '6 · hand-coded']],
      src: 'assets/website-cover.webp', accent: '#e8e0ff',
      video: 'personal-site/content.html',
      link: { label: 'Open the full site in a new tab', href: 'personal-site/content.html' },
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Design'] },
  ];
  const card = p => <KXProjectCard key={p.id} slotId={'pf-' + p.id} category={p.category} title={p.title}
    desc={p.desc} src={p.src} accent={p.accent} bodyBg={p.bodyBg} hasVideo={!!(p.video || p.videoFile)}
    onOpen={() => setActive(p)} />;
  const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 };
  return (
    <>
      <KXCover title="Portfolio" img="assets/cutout-portfolio.webp" layered
        sub="Documentary & video, graphic design, and a site I coded from scratch." />
      <KXBand bg="var(--site-container)">
        <KXKicker>Film & Video</KXKicker>
        <KXH3 style={{ marginBottom: 26 }}>Documentary & editing</KXH3>
        <div className="kx-portfolio-grid" style={grid}>{film.map(card)}</div>
      </KXBand>
      <KXBand bg="var(--site-container2)">
        <KXKicker>Graphic & UI Design</KXKicker>
        <KXH3 style={{ marginBottom: 26 }}>Design work</KXH3>
        <div className="kx-portfolio-grid" style={grid}>{design.map(card)}</div>
      </KXBand>
      <KXBand bg="var(--site-container)">
        <KXKicker>Web</KXKicker>
        <KXH3 style={{ marginBottom: 26 }}>Built by hand</KXH3>
        <div className="kx-portfolio-grid" style={grid}>{web.map(card)}</div>
      </KXBand>
      <KXProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const row = { display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 14 };
  const lbl = { fontFamily: 'var(--site-nav)', fontSize: 15, letterSpacing: '.14em',
    textTransform: 'uppercase', color: 'var(--site-selected)', minWidth: 96 };
  const val = { fontFamily: 'var(--site-body)', fontSize: 19, color: 'var(--site-text)', textDecoration: 'none' };
  const [status, setStatus] = React.useState(null); // null | 'sending' | 'ok' | 'error'
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mqevdpoy', {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' },
      });
      if (res.ok) { setStatus('ok'); form.reset(); }
      else { setStatus('error'); }
    } catch (err) { setStatus('error'); }
  }
  return (
    <>
      <KXCover title="Contact" img="assets/cutout-contact.webp" layered />
      <div style={{ background: 'var(--site-container)' }}>
        <div className="kx-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          maxWidth: 1000, margin: '0 auto', padding: '64px 40px', alignItems: 'start' }}>
          <div>
            <KXKicker>Say hello</KXKicker>
            <KXH3>Let's connect</KXH3>
            <KXP>I'm always open to creative collaborations, opportunities, or just a chat about media,
              film, and design. Reach me here:</KXP>
            <div style={{ marginTop: 26 }}>
              <div style={row}><span style={lbl}>Email</span><a href="mailto:yx3544@nyu.edu" style={val}>yx3544@nyu.edu</a></div>
              <div style={row}><span style={lbl}>Phone</span><a href="tel:+16463457392" style={val}>+1 646-345-7392</a></div>
              <div style={row}><span style={lbl}>Based in</span><span style={val}>Los Angeles, CA · New York, NY</span></div>
              <div style={row}><span style={lbl}>LinkedIn</span>
                <a href="https://www.linkedin.com/in/kaylee-xiao-4562b738a" target="_blank" rel="noopener" style={val}>Kaylee Xiao →</a></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ background: 'var(--site-form-bg)', padding: 26, borderRadius: 'var(--radius-site-lg)',
            display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 12px 30px rgba(0,0,0,.14)' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--site-heading)', fontSize: 28, color: 'var(--site-text)' }}>Get in touch</h3>
            <input type="hidden" name="_subject" value="New message from your portfolio site" />
            <div style={{ display: 'flex', gap: 14 }}>
              <KXField label="First Name" name="first-name" required placeholder="Kaylee" style={{ flex: 1 }} />
              <KXField label="Last Name" name="last-name" required placeholder="Xiao" style={{ flex: 1 }} />
            </div>
            <KXField label="Email Address" name="email" type="email" required placeholder="you@email.com" />
            <KXField label="Message" name="message" multiline rows={5} required placeholder="Enter your message here." />
            <KXSiteButton type="submit">{status === 'sending' ? 'Sending…' : 'Send'}</KXSiteButton>
            {status === 'ok' && <p style={{ margin: 0, fontFamily: 'var(--site-body)', fontSize: 15, color: 'var(--site-selected)' }}>Thanks — your message has been sent!</p>}
            {status === 'error' && <p style={{ margin: 0, fontFamily: 'var(--site-body)', fontSize: 15, color: '#b4503f' }}>Something went wrong. Please email yx3544@nyu.edu directly.</p>}
          </form>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { KXAbout: About, KXEducation: Education, KXExperiences: Experiences,
  KXPortfolio: Portfolio, KXContact: Contact });
})();

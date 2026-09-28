import { useState } from 'react';
// Inline SVG icons avoid dependency on the lucide-react package.
const Icon = ({ name, size = 18, strokeWidth = 2 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    ArrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    Github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 14 3.5a13.4 13.4 0 0 0-7 0C3.5 1.2 2.3 2.5 2.3 2.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 9.7c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 6 19.1V22" /></>,
    Linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    Menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    X: <><path d="m18 6-12 12M6 6l12 12" /></>,
    ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    Code2: <><path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6-16-4 20" /></>,
    Terminal: <><path d="m4 17 6-6-6-6M12 19h8" /></>,
    ChevronDown: <path d="m6 9 6 6 6-6" />
  };
  return <svg {...common}>{paths[name]}</svg>;
};
const ArrowUpRight = (props) => <Icon name="ArrowUpRight" {...props} />;
const Github = (props) => <Icon name="Github" {...props} />;
const Linkedin = (props) => <Icon name="Linkedin" {...props} />;
const Menu = (props) => <Icon name="Menu" {...props} />;
const X = (props) => <Icon name="X" {...props} />;
const ShieldCheck = (props) => <Icon name="ShieldCheck" {...props} />;
const Code2 = (props) => <Icon name="Code2" {...props} />;
const Terminal = (props) => <Icon name="Terminal" {...props} />;
const ChevronDown = (props) => <Icon name="ChevronDown" {...props} />;

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Cybersecurity', '#cybersecurity'],
  ['Contact', '#contact'],
];

const skills = [
  { title: 'Programming', items: ['Java', 'Kotlin', 'JavaScript', 'PL/SQL'], icon: Code2 },
  { title: 'Mobile Development', items: ['React Native', 'Flutter', 'Android Studio'], icon: Terminal },
  { title: 'Databases', items: ['MongoDB', 'Oracle Database'], icon: Terminal },
  { title: 'DevOps & Containers', items: ['Docker'], icon: Terminal },
  { title: 'Cybersecurity', items: ['Web Application Security', 'Vulnerability Assessment', 'XSS', 'SQL Injection', 'Enumeration'], icon: ShieldCheck },
  { title: 'Tools & Platforms', items: ['Kali Linux', 'Burp Suite', 'PortSwigger Academy', 'TryHackMe', 'Git', 'GitHub', 'JOGL'], icon: Terminal },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">PG</span><span>PHILO<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href], i) => (
            <a key={label} className={i === 0 ? 'active' : ''} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE · CYBERSECURITY</div>
            <h1>Philopatir<br /><span>George Ibrahim</span></h1>
            <p className="hero-role">Computer Science Student <i> / </i> Aspiring Penetration Tester</p>
            <p className="hero-intro">I build software, explore how applications work, and develop my skills in identifying and understanding security vulnerabilities.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Sanguine-Prime" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span className="social-separator">·</span>
              <a href="https://www.linkedin.com/in/philopatir-george-929a59280/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Decorative cybersecurity illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core-card">
              <div className="core-top"><span className="core-dot" /><span className="core-dot" /><span className="core-dot" /><span className="core-label">SYSTEM / PROFILE</span></div>
              <div className="shield-wrap"><ShieldCheck size={74} strokeWidth={1.15} /></div>
              <div className="core-name">PHILO<span>.DEV</span></div>
              <div className="core-sub">BUILD · TEST · LEARN</div>
              <div className="core-line"><span /></div>
              <div className="core-foot"><span>STATUS</span><b><i /> LEARNING & BUILDING</b></div>
            </div>
            <div className="float-tag tag-top"><span className="tag-icon">&lt;/&gt;</span> SOFTWARE</div>
            <div className="float-tag tag-bottom"><span className="tag-icon">⌘</span> SECURITY</div>
            <div className="visual-caption">01 <span>—</span> INTRODUCTION</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-heading-row">
            <h2>Curious by nature.<br /><span>Driven to understand.</span></h2>
            <p className="section-lead">A computer science student building a foundation across software development and cybersecurity.</p>
          </div>
          <div className="about-panel">
            <div className="about-index">PG <span>—</span> 2026</div>
            <p>I'm a Computer Science student at Cairo University with a strong interest in software development and cybersecurity. Through academic projects and practical experience, I've developed skills in Java, React Native, and database technologies, while gaining hands-on experience in mobile application development and deployment.</p>
            <p>Currently, I'm pursuing the Vulnerability Analyst &amp; Penetration Tester track through the Digital Egypt Pioneers Initiative (DEPI), where I'm expanding my knowledge of web application security, vulnerability assessment, and penetration testing.</p>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading-row">
            <h2>Skills &amp; <span>technologies</span></h2>
            <p className="section-lead">A growing toolkit shaped by projects, coursework, and hands-on learning.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ title, items, icon: Icon }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><Icon size={19} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Projects in <span>practice</span></h2>
            <p className="section-lead">A selection of academic and collaborative work.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-art study-art"><div className="app-window"><div className="window-bar"><i /><i /><i /></div><div className="app-content"><div className="app-sidebar" /><div className="app-lines"><b /><i /><i /><i /></div><div className="app-tile" /></div></div><span className="art-label">MOBILE / EDUCATION</span></div>
              <div className="project-info"><div className="project-meta">01 <span>·</span> MOBILE APPLICATION</div><h3>Study With Me</h3><p>An educational platform for university students to share learning materials under the supervision of doctors and teaching assistants.</p><div className="project-stack"><span>React Native</span><span>MongoDB</span><span>Deployment</span></div><a className="text-link" href="https://github.com/Sanguine-Prime/Study-With-Me" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div>
            </article>
            <article className="project-card">
              <div className="project-art game-art"><div className="game-sun" /><div className="game-mountain mountain-one" /><div className="game-mountain mountain-two" /><div className="snow-person">●<span>▰</span></div><div className="game-ground" /><span className="art-label">JAVA / JOGL</span></div>
              <div className="project-info"><div className="project-meta">02 <span>·</span> GAME DEVELOPMENT</div><h3>SnowMen-Xmas-Winter-War</h3><p>A 2D turn-based combat game featuring aiming, weapon selection, health management, and turn-based gameplay.</p><div className="project-stack"><span>Java</span><span>JOGL 1.1</span><span>2D Game</span></div><a className="text-link" href="https://github.com/Sanguine-Prime/SnowMen-Xmas-Winter-War" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div>
            </article>
          </div>
        </section>

        <section className="cyber section-wrap" id="cybersecurity">
          <div className="section-kicker">04 / CURRENT FOCUS</div>
          <div className="cyber-panel">
            <div><div className="cyber-icon"><ShieldCheck size={25} /></div><h2>Learning to think<br /><span>like a tester.</span></h2></div>
            <div className="cyber-copy"><p>Currently developing practical skills in vulnerability assessment and penetration testing through DEPI and hands-on security labs.</p><div className="focus-list"><span>WEB SECURITY</span><span>XSS</span><span>SQL INJECTION</span><span>ENUMERATION</span></div><p className="cyber-note">Training &amp; lab experience · Not professional engagements</p></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker">05 / CONTACT</div>
          <div className="contact-panel"><div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let's start a <span>conversation.</span></h2><p className="contact-copy">I'm open to connecting, learning, and exploring opportunities in software development and cybersecurity.</p></div><div className="contact-links"><a href="mailto:philopatirwahba@gmail.com">Email me <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/philopatir-george-929a59280/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/Sanguine-Prime" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div></div>
        </section>
      </main>
      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">PG</span><span>PHILO<span className="brand-dot">.</span></span></a><span>Designed &amp; built by Philopatir George Ibrahim</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;

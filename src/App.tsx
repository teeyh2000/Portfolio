import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLinkedin, FiMail, FiExternalLink, FiMenu, FiX, FiArrowUp, FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { personalInfo, skills, experience, projects, achievements, education } from './data/portfolio';
import './App.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const roles = ['Full Stack Developer', 'API Architect', '.NET Specialist', 'Web Designer', 'Database Designer'];

function useTypingAnimation(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return { theme, toggle };
}

function Navbar({ theme, onToggleTheme }: { theme: string; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          TYH<span>.</span>
        </a>
        <div className="nav-right">
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a href="/Portfolio/Resume_TeeYungHow.pdf" download="Resume_TeeYungHow.pdf" className="nav-resume-btn">
            <FiDownload /> Resume
          </a>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      aria-label="Back to top"
    >
      <FiArrowUp />
    </motion.button>
  );
}

function Marquee() {
  const items = ['Full Stack', 'API Design', '.NET', 'React', 'Azure', 'SQL', 'TypeScript', 'Payment Systems', 'E-Invoicing'];
  const track = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i}>{item}<span className="dot">/</span></span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const typedRole = useTypingAnimation(roles);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="hero-label" variants={fadeUp}>
            Software Developer
          </motion.p>
          <motion.h1 className="hero-name" variants={fadeUp}>
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="outline-text">{word} </span> : `${word} `}
              </span>
            ))}
          </motion.h1>
          <motion.p className="hero-title" variants={fadeUp}>
            {'> '}<span className="typed-text">{typedRole}</span>
            <span className="typed-cursor">_</span>
          </motion.p>
          <motion.p className="hero-bio" variants={fadeUp}>
            {personalInfo.bio}
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary">
              <FiMail /> Get in Touch
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="/Portfolio/Resume_TeeYungHow.pdf" download="Resume_TeeYungHow.pdf" className="btn btn-outline">
              <FiDownload /> Resume
            </a>
          </motion.div>
          <motion.div className="hero-stats" variants={fadeUp}>
            <div className="stat">
              <span className="stat-number"><AnimatedCounter target={55} suffix="+" /></span>
              <span className="stat-label">Tasks Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number"><AnimatedCounter target={3} suffix="+" /></span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat">
              <span className="stat-number"><AnimatedCounter target={10} suffix="+" /></span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number"><AnimatedCounter target={12} suffix="+" /></span>
              <span className="stat-label">Certifications</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="section-header">
            <motion.p className="section-label" variants={fadeUp}>About</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Background &<br />Education</motion.h2>
          </div>
          <div className="about-content">
            <motion.div className="about-text" variants={fadeUp}>
              <p>
                I'm a Full Stack Developer based in Kuala Lumpur with a First Class Honours degree in Software Engineering
                from TAR UMT (CGPA 3.89). I specialize in building web applications and APIs using the .NET ecosystem,
                with strong expertise in database design, Azure cloud deployment, and system integrations.
              </p>
              <p>
                At Syntrino Solutions (SwiF Fintech), I've been the top contributor delivering features and fixes at scale. My work spans payment gateway integrations (ShopeePay, Touch 'n Go, Maybank, Boost),
                LHDN e-invoicing systems, and full-stack web applications.
              </p>
              <p>
                Previously at UOB Kay Hian, I maintained critical securities trading systems, resolved security
                vulnerabilities, and restored lost legacy codebases. I bring a strong foundation in clean architecture,
                API design, and agile development.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="education-card" style={{ marginBottom: '1.5rem' }}>
                <div className="education-degree">{education.degree}</div>
                <div className="education-university">{education.university}</div>
                <div className="education-meta">
                  <span>CGPA: {education.cgpa}</span>
                  <span>{education.period}</span>
                </div>
              </div>
              <div className="about-info-grid">
                <div className="about-info-item">
                  <div className="about-info-label">Location</div>
                  <div className="about-info-value">{personalInfo.location}</div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Email</div>
                  <div className="about-info-value">{personalInfo.email}</div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Experience</div>
                  <div className="about-info-value">3+ Years</div>
                </div>
                <div className="about-info-item">
                  <div className="about-info-label">Specialization</div>
                  <div className="about-info-value">Full Stack .NET</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const categories = ['Backend', 'Frontend', 'Database', 'DevOps'];

  return (
    <section id="skills">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="section-header">
            <motion.p className="section-label" variants={fadeUp}>Skills</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Tech Stack</motion.h2>
          </div>
          <motion.div className="skills-grid" variants={fadeUp}>
            {categories.map((cat) => (
              <div key={cat} className="skill-category">
                <h3>{cat}</h3>
                <div className="skill-list">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((s) => (
                      <motion.div
                        key={s.name}
                        className="skill-item"
                        whileHover={{ x: 6 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {s.name}
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="section-header">
            <motion.p className="section-label" variants={fadeUp}>Experience</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Work History</motion.h2>
          </div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <motion.div key={i} className="timeline-item" variants={fadeUp} custom={i}>
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-role">{exp.role}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="section-header">
            <motion.p className="section-label" variants={fadeUp}>Projects</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Selected Work</motion.h2>
          </div>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <motion.div key={i} className="project-card" variants={fadeUp} custom={i}>
                <div className="project-number">{'0' + (i + 1)}</div>
                <div className="project-header">
                  <h3 className="project-title">{proj.title}</h3>
                  {(proj as { github?: string }).github && (
                    <a href={(proj as { github?: string }).github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
                <p className="project-desc">{proj.description}</p>
                <ul className="project-highlights">
                  {proj.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="section-header">
            <motion.p className="section-label" variants={fadeUp}>Recognition</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Achievements &<br />Certifications</motion.h2>
          </div>
          <motion.div className="achievements-grid" variants={fadeUp}>
            {achievements.map((a, i) => (
              <div key={i} className="achievement-card">
                <span className="achievement-year">{a.year}</span>
                <h4 className="achievement-title">{a.title}</h4>
                <p className="achievement-detail">{a.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <div className="section-header" style={{ textAlign: 'center' }}>
            <motion.p className="section-label" style={{ justifyContent: 'center' }} variants={fadeUp}>Contact</motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>Let's Work<br />Together</motion.h2>
          </div>
          <motion.p className="contact-text" variants={fadeUp}>
            I'm always open to discussing new opportunities, interesting projects, or ways to collaborate.
            Feel free to reach out through any of the channels below.
          </motion.p>
          <motion.div className="contact-links" variants={fadeUp}>
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <FiMail /> {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FiLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tee Yung How. All rights reserved.</p>
      </footer>
      <BackToTop />
    </>
  );
}

export default App;

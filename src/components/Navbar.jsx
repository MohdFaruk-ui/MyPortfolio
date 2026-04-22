'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Intersection Observer for active link */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            mohd<span className={styles.logoAccent}>faruk</span>
          </a>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.navCta}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contact
            </a>
          </div>

          <div
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileLink}
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Contact
        </a>
      </div>
    </>
  );
}

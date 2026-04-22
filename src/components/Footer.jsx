import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p className={styles.footerText}>
          © {year} <span className={styles.footerAccent}>Mohd Faruk</span>. Built from scratch.
        </p>

        <div className={styles.footerSocials}>
          <a href="https://github.com/MohdFaruk-ui" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/mohdfaruk" target="_blank" rel="noopener noreferrer" className={styles.footerSocialIcon} aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:mohdfaruk.dev@gmail.com" className={styles.footerSocialIcon} aria-label="Email">
            <FiMail />
          </a>
        </div>

        <span className={styles.footerRight}>
          Designed & Developed by Faruk
        </span>
      </div>
    </footer>
  );
}

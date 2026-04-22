'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const floatBadge = (delay, y = -8) => ({
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.heroBg}>
        <div className={styles.gridPattern} />
        <div className={`${styles.glowOrb} ${styles.glowOrb1}`} />
        <div className={`${styles.glowOrb} ${styles.glowOrb2}`} />
        <div className={`${styles.glowOrb} ${styles.glowOrb3}`} />
      </div>

      <div className={styles.heroContent}>
        {/* ── Left: Text ── */}
        <div className={styles.textCol}>
          <motion.div className={styles.greeting} {...fadeUp(0.2)}>
            <span className={styles.statusDot} />
            Assalamu Alaikum 👋
          </motion.div>

          <motion.h1 className={styles.name} {...fadeUp(0.35)}>
            Mohd{' '}
            <span className={styles.nameGradient}>Faruk</span>
          </motion.h1>

          <motion.div className={styles.roleTag} {...fadeUp(0.5)}>
            <span className={styles.roleLine} />
            <span className={styles.roleText}>Software Engineer</span>
          </motion.div>

          <motion.p className={styles.subtitle} {...fadeUp(0.6)}>
            I craft <strong>fast, scalable</strong> mobile and web applications 
            with <strong>Flutter</strong>, <strong>Python</strong>, and modern frameworks. 
            Turning complex ideas into clean, performant digital experiences.
          </motion.p>

          <motion.div className={styles.actions} {...fadeUp(0.75)}>
            <a href="#projects" className={styles.btnPrimary} onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work
              <FiArrowDown size={16} />
            </a>
            <a href="#contact" className={styles.btnSecondary} onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div className={styles.socials} {...fadeUp(0.9)}>
            <a href="https://github.com/MohdFaruk-ui" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/mohdfaruk" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </motion.div>
        </div>

        {/* ── Right: Avatar Visual ── */}
        <motion.div className={styles.visualCol} {...fadeIn(0.4)}>
          <div className={styles.avatarFrame}>
            <div className={styles.avatarGlow} />
            <div className={styles.avatarRing} />
            <div className={styles.avatarInner}>
              <Image 
                src="/mf-logo.png" 
                alt="Mohd Faruk Logo" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
              />
            </div>

            {/* Floating tech badges */}
            <motion.div className={`${styles.floatingBadge} ${styles.badge1}`} {...floatBadge(1.0)}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.34, 1.56, 0.64, 1], y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
            >
              💙 Flutter
            </motion.div>
            <motion.div className={`${styles.floatingBadge} ${styles.badge2}`} {...floatBadge(1.2)}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.34, 1.56, 0.64, 1], y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              🐍 Python
            </motion.div>
            <motion.div className={`${styles.floatingBadge} ${styles.badge3}`} {...floatBadge(1.4)}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{ duration: 0.5, delay: 1.4, ease: [0.34, 1.56, 0.64, 1], y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              ⚡ FastAPI
            </motion.div>
            <motion.div className={`${styles.floatingBadge} ${styles.badge4}`} {...floatBadge(1.6)}
              animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
              transition={{ duration: 0.5, delay: 1.6, ease: [0.34, 1.56, 0.64, 1], y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              🔥 Firebase
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollDown} onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}

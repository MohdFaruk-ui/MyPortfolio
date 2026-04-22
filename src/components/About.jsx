'use client';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Years Coding' },
  { value: '6+', label: 'Technologies' },
  { value: '100%', label: 'Passion Driven' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <motion.div className="section-header" {...fadeUp}>
          <span className="section-label">01 — About</span>
          <h2 className="section-title">A bit about me</h2>
        </motion.div>

        <div className={styles.aboutGrid}>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className={styles.bioText}>
              I&apos;m <strong>Mohd Faruk</strong> — a self-taught software engineer 
              who fell in love with building things that live on screens. My journey 
              started with curiosity and turned into a craft I practice every day.
            </p>
            <p className={styles.bioText}>
              I specialize in <span className={styles.bioHighlight}>Flutter</span> for 
              beautiful cross-platform apps, <span className={styles.bioHighlight}>Python</span> for 
              automation and backend systems, and <span className={styles.bioHighlight}>React/Next.js</span> for 
              the web. I care deeply about clean architecture, fast performance, and 
              user experience that feels right.
            </p>
            <p className={styles.bioText}>
              When I&apos;m not coding, I&apos;m usually learning something new, exploring 
              open-source projects, or refining ideas for my next build.
            </p>
            <div className={styles.currentlyTag}>
              <span className={styles.currentDot} />
              Currently building & shipping production apps
            </div>
          </motion.div>

          <motion.div className={styles.statsGrid} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

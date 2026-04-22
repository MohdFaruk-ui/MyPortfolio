'use client';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const TIMELINE = [
  {
    date: '2025 — Present',
    title: 'Independent Software Engineer',
    company: 'Self-Employed · Freelance',
    points: [
      'Built and shipped production Flutter apps with Firebase backends',
      'Developed autonomous trading bot system with Python FastAPI, handling real-time market data',
      'Designed and deployed full-stack web applications with Next.js and Vercel',
    ],
    tags: ['Flutter', 'Python', 'FastAPI', 'Firebase', 'Next.js'],
    active: true,
  },
  {
    date: '2023 — 2025',
    title: 'Self-Taught Developer',
    company: 'Open Source · Personal Projects',
    points: [
      'Learned mobile development through building real-world Flutter applications',
      'Built backend systems with Python, mastering REST APIs and automation',
      'Contributed to open-source projects and built a portfolio of production apps',
    ],
    tags: ['Flutter', 'Dart', 'Python', 'JavaScript', 'Git'],
    active: false,
  },
  {
    date: '2022 — 2023',
    title: 'Programming Foundations',
    company: 'Self-Learning · Online Resources',
    points: [
      'Started with Python fundamentals and web development basics',
      'Explored multiple technologies to find the right stack',
      'Built first projects and discovered passion for crafting software',
    ],
    tags: ['Python', 'HTML/CSS', 'JavaScript'],
    active: false,
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label">04 — Experience</span>
          <h2 className="section-title">My journey so far</h2>
          <p className="section-subtitle">From first lines of code to shipping production apps.</p>
        </motion.div>

        <div className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={`${styles.timelineDot} ${!item.active ? styles.timelineDotMuted : ''}`} />
              <div className={`${styles.timelineDate} ${!item.active ? styles.timelineDateMuted : ''}`}>
                {item.date}
              </div>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineCompany}>{item.company}</p>
              <div className={styles.timelinePoints}>
                {item.points.map((point, j) => (
                  <p key={j} className={styles.timelinePoint}>{point}</p>
                ))}
              </div>
              <div className={styles.timelineTags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.timelineTag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

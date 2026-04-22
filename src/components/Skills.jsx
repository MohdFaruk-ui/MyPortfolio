'use client';
import { motion } from 'framer-motion';
import {
  SiFlutter, SiDart, SiPython, SiFastapi, SiFirebase,
  SiNextdotjs, SiReact, SiJavascript, SiSqlite,
  SiGit, SiDocker, SiVercel, SiFigma, SiLinux
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';
import styles from './Skills.module.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const CATEGORIES = [
  {
    icon: '🎨',
    title: 'Frontend & Mobile',
    desc: 'Beautiful, responsive interfaces',
    skills: [
      { name: 'Flutter', Icon: SiFlutter },
      { name: 'Dart', Icon: SiDart },
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'UI/UX', Icon: SiFigma },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend & Data',
    desc: 'Scalable server-side systems',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'SQLite', Icon: SiSqlite },
      { name: 'REST API', Icon: HiOutlineCode },
    ],
  },
  {
    icon: '🚀',
    title: 'DevOps & Tools',
    desc: 'Deployment & workflow',
    skills: [
      { name: 'Git', Icon: SiGit },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Figma', Icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <motion.div className="section-header" {...fadeUp}>
          <span className="section-label">02 — Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">Focused on the tools that let me ship fast and build well.</p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.categoryIcon}>{cat.icon}</div>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <p className={styles.categoryDesc}>{cat.desc}</p>
              <div className={styles.tagList}>
                {cat.skills.map((skill) => (
                  <span key={skill.name} className={styles.skillTag}>
                    <span className={styles.skillTagIcon}>
                      <skill.Icon />
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

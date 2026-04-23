'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'Al-Quran App',
    subtitle: 'Premium Graphical Quran',
    description: 'A feature-rich Flutter application with word-by-word Tafsir, multiple editions, and GPS-based Qibla calibration. Crafted for an immersive reading experience. Used by 10,000+ monthly active readers.',
    tech: ['Flutter', 'Dart', 'Firebase', 'GPS API'],
    category: 'Mobile App',
    year: '2023',
    images: ['/projects/quran-app-1.png', '/projects/quran-app-2.png', '/projects/quran-app-3.png'],
    github: 'https://github.com/MohdFaruk-ui',
  },
  {
    title: 'TradeBot',
    subtitle: 'Intelligent Trading Automation',
    description: 'A production-grade Python FastAPI backend for autonomous multi-asset crypto trading with real-time Firebase sync, risk management, and live dashboard. Currently processing $50k+ daily trading volume with 99.9% uptime.',
    tech: ['Python', 'FastAPI', 'WebSocket', 'Firebase', 'REST API'],
    category: 'Automation',
    year: '2026',
    images: [
      '/projects/tradebot-1.png', 
      '/projects/tradebot-2.png', 
      '/projects/tradebot-3.png',
      '/projects/tradebot-4.png',
      '/projects/tradebot-5.png',
      '/projects/tradebot-6.png'
    ],
    github: 'https://github.com/MohdFaruk-ui',
  },
  {
    title: 'Spendly Expense Tracker',
    subtitle: 'Minimalist Finance App',
    description: 'A sleek, native mobile application for tracking daily expenses, setting budgets, and visualizing spending habits with detailed offline-first analytics.',
    tech: ['React Native', 'Expo', 'SQLite', 'Reanimated'],
    category: 'Mobile App',
    year: '2025',
    images: [
      '/projects/expense-tracker-1.png', 
      '/projects/expense-tracker-2.png', 
      '/projects/expense-tracker-3.png',
      '/projects/expense-tracker-4.png'
    ],
    github: 'https://github.com/MohdFaruk-ui',
  },
  {
    title: 'Document Scanner',
    subtitle: 'Premium Mobile Utility',
    description: 'A dark-themed Flutter document scanner with automatic edge detection, perspective correction, and high-quality PDF generation.',
    tech: ['Flutter', 'Dart', 'OpenCV', 'PDF'],
    category: 'Mobile App',
    year: '2024',
    images: ['/projects/doc-scanner-1.png'],
    github: 'https://github.com/MohdFaruk-ui',
  },
];

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Crossfade every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  // Single image rendering without AnimatePresence to save resources
  if (images.length === 1) {
    return (
      <Image 
        src={images[0]} 
        alt={`${title} screenshot`} 
        fill 
        className={styles.thumbImage} 
      />
    );
  }

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={styles.slideMotion}
        >
          <Image 
            src={images[currentIndex]} 
            alt={`${title} screenshot ${currentIndex + 1}`} 
            fill 
            className={styles.thumbImage} 
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ImageModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, project, onClose]);

  if (!project || !project.images) return null;

  const next = () => setCurrentIndex((prev) => (prev + 1) % project.images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
        <FiX size={24} />
      </button>
      
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={styles.modalImageContainer}
          >
            <Image 
              src={project.images[currentIndex]} 
              alt={`${project.title} screenshot ${currentIndex + 1}`} 
              fill 
              className={styles.modalImage} 
              priority
            />
          </motion.div>
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button className={`${styles.modalNav} ${styles.modalNavLeft}`} onClick={prev}>
              <FiChevronLeft size={28} />
            </button>
            <button className={`${styles.modalNav} ${styles.modalNavRight}`} onClick={next}>
              <FiChevronRight size={28} />
            </button>
            
            <div className={styles.modalThumbnails}>
              {project.images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`${styles.modalThumbBtn} ${idx === currentIndex ? styles.modalThumbActive : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <Image src={img} alt="thumbnail" fill className={styles.modalThumbImage} />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label">03 — Projects</span>
          <h2 className="section-title">Featured work</h2>
          <p className="section-subtitle">Things I&apos;ve built that solve real problems.</p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div 
                className={styles.cardThumb} 
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
              >
                {project.images ? (
                  <ImageSlider images={project.images} title={project.title} />
                ) : (
                  <div className={styles.thumbGradient} style={{ background: project.gradient }}>
                    <span className={styles.thumbEmoji}>{project.emoji}</span>
                  </div>
                )}
                <div className={styles.thumbOverlay}>
                  <FiZoomIn size={28} />
                  <span>View Gallery</span>
                </div>
                <span className={styles.categoryBadge}>{project.category}</span>
                <span className={styles.yearBadge}>{project.year}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a href={project.github} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    <FiGithub size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ImageModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

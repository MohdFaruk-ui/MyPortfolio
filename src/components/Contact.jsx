'use client';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import styles from './Contact.module.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const mailto = `mailto:mohdfaruk.dev@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, '_blank');
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <motion.div className="section-header" {...fadeUp}>
          <span className="section-label">05 — Contact</span>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">Got a project in mind? I&apos;d love to hear about it.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left: Info */}
          <motion.div className={styles.contactInfo} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className={styles.contactText}>
              I&apos;m always open to discussing <strong>new opportunities</strong>, 
              interesting projects, or just a friendly chat about technology. 
              Feel free to reach out through any channel below.
            </p>

            <div className={styles.contactMethods}>
              <a href="mailto:mohdfaruk.dev@gmail.com" className={styles.contactMethod}>
                <div className={styles.methodIcon}><FiMail /></div>
                <div>
                  <div className={styles.methodLabel}>Email</div>
                  <div className={styles.methodValue}>mohdfaruk.dev@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/MohdFaruk-ui" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}><FiGithub /></div>
                <div>
                  <div className={styles.methodLabel}>GitHub</div>
                  <div className={styles.methodValue}>MohdFaruk-ui</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/mohdfaruk" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <div className={styles.methodIcon}><FiLinkedin /></div>
                <div>
                  <div className={styles.methodLabel}>LinkedIn</div>
                  <div className={styles.methodValue}>Mohd Faruk</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form className={styles.contactForm} onSubmit={handleSubmit} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className={styles.formInput}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className={styles.formInput}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className={`${styles.formInput} ${styles.formTextarea}`}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className={styles.formSubmit}>
              Send Message
              <FiSend size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

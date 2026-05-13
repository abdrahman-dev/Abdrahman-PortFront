import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import data from "../../data/portfolioData.ts";

const nameParts = data.hero.name.split(" ");
const firstName = nameParts[0];
const lastName = nameParts.slice(1).join(" ");

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const dots = Array.from({ length: 32 });

const Hero = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-graphic" aria-hidden="true">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
          <g className="hero__bg-svg-group">
            {dots.map((_, i) => (
              <circle
                key={i}
                cx={(i % 8) * 60 + 30}
                cy={Math.floor(i / 8) * 80 + 40}
                r="3"
                fill="currentColor"
              />
            ))}
            <rect x="80" y="60" width="200" height="130" rx="12" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="160" y="120" width="220" height="140" rx="12" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="60" y="180" width="180" height="120" rx="12" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="0" x2="500" y2="400" stroke="currentColor" strokeWidth="0.5" />
            <line x1="500" y1="0" x2="0" y2="400" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="250" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="hero__content">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="status-pill">
            <span className="status-dot" />
            Available for work
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-headline">
            <span className="hero-headline__normal">{firstName} </span>
            <span className="hero-headline__gradient">{lastName}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            {data.hero.title}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-bio">
            {data.hero.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--outline">Contact Me</a>
            <a href={data.hero.cvPath} download className="btn btn--ghost">Download CV</a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        aria-hidden="true"
        animate={{ opacity: scrolled > 100 ? 0 : 1, y: scrolled > 100 ? 10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;

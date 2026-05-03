import "./Hero.css";
import data from "../../data/portfolioData.ts";
import { motion } from "framer-motion";

interface HeroData {
  name: string;
  title: string;
  bio: string;
  cvPath: string;
}

interface PortfolioData {
  hero: HeroData;
}

const { name, title, bio, cvPath } = (data as PortfolioData).hero;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

const TERMINAL_LINES = data.hero.terminal;

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* Text */}
        <div className="hero-text">
          <motion.h1 {...fadeUp(0.05)}>{name}</motion.h1>
          <motion.h2 {...fadeUp(0.15)}>{title}</motion.h2>
          <motion.p {...fadeUp(0.25)}>{bio}</motion.p>

          <motion.div className="hero-buttons" {...fadeUp(0.35)}>
            <motion.a
              href="#projects" className="btn primary"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact" className="btn secondary"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href={cvPath} download className="btn cv"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <div className="terminal">
            <div className="term-header">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="term-title">abdrahman ~ portfolio</span>
            </div>
            <div className="term-body">
              {TERMINAL_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  className={`term-line ${line.type}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.35, duration: 0.2 }}
                >
                  {line.type === "cmd" && (
                    <>
                      <span className="prompt">~$</span>
                      <span className="cmd-text">{line.text}</span>
                    </>
                  )}
                  {(line.type === "info" || line.type === "success") && (
                    <span className="out-text">{line.text}</span>
                  )}
                  {line.type === "cursor" && (
                    <>
                      <span className="prompt">~$</span>
                      <motion.span
                        className="cursor-block"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
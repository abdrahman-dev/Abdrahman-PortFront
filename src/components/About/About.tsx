import "./About.css";
import data from "../../data/portfolioData.js";
import { motion } from "framer-motion";

const About = () => {
  const { intro, focus, extra, mindset } = data.about;

  const details = [
    { label: "Focus", text: focus },
    { label: "Also into", text: extra },
    { label: "Mindset", text: mindset },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          About
        </motion.h2>

        <motion.p
          className="about-intro"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          {intro}
        </motion.p>

        <div className="about-details">
          {details.map(({ label, text }, i) => (
            <motion.p
              key={label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 + i * 0.1 }}
            >
              <span>{label}:</span> {text}
            </motion.p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
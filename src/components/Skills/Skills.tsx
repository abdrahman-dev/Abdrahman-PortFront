import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./Skills.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

const categoryEmojis: Record<string, string> = {
  "Programming Languages": "💻",
  "Frameworks & Libraries": "📚",
  Databases: "🗄️",
  "Tools & Systems": "🔧",
  "Hardware & Embedded": "⚡",
};

const Skills = () => {
  const { skills } = data;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">// skills</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title">Skills</h2>
        </ScrollReveal>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <div className="skill-category__header">
                <span className="skill-category__emoji">
                  {categoryEmojis[category] || "📌"}
                </span>
                <h3>{category}</h3>
              </div>

              <div className="skill-category__divider" />

              <div className="skill-category__items">
                {items.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <span className="skill-row__name">{skill.name}</span>
                    <div className="skill-row__dots">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <motion.span
                          key={dot}
                          className={`skill-dot ${dot <= skill.level ? "skill-dot--filled" : ""}`}
                          variants={dotVariants}
                          custom={dot}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import "./Skills.css";
import data from "../../data/portfolioData.js";

const Skills = () => {
  const { skills } = data;

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {Object.keys(skills).map((category, idx) => (
            <div className="skill-category" key={idx}>
              <h3>{category}</h3>
              <div className="skill-items">
                {skills[category].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    {/* مكان تحط الصورة أو icon */}
                    <div className="skill-icon">{/* <img src={skill.img} alt={skill.name} /> */}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
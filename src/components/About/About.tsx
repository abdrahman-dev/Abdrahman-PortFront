import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./About.css";

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
        <ScrollReveal>
          <span className="section-label">// about me</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title">About</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="about-intro">{intro}</p>
        </ScrollReveal>

        <div className="about-details">
          {details.map(({ label, text }, i) => (
            <ScrollReveal key={label} delay={0.3 + i * 0.1}>
              <p>
                <span>{label}:</span> {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

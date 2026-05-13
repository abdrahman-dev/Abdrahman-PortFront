import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./CodewarsSection.css";

const CodewarsSection = () => {
  const { codewars } = data;

  return (
    <section className="codewars" id="codewars">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">// problem solving</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title">Problem Solving & Algorithms</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="codewars-description">{codewars.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="codewars-content">
            <a
              href={codewars.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="codewars-badge-link"
              aria-label={`${codewars.username} Codewars profile`}
            >
              <img
                src={codewars.badgeUrl}
                alt={`${codewars.username} Codewars Badge`}
                className="codewars-badge"
                loading="lazy"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CodewarsSection;

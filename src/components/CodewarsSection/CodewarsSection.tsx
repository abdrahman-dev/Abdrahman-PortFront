import "./CodewarsSection.css";
import data, { type CodewarsData } from "../../data/portfolioData.js";

const CodewarsSection = () => {
  const { codewars } = data as { codewars: CodewarsData };

  return (
    <section className="codewars" id="codewars">
      <div className="container">
        <h2 className="section-title">Problem Solving & Algorithms</h2>

        <p className="codewars-description">
          {codewars.description}
        </p>

        <div className="codewars-content">
          <a
            href={codewars.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="codewars-badge-link"
          >
            <img
              src={codewars.badgeUrl}
              alt={`${codewars.username} Codewars Badge`}
              className="codewars-badge"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodewarsSection;
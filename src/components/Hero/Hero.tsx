import "./Hero.css";
import data from "../../data/portfolioData.ts";

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

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* Text */}
        <div className="hero-text">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{bio}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
            <a href={cvPath} download className="btn cv">
              Download CV
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar">
          <div className="avatar-circle">
            <span>AW</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
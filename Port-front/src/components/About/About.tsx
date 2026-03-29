import "./About.css";
import data from "../../data/portfolioData.js";

const About = () => {
    const { intro, focus, extra, mindset } = data.about;
  
    return (
      <section className="about" id="about">
        <div className="container about-container">
  
          <h2 className="section-title">About</h2>
  
          <p className="about-intro">{intro}</p>
  
          <div className="about-details">
            <p>
              <span>Focus:</span> {focus}
            </p>
            <p>
              <span>Also into:</span> {extra}
            </p>
            <p>
              <span>Mindset:</span> {mindset}
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default About;
import "./footer.css";
import data from "../../data/portfolioData.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {data.hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
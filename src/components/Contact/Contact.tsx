import "./Contact.css";
import data from "../../data/portfolioData.js";

const Contact = () => {
  const { contact } = data;

  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">

          {/* Contact Links */}
          {contact.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{/* مكان لصورة أو icon */}</div>
              <span>{link.name}</span>
            </a>
          ))}

          {/* Optional: Contact Form (future EmailJS) */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="btn primary">Send Message</button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
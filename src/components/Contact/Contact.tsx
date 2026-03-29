import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import data from "../../data/portfolioData.js";

interface ContactLink {
  url: string;
  img: string;
  name: string;
}

interface ContactData {
  links: ContactLink[];
}

interface PortfolioData {
  contact: ContactData;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const { contact } = data as PortfolioData;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">

          {/* Contact Links */}
          {contact.links.map((link, idx: number) => (
            <a
              key={idx}
              href={link.url}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <img src={link.img} alt={link.name} />
              </div>
              <span>{link.name}</span>
            </a>
          ))}

        </div>

        {/* Contact Form */}
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
          />

          <button
            type="submit"
            className="btn primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-msg form-msg--success">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="form-msg form-msg--error">
              Something went wrong. Try again.
            </p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
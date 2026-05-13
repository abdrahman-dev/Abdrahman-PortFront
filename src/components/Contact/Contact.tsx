import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./Contact.css";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
      timerRef.current = setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  const buttonContent = {
    idle: { text: "Send Message" },
    loading: { text: "Sending..." },
    success: { text: "Sent!" },
    error: { text: "Failed — try again" },
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">// contact</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title">Contact Me</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="contact-grid">
            {data.contact.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <div className="contact-card__icon">
                  <img src={link.img} alt="" />
                </div>
                <div className="contact-card__info">
                  <span className="contact-card__name">{link.name}</span>
                  {link.description && (
                    <span className="contact-card__desc">{link.description}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="floating-field">
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="floating-field__input"
                placeholder=" "
              />
              <label htmlFor="from_name" className="floating-field__label">
                Your Name
              </label>
            </div>

            <div className="floating-field">
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                className="floating-field__input"
                placeholder=" "
              />
              <label htmlFor="from_email" className="floating-field__label">
                Your Email
              </label>
            </div>

            <div className="floating-field">
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="floating-field__input floating-field__input--textarea"
                placeholder=" "
              />
              <label htmlFor="message" className="floating-field__label">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className={`contact-form__btn contact-form__btn--${status}`}
              disabled={status === "loading"}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={status}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  {status === "loading" && (
                    <span className="spinner" />
                  )}
                  {buttonContent[status].text}
                </motion.span>
              </AnimatePresence>
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

import ScrollReveal from "../ui/ScrollReveal";
import data from "../../data/portfolioData";
import "./Services.css";

const Services = () => {
  const { services } = data;

  return (
    <section className="services" id="services">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">// services</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="section-title">Services</h2>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={0.2 + i * 0.1}>
              <div className="service-card">
                {service.img && (
                  <div className="service-icon">
                    <img src={service.img} alt="" />
                  </div>
                )}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import "./Services.css";
import data from "../../data/portfolioData.js";

const Services = () => {
  const { services } = data;

  return (
    <section className="services" id="services">
      <div className="container">

        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              {/* مكان تحط icon أو صورة */}
              <div className="service-icon"><img src={service.img} alt={service.name} /></div>
              <h3>{service.name}</h3>
              {service.description && <p>{service.description}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
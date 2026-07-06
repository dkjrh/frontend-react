import "./Services.css";
import { FaCode, FaDatabase, FaPaintBrush } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Responsive and modern websites using React and Django."
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "REST APIs, authentication systems, and database design."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Clean and user-friendly interfaces with modern design principles."
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">My Services</h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Residential Electrical Services",
      icon: "🏠",
      image: "/images/slide2.jpg",
      description: "Complete electrical solutions for your home, including wiring, panel upgrades, lighting installation, outlet repairs, and safety inspections.",
      features: [
        "Complete house wiring and rewiring",
        "Electrical panel upgrades and repairs",
        "Circuit breaker installation and replacement",
        "Outlet and switch installation",
        "Lighting fixture installation and repair"
      ]
    },
    {
      id: 2,
      title: "Commercial Electrical Services",
      icon: "🏢",
      image: "/images/slide1.jpg",
      description: "Professional electrical services for businesses, offices, and commercial properties with minimal disruption to your operations.",
      features: [
        "Commercial building wiring",
        "Office lighting solutions",
        "Power distribution systems",
        "Electrical maintenance contracts",
        "Energy efficiency audits and solutions"
      ]
    },
    {
      id: 3,
      title: "Industrial Electrical Services",
      icon: "🏭",
      image: "/images/slide3.jpg",
      description: "Heavy-duty electrical solutions for factories, warehouses, and industrial facilities with focus on reliability and safety.",
      features: [
        "Industrial equipment installation",
        "Machine wiring and troubleshooting",
        "Control panel design and installation",
        "Motor control and VFD installation",
        "Preventative maintenance programs"
      ]
    },
    {
      id: 4,
      title: "Emergency Electrical Services",
      icon: "🚨",
      image: "/images/slide5.jpg",
      description: "24/7 emergency electrical services to quickly resolve urgent electrical problems and restore power safely.",
      features: [
        "Power outage troubleshooting",
        "Electrical fire safety inspections",
        "Emergency panel repairs",
        "Circuit overload resolution",
        "Rapid response team available 24/7"
      ]
    },
    {
      id: 5,
      title: "Smart Home Automation",
      icon: "🏠💡",
      image: "/images/slide2.jpg",
      description: "Transform your home with modern smart electrical systems that enhance comfort, security, and energy efficiency.",
      features: [
        "Smart lighting installation",
        "Home automation system setup",
        "Smart thermostat installation",
        "Security system integration",
        "Voice-controlled electrical systems"
      ]
    },
    {
      id: 6,
      title: "Energy Efficiency Solutions",
      icon: "♻️",
      image: "/images/slide1.jpg",
      description: "Reduce your energy consumption and costs with our specialized energy efficiency electrical services.",
      features: [
        "LED lighting upgrades",
        "Energy audit and assessment",
        "Solar panel installation consultation",
        "Energy-efficient appliance integration",
        "Smart energy monitoring systems"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our <span className="highlight-text">Services</span></h1>
        <p>Professional electrical services for residential, commercial, and industrial needs</p>
      </div>

      <div className="services-container">
        {servicesList.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image">
              <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta btn-yellow">Request Service</button>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta-section">
        <h2>Need a <span className="highlight-text">Custom Electrical Solution?</span></h2>
        <p>Contact us today for a free consultation and quote on your specific electrical needs.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-button">Contact Us</Link>
          <a href="tel:+918217455216" className="secondary-button">Call Now</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
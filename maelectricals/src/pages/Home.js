import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical services for your home including installations, repairs, and upgrades.",
      image: "/images/slide2.jpg",
      link: "/services"
    },
    {
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      image: "/images/slide3.jpg",
      link: "/services"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency electrical services for when you need help right away.",
      image: "/images/slide5.jpg",
      link: "/services"
    }
  ];

  const projects = [
    {
      title: "Commercial Installation",
      image: "/images/slide1.jpg",
      category: "Commercial"
    },
    {
      title: "Residential Lighting",
      image: "/images/slide2.jpg",
      category: "Residential"
    },
    {
      title: "Industrial Setup",
      image: "/images/slide3.jpg",
      category: "Industrial"
    },
    {
      title: "Smart Home Systems",
      image: "/images/slide5.jpg",
      category: "Residential"
    }
  ];

  return (
    <div className="home-page">
      <HeroSection 
        title="MA Electricals"
        subtitle="Your trusted partner for all electrical needs - Residential, Commercial & Industrial Solutions"
      />
      
      <div className="container">
        <FeaturesSection />
        
        <section className="services-section">
          <div className="section-title">Our <span className="highlight-text">Services</span></div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
          <div className="text-center mt-40">
            <Link to="/services" className="btn-yellow">View All Services</Link>
          </div>
        </section>
        
        <section className="projects-section">
          <div className="section-title">Recent <span className="highlight-text">Projects</span></div>
          <p className="section-subtitle">Take a look at some of our recent electrical work</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                    <div className="project-title">{project.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-40">
            <Link to="/gallery" className="btn-yellow">View All Projects</Link>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <section className="cta-section animated-gradient">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get <span className="highlight-text">Started?</span></h2>
            <p className="cta-description">Contact us today for a free consultation and quote on your electrical needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-yellow">Contact Us</Link>
              <a href="tel:+918217455216" className="btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="phone-icon">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Call Us: +91 8217455216
              </a>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="cta-circle"></div>
            <div className="cta-circle"></div>
            <div className="cta-circle"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

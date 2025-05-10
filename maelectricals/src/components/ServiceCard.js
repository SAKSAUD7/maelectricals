import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

function ServiceCard({ title, description, image, link }) {
  return (
    <div className="service-card">
      <div className="service-card-image">
        {image && <img src={process.env.PUBLIC_URL + image} alt={title} />}
        <div className="service-card-overlay"></div>
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        {link && (
          <Link to={link} className="service-card-button btn-yellow">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ServiceCard; 
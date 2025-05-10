import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

const Gallery = () => {
  // Gallery items using the available images
  const galleryItems = [
    {
      id: 1,
      title: 'Commercial Electrical Installation',
      category: 'commercial',
      image: '/images/slide1.jpg',
      description: 'High-quality commercial electrical wiring and installation for office buildings'
    },
    {
      id: 2,
      title: 'Residential Lighting Solutions',
      category: 'residential',
      image: '/images/slide2.jpg',
      description: 'Modern lighting installation for residential properties'
    },
    {
      id: 3,
      title: 'Industrial Power Systems',
      category: 'industrial',
      image: '/images/slide3.jpg',
      description: 'Heavy-duty industrial electrical infrastructure setup'
    },
    {
      id: 4,
      title: 'Smart Home Integration',
      category: 'residential',
      image: '/images/slide5.jpg',
      description: 'Advanced smart home electrical systems and automation'
    },
    {
      id: 5,
      title: 'Emergency Electrical Repairs',
      category: 'commercial',
      image: '/images/slide3.jpg',
      description: 'Fast and reliable emergency electrical repair services'
    },
    {
      id: 6,
      title: 'Electrical Panel Upgrades',
      category: 'residential',
      image: '/images/slide2.jpg',
      description: 'Modern electrical panel installation and upgrades'
    },
    {
      id: 7,
      title: 'Office Lighting Design',
      category: 'commercial',
      image: '/images/slide5.jpg',
      description: 'Custom lighting design for professional office environments'
    },
    {
      id: 8,
      title: 'Factory Equipment Installation',
      category: 'industrial',
      image: '/images/slide1.jpg',
      description: 'Specialized electrical setup for industrial machinery'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Our Project Gallery</h1>
        <p>Browse through our portfolio of completed electrical projects</p>
      </div>

      <div className="gallery-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={filter === 'commercial' ? 'active' : ''} 
          onClick={() => setFilter('commercial')}
        >
          Commercial
        </button>
        <button 
          className={filter === 'residential' ? 'active' : ''} 
          onClick={() => setFilter('residential')}
        >
          Residential
        </button>
        <button 
          className={filter === 'industrial' ? 'active' : ''} 
          onClick={() => setFilter('industrial')}
        >
          Industrial
        </button>
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-image">
              <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
            </div>
            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-cta">
        <h2>Need professional electrical services?</h2>
        <p>Contact us today for a free consultation on your project</p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-button">Get a Quote</Link>
          <a href="tel:+918217455216" className="secondary-button">Call Us Now</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 
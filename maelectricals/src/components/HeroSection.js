import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = ({ 
  title = "MA Electricals", 
  subtitle = "Your trusted partner for all electrical needs - Residential, Commercial & Industrial Solutions", 
  buttonText = "Our Services", 
  buttonLink = "/services"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef(null);
  
  // Parse title to separate "MA" and "Electricals"
  const titleParts = title.split(' ');
  const firstWord = titleParts[0] || 'MA';
  const restOfTitle = titleParts.slice(1).join(' ') || 'Electricals';
  
  const backgroundImages = [
    "/images/download%20(1).jpg",
    "/images/download%20(2).jpg",
    "/images/download%20(3).jpg",
    "/images/images%20(1).jpg",
    "/images/images%20(2).jpg"
  ];
  
  useEffect(() => {
    // Add animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Background image rotation
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages]);
  
  // Handle resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      if (heroRef.current) {
        const height = window.innerHeight;
        const width = window.innerWidth;
        
        // Adjust hero height based on device
        if (width <= 480) {
          // Mobile
          heroRef.current.style.height = `${height * 0.6}px`;
        } else if (width <= 768) {
          // Tablet
          heroRef.current.style.height = `${height * 0.7}px`;
        } else {
          // Desktop
          heroRef.current.style.height = `${height * 0.85}px`;
        }
      }
    };
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-section" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        {backgroundImages.map((img, index) => (
          <div 
            key={index} 
            className={`hero-image ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
          ></div>
        ))}
      </div>
      
      <div className="hero-graphics">
        <div className="graphic-element graphic-circle"></div>
        <div className="graphic-element graphic-square"></div>
        <div className="graphic-element graphic-triangle"></div>
        <div className="graphic-element graphic-dots"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span className="highlight-text">{firstWord}</span> {restOfTitle}
        </h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <Link to={buttonLink} className="hero-button primary">
            {buttonText}
          </Link>
          <Link to="/contact" className="hero-button secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
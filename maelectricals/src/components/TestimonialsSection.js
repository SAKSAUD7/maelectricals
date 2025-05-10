import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import '../styles/TestimonialCard.css';

const TestimonialsSection = ({ title = "What Our Clients Say" }) => {
  const testimonials = [
    {
      name: "Khaiser Pasha",
      role: "Customer",
      content: "Best service was provided with great assistance and the great products.",
      image: null,
      rating: 5
    },
    {
      name: "Imran Khan",
      role: "Customer",
      content: "Very Good and neat clean work. Trust worthy 💯.",
      image: null,
      rating: 5
    },
    {
      name: "Syed",
      role: "Customer",
      content: "The store offers high-quality products at competitive prices compared to other retailers.",
      image: null,
      rating: 4
    },
    {
      name: "Saquib Aslam",
      role: "Customer",
      content: "I recently hired Mohammed Aquib from MA Electrical to handle the electrical work in my flat, and I am beyond impressed with the results.",
      image: null,
      rating: 5
    },
    {
      name: "Mohammed Aman",
      role: "Customer",
      content: "I recently purchased electrical components from Aquib, and I couldn't be more impressed!",
      image: null,
      rating: 5
    },
    {
      name: "Afifa Ambar",
      role: "Customer",
      content: "Good quality products and offers fair prices compared to other shops.",
      image: null,
      rating: 4
    },
    {
      name: "Moin Khan",
      role: "Customer",
      content: "One of the best and one stop for Electricals items and contractors.",
      image: null,
      rating: 5
    },
    {
      name: "Natasha Kaur",
      role: "Customer",
      content: "Had an issue with my lighting at home and Aqhib came out fairly quick and quoted the job.",
      image: null,
      rating: 5
    }
  ];

  // Refs for the testimonials container and animation
  const testimonialsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Auto-scroll animation for testimonials
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="section-title">
        <span className="highlight-text">{title}</span>
      </div>
      <div 
        className={`testimonials-grid ${isVisible ? 'animate' : ''}`}
        ref={testimonialsRef}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            image={testimonial.image}
            rating={testimonial.rating}
          />
        ))}
      </div>
      <div className="text-center mt-40">
        <a 
          href="https://g.co/kgs/K16Lkap" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-yellow"
        >
          View All Reviews on Google
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
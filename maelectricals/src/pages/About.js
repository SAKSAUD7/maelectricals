import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide1.jpg'})` }}>
        <div className="about-hero-overlay"></div>
        <div className="container">
          <h1 className="about-title">About <span className="highlight-text">MA Electricals</span></h1>
          <p className="about-subtitle">Your Trusted Partner in Electrical Solutions</p>
        </div>
      </div>
      
      <div className="container">
        <section className="about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Our <span className="highlight-text">Story</span></h2>
              <p>M.A Electricals is a trusted name in electrical services, specializing in residential, commercial, and industrial electrical solutions. With years of expertise, our skilled professionals ensure top-notch service, quality products, and 100% customer satisfaction.</p>
              <p>We take pride in our customer-centric approach, offering tailor-made solutions to meet the specific needs of each client. Whether it's a minor electrical repair or a large-scale industrial project, our team is equipped with the knowledge and tools to deliver excellence.</p>
            </div>
            <div className="about-image">
              <img src={process.env.PUBLIC_URL + "/images/slide2.jpg"} alt="MA Electricals Team" className="rounded-image" />
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <div className="about-grid reverse">
            <div className="about-image">
              <img src={process.env.PUBLIC_URL + "/images/slide3.jpg"} alt="Quality Electrical Work" className="rounded-image" />
            </div>
            <div className="about-content">
              <h2 className="section-title">Our <span className="highlight-text">Mission</span></h2>
              <p>At M.A Electricals, safety and efficiency are our top priorities. We adhere to the highest industry standards and use cutting-edge technology to ensure every project is completed flawlessly. Our services include smart home automation, power backup solutions, lighting installation, and much more.</p>
              <p>Our mission is to provide cost-effective and reliable electrical solutions without compromising on quality. Over the years, we have built a reputation for being dependable, professional, and innovative in our approach.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Why <span className="highlight-text">Choose Us</span></h2>
              <ul className="about-list">
                <li>Licensed and insured professionals</li>
                <li>Years of industry experience</li>
                <li>High-quality products and materials</li>
                <li>Competitive pricing</li>
                <li>Excellent customer service</li>
                <li>Timely project completion</li>
                <li>Warranty on services</li>
                <li>24/7 emergency support</li>
              </ul>
            </div>
            <div className="about-image">
              <img src={process.env.PUBLIC_URL + "/images/slide5.jpg"} alt="Electrical Services" className="rounded-image" />
            </div>
          </div>
        </section>
        
        <section className="about-section values-section">
          <h2 className="section-title centered">Our <span className="highlight-text">Values</span></h2>
          <div className="values-grid">
            <div className="value-card card-gradient">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We never compromise on quality, using only the best materials and techniques for all our projects.</p>
            </div>
            <div className="value-card card-gradient">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <h3>Customer Care</h3>
              <p>We treat every client with respect and care, ensuring their needs are met with the highest standards.</p>
            </div>
            <div className="value-card card-gradient">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h3>Teamwork</h3>
              <p>Our team of professionals works together to deliver exceptional results on every project.</p>
            </div>
            <div className="value-card card-gradient">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>We are committed to completing projects on time and within budget, every time.</p>
            </div>
          </div>
        </section>
        
        <section className="cta-section glass-card">
          <h2 className="cta-title">Ready to Work With <span className="highlight-text">Us?</span></h2>
          <p className="cta-description">Contact us today for a free consultation and quote on your electrical needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-yellow">Get in Touch</Link>
            <Link to="/gallery" className="btn-outline">View Our Work</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
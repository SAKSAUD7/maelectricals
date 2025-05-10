import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MA Electricals</h3>
          <p>Your trusted partner for all electrical needs</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@maelectricals.com</p>
          <p>Phone: +918217455216</p>
          <p>Address:  326, 7th A Cross Rd, Manorayana Palya, RT Nagar, post, Bengaluru, Karnataka 560032</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MA Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 
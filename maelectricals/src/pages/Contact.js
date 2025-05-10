import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [work, setWork] = useState("");

  const sendWhatsAppMessage = () => {
    if (!name || !phone || !work) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const message = `Hello, my name is ${name}. My phone number is ${phone}. I need help with: ${work}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/8217455216?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="contact-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide5.jpg'})` }}>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for professional electrical services</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p><a href="tel:+918217455216">+91 8217455216</a></p>
            <p><a href="tel:+919066682375">+91 9066682375</a></p>
          </div>
          
          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>MA Electricals</p>
            <p>Bangalore, Karnataka</p>
          </div>
          
          <div className="contact-info-card">
            <div className="contact-icon">⏰</div>
            <h3>Business Hours</h3>
            <p>Monday - Saturday: 9AM - 7PM</p>
            <p>Emergency Service: 24/7</p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form-container">
            <h2>Work Enquiry</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Enter your full name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="Enter your phone number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="work">Service Required</label>
                <textarea 
                  id="work"
                  placeholder="Describe the electrical work you need" 
                  value={work} 
                  onChange={(e) => setWork(e.target.value)}
                  rows="4"
                ></textarea>
              </div>
              
              <button className="whatsapp-submit" onClick={sendWhatsAppMessage}>
                <span className="whatsapp-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </span>
                Send via WhatsApp
              </button>
            </div>
          </div>
          
          <div className="contact-image">
            <img src={process.env.PUBLIC_URL + '/images/slide3.jpg'} alt="MA Electricals Service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Call: <a href="tel:8217455216">8217455216</a> / <a href="tel:9066682375">9066682375</a></p>

      <div className="work-enquiry">
        <h2>Work Enquiry</h2>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="tel" 
          placeholder="Your Phone Number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <textarea 
          placeholder="What work is required?" 
          value={work} 
          onChange={(e) => setWork(e.target.value)}
        ></textarea>
        <button onClick={sendWhatsAppMessage}>Send via WhatsApp</button>
      </div>
    </div>
  );
};

export default Contact;

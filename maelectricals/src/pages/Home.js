import React from "react";
import "../styles/Home.css";

const images = [
    { src: process.env.PUBLIC_URL + "/images/slide1.jpg", alt: "Electrical Work" },
    { src: process.env.PUBLIC_URL + "/images/slide2.jpg", alt: "Professional Electricians" },
    { src: process.env.PUBLIC_URL + "/images/slide3.jpg", alt: "Quality Electrical Products" },
    { src: process.env.PUBLIC_URL + "/images/slide5.jpg", alt: "High-Quality Electrical Services" }
  ];
  

const reviews = [
  { name: "Khaiser Pasha", rating: 5, text: "Best service was provided with great assistance and the great products." },
  { name: "Imran Khan", rating: 5, text: "Very Good and neat clean work. Trust worthy 💯." },
  { name: "Syed", rating: 4, text: "The store offers high-quality products at competitive prices compared to other retailers." },
  { name: "Saquib Aslam", rating: 5, text: "I recently hired Mohammed Aquib from MA Electrical to handle the electrical work in my flat, and I am beyond impressed with the results." },
  { name: "Mohammed Aman", rating: 4, text: "I recently purchased electrical components from Aquib, and I couldn't be more impressed!" },
  { name: "Afifa Ambar", rating: 5, text: "Good quality products and offers fair prices compared to other shops." },
  { name: "Moin Khan", rating: 5, text: "One of the best and one stop for Electricals items and contractors." },
  { name: "Natasha Kaur", rating: 4, text: "Had an issue with my lighting at home and Aqhib came out fairly quick and quoted the job." }
];

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to M.A Electricals</h1>
          <p className="hero-subtitle">Your Trusted Partner in Electrical Solutions</p>
          <p className="hero-subtext">M.A Electricals has been serving residential, commercial, and industrial clients with top-notch electrical services. Our commitment to quality, safety, and customer satisfaction makes us a preferred choice for all electrical needs.</p>
          <a href="/contact" className="cta-button">Get a Quote</a>
        </div>

        <div className="image-cards-container">
          {images.map((image, index) => (
            <div key={index} className="image-card">
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
        </div>

        <div className="about-section">
          <h2>About Us</h2>
          <p>M.A Electricals is a trusted name in electrical services, specializing in residential, commercial, and industrial electrical solutions. With years of expertise, our skilled professionals ensure top-notch service, quality products, and 100% customer satisfaction.</p>
          <p>We take pride in our customer-centric approach, offering tailor-made solutions to meet the specific needs of each client. Whether it's a minor electrical repair or a large-scale industrial project, our team is equipped with the knowledge and tools to deliver excellence.</p>
          <p>At M.A Electricals, safety and efficiency are our top priorities. We adhere to the highest industry standards and use cutting-edge technology to ensure every project is completed flawlessly. Our services include smart home automation, power backup solutions, lighting installation, and much more.</p>
          <p>Our mission is to provide cost-effective and reliable electrical solutions without compromising on quality. Over the years, we have built a reputation for being dependable, professional, and innovative in our approach.</p>
          <p>We believe in forging lasting relationships with our clients by offering exceptional service and support. When you choose M.A Electricals, you choose **expertise, reliability, and excellence.**</p>
          <a href="/about" className="cta-link">Learn More</a>
        </div>

        <div className="services-section">
          <h2>Our Services</h2>
          <ul>
            <li><a href="/services#installations">Electrical Installations</a></li>
            <li><a href="/services#wiring">Wiring & Repairs</a></li>
            <li><a href="/services#emergency">Emergency Electrical Services</a></li>
            <li><a href="/services#industrial">Industrial Electrical Maintenance</a></li>
            <li><a href="/services#automation">Smart Home Automation</a></li>
          </ul>
        </div>

        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-stars">{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <h2>Get in Touch</h2>
          <p>Need help with electrical work? Contact us now!</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

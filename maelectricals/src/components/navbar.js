import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/images/mae%20logo.jpg"} alt="MA Electricals" className="logo-image" />
          </Link>
        </div>
        
        <div className="nav-actions">
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
            <Link to="/services" className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}>Services</Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}>Gallery</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
            <div className="nav-theme-toggle mobile-only">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="nav-controls">
            <ThemeToggle />
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
              <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
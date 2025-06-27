import React from 'react';
import './Footer.css';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/homeAssets/logoCobalt.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <span className="footer-logo-text">Cobalt</span>
        <img src={logo} alt="BT Roofing Logo" className="footer-logo-bg moved-right" />
      </div>

      <div className="footer-divider" />

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-nav">
            <a href="#aboutIntro-section">About Us</a>
            <a href="#services-section">Our Services</a>
            <a href="#gallery-section">Our Work</a>
            <a href="#contact-section">Contact</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="tel:2393023999" aria-label="Phone">
            <Phone size={24} />
          </a>
          <a href="mailto:info@btroofingfl.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Cobalt Commercial Services</p>
          <p className="site-by">Site by: <span className="slide-fade">JP</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
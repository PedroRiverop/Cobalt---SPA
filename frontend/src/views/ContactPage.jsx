import React from 'react';
import './ContactPage.css';
import { motion } from 'framer-motion';
import ButtonIndicator from '../components/buttons/ButtonIndicator';
import contactImage from '../assets/contactPage/building-side.jpg';
import mapImage from '../assets/map-preview.png';

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Left image */}
      <div className="contact-image-container">
        <img src={contactImage} alt="Cobalt Office" className="contact-image" />
      </div>

      {/* Right content */}
      <div className="contact-content">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Whether it’s a question, a collaboration, or a new beginning — we’re here to talk.
        </motion.p>

        <div className="contact-block">
          {/* Info */}
          <div className="contact-info">
            <p>Email: info@cobaltservices.com</p>
            <p>Phone: (239) 555-1234</p>
            <p>Instagram: @cobaltservices</p>
          </div>

          {/* Form */}
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="google-maps-container">
          <a href="https://maps.google.com/?q=Ft.+Lauderdale+Florida" target="_blank" rel="noreferrer">
            <img src={mapImage} alt="Cobalt on Google Maps" />
          </a>
        </div>

        {/* CTA */}
        <div className="contact-cta">
          <ButtonIndicator to="/services" />
          <span className="cta-text">Discover our full service range</span>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

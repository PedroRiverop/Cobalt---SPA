import React from 'react';
import './ContactPage.css';
import { motion } from 'framer-motion';
import ButtonIndicatorWhite from '../components//buttons/ButtonIndicatorWhite';
import contactImage from '../assets/contactPage/building-side.jpg';
import mapImage from '../assets/map-preview.png';
import { EnvelopeSimple, Phone } from 'phosphor-react';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="cp-wrapper">
      {/* Left Image */}
      <div className="cp-image-container">
        <img src={contactImage} alt="Cobalt Office" className="cp-image" />
        <div className="cp-image-overlay" />
      </div>

      {/* Right Content */}
      <div className="cp-content">
        <motion.h1
          className="cp-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          className="cp-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Whether it’s a question, a collaboration, or a new beginning — we’re here to talk.
        </motion.p>

        <div className="cp-contact-block">

          <form className="cp-form">
            <div className="cp-form-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="cp-map-container">
          <div className="c-contact-info">
            <div className="c-contact-item">
              <Phone size={20} weight="duotone" />
              <span> (800) 431-9177 </span>
            </div>
            <div className="c-contact-item">
              <EnvelopeSimple size={20} weight="duotone" />
              <span> info@cobaltcommercialservices.com </span>
            </div>
          </div>
          
          <a href="https://maps.app.goo.gl/dQovnPQuCSQS1gHh8" target="_blank" rel="noreferrer">
            <img src={mapImage} alt="Cobalt Google Maps Location" />
          </a>
        </div>

        {/* CTA */}
        <div className="cp-cta">
          <ButtonIndicatorWhite to="/servicePage" />
          <Link className='about-link-cta' to="/servicePage">
            <span className="cp-cta-text">Discover our full service range</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

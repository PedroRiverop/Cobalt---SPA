import React from 'react';
import './ServicesPage.css';
import servicesData from '../data/servicesDataPage';
import { motion } from 'framer-motion';
import ButtonIndicatorWhite from '../components/buttons/ButtonIndicatorWhite';
import heroImage from '../assets/aboutPage/about-hero.jpg'; // Cambiá esta ruta por la correcta si la imagen está en otra carpeta


function ServicesSection() {
  return (
    <div className="services-wrapper">
      {/* Hero Section */}
      <section className="services-hero">
  <div className="hero-image-wrapper">
    <img src={heroImage} alt="Cobalt Hero" className="hero-background-image" />
  </div>

  <div className="hero-overlay">
   
    <motion.p
      className="hero-subtitlex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      Tailored solutions crafted with precision and dedication.
    </motion.p>
    <motion.p
      className="hero-introx"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      At Cobalt, we believe in delivering exceptional quality across all aspects of construction, engineering, and remodeling. Every service we provide is rooted in craftsmanship and driven by a deep commitment to our clients.
    </motion.p>
  </div>
</section>


      {/* Services Grid */}
      <section className="services-page">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-itemx" key={index}>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-hoverx">
                  <div className="service-details">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h4 className="service-titlex">{service.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2 className="why-choose-text">Craftsmanship - Commitment COBALT</h2>

        {/* Final CTA */}
      <div className="services-cta">
        <ButtonIndicatorWhite to="/contact" />
        <span className="cta-text">Let’s Build Something Together</span>
      </div>
      </section>

    </div>
  );
}

export default ServicesSection;

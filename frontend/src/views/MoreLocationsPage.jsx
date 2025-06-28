import React from 'react';
import HeroCarousel from '../components/secctionsHome/hero/HeroCarousel';
import IntroSection from '../components/secctionsHome/intro/IntroSection';
import ServicesGrid from '../components/secctionsHome/services/ServicesGrid';
import GallerySection from '../components/secctionsHome/gallery/GallerySection';
import Contact from '../components/Contact';
import mapImage from '../assets/home/areas-map.png';
import './MoreLocationsPage.css';
import { motion } from 'framer-motion';


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


export default function MoreLocationsPage() {
  const highlightedStates = [
    'AZ', 'NV', 'TX', 'OK', 'KS', 'MO', 'AR', 'LA',
    'MS', 'AL', 'GA', 'FL', 'SC', 'NC', 'TN', 'KY', 'IL'
  ];

  const stateIds = {
    'AL': '01', 'AZ': '04', 'AR': '05', 'FL': '12', 'GA': '13', 'IL': '17', 'KS': '20',
    'KY': '21', 'LA': '22', 'MO': '29', 'MS': '28', 'NC': '37', 'NV': '32', 'OK': '40',
    'SC': '45', 'TN': '47', 'TX': '48'
  };


  return (
    <div className="more-locations-page">
      {/* Hero personalizado para todos los estados */}
      <HeroCarousel estado="nationwide" />

      {/* Mapa interactivo */}
      <section className="areas-served">
      <div className="areas-image-wrapper">
        <img src={mapImage} alt="Areas We Serve" className="areas-map" />
        <h2 className="areas-caption">Areas We Proudly Serve</h2>
      </div>
    </section>

      {/* Sección de introducción */}
      <IntroSection />

      {/* Servicios */}
      <ServicesGrid />

      {/* Leyenda 1 */}
      <motion.section
        className="highlight-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="motivation-text">
          37+ years of experience has created a family-type relationship with staff and clients and is recognized for
          industry-leading retention rates and unparalleled integrity.
        </p>
      </motion.section>

      {/* Galería */}
      <GallerySection estado="nationwide" />

      {/* Leyenda 2 */}
      <motion.section
        className="highlight-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="motivation-text">
          The CCS is committed to becoming citizens of our clients’ industries and working harmoniously to create a customized
          program to best serve each industry.
        </p>
      </motion.section>

      {/* Contacto */}
      <Contact />
    </div>
  );
}

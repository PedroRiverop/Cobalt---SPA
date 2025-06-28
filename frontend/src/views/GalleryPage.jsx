import React from 'react';
import './GalleryPage.css';
import galleryImages from '../data/galleryImages'; // array con rutas de las imágenes
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import hero1 from '../assets/galleryPage/hero1.jpg';
import hero2 from '../assets/galleryPage/hero2.jpg';
import hero3 from '../assets/galleryPage/hero3.jpg';
import hero4 from '../assets/galleryPage/hero4.jpg';
import ButtonIndicatorWhite from '../components/buttons/ButtonIndicatorWhite';

const galleryHeroImages = [hero1, hero2, hero3, hero4];


function GalleryPage() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    speed: 1000,
  };
  
  return (
    <div className="gallery-page">
      <section className="gallery-page-hero">
        <div className="gallery-page-hero">
      <Slider {...settings} className="gallery-page-hero-slider">
        {galleryHeroImages.map((img, index) => (
          <div key={index} className="hero-slide-gallery">
            <img src={img} alt={`Hero ${index + 1}`} />
            <div />
          </div>
        ))}
      </Slider>

      <div className="hero-text-overlay-gallery">
        <motion.h1
          className="gallery-title-gallery"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Work Speaks for Itself
        </motion.h1>
        <motion.p
          className="gallery-subtitle-gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          A visual journey through our completed projects — precision, passion, and perfection in every frame.
        </motion.p>
      </div>
    </div>
      </section>

      {/* Gallery Intro Section */}
    <section className="gallery-page-intro-section">
      <p className="gallery-page-intro-text">
        At Cobalt, every project is a testament to our unwavering commitment to craftsmanship, precision, and client-focused solutions.
We don’t just build structures — we build trust, partnerships, and spaces that endure. With every detail, we aim to exceed expectations, creating outcomes that are as functional as they are inspiring. Our legacy is shaped by those we serve, and every image you see is a reflection of that promise.
      </p>

      <div className="gallery-page-intro-cta">
        <ButtonIndicatorWhite to="/aboutPage" />
        <Link className='about-link-cta' to="/aboutPage">
          <span className="see-more-link" >
            See more about our approach
          </span>
        </Link>
        
      </div>

      <div className="gallery-divider-line"></div>
    </section>


      <section className="gallery-page-grid">
        {galleryImages.map((src, index) => (
          <motion.div
            className="gallery-page-item"
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <img src={src} alt={`Cobalt project ${index + 1}`} loading="lazy" />
           
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default GalleryPage;

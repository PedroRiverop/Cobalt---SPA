import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';
import logo from '../../../assets/homeAssets/logoCobalt.webp';
import ScrollIndicator from '../../buttons/ScrollIndicator';
import { motion } from 'framer-motion';

// Import images for each state
import arizona1 from '../../../assets/home/arizona/hero1.jpg';
import arizona2 from '../../../assets/home/arizona/hero2.jpg';
import arizona3 from '../../../assets/home/arizona/hero3.jpg';
import arizona4 from '../../../assets/home/arizona/hero4.jpg';

import arkansas1 from '../../../assets/home/arkansas/hero1.jpg';
import arkansas2 from '../../../assets/home/arkansas/hero2.jpg';
import arkansas3 from '../../../assets/home/arkansas/hero3.jpg';
import arkansas4 from '../../../assets/home/arkansas/hero4.jpg';

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>›</div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>‹</div>
);

function HeroCarousel({ estado }) {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const dataPorEstado = {
    arizona: {
      sentence: 'Your Trusted Partner for Commercial and Residential Solutions in Arizona',
      images: [arizona1, arizona2, arizona3, arizona4]
    },
    arkansas: {
      sentence: 'Arkansas’s Go-To Partner for Residential & Commercial Solutions',
      images: [arkansas1, arkansas2, arkansas3, arkansas4]
    }
  };

  const { sentence, images } = dataPorEstado[estado] || dataPorEstado.arizona;

  return (
    <div className="hero-carousel">
      <img src={logo} alt="BT Roofing Logo" className="hero-carousel-logo" onClick={() => navigate('/')} />

      <div className="hero-carousel-text">
        <motion.h1
          className="animated-text"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.035
              }
            }
          }}
        >
          {sentence.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>

      <ScrollIndicator targetId="intro-section" />
    </div>
  );
}

export default HeroCarousel;

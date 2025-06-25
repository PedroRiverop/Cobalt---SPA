import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';
import logo from '../assets/homeAssets/logoCobalt.webp';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.jpg';
import ScrollIndicator from './ScrollIndicator';
import { motion } from 'framer-motion';

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>›</div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>‹</div>
);

function HeroCarousel() {
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

  const sentence = "Your Trusted Partner for Commercial and Residential Solutions in Arizona";

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
        {[img1, img2, img3, img4].map((img, index) => (
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

import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import logo from '../assets/homeAssets/logoCobalt.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  { type: 'video', src: video1 },
  {type: 'video', src: video2 },
  { type: 'video', src: video3 },
  
];

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    arrows: false
  };
  const navigate = useNavigate();

  
  return (
    <section className="hero-container">
      <Slider {...settings} className="slider-background">
        {slides.map((item, index) => (
          <div key={index} className="slide-item">
            {item.type === 'image' ? (
              <img src={item.src} className="media-slide" alt="Slide" />
            ) : (
              <video src={item.src} className="media-slide" autoPlay loop muted />
            )}
            <div className="dark-overlay" />
          </div>
        ))}
      </Slider>

      <div className="overlay">
        <img src={logo} alt="Cobalt Logo" className="logo" />
        <div className="buttons">
            <button className="btn" onClick={() => navigate('/arizona')}>Arizona</button>
            <button className="btn" onClick={() => navigate('/arkansas')}>Arkanzas</button>
            
        </div>
        <div className= 'btn-locations'>
          <button className="btn" onClick={() => navigate('/moreLocations')}>More Locations</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
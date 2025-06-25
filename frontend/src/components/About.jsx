import React from 'react';
import './About.css';
import aboutImage from '../assets/about.jpg';
import ButtonIndicator from './ButtonIndicator';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <section id="aboutIntro-section" className="aboutIntro-section">
      <div className="aboutIntro-overlay">
        <div className="aboutIntro-content">
          <div className="aboutIntro-text">
            <h2 className="aboutIntro-title">Built to Elevate Your Property</h2>
            <p className="aboutIntro-paragraph">
              Cobalt Commercial Services offers full-scale commercial and residential solutions across Arizona. From facilities
              engineering to remodeling and renovations, we ensure your spaces are functional, efficient, and designed to impress.
            </p>
            <p className="aboutIntro-paragraph">
              With years of proven expertise, we’re the trusted partner that turns buildings into benchmarks of excellence.
            </p>
          </div>
          <div className="aboutIntro-image">
            <img src={aboutImage} alt="About Cobalt" />
          </div>
        </div>
        <div className="aboutIntro-scroll">
          <ButtonIndicator to="/aboutUs" />
        </div>
      </div>
    </section>
  );
}

export default About;

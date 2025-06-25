import React, { useEffect } from 'react'; 
import './AboutIntro.css';
import aboutImage from '../assets/about.jpg';
import ButtonIndicator from './ButtonIndicator';
import { useNavigate } from 'react-router-dom';



function About() {
  const navigate = useNavigate();


  useEffect(() => {
  const img = document.getElementById('reveal-img');
  const container = img?.parentElement;

  function handleMove(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.clipPath = `circle(100px at ${x}px ${y}px)`;
  }

  function resetClip() {
    img.style.clipPath = 'circle(0px at 0px 0px)';
  }

  container?.addEventListener('mousemove', handleMove);
  container?.addEventListener('mouseleave', resetClip);

  return () => {
    container?.removeEventListener('mousemove', handleMove);
    container?.removeEventListener('mouseleave', resetClip);
  };
}, []);


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
          <div className="image-reveal-container">
            <img src={aboutImage} alt="About" className="bw-image" />
            <img src={aboutImage} alt="About" className="color-image" id="reveal-img" />
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

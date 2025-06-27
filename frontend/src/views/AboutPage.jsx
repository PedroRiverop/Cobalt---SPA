import React from 'react';
import './AboutPage.css';
import directorImg from '../assets/aboutPage/ceo.jpg';
import ClientCarousel from '../components/aboutPage/ClientCarousel';
import Contact from '../components/Contact';
import aboutHero from '../assets/aboutPage/about-hero.jpg';

function AboutPage() {
  return (
    <div className="about-wrapper">
      {/* About Intro */}
      <section className="about-intro-section">
         {/* Hero Image with Overlay Title */}
      <div className="about-hero">
        <img src={aboutHero} alt="About Hero" className="about-hero-image" />
        <h1 className="about-hero-title">About Cobalt</h1>
      </div>

        <div className="intro-container">
          <p className="about-subtitle">Where Solutions Meet Precision and Trust</p>
          <p className="about-description">
            Founded in Ft. Lauderdale, Florida, Cobalt Commercial Services is built on more than 34 years of industry-leading experience. Our philosophy is relationship-based and solutions-oriented, ensuring 100% customer satisfaction daily. We are committed to providing unmatched quality, guided by a vision rooted in perfection and innovation. We continuously enhance our services and integrate cutting-edge technology to serve our clients better. At Cobalt, we deeply value our team and cultivate an environment where each member chooses to go above and beyond to make a difference.
          </p>
        </div>
      </section>

      {/* Our Director */}
      <section className="about-director-section">
        <div className="director-content">
          <div className="director-text">
            <h2>OUR DIRECTOR</h2>
            <p>
              With over 15 years of hands-on experience in construction, our founder and director leads with vision,
              dedication, and a deep commitment to excellence. His leadership ensures every project is executed with
              precision and integrity.
            </p>
          
          </div>
          <div className="director-image">
            <img src={directorImg} alt="Director" />
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="clients-section">
        <h2 className="clients-title">Who We Serve</h2>
        <ClientCarousel />
      </section>

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default AboutPage;

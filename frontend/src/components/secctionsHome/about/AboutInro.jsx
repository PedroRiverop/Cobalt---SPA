import React, { useEffect } from 'react'; 
import './AboutIntro.css';
import ButtonIndicator from '../../buttons/ButtonIndicator';
import { useNavigate } from 'react-router-dom';

// Assets importados manualmente
import aboutAZ from '../../../assets/home/aboutSectionAZ.jpg';
import aboutAR from '../../../assets/home/aboutSectionAR.jpg';

function About({ estado }) {
  const navigate = useNavigate();

  const aboutContent = {
    arizona: {
      title: 'Built to Elevate Your Property in Arizona',
      paragraph1:
        'Cobalt Commercial Services provides comprehensive solutions throughout Arizona. From engineering to remodeling, we deliver results that impress and endure.',
      paragraph2:
        'With a legacy of precision and reliability, we transform buildings into benchmarks of excellence.',
      image: aboutAZ
    },
    arkansas: {
      title: 'Enhancing Properties Across Arkansas',
      paragraph1:
        "Welcome to Cobalt Commercial Services, your trusted partner in Arkansas for all things residential and commercial. From large-scale construction projects to everyday handyman tasks, we proudly offer an all-in-one solution designed to meet your property's needs with precision, professionalism, and care.",
      paragraph2:
        'Whether you manage a portfolio of properties or need work done in your own home, our team is equipped to handle it all.',
      image: aboutAR
    }
  };

  const { title, paragraph1, paragraph2, image } = aboutContent[estado] || aboutContent.arizona;

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
            <h2 className="aboutIntro-title">{title}</h2>
            <p className="aboutIntro-paragraph">{paragraph1}</p>
            <p className="aboutIntro-paragraph">{paragraph2}</p>
          </div>
          <div className="image-reveal-container">
            <img src={image} alt="About BW" className="bw-image" />
            <img src={image} alt="About Color" className="color-image" id="reveal-img" />
          </div>
        </div>
        <div className="aboutIntro-scroll">
          <ButtonIndicator to="/aboutPage" />
        </div>
      </div>
    </section>
  );
}

export default About;

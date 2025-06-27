import React from 'react';
import './WhyChooseUs.css';
import img1 from '../../../assets/home/whyUs1.jpg';
import img2 from '../../../assets/home/whyUs2.jpg';
import img3 from '../../../assets/home/whyUs3.jpg';
import img4 from '../../../assets/home/whyUs4.jpg';

const galleryItems = [
  {
    image: img1,
    title: 'Comprehensive Expertise',
    subtitle: 'From cleaning to full-scale construction.'
  },
  {
    image: img2,
    title: 'Emergency Response',
    subtitle: 'We are available for emergency services to ensure minimal downtime.'
  },
  {
    image: img3,
    title: 'Reliable and Timely Service',
    subtitle: 'Efficient execution without compromising quality.'
  },
  {
    image: img4,
    title: 'Experienced Professionals',
    subtitle: 'Skilled experts with years of industry experience.'
  },
];

function GalleryPreview() {
  return (
    <section className="gallery-preview">
      {galleryItems.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-overlay">
            <h2 className="gallery-title">{item.title}</h2>
            <p className="gallery-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GalleryPreview;

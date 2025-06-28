import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySection.css';
import ButtonIndicatorWhite from '../../buttons/ButtonIndicatorWhite';
import ServiceModal from './ServiceModal'; // 👈
import img1 from '../../../assets/home/gallery7.jpg';
import img2 from '../../../assets/home/gallery3.jpg';
import img3 from '../../../assets/home/gallery9.jpg';
import img4 from '../../../assets/home/gallery4.jpg';
import img5 from '../../../assets/home/gallery5.jpg';
import img6 from '../../../assets/home/gallery6.jpg';
import img7 from '../../../assets/home/gallery1.jpg';
import img8 from '../../../assets/home/gallery8.jpg';
import img9 from '../../../assets/home/gallery2.jpg';
import img10 from '../../../assets/home/gallery10.jpg';

import { Buildings, HouseLine } from 'phosphor-react';

const residentialContent = [
  {
    title: 'Kitchen Remodeling',
    description: 'Upgrade your kitchen with modern appliances, custom cabinetry, and beautiful countertops.',
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Transform your bathroom into a spa-like retreat with new fixtures, tiles, and layouts.',
  },
  {
    title: 'Closet Remodeling',
    description: 'Maximize your storage space with custom closet designs tailored to your needs.',
  },
];

const commercialContent = [
  {
    title: 'Office Renovations',
    description: 'Give your workspace a fresh, functional upgrade.',
  },
  {
    title: 'Retail Space Remodeling',
    description: 'Attract more customers with a beautifully remodeled storefront.',
  },
  {
    title: 'Tenant Improvements',
    description: 'Ensure your rental spaces are ready for occupancy with our tenant improvement services.',
  },
];

function GalleryPreview() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const openModal = (type) => {
    setModalData(type === 'residential' ? residentialContent : commercialContent);
    setModalOpen(true);
  };

  return (
    <section id='gallery-section' className="gallery-preview-section-sec">
      <h2 className="gallery-section-title-sec">OUR WORK</h2>
      <p className="gallery-section-subtitle-sec">
        Take a look at some of our favorite residential and commercial projects.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={{ nextEl: '.gallery-next', prevEl: '.gallery-prev' }}
        pagination={{ clickable: true }}
        className="gallery-swiper-sec"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Project ${index + 1}`} className="gallery-image-sec" />
          </SwiperSlide>
        ))}
        <div className="gallery-prev-sec gallery-arrow-sec">‹</div>
        <div className="gallery-next-sec gallery-arrow-sec">›</div>
      </Swiper>

      <div className="gallery-cta-sec">
        <ButtonIndicatorWhite to="/galleryPage" />
       
          <Link className='gallery-link' to="/galleryPage">
          <span className="gallery-cta-text-sec">
            
            Discover Our Gallery
            
            </span>
            </Link>
       
        
      </div>
        
      <p className="gallery-intro-text-sec">
        Whether you’re a homeowner looking to remodel your kitchen or a business owner planning a commercial renovation,
        our construction and remodeling services cater to all needs.
      </p>

      <div className="service-split-sec">
        <div className="service-tilted-card-sec residential-sec" onClick={() => openModal('residential')}>
          <HouseLine size={54} weight="duotone" />
          <h3>Residential Remodeling</h3>
          <p>Upgrade kitchens, bathrooms, closets and more.</p>
        </div>
        <div className="service-tilted-card-sec commercial-sec" onClick={() => openModal('commercial')}>
          <Buildings size={54} weight="duotone" />
          <h3>Commercial Construction</h3>
          <p>Renovations, storefronts, tenant improvements and more.</p>
        </div>
      </div>

      {modalOpen && <ServiceModal onClose={() => setModalOpen(false)} content={modalData} />}
    </section>
  );
}

export default GalleryPreview;

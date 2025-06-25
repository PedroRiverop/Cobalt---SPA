import React from 'react';
import Masonry from 'react-masonry-css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ServicesGrid.css';
import servicesData from '../data/servicesData';
import * as Icons from 'phosphor-react';
import { Navigation } from 'swiper/modules';
import ButtonIndicatorWhite from './ButtonIndicatorWhite';


function ServicesGrid() {
  const slides = [
    servicesData.slice(0, 9),
    servicesData.slice(9)
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section className="masonry-services-section">
      <div className="masonry-services-overlay">
        <h2 className="masonry-services-title">Our Services</h2>
        <Swiper spaceBetween={30} slidesPerView={1} modules={[Navigation]} navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}>
          {slides.map((group, i) => (
            <SwiperSlide key={i}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                {group.map((service, index) => {
                  const Icon = Icons[service.icon] || Icons.Wrench;
                  return (
                    <div className="masonry-card" key={index}>
                      <div className="masonry-icon">
                        <Icon size={32} color="#fff" />
                      </div>
                      <h3 className="masonry-title">{service.title}</h3>
                      <p className="masonry-description">{service.description}</p>
                    </div>
                  );
                })}
              </Masonry>
              
            </SwiperSlide>
          ))}
          
           <div className="custom-next custom-nav-arrow">›</div>
        </Swiper>
      </div>
      <div className="servicesView-scroll">
          <ButtonIndicatorWhite to="/services" />
        </div>
    </section>
  );
}

export default ServicesGrid;

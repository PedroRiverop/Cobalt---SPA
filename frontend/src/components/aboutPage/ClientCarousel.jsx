import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ClientCarousel.css';

// Importa tus logos
import logo1 from '../../assets/aboutPage/clients/logo1.webp';
import logo2 from '../../assets/aboutPage/clients/logo2.gif';
import logo3 from '../../assets/aboutPage/clients/logo3.webp';
import logo4 from '../../assets/aboutPage/clients/logo4.webp';
import logo5 from '../../assets/aboutPage/clients/logo5.webp';
import logo6 from '../../assets/aboutPage/clients/logo6.webp';
import logo7 from '../../assets/aboutPage/clients/logo7.webp';
import logo8 from '../../assets/aboutPage/clients/logo8.webp';
import logo9 from '../../assets/aboutPage/clients/logo9.webp';
import logo10 from '../../assets/aboutPage/clients/logo10.webp';
import logo11 from '../../assets/aboutPage/clients/logo11.webp';
import logo12 from '../../assets/aboutPage/clients/logo12.webp';
import logo13 from '../../assets/aboutPage/clients/logo13.webp';
import logo14 from '../../assets/aboutPage/clients/logo14.webp';
import logo15 from '../../assets/aboutPage/clients/logo15.webp';
import logo16 from '../../assets/aboutPage/clients/logo16.webp';
import logo17 from '../../assets/aboutPage/clients/logo17.webp';
import logo18 from '../../assets/aboutPage/clients/logo18.webp';
import logo19 from '../../assets/aboutPage/clients/logo19.webp';
import logo20 from '../../assets/aboutPage/clients/logo20.webp';
import logo21 from '../../assets/aboutPage/clients/logo21.webp';
import logo22 from '../../assets/aboutPage/clients/logo22.webp';
import logo23 from '../../assets/aboutPage/clients/logo23.webp';
import logo24 from '../../assets/aboutPage/clients/logo24.webp';
import logo25 from '../../assets/aboutPage/clients/logo25.webp';
import logo26 from '../../assets/aboutPage/clients/logo26.webp';
import logo27 from '../../assets/aboutPage/clients/logo27.webp';
import logo28 from '../../assets/aboutPage/clients/logo28.webp';
import logo29 from '../../assets/aboutPage/clients/logo29.webp';
import logo30 from '../../assets/aboutPage/clients/logo30.webp';
import logo31 from '../../assets/aboutPage/clients/logo31.webp';
import logo32 from '../../assets/aboutPage/clients/logo32.webp';
import logo33 from '../../assets/aboutPage/clients/logo33.webp';
import logo34 from '../../assets/aboutPage/clients/logo34.webp';
import logo35 from '../../assets/aboutPage/clients/logo35.webp';
import logo36 from '../../assets/aboutPage/clients/logo36.webp';
import logo37 from '../../assets/aboutPage/clients/logo37.webp';
import logo38 from '../../assets/aboutPage/clients/logo38.webp';
import logo39 from '../../assets/aboutPage/clients/logo39.webp';


const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14,
    logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39];

function ClientCarousel() {
  return (
    <div className="client-carousel">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        spaceBetween={1}
        loop={true}
        autoplay={{  disableOnInteraction: false }}
        speed={5000}
        freeMode ={true}
        breakpoints={{
          768: { slidesPerView: 6 },
          480: { slidesPerView: 3 },
          0: { slidesPerView: 2 }
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientCarousel;

import React from 'react';
import HeroCarousel from '../components/secctionsHome/hero/HeroCarousel';
import IntroSection from '../components/secctionsHome/intro/IntroSection';
import About from '../components/secctionsHome/about/AboutInro';
import ServicesGrid from '../components/secctionsHome/services/ServicesGrid';
import WhyChooseUs from '../components/secctionsHome/whyUs/WhyChooseUs';
import GallerySection from '../components/secctionsHome/gallery/GallerySection';
import Contact from '../components/Contact';

function Home( {estado}) {
  return (
    <>
      <HeroCarousel estado={estado} />
      <IntroSection estado={estado}/>
      <About estado={estado}/>
      <WhyChooseUs estado={estado}/>
      <ServicesGrid estado={estado}/>
      <GallerySection estado={estado}/>
      <Contact />
    </>
  );
}

export default Home;
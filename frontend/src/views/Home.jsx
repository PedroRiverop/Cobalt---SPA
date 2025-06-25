import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import IntroSection from '../components/IntroSection';
{/*import './Home.css';*/}
import About from '../components/AboutInro';
import ServicesGrid from '../components/ServicesGrid';
import GalleryPreview from '../components/GalleryPreview';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

function Home( {estado}) {
  return (
    <>
      <HeroCarousel estado={estado} />
      <IntroSection estado={estado}/>
      <About estado={estado}/>
      <ServicesGrid estado={estado}/>
      <GalleryPreview estado={estado}/>
      <GallerySection estado={estado}/>
      <Contact />
    </>
  );
}

export default Home;
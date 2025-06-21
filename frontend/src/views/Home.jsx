import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import IntroSection from '../components/IntroSection';
{/*import './Home.css';*/}
import About from '../components/About';
import Services from '../components/Services';
import GalleryPreview from '../components/GalleryPreview';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';

function Home( {estado}) {
  return (
    <>
      <HeroCarousel estado={estado} />
      <IntroSection estado={estado}/>
      <About estado={estado}/>
      <Services estado={estado}/>
      <GalleryPreview estado={estado}/>
      <GallerySection estado={estado}/>
      <Contact />
    </>
  );
}

export default Home;
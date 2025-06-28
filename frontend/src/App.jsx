
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlainLayout from './layouts/PlainLayout';
import MainLayout from './layouts/MainLayout';
import Landing from './views/Hero'; // Hero inicial es toda la landing
import HomeArizona from './views/HomeArizona';
import AboutPage from './views/AboutPage';
import ServicePage from './views/ServicesPage';
import GalleryPage from './views/GalleryPage';
import ContactPage from './views/ContactPage';
import './App.css'
{/* import Gallery from './views/Gallery';*/}


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing: sin navbar ni footer */}
        <Route element={<PlainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Páginas principales: navbar + footer */}
        <Route element={<MainLayout />}>
          <Route path="/arizona" element={<HomeArizona />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/servicePage" element={<ServicePage />} />
          <Route path="/galleryPage" element={<GalleryPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Route>
      
        
       {/* <Route path="/gallery" element={<Gallery />} />*/}
      </Routes>
    </Router>
  );
}

export default App;

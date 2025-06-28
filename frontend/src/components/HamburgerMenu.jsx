import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleMenu = () => setOpen(!open);

useEffect(() => {
  const handleScroll = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShowButton(true); // Siempre visible en mobile
    } else {
      const scrollTop = window.scrollY;
      setShowButton(scrollTop < 80); // Solo visible arriba en desktop
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // por si cambia el tamaño
  handleScroll(); // setea el valor inicial

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}, []);


  return (
    <>
      {showButton && (
  <div className={`hamburger-icon ${open ? 'open' : ''}`} onClick={toggleMenu}>
    <span></span>
    <span></span>
  </div>
)}

      <nav className={`side-menu-nav ${open ? 'visible' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/aboutPage" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/servicePage" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/galleryPage" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/contactPage" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Optional overlay */}
      <div className={`menu-overlay ${open ? 'show' : ''}`} onClick={toggleMenu}></div>
    </>
  );
}

export default HamburgerMenu;

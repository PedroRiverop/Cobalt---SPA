import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/homeAssets/logoCobalt.webp';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : ''}`}>
      <div className="navbar-content">
        <img src={logo} alt="BT Roofing Logo" className="navbar-logo" onClick={() => navigate('/')} />
        <ul className="navbar-links">
          <li><Link to="/arizona">Home</Link></li>
          <li><Link to="/aboutPage">About</Link></li>
          <li><Link to="/servicePage">Services</Link></li>
          <li><Link to="#gallery">Gallery</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
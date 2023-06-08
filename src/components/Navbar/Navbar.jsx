import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'
import forrest from './images/forrest.png';
import city from './images/city-nobg.png';
import neighborhood from './images/neighborhood-cropped.tiff';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Dominic Dueno</a>
      <div className="collapse navbar-collapse navbar-nav" >
        <ul className="navbar-nav">
          <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
            <a className="nav-link" href="/" onClick={() => handleLinkClick('Home')}>Home</a>
          </li>

          <li className={`nav-item ${activeLink === 'Nature' ? 'active' : ''}`}>
            
            <a className="nav-link" href="#Nature" onClick={() => handleLinkClick('Nature')}>
              Nature
              {activeLink === 'Nature' && <img className='active nature' src={forrest} alt="nature active" />}
              </a>
          </li>
          <li className={`nav-item ${activeLink === 'RealEstate' ? 'active' : ''}`}>
            
            <a className="nav-link" href="#RealEstate" onClick={() => handleLinkClick('RealEstate')}>Real Estate
            {activeLink === 'RealEstate' && <img className='active realestate' src={neighborhood} alt="neighborhood active" />}
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'Urban' ? 'active' : ''}`}>
          
            <a className="nav-link" href="#Urban" onClick={() => handleLinkClick('Urban')}>Urban
            {activeLink === 'Urban' && <img className='active urban' src={city} alt="urban active" />}
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'Equipment' ? 'active' : ''}`}>
            <a className="nav-link" href="#Equipment" onClick={() => handleLinkClick('Equipment')}>Equipment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



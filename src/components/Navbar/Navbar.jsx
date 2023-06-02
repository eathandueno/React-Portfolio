import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
const Navbar = () => {
  return (
    <nav  className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <Link to={'/'} className='navbar-brand flex' >Dominic Dueno</Link>
            <div className='navbar-collapse links'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to="/Urban" className='nav-link'>Urban</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/RealEstate" className='nav-link'>Real Estate</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/Nature" className='nav-link'>Nature</Link>
                </li>
                <li className='navbar-item'>
                  <Link to="/Equipment" className='nav-link'>Equipment</Link>
                </li>
              </ul>
            </div>
        </nav>
  )
}

export default Navbar
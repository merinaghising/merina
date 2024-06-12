// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.png"

const Navbar = () => { // Receive logo as a prop
  return (
    <nav>
      <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



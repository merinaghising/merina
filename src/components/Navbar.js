//Navbar.js -File name: MERINA, Student’s Name: Merina Ghising, StudentID: 301303828, and Date:2024-06-10.
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.png"

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" style={{ height: '100px', marginRight: '15px' }} />
      <ul>
        <li><Link to="/merina/">Home</Link></li>
        <li><Link to="/merina/about">About Me</Link></li>
        <li><Link to="/merina/projects">Projects</Link></li>
        <li><Link to="/merina/services">Services</Link></li>
        <li><Link to="/merina/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



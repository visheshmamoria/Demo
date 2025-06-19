import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Optional: only if you separated styles

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BlueWave Pools</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

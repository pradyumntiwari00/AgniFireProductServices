import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
function Navbar() {
  return (
    <nav>
    <ul>
    <li>
    <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      </li>
      <li>
      <h3 className="h3">AgniFire<span>Services</span></h3>
      </li>
      </ul>
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/services">Our Services</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;

import React from 'react';
import logo from './logo.png';
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import brand icons



const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" />
        <p className="footer-links">
          <a href="www.google.com" className="link-1">Home</a>
          <a href="www.google.com">Products</a>
          <a href="www.google.com">Services</a>
          <a href="www.google.com">Our Clients</a>
          <a href="www.google.com">Faq</a>
          <a href="www.google.com">Contact</a>
        </p>
        <p className="footer-company-name">Agni Fire Product Services © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <FontAwesomeIcon  icon={faMapMarker} className="fa fa-map-marker"/>
          <p><span>Head Office:</span> Shop Number 4 Ramnagar Residency
            <span> Village: Kunta,vadoli,Rohit faliya to morai,welspun colony road</span>
            <span> Taluka:Vapi</span>
            <span> District:Valsad,Gujarat</span></p>
          <p><span>Andawa Chauraha</span> Avatar Guest House, Prayagraj</p>
        </div>
        <div className="fa fa-phone">
          <FontAwesomeIcon  icon={faPhone} />
          <p>9408052687</p>
        </div>
        <div>
          <FontAwesomeIcon  icon={faEnvelope} className="fa fa-envelope"/>
          <p><a href="mailto:birendrapal50@gmail.com">birendrapal50@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="www.google.com" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="www.google.com" className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="www.google.com" className="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="www.google.com" className="fa fa-github"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

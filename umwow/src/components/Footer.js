import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} UM-WOW. Developed by <a href="https://www.instagram.com/coeddd._/" target="_blank" rel="noopener noreferrer">CoEdd</a>.</p>
      <nav>
        <ul className="footer-links">
          {/* <li><a href="/contact">Contact Us</a></li> */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

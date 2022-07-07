import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <a
        href="https://www.instagram.com/_about_shine_/"
        className="footer__logo"
      >
        SHINE
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100072877444506">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_about_shine_/">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shine. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

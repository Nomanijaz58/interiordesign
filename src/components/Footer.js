import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">▲</div>
              <span>Studio</span>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>1777 West Street, Portland, OR 97205</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>(+1) 123 456 7893</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>name@email.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Would like to talk about your future project?</h4>
            <Link to="/contact" className="btn btn-accent footer-cta">
              Get in touch →
            </Link>
            <div className="social-links">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2023 Brand, Inc. • Privacy • Terms</p>
            <div className="footer-branding">
              <span>Made with Visily</span>
              <div className="visily-icon">V</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

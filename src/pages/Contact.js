import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-info">
              <h1 className="hero-title">Contact us</h1>
              <div className="contact-details">
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
              <div className="contact-image">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Office space"
                />
              </div>
            </div>
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Our Location</h3>
                <p>1777 West Street, Portland, OR 97205</p>
                <div className="map-iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-122.6762079!3d45.5152321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a1234567890%3A0x1234567890abcdef!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Info */}
      <section className="section office-info">
        <div className="container">
          <div className="office-info-grid">
            <div className="office-hours">
              <h3>Office Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-methods">
              <h3>Get in Touch</h3>
              <div className="contact-methods-list">
                <div className="method-item">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h4>Email Us</h4>
                    <p>name@email.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>
                <div className="method-item">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h4>Call Us</h4>
                    <p>(+1) 123 456 7893</p>
                    <span>Mon-Fri 9AM-6PM</span>
                  </div>
                </div>
                <div className="method-item">
                  <div className="method-icon">💬</div>
                  <div className="method-info">
                    <h4>Live Chat</h4>
                    <p>Available on our website</p>
                    <span>Instant responses during business hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
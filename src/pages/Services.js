import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title">What we do</h1>
            <p className="hero-description">
              We offer comprehensive interior design services to transform your spaces into beautiful, functional environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-dark process-overview">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-description">
              We follow a structured approach to ensure every project meets your expectations and exceeds your dreams.
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery & Consultation</h3>
              <p>We start by understanding your vision, lifestyle, and requirements through detailed consultations and site visits.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Concept Development</h3>
              <p>We create initial design concepts and 3D visualizations to bring your vision to life before any work begins.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design Refinement</h3>
              <p>We refine the design based on your feedback, ensuring every detail meets your expectations and budget.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Implementation</h3>
              <p>We manage the entire implementation process, coordinating with contractors and ensuring quality at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="/projects" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
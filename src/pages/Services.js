import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">What we do</h1>
            <p className="hero-description">
              We offer comprehensive interior design services to transform your spaces into beautiful, functional environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-dark process-overview">
        <div className="container">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-description">
              We follow a structured approach to ensure every project meets your expectations and exceeds your dreams.
            </p>
          </motion.div>
          
          <div className="process-steps">
            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="step-number">01</div>
              <h3>Discovery & Consultation</h3>
              <p>We start by understanding your vision, lifestyle, and requirements through detailed consultations and site visits.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">02</div>
              <h3>Concept Development</h3>
              <p>We create initial design concepts and 3D visualizations to bring your vision to life before any work begins.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">03</div>
              <h3>Design Refinement</h3>
              <p>We refine the design based on your feedback, ensuring every detail meets your expectations and budget.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-number">04</div>
              <h3>Implementation</h3>
              <p>We manage the entire implementation process, coordinating with contractors and ensuring quality at every step.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

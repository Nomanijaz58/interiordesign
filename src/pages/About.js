import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <motion.div
              className="about-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Who we are</h1>
              <p className="hero-description">
                We bring equal dedication and commitment to every project, whether it's residential, commercial, or public space design.
              </p>
            </motion.div>
            <motion.div
              className="about-hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Team working"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy">
        <div className="container">
          <div className="philosophy-content">
            <motion.div
              className="philosophy-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Philosophy</h2>
              <p>
                We expect living to be in an aesthetic form which is also an attitude. We try to apply beautiful life experience to design and to optimize the interaction between users and spaces.
              </p>
              <div className="founders">
                <h3>Daniel Moore & Julia Lopez</h3>
                <p>Co-Founders, A Studio</p>
              </div>
            </motion.div>
            <motion.div
              className="founders-images"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Daniel Moore"
                className="founder-image"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Julia Lopez"
                className="founder-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-dark team">
        <div className="container">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet our team</h2>
          </motion.div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-member"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process">
        <div className="container">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Process</h2>
          </motion.div>
          
          <div className="process-grid">
            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                  alt="Preconstruction Design"
                />
              </div>
              <h3>Preconstruction Design</h3>
              <p>We start with detailed planning and design development to ensure your vision is perfectly captured before construction begins.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Design & Construction Estimate"
                />
              </div>
              <h3>Design & Construction Estimate</h3>
              <p>We provide detailed cost estimates and timelines to help you make informed decisions about your project.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                  alt="On-Site Consultations"
                />
              </div>
              <h3>On-Site Consultations</h3>
              <p>Regular site visits ensure quality control and allow for adjustments as the project progresses.</p>
            </motion.div>

            <motion.div
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="The Finishing Touches"
                />
              </div>
              <h3>The Finishing Touches</h3>
              <p>We add the final details and styling to bring your space to life with perfect finishing touches.</p>
            </motion.div>
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="btn btn-accent">
              Contact us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Find your dream space</h1>
            <p className="hero-description">
              We are an innovative interior design and construction company dedicated to transforming spaces into stunning works of art.
            </p>
            <Link to="/contact" className="btn btn-primary hero-cta">
              Let's chat
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
            alt="Modern living room"
          />
          <div className="hero-play-button">
            <button className="play-btn">▶</button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section what-we-do">
        <div className="container">
          <div className="what-we-do-content">
            <div className="what-we-do-text">
              <h2 className="section-title">What we do</h2>
              <div className="services-list">
                <div className="service-item">Design Project</div>
                <div className="service-item">Concept creation</div>
                <div className="service-item">Architectural Conception</div>
                <div className="service-item">Brand Identity</div>
                <div className="service-item">Consulting</div>
              </div>
            </div>
            <div className="what-we-do-images">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern kitchen"
                className="service-image"
              />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern architecture"
                className="service-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section section-dark about-us">
        <div className="container">
          <div className="about-us-content">
            <div className="about-us-text">
              <h2 className="section-title">About us</h2>
              <p className="about-description">
                We expect living to be in an aesthetic form which is also an attitude. We try to apply beautiful life experience to design and to optimize the interaction between users and spaces.
              </p>
              <div className="why-choose-us">
                <h3>Why Choose Us</h3>
                <ul className="features-list">
                  <li>Preferential Price</li>
                  <li>After Care</li>
                  <li>We convey the unique appeal and color plan</li>
                  <li>We provide the most effective exclusive solutions</li>
                </ul>
              </div>
              <Link to="/about" className="btn btn-accent">
                View more
              </Link>
            </div>
            <div className="about-us-image">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="section recent-projects">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Recent projects</h2>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/projects" className="btn btn-primary">
              View more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-description">
              Explore our portfolio of completed projects and see how we transform spaces into beautiful, functional environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {visibleProjects < filteredProjects.length && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="btn btn-primary load-more-btn" onClick={loadMore}>
                Load more
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">25+</div>
              <div className="stat-label">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

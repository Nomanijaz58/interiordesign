import React, { useState } from 'react';
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
          <div className="text-center">
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-description">
              Explore our portfolio of completed projects and see how we transform spaces into beautiful, functional environments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <div className="filter-buttons">
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
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <button className="btn btn-primary load-more-btn" onClick={loadMore}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-dark stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
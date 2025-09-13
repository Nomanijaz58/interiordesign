import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="project-details">
      {/* Breadcrumbs */}
      <section className="breadcrumbs">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/projects">Projects</Link>
            <span>›</span>
            <span>{project.category}</span>
            <span>›</span>
            <span>{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <motion.div
            className="project-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="project-title">{project.title}</h1>
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-location">📍 {project.location}</span>
              <span className="project-area">📐 {project.area}</span>
              <span className="project-completed">📅 {project.completed}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="project-main-image">
        <div className="container">
          <motion.div
            className="main-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={project.images[0]} alt={project.title} />
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section project-info">
        <div className="container">
          <div className="project-info-content">
            <motion.div
              className="project-description"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              <div className="project-details-list">
                <div className="detail-item">
                  <strong>Project:</strong> {project.title} - {project.category}
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> {project.location}
                </div>
                <div className="detail-item">
                  <strong>Area:</strong> {project.area}
                </div>
                <div className="detail-item">
                  <strong>Completed:</strong> {project.completed}
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Contact us
              </Link>
            </motion.div>

            <motion.div
              className="project-gallery"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {project.images.slice(1, 3).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} ${index + 2}`} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <motion.div
            className="gallery-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={image} alt={`${project.title} ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section related-projects">
          <div className="container">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Related Projects</h2>
            </motion.div>
            
            <div className="related-projects-grid">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/projects/${relatedProject.id}`} className="related-project-card">
                    <img src={relatedProject.images[0]} alt={relatedProject.title} />
                    <div className="related-project-info">
                      <h3>{relatedProject.title}</h3>
                      <p>{relatedProject.category}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;

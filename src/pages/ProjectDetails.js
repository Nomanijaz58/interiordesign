import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
          <div className="project-hero-content">
            <h1 className="project-title">{project.title}</h1>
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-location">📍 {project.location}</span>
              <span className="project-area">📐 {project.area}</span>
              <span className="project-completed">📅 {project.completed}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Image */}
      <section className="project-main-image">
        <div className="container">
          <div className="main-image-container">
            <img src={project.images[0]} alt={project.title} />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="section project-info">
        <div className="container">
          <div className="project-info-content">
            <div className="project-description">
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
            </div>

            <div className="project-gallery">
              {project.images.slice(1, 3).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} ${index + 2}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {project.images.map((image, index) => (
              <div key={index} className="gallery-image">
                <img src={image} alt={`${project.title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section related-projects">
          <div className="container">
            <div className="text-center mb-6">
              <h2 className="section-title">Related Projects</h2>
            </div>
            
            <div className="related-projects-grid">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`} className="related-project-card">
                  <img src={relatedProject.images[0]} alt={relatedProject.title} />
                  <div className="related-project-info">
                    <h3>{relatedProject.title}</h3>
                    <p>{relatedProject.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
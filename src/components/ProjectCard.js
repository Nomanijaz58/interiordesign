import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image-container">
        <img
          src={project.images[0]}
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay">
          <Link to={`/projects/${project.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
        {featured && (
          <div className="project-meta">
            <span className="project-location">📍 {project.location}</span>
            <span className="project-area">📐 {project.area}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

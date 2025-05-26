import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, link, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Code
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

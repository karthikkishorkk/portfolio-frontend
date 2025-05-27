import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, codeLink, demoLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">Live</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

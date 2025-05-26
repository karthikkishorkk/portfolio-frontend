import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map(project => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a> |{' '}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;

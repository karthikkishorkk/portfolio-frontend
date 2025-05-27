import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects'); // Replace with your actual endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

return (
  <section className="projects-section">
    <h1>My Projects</h1>
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project._id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            <ul>
              {project.techStack.map((tech, index) => (
                <li key={index} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Optional links */}
          {/* <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a> */}
        </div>
      ))}
    </div>
  </section>
);

};

export default Projects;

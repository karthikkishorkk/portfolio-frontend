import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using React and TailwindCSS.',
      link: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourwebsite.com',
    },
    {
      title: 'Task Manager App',
      description: 'A web app to manage daily tasks, built with Node.js and React.',
      link: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager.com',
    },
    // add more projects as needed
  ];

  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

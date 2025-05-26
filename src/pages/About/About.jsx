import React from 'react';
import './About.css';
import profileImage from '../../assets/profile.jpg';
import Techstack from '../../components/Techstack/Techstack'

const About = () => {
  return (
    <div className="about-section">
      <h1>WANNA KNOW WHO I AM?? 🤔</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Karthik Kishor" />
        </div>
        <div className="about-content">
          <p className="about-description">
            Hello! I'm <strong>Karthik Kishor</strong>, an aspiring <strong>B.Tech Student</strong>. I'm passionate about technology and continuously exploring new areas in software development.
          </p>
          <p className="about-description">
            My main interests lie in <strong>web development</strong> and <strong>cloud computing</strong>. I'm actively building skills in <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Next.js</strong>.
          </p>
          <p className="about-description">
            I am an active member of the <strong>ACM Student Chapter</strong> at Amrita Amritapuri, collaborating with peers on tech projects and events.
          </p>
          <p className="about-description">
            When I'm not coding, I enjoy exploring new technologies and engaging with the developer community.
          </p>
          <h2 className="skillset-heading">Professional Skillset</h2>
          <Techstack />
        </div>
      </div>
    </div>
  );
};

export default About;

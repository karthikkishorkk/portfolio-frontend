import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import profileImage from '../../assets/profile.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        {/* Left Side */}
        <div className="home-left">
          <h1 className="home-greeting">
            Hi there <span role="img" aria-label="wave">👋</span>
          </h1>
          <h2 className="home-name">I’m Karthik Kishor</h2>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1500,
              'Passionate Coder',
              1500,
              'Team Player',
              1500
            ]}
            wrapper="p"
            speed={50}
            className="typing-animation"
            repeat={Infinity}
          />
        </div>

        {/* Right Side */}
        <div className="home-right">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h3 className="home-intro-title">LET ME INTRODUCE MYSELF</h3>
          <p className="home-description">
            I’m currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at <strong>Amrita Vishwa Vidyapeetham</strong>, where I’m actively expanding my knowledge and skills in software development.
          </p>
          <p className="home-description">
            My passion lies in building modern web applications using technologies like <strong>React.js</strong>and <strong>Node.js</strong>. I love transforming ideas into real-world products.
          </p>
          <p className="home-description">
            I have a solid foundation in <strong>C</strong>, <strong>Java</strong>, and <strong>JavaScript</strong>, and I’m eager to keep learning and growing as a developer every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import githubLogo from '../../assets/github_icon.png';
import linkedinLogo from '../../assets/linkedin.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MyPortfolio</Link>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>

      <div className="social-links">
        <a href="https://github.com/karthikkishorkk" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub" className="icon" />
        </a>
        <a href="https://linkedin.com/in/karthikkishorkk" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

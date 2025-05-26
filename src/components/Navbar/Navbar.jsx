import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import githubLogo from '../../assets/github_icon.png';
import linkedinLogo from '../../assets/linkedin.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          MyPortfolio
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-social-icons">
          <a href="https://github.com/karthikkishorkk" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src={githubLogo} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/karthikkishorkk" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


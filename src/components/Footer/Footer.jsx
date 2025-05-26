import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
};

export default Footer;

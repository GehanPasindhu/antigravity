import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Experience Innovation</h2>
            <p>Advancing biotechnology and scientific research for a better tomorrow.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/ashansagomes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:ashansagomes95@gmail.com">Email</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/assets/cv.pdf" download>Download CV</a></li>
              </ul>
            </div>
          </div>
        </div>
         
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ama Ashansa S. Gomes. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/ashansagomes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            {/* Add more social icons here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

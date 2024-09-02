import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <a href="https://github.com/Reisleo99" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.stackoverflow.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import profilePic from '../assets/perfil-profissional.jpg';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg fixed-top">
      <div className="container">
      <img src={profilePic} alt="Leonardo Reis" className="profile-pic" />
        <Link className="navbar-brand" to="/">Leonardo Reis</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

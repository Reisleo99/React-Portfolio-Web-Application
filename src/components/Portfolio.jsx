import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>
      <div className="portfolio-grid">
        <a href="https://github.com/Reisleo99/TimeSheetJuly2nd" target="_blank" rel="noopener noreferrer">
          <img src="../../public/Timesheet.png" alt="TimeSheet Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/Professional-ReadME-Generator" target="_blank" rel="noopener noreferrer">
          <img src="../../public/Readme.png" alt="ReadME Generator Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/vehicle-management-platform" target="_blank" rel="noopener noreferrer">
          <img src="../../public/vehiclemanagement.png" alt="Vehicle Management Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/Employee-Management-Platform" target="_blank" rel="noopener noreferrer">
          <img src="../../public/employeemanagement.png" alt="Employee Management Project" className="portfolio-item" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;


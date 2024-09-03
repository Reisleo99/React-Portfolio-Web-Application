import React from 'react';
import './Portfolio.css';
import timesheetPic from '../assets/Timesheet.png';
import readmePic from '../assets/Readme.png';
import vehiclePic from '../assets/vehiclemanagement.png';
import employeePic from '../assets/employeemanagement.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>
      <div className="portfolio-grid">
        <a href="https://github.com/Reisleo99/TimeSheetJuly2nd" target="_blank" rel="noopener noreferrer">
          <img src={timesheetPic} alt="TimeSheet Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/Professional-ReadME-Generator" target="_blank" rel="noopener noreferrer">
          <img src={readmePic} alt="ReadME Generator Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/vehicle-management-platform" target="_blank" rel="noopener noreferrer">
          <img src={vehiclePic} alt="Vehicle Management Project" className="portfolio-item" />
        </a>
        <a href="https://github.com/Reisleo99/Employee-Management-Platform" target="_blank" rel="noopener noreferrer">
          <img src={employeePic} alt="Employee Management Project" className="portfolio-item" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;


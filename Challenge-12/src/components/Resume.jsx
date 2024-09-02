import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Leonardo Reis</h1>
      <p>Florida, USA</p>
      <p>Email: leonardo.ao.reis@gmail.com</p>
    
      <section>
        <h2>Professional Summary</h2>
        <p>Enthusiastic and dedicated professional with a diverse background in sales, hospitality, and software development. Experienced in customer service and team collaboration with a strong foundation in audio engineering. Currently pursuing a career transition into software development, with hands-on experience in web technologies and programming languages. Highly adaptable, with a passion for continuous learning and personal growth.</p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <h3>Ethos Greek Bistro - Florida, USA</h3>
        <p><strong>Server / Bartender</strong></p>
        <p>May 2022 - Present</p>
        <ul>
          <li>Started as a host, quickly promoted to server, and then to bartender.</li>
          <li>Delivered exceptional customer service in a fast-paced, high-volume restaurant environment.</li>
          <li>Managed bar inventory, created beverages, and ensured compliance with health and safety regulations.</li>
          <li>Trained new employees and coordinated with the kitchen and front-of-house staff to maintain smooth operations.</li>
        </ul>

        <h3>Ruby Tuesday - Florida, USA</h3>
        <p><strong>Restaurant Staff</strong></p>
        <p>December 2018 - May 2020</p>
        <ul>
          <li>Provided customer service in various roles, including hosting, serving, and food preparation.</li>
          <li>Collaborated with team members to maintain a clean and welcoming environment.</li>
          <li>Assisted in resolving customer issues and ensuring a positive dining experience.</li>
        </ul>

        <h3>Professional Audio and Musical Instrument Sales - Belo Horizonte, Brazil</h3>
        <p><strong>Sales Representative / Audio Engineer</strong></p>
        <p>2014 - 2018</p>
        <ul>
          <li>Sold professional audio equipment and musical instruments, providing expert advice to customers.</li>
          <li>Focused on audio engineering for various churches, concerts, and events.</li>
          <li>Built and maintained strong customer relationships, resulting in repeat business and referrals.</li>
          <li>Assisted customers in selecting the right products based on their needs and preferences.</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <h3>Audio Engineering Courses</h3>
        <p><strong>DGC Audio - Belo Horizonte, Brazil</strong></p>
        <p>Completed: 2017</p>
        <ul>
          <li>Completed two comprehensive courses in audio engineering, focusing on sound design, mixing, and recording techniques.</li>
        </ul>

        <h3>Software Development</h3>
        <p><strong>Edx Courses with University of Central Florida (UCF)</strong></p>
        <p>Ongoing: 2023 - Present</p>
        <ul>
          <li>Studying web development and software engineering with a focus on modern technologies such as JavaScript, React, Node.js, PostgreSQL, and TypeScript.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Web Development:</strong> React, JavaScript, HTML, CSS, Node.js, TypeScript</li>
          <li><strong>Database Management:</strong> PostgreSQL</li>
          <li><strong>Audio Engineering:</strong> Sound design, mixing, recording</li>
          <li><strong>Customer Service:</strong> Strong communication, problem-solving, teamwork</li>
          <li><strong>Languages:</strong> Portuguese (native), English (fluent)</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Audio Engineering Certification - DGC Audio, 2017</li>
          <li>Web Development Coursework - UCF Edx Courses, 2023 (in progress)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

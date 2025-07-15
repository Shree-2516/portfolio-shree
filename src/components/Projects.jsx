import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-heading">📁 My Projects</h2>

        {/* Project 1 */}
        <div className="project-card">
          <a
            href="https://github.com/Shree-2516/carelink-appointment-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <h3>CareLink - Doctor Appointment Booking</h3>
          </a>
          <p>MERN stack appointment booking web application.</p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <a
            href="https://github.com/Shree-2516/trading-journal-flask"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <h3>Trading Journal App</h3>
          </a>
          <p>Python + Flask app for logging and analyzing trades using SQLite and Chart.js.</p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <a
            href="https://github.com/Shree-2516/flask-student-record-system"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <h3>Student CRUD App</h3>
          </a>
          <p>Full CRUD system using Python Flask and SQLite for managing student records.</p>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <a
            href="https://github.com/Shree-2516/portfolio-shree"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <h3>Portfolio Website</h3>
          </a>
          <p>Responsive personal portfolio built using React and CSS — the site you're currently viewing!</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

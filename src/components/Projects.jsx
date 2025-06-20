import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* Project 1 */}
      <div className="project-card">
        <a
          href="https://github.com/Shree-2516/trading-journal-flask"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <h3>Trading Journal App</h3>
        </a>
        <p>
          A Python + Flask-based web app to log and analyze trades using SQLite and Chart.js.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <a
          href="https://github.com/Shree-2516/flask-student-record-systems"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <h3>Student CRUD App</h3>
        </a>
        <p>
          A full CRUD system using Python Flask and SQLite to manage student records.
        </p>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <a
          href="https://github.com/Shree-2516/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <h3>Portfolio Website</h3>
        </a>
        <p>
          A responsive personal portfolio built using React, CSS. Thas you viewing now live.
        </p>
      </div>

    </section>
  );
}

export default Projects;

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div>
        <h2>About Me</h2>
        <p>
          I'm Shreeyash Paraj, a third-year B.Tech engineering student with a passion for crafting functional, user-friendly web applications. I enjoy exploring full-stack development and have hands-on experience with technologies like Python, Java, Flask, React, JavaScript, HTML, CSS, and SQLite.
Some of my notable projects include a Trading Journal App for tracking and analyzing trades, a Student CRUD system for managing academic records, and this very portfolio site—built using React—to showcase my work and skills. I'm constantly learning and love turning ideas into live, working solutions.

        </p>
        {/* Resume Link */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 View My Resume
        </a>
      </div>
    </section>
  );
}

export default About;

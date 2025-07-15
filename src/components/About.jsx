import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          I'm <strong>Shreeyash Paraj</strong>, a passionate and self-driven Computer Engineering student with a strong foundation in web development and growing expertise in full-stack applications using technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Flask</strong>, and <strong>MongoDB</strong>.
          <br /><br />
          I’ve completed a Diploma in Computer Engineering and am currently in my final year of B.Tech. I’ve built real-world projects such as a <strong>Portfolio Website</strong>, <strong>Doctor Appointment Booking System</strong>, and a <strong>Service Booking Web App</strong>, deployed using <strong>Render</strong>, <strong>Vercel</strong>, and integrated with <strong>Razorpay</strong>, <strong>Cloudinary</strong>, and <strong>MongoDB Atlas</strong>.
          <br /><br />
          <strong>Skills:</strong><br />
          🧠 Frontend: React.js, HTML, CSS, JavaScript, Tailwind CSS<br />
          🔧 Backend: Flask (Python), Node.js (Express), REST APIs<br />
          🗄️ Database: MongoDB, SQLite<br />
          🛠 Tools: Git, GitHub, Netlify, Vercel, Render, Canva
          <br /><br />
          I love solving real-world problems through code and am actively looking for internship opportunities where I can contribute, learn, and grow as a full-stack developer.
        </p>
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

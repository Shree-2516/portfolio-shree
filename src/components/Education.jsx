import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="education">
      <div className="education-container">
        <h2 className="education-heading">🎓 Education</h2>
        <ul className="education-list">
          <li>
            <strong>B.Tech in Computer Engineering</strong><br />
            D.Y. Patil ATU University, Talsande, Kolhapur<br />
            <span className="year">2023 – 2026</span>
          </li>
          <li>
            <strong>Diploma in Computer Engineering</strong><br />
            Sharad Institute of Technology, Ichalkaranji<br />
            <span className="year">2021 – 2023</span>
          </li>
          <li>
            <strong>12th Science</strong><br />
            Jaysingpur College, Jaysingpur<br />
            <span className="year">2019 – 2021</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;

import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievementList = [
    {
      title: '4-Month Full Stack Development Internship',
      link: 'https://codectechnologies.in/tutor-certificate-2?cert_hash=b841e939f99bc64b',
    },
    {
      title: '3-Months Java Developer Internship',
      link: 'https://codectechnologies.in/tutor-certificate-2?cert_hash=7cbd68eece6d675f',
    },
    {
      title: '3-Month Python Developer Internship',
      link: 'https://codectechnologies.in/tutor-certificate-2?cert_hash=f9b90a9c5ad57891',
    },
    {
      title: 'Walmart Global Tech Advanced Software Engineering',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_DebxJraEbmcisEtys_1739683012953_completion_certificate.pdf',
    },
    {
      title: 'AWS Solutions Architecture Job Simulation',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_DebxJraEbmcisEtys_1739867533867_completion_certificate.pdf',
    },
    {
      title: 'Deloitte Data Analytics Completion Certificate',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_u67SBP2PGKLX9TFzb_1739874006617_completion_certificate.pdf',
    },
    {
      title: 'Electronic Arts Software Engineering Job Simulation',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_DebxJraEbmcisEtys_1739685421467_completion_certificate.pdf',
    },
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">
        <h2 className="achievements-heading">🏆 Achievements & Certifications</h2>
        <ul className="achievements-list">
          {achievementList.map((item, index) => (
            <li key={index} className="achievement-item">
              <strong>{item.title}</strong>
              <br />
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                📄 View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;

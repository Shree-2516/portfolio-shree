import React from 'react';
import Slider from 'react-slick';
import './RecentProjects.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const RecentProjects = () => {
  const projects = [
    {
      title: 'Care Link',
      description: 'MERN Stack Doctor Appointment Booking App',
      link: 'https://github.com/Shree-2516/carelink-appointment-app.git',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal Portfolio built with React + Vite',
      link: 'https://shreeparaj.in/',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="recent-projects-section">
      <h2 className="section-title">🚀 Recent Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecentProjects;

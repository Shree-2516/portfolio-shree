import React, { useState } from "react";
import "./Header.css";
import profileImg from "../assets/profile.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h1 className="logo">Shreeyash S. Paraj</h1>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

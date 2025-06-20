import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>Shreeyash S. Paraj</h1>
        <h1></h1>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
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

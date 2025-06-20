import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about"><About /></section>
      <section id="Education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <Footer />
    </div>
  );
}

export default App;

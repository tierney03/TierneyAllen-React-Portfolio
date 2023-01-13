import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
// import Header from "./components/header";
import Navigation from "./components/navbar";
import Projects from "./pages/Projects-TA/projects";
import Skills from "./pages/Skills/skills";
import Contact from "./pages/Contact/contact";
import AboutMe from "./pages/AboutMe/aboutme";
import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

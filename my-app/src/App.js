import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navbar";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import AboutMe from "./pages/aboutme";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    // if (currentPage === "Resume") {
    //   return <Resume />;
    // }
  };
  return (
    <div className="App">
      <Navigation />
      {/* <Container> */}
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* </Container> */}
    </div>
  );
}

export default App;

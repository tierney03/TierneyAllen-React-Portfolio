import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import AboutMe from "./components/aboutme";

function App() {
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

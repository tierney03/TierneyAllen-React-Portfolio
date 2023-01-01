import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Projects />
      const cards = [{},{},{},{}]
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

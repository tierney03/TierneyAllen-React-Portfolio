import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Contact } from "./contact";

function App() {
  return (
    <div className="App">
      <Footer />,
      <Header />,
      <Navbar />,
      <Projects />,
      <Skills />,
      <Contact />
    </div>
  );
}

export default App;

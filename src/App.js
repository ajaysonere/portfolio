import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './home.css';
import Techstack from "./components/Techstack";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
    return (
       <>
          <Navbar />
          <Hero />
          <Techstack />
          <About />
          <Project />
       </>
    );
};

export default App;
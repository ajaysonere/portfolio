import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './home.css';
import Techstack from "./components/Techstack";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
       <>
          <Navbar />
          <Hero />
          <Techstack />
          <About />
          <Project />
          <Contact />
          <Footer />
       </>
    );
};

export default App;
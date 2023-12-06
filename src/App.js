import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './home.css';
import Techstack from "./components/Techstack";
import About from "./components/About";

const App = () => {
    return (
       <>
          <Navbar />
          <Hero />
          <Techstack />
          <About />
       </>
    );
};

export default App;
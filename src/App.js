import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './home.css';
import Techstack from "./components/Techstack";

const App = () => {
    return (
       <>
          <Navbar />
          <Hero />
          <Techstack />
       </>
    );
};

export default App;
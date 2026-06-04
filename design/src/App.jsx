import Navbar from "./Navbar";
import Hero from "./Hero";
import Picture from "./Picture";
import About from "./About";
import Services from "./Services";
import Review from "./Review";
import Details from "./Details";
import "./App.css";

function App() {
  return (
    <div className="frame">
      <Navbar />
      <div className="hero-band">
        <Hero />
        <Picture />
      </div>
      <About />
      <Services />
      <Review />
      <Details />
    </div>
  );
}

export default App;

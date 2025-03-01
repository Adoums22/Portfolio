import "./App.css"
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Home2 from "./components/Intro2";
import Footer from "./components/Footer";
import About from "./components/About/About";
import SelfProjects from "./components/SelfProjects/SelfProjects";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import ParticlesComponent from "./components/Particle";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ParticlesComponent id="tsparticles" className="absolute inset-0 -z-10" />
          <NavBar />
          <Routes>
            <Route path="/" element={<><Intro /><Home2 /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<SelfProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

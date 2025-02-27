import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Home2 from "./components/Intro2";
import Footer from "./components/Footer";
import About from "./components/About/About";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<><Intro /><Home2 /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
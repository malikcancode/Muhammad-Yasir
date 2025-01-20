import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Questions from "./components/Questions";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Collaborate from "./components/Collaborate";

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/tools" element={<Marquee />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

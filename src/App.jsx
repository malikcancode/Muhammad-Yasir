import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./index.css";
import "remixicon/fonts/remixicon.css";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const HeroSection = lazy(() => import("./components/HeroSection"));
const Marquee = lazy(() => import("./components/Marquee"));
const Projects = lazy(() => import("./components/Projects"));
const Questions = lazy(() => import("./components/Questions"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const Footer = lazy(() => import("./components/Footer"));
const Collaborate = lazy(() => import("./components/Collaborate"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/tools" element={<Marquee />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/collaborate" element={<Collaborate />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

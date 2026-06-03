import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FullIntro from "./components/FullIntro";
import About from "./components/About";
import Stats from "./components/Stats";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar setShowIntro={setShowIntro} />

      {/* MAIN PAGE */}
      <Hero />
      <Portfolio />
      <About />
      <Stats />
      <Resume />
      <Contact />
      <Footer />

      {/* INTRO OVERLAY */}
      {showIntro && (
        <FullIntro onClose={() => setShowIntro(false)} />
      )}
    </>
  );
}
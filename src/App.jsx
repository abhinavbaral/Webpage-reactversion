import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FullIntro from "./components/FullIntro";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
  
      <Navbar setShowIntro={setShowIntro} />

     <Hero />
           <About />
             <Stats />
                <Skills />
                 <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      
      {showIntro && (
        <FullIntro onClose={() => setShowIntro(false)} />
      )}
    </>
  );
}
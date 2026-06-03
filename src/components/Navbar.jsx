import profile from "../assets/img/profile.jpg";
import { FiArrowRight } from "react-icons/fi";

export default function Navbar({ setShowIntro }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

  
        <img
          src={profile}
          alt="Abhinav Baral"
          className="w-10 h-10 rounded-full object-cover border"
        />

      
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#stats" className="hover:text-red-500">Stats</a>
          <a href="#resume" className="hover:text-red-500">Resume</a>
          <a href="#portfolio" className="hover:text-red-500">Portfolio</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>

        <button
          onClick={() => setShowIntro(true)}
          className="text-2xl hover:text-red-500 hover:translate-x-1 transition"
          aria-label="Open Intro"
        >
          <FiArrowRight />
        </button>

      </div>
    </header>
  );
}
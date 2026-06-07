import profile from "../assets/img/profile.jpg";
import { FiArrowRight } from "react-icons/fi";

export default function Navbar({ setShowIntro }) {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#stats", label: "Stats" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <img
          src={profile}
          alt="Abhinav Baral"
          className="w-10 h-10 rounded-full object-cover border"
        />

        <nav className="hidden md:flex gap-6 text-sm" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-500 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setShowIntro?.(true)}
          className="text-2xl hover:text-red-500 hover:translate-x-1 transition"
          aria-label="Open Intro"
        >
          <FiArrowRight />
        </button>
      </div>
    </header>
  );
}
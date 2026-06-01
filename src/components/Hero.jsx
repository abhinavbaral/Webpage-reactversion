import heroBg from "../assets/img/hero-bg.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <div className="relative z-10 px-6">
        <h4 className="text-lg">Hello, I am</h4>

        <h1 className="text-4xl md:text-6xl font-bold">
          Abhinav Baral
        </h1>

        <p className="mt-3 text-lg">
          Front-end Developer | Content Writer | Web Designer
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">

          <a
            href="https://github.com/abhinavbaral"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhinavbaral/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/abhinavbaral"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/abhinavbaral123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>

        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#portfolio"
            className="bg-red-500 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition"
          >
            View My Work
          </a>
        </div>

      </div>
    </section>
  );
}
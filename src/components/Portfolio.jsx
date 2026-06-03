import { useState } from "react";
import ContactModal from "./ContactModal";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          Portfolio
        </h2>

        <p className="text-center text-gray-600 mb-10">
          A selection of my real projects from GitHub and live deployments.
        </p>

    
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-5 hover:scale-105 transition"
            >
              <h3 className="font-semibold">{project.title}</h3>

              <p className="text-sm text-gray-600 mt-2">
                {project.desc}
              </p>

              <div className="mt-3 flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    className="text-red-500 text-sm"
                    target="_blank"
                  >
                    Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-600 text-sm"
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold">
            Need a website?
          </h3>

          <button
            onClick={() => setShowContact(true)}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Hire Me
          </button>
        </div>

      </div>

      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} />
      )}
    </section>
  );
}
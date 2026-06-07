import React from "react";

const Skills = () => {
  return (
    <section className="text-white py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Frontend */}
        <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
          <h3 className="text-green-400 text-xl mb-4">Frontend</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
            <div>React</div>
            <div>Next</div>
            <div>Tailwind</div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
          <h3 className="text-green-400 text-xl mb-4">Backend</h3>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>Node</div>
            <div>Express</div>
          </div>
        </div>

        {/* Database */}
        <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
          <h3 className="text-green-400 text-xl mb-4">Database</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>MySQL</div>
            <div>PostgreSQL</div>
            <div>MongoDB</div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
          <h3 className="text-green-400 text-xl mb-4">Tools</h3>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>Git</div>
            <div>GitHub</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
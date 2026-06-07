import React from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiGithubFill,
} from "react-icons/ri";

import { SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit } from "react-icons/si";

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <RiHtml5Fill className="text-orange-500 text-xl" /> },
    { name: "CSS", icon: <RiCss3Fill className="text-blue-500 text-xl" /> },
    { name: "JavaScript", icon: <RiJavascriptFill className="text-yellow-400 text-xl" /> },
    { name: "React", icon: <RiReactjsFill className="text-cyan-400 text-xl" /> },
    { name: "Next.js", icon: <RiNextjsFill className="text-white text-xl" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-400 text-xl" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <RiNodejsFill className="text-red-500 text-xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-xl" /> },
  ];

  const database = [
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400 text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-red-400 text-xl" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-orange-500 text-xl" /> },
    { name: "GitHub", icon: <RiGithubFill className="text-white text-xl" /> },
  ];

  const SkillCard = ({ title, items }) => (
    <div className="bg-[#1f2937] p-6 rounded-xl border border-gray-700">
      <h3 className="text-red-500 text-xl mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section 
    id="skills"
    className="text-white py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard title="Frontend" items={frontend} />
        <SkillCard title="Backend" items={backend} />
        <SkillCard title="Database" items={database} />
        <SkillCard title="Tools" items={tools} />
      </div>
    </section>
  );
};

export default Skills;
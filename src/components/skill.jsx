import React from "react";

const SkillItem = ({ icon, name, color }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 cursor-pointer transition hover:scale-105"
      style={{ color }}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

const SkillCard = ({ title, items }) => {
  return (
    <div className="bg-card border border-card rounded-xl p-6">
      <h2 className="text-accent text-lg mb-6">{title}</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <SkillItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default function Skill() {
  const skills = [
    {
      title: "Frontend",
      items: [
        {
          name: "HTML",
          color: "#F06529",
          icon: (
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-10 h-10">
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0z" />
            </svg>
          ),
        },
        {
          name: "CSS",
          color: "#2965f1",
          icon: (
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-10 h-10">
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0z" />
            </svg>
          ),
        },
        {
          name: "JS",
          color: "#F7DF1E",
          icon: (
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10">
              <path d="M0 32v448h448V32H0z" />
            </svg>
          ),
        },
        {
          name: "React",
          color: "#61DBFB",
          icon: (
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10">
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1" />
            </svg>
          ),
        },
        {
          name: "Next",
          color: "#ffffff",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <circle cx="12" cy="12" r="10" />
            </svg>
          ),
        },
        {
          name: "Tailwind",
          color: "#06b6d4",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M12 4c-4 0-6 2-7 6 2-3 4-4 7-3s5 3 7 6c-1-5-3-9-7-9z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node",
          color: "#47b469",
          icon: (
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10">
              <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2" />
            </svg>
          ),
        },
        {
          name: "Express",
          color: "#ffffff",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MySQL",
          color: "#F29111",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M16.405 5.501c-.115 0-.193.014" />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          color: "#4588bf",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M23.5594 14.7228a.5269.5269" />
            </svg>
          ),
        },
        {
          name: "MongoDB",
          color: "#00ED64",
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M17.193 9.555c-1.264-5.58" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          name: "Git",
          color: "#F1502F",
          icon: (
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10">
              <path d="M439.55 236.05L244 40.45" />
            </svg>
          ),
        },
        {
          name: "GitHub",
          color: "#4078c0",
          icon: (
            <svg viewBox="0 0 496 512" fill="currentColor" className="w-10 h-10">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-6">
      {skills.map((section, idx) => (
        <SkillCard key={idx} {...section} />
      ))}
    </div>
  );
}
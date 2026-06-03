const educationData = [
  {
    year: "2015",
    title: "Siddhartha Boarding Secondary School",
    location: "Damak-7, Jhapa",
    subtitle: "Class 5",
  },
  {
    year: "2020",
    title: "Motherland English Boarding School",
    location: "Damak-5, Jhapa",
    subtitle: "Secondary Education Examination (Class 10)",
  },
  {
    year: "2022",
    title: "Damak Model Secondary School",
    location: "Damak-5, Jhapa",
    subtitle: "School Leaving Certificate (Class 10 + 2)",
  },
  {
    year: "2026",
    title: "Model Campus Damak",
    location: "Damak-5, Jhapa",
    subtitle: "BCA Student",
  },
];

const experienceData = [
  {
    year: "2023",
    title: "Frontend Developer Intern",
    location: "Remote (Self-initiated)",
    subtitle: "Built UI components using React and Tailwind CSS",
  },
  {
    year: "2024",
    title: "Freelance Web Developer",
    location: "Damak, Nepal",
    subtitle: "Developed websites for local clients",
  },
  {
    year: "2025",
    title: "React Developer (Contract)",
    location: "Remote",
    subtitle: "Worked on dashboard UI and API integration",
  },
];

function Timeline({ data }) {
  return (
    <div className="w-full mt-3">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row h-30">

          {/* Year */}
          <div className="pt-3 max-w-25">
            <p className="text-2xl text-right px-6 my-3">
              {item.year}
            </p>
          </div>

          {/* Line + Dot */}
          <div className="w-0.75 h-full bg-red-500 relative">
            <div className="w-3 h-3 -translate-x-1 translate-y-8 rounded-full bg-red-500 absolute" />
          </div>

          {/* Content */}
          <div className="w-full text-left space-y-1 pt-3 px-6">
            <h2 className="text-lg">{item.title}</h2>

            <h3 className="text-md hidden xl:block">
              {item.location}
            </h3>

            <h4 className="text-sm">{item.subtitle}</h4>
          </div>

        </div>
      ))}
    </div>
  );
}

function Section({ title, data }) {
  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Timeline data={data} />
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 py-20 px-6">
      
      <div className="flex flex-col md:flex-row gap-10">

        {/* Education */}
        <Section title="Education" data={educationData} />

        {/* Experience */}
        <Section title="Work Experience" data={experienceData} />

      </div>

    </section>
  );
}
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
    year: "2025",
    title: "Frontend Developer Intern",
    location: "Techdebugger, Damak",
    subtitle: "Built UI components using React and Tailwind CSS",
  },
  {
    year: "2026",
    title: "Eastern Auto Distributor Intern",
    location: "Biratnagar, Nepal",
    subtitle: "Developed responsive business website and UI improvements",
  },
];

function Timeline({ data }) {
  return (
    <div className="relative mt-6">
      <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-red-500" />

      <div className="space-y-10">
        {data.map((item, index) => (
          <div key={index} className="flex items-start relative">
            <div className="w-24 pr-6 text-right">
              <p className="text-2xl">{item.year}</p>
            </div>

            <div className="relative pl-10 flex-1">
              <span className="absolute left-0 top-2 w-3 h-3 bg-red-500 rounded-full transform -translate-x-1/2" />
              <h2 className="text-lg">{item.title}</h2>
              <h3 className="text-sm text-gray-600 hidden xl:block">
                {item.location}
              </h3>
              <h4 className="text-sm">{item.subtitle}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ title, data }) {
  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Timeline data={data} />
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 py-20 px-6">
      <div className="flex flex-col md:flex-row gap-10">
        <Section title="Education" data={educationData} />
        <Section title="Work Experience" data={experienceData} />
      </div>
    </section>
  );
}
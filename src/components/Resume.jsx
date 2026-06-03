const timelineData = [
  {
    year: "2015",
    title: "Shree Seven Seas Secondary English School",
    location: "Shivasatakshi, Jhapa",
    subtitle: "Class 7",
  },
  {
    year: "2018",
    title: "Shree Bhanu Secondary School",
    location: "Shivasatakshi, Jhapa",
    subtitle: "Secondary Education Examination (Class 10)",
  },
  {
    year: "2021",
    title: "Shree Saraswati Secondary School",
    location: "Damak, Jhapa",
    subtitle: "School Leaving Certificate (Class 10 + 2)",
  },
  {
    year: "2026",
    title: "Shreeyantra College",
    location: "Damak, Jhapa",
    subtitle: "BSc. CSIT",
  },
];

function Timeline() {
  return (
    <div className="w-full mt-3">
      {timelineData.map((item, index) => (
        <div key={index} className="flex flex-row h-30">
          
          {/* Year */}
          <div className="pt-3 max-w-25">
            <p className="text-2xl text-right px-6 my-3">
              {item.year}
            </p>
          </div>

          {/* Line */}
          <div className="w-0.75 h-full bg-accent dark:bg-white relative">
            <div className="w-3 h-3 -translate-x-1 translate-y-8 rounded-full bg-accent dark:bg-white absolute" />
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

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 py-20 px-6">
      <Timeline />
    </section>
  );
}
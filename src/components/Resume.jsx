export default function Resume() {
  return (
    <section id="resume" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Resume</h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-4">Experience</h3>
            <p className="text-sm text-gray-600">Front-end Developer (2024 - Present)</p>
            <p className="text-sm mt-2">Building responsive websites.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-4">Education</h3>
            <p className="text-sm text-gray-600">BCA Student</p>
            <p className="text-sm mt-2">Software development studies.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
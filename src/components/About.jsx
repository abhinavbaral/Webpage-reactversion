export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Who am I?</h2>
        <p className="text-gray-600">
          I’m a web designer and front-end developer passionate about building clean, modern websites.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
        <ul className="space-y-2 text-gray-600">
          <li>🎂 04/12/2005</li>
          <li>
            📧 <a className="text-red-500" href="mailto:abhinavbaral@gmail.com">Email</a>
          </li>
          <li>
            📞 <a className="text-red-500" href="tel:+9779842795750">Phone</a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p>HTML & CSS</p>
        <div className="w-full bg-gray-200 h-2 rounded mb-3">
          <div className="bg-red-500 h-2 rounded w-full"></div>
        </div>

        <p>JavaScript</p>
        <div className="w-full bg-gray-200 h-2 rounded mb-3">
          <div className="bg-red-500 h-2 rounded w-[95%]"></div>
        </div>

        <p>PHP</p>
        <div className="w-full bg-gray-200 h-2 rounded mb-3">
          <div className="bg-red-500 h-2 rounded w-[75%]"></div>
        </div>
      </div>
    </section>
  );
}
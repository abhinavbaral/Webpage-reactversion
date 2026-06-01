export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* ABOUT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Abhinav Baral
          </h3>

          <p className="text-sm leading-relaxed">
            Front-end developer focused on building clean, fast, and responsive websites.
          </p>

          <div className="flex gap-4 mt-5 text-sm">
            <a href="mailto:abhinavbaral@gmail.com" className="hover:text-white">
              Email
            </a>
            <a href="tel:+9779842795750" className="hover:text-white">
              Call
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL / CTA */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Let’s connect
          </h3>

          <p className="text-sm mb-4">
            Open for freelance work and collaborations.
          </p>

          <a
            href="#contact"
            className="inline-block bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Hire Me
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2026 Abhinav Baral. All rights reserved.</p>
          <a href="#home" className="hover:text-white mt-2 md:mt-0">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
export default function Stats() {
  return (
    <section id="stats" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-6">
        
        <div>
          <div className="text-3xl font-bold text-red-500">300+</div>
          <p className="text-gray-300 mt-2">Hours Worked</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-red-500">5+</div>
          <p className="text-gray-300 mt-2">Projects</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-red-500">3+</div>
          <p className="text-gray-300 mt-2">Clients</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-red-500">100+</div>
          <p className="text-gray-300 mt-2">Cups of Tea</p>
        </div>

      </div>
    </section>
  );
}
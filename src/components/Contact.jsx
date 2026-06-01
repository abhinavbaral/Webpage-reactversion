export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      <div className="space-y-3 text-gray-700">
        <p>
          Email:{" "}
          <a className="text-red-500" href="mailto:abhinavbaral@gmail.com">
            abhinavbaral@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a className="text-red-500" href="tel:+9779842795750">
            +977 9842795750
          </a>
        </p>
      </div>
    </section>
  );
}
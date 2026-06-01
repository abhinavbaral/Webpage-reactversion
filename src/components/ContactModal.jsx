export default function ContactModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-80 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">
          How would you like to contact?
        </h2>

        <div className="space-y-3">

          <a
            href="tel:+9779842795750"
            className="block bg-green-500 text-white py-2 rounded-lg"
          >
            📞 Call Now
          </a>

          <a
            href="mailto:abhinavbaral@gmail.com"
            className="block bg-red-500 text-white py-2 rounded-lg"
          >
            ✉️ Send Email
          </a>

        </div>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
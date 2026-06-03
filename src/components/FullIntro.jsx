import { useEffect, useState } from "react";
import profileImg from "../assets/img/main.jpg";
import { FiArrowLeft } from "react-icons/fi";

export default function FullIntro({ onClose }) {
  const roles = ["Developer", "Content Writer", "Web Designer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fixed inset-0 bg-black text-white flex flex-col lg:flex-row items-center justify-center gap-16 px-10 z-50">

     
      <button
        onClick={onClose}
        className="absolute top-6 left-6 text-2xl hover:text-red-500 hover:-translate-x-1 transition"
        aria-label="Go back"
      >
        <FiArrowLeft />
      </button>
=
      <div>
        <img
          src={profileImg}
          className="w-[70vw] lg:w-[32vw] rounded-full shadow-lg"
          alt="profile"
        />
      </div>
]
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">
          Hi, It's <span className="text-red-500">Abhinav</span>
        </h1>

        <h3 className="text-3xl mt-4">
          I am a{" "}
          <span className="text-red-500">{roles[index]}</span>
        </h3>

        <p className="text-gray-300 mt-4">
          I build clean and modern web experiences.
        </p>
      </div>

    </section>
  );
}
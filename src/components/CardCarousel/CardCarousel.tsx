import React from "react";
import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import data from "../../utils/constant/DataPaslon";

const CardCarousel: React.FC = () => {
  const paslonData = data;
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? paslonData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === paslonData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="my-8 relative">
      <h1 className="text-center text-3xl font-extrabold my-8">INFO PASLON</h1>
      <div className="bg-white mx-4 sm:mx-8 md:mx-20 lg:mx-24 px-4 sm:px-8 md:px-10 lg:ps-24 py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row gap-4 sm:gap-4 my-3 rounded-md place-content-center transition-transform duration-300 ease-in-out transform">
        <div className="sm:w-1/2 my-auto">
          <img
            className="rounded-md w-full lg:w-80"
            src={paslonData[current].image}
            alt={`Paslon ${paslonData[current].number}`}
          />
        </div>
        <div className="sm:w-1/2">
          <h1>Nomor Urut: {paslonData[current].number}</h1>
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl my-2">
            {paslonData[current].name}
          </h1>
          <p className="mt-2">Visi & Misi</p>
          <ul className="list-disc mx-2 sm:mx-5">
            {paslonData[current].visionMission.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-2">Koalisi:</p>
          <ul className="list-disc mx-2 sm:mx-5">
            {paslonData[current].coalition.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-0 h-full w-full flex items-center justify-between text-white font-bold px-1 sm:px-1 md:px-5 lg:px-10">
        <div className="w-7 h-7 lg:w-10 lg:h-10 bg-slate-700 rounded-full flex hover:bg-gray-950 ">
          <button onClick={nextSlide} className="my-auto">
            <span>
              <GrFormPrevious className="text-2xl sm:text-3xl lg:text-4xl" />
            </span>
          </button>
        </div>
        <div className="w-7 h-7 lg:w-10 lg:h-10 bg-slate-700 rounded-full flex hover:bg-gray-950">
          <button onClick={previousSlide} className="mx-auto my-auto">
            <span>
              <GrFormNext className="text-2xl sm:text-3xl lg:text-4xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;

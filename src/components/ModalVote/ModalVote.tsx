import React from "react";

const ModalVote: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto rounded-lg bg-white px-5 flex flex-col items-center  py-5 ">
        <h1 className="text-center text-3xl font-extrabold py-5 ">
          MASUKAN PILIHAN MU
        </h1>
        <div className="gap-3 columns-1  lg:columns-3">
          <div className="bg-white border-2  p-2 rounded-xl shadow-xl hover:bg-yellow-300 relative">
            <div className="w-14 h-14 rounded-full hover:bg-rose-500 bg-neutral-400 flex absolute top-0 right-0 border-2 border-white">
              <span className="text-white font-bold m-auto text-xl ">1</span>
            </div>
            <img
              className="rounded-xl"
              src="https://dummyimage.com/200x150"
              alt=""
            />
            <h1 className="font-semibold md:font-bold">
              Ahmad Putin Sudarajat
            </h1>
            <p className="-mt-1 text-xs md:text-sm">Membangun Negri Isekai</p>
            <p className="font-bold text-xs md:text-sm">Partai Pengusung :</p>
            <ul className="list-disc ms-6 text-xs md:text-sm">
              <li>Partai Persatuan</li>
              <li>Partai Golkar</li>
              <li>Partai Keadilan</li>
            </ul>
          </div>
          <div className="bg-white border-2  p-2 rounded-xl shadow-xl hover:bg-yellow-300 relative">
            <div className="w-14 h-14 rounded-full hover:bg-rose-500 bg-neutral-400 flex absolute top-0 right-0 border-2 border-white">
              <span className="text-white font-bold m-auto text-xl ">2</span>
            </div>
            <img
              className="rounded-xl"
              src="https://dummyimage.com/200x150"
              alt=""
            />
            <h1 className="font-semibold md:font-bold">
              Ahmad Putin Sudarajat
            </h1>
            <p className="-mt-1 text-xs md:text-sm">Membangun Negri Isekai</p>
            <p className="font-bold text-xs md:text-sm">Partai Pengusung :</p>
            <ul className="list-disc ms-6 text-xs md:text-sm">
              <li>Partai Persatuan</li>
              <li>Partai Golkar</li>
              <li>Partai Keadilan</li>
            </ul>
          </div>
          <div className="bg-white border-2  p-2 rounded-xl shadow-xl hover:bg-yellow-300 relative">
            <div className="w-14 h-14 rounded-full hover:bg-rose-500 bg-neutral-400 flex absolute top-0 right-0 border-2 border-white">
              <span className="text-white font-bold m-auto text-xl ">3</span>
            </div>
            <img
              className="rounded-xl"
              src="https://dummyimage.com/200x150"
              alt=""
            />
            <h1 className="font-semibold md:font-bold">
              Ahmad Putin Sudarajat
            </h1>
            <p className="-mt-1 text-xs md:text-sm">Membangun Negri Isekai</p>
            <p className="font-bold text-xs md:text-sm">Partai Pengusung :</p>
            <ul className="list-disc ms-6 text-xs md:text-sm">
              <li>Partai Persatuan</li>
              <li>Partai Golkar</li>
              <li>Partai Keadilan</li>
            </ul>
          </div>
        </div>
        <div className="md:flex lg:flex contents-center gap-4 my-6 ">
          <button className="border-2 px-32 py-1 font-semibold border-lime-900 rounded-lg hover:bg-lime-900 hover:text-white">
            RESET
          </button>
          <button className="border-2 px-32 py-1 font-semibold border-lime-900 rounded-lg hover:bg-lime-900 hover:text-white">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVote;

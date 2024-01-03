import React from "react";

const Info: React.FC = () => {
  return (
    <div>
      <div className="bg-white py-9">
        <h1 className="text-center text-3xl font-extrabold mb-10 ">
          INFO PEMILU TERUPDATE
        </h1>
        <div className="flex item-center justify-center gap-20">
          <div>
            <h1 className="text-center font-bold text-xl mb-2">Hasil :</h1>
            <img
              src="https://dummyimage.com/250x250"
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-pink-500 px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="py-1 px-1 border-2 rounded-lg bg-red-800 border-white">
                  <p className="text-xs font-bold text-center text-white">
                    No <p>Paslon</p> <p className="text-lg -mt-1">3</p>
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-red-800">
                    Ahmed Putin Sudarajat
                  </h1>
                  <h1 className="text-lg font-bold text-red-800 -mt-2">78%</h1>
                </div>
              </div>
            </div>
            <div className="bg-yellow-400 px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="py-1 px-1 border-2 rounded-lg bg-red-800 border-white">
                  <p className="text-xs font-bold text-center text-white">
                    No <p>Paslon</p> <p className="text-lg -mt-1">3</p>
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-red-800">
                    Ahmed Putin Sudarajat
                  </h1>
                  <h1 className="text-lg font-bold text-red-800 -mt-2">78%</h1>
                </div>
              </div>
            </div>
            <div className="bg-sky-500 px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="py-1 px-1 border-2 rounded-lg bg-red-800 border-white">
                  <p className="text-xs font-bold text-center text-white">
                    No <p>Paslon</p> <p className="text-lg -mt-1">3</p>
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-red-800">
                    Ahmed Putin Sudarajat
                  </h1>
                  <h1 className="text-lg font-bold text-red-800 -mt-2">78%</h1>
                </div>
              </div>
            </div>
            <button className="bg-lime-800 rounded-md font-bold text-white text-sm py-1">
              MASUKAN SUARAMU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

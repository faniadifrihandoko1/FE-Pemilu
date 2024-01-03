import React from "react";

const AddPaslon: React.FC = () => {
  return (
    <div>
      <div className="container px-6 max-w-xl sm:max-w-6xl mb-14 mt-10 mx-auto   md:px-16 xl:px-7">
        <h1 className="container  text-center font-bold text-3xl my-6">
          ADD PASLON
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-5 md:px-9 ">
          <div>
            <img
              className="h-80 w-full xl:h-96 "
              src="https://source.unsplash.com/600x600?computer"
              alt=""
            />
          </div>
          <div>
            <div className="md:max-w-3xl">
              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Nama
              </label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 mt-1 text-sm font-medium text-gray-900 dark:text-white">
                Nomor Urut
              </label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 mt-1 text-sm font-medium text-gray-900 dark:text-white">
                Visi Misi
              </label>
              <textarea
                id="message"
                className="block resize-y p-2.5 w-full md:h-40 xl:h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              />
            </div>
            <div className="mt-4 sm:pr-9 md:px-0">
              <button className="bg-lime-700 w-full rounded-lg py-1 font-bold text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaslon;

import React from "react";

const ListVoter: React.FC = () => {
  return (
    <div>
      <div className="p-5 md:px-24  mb-10">
        <h1 className=" container text-center font-bold text-3xl my-5">
          LIST VOTER
        </h1>
        <div className="overflow-auto rounded-lg">
          <table className="w-full text-sm text-left  my-3 rtl:text-right text-black ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  No
                </th>
                <th scope="col" className="px-3 py-3 text-black font bold">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Alamat
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Paslon
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">1</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Fani Adi Frihandoko
                </th>
                <td className="px-6 py-4">Cileungsi</td>
                <td className="px-6 py-4">Laki-laki</td>
                <td className="px-6 py-4 text-blue-600">Putin</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">2</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Fadil Zafran
                </th>
                <td className="px-6 py-4">Jakarta Barat</td>
                <td className="px-6 py-4">Laki-laki</td>
                <td className="px-6 py-4 text-blue-600">Trump</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4">3</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Amanada Fitri
                </th>
                <td className="px-6 py-4">Jakarta Selatan</td>
                <td className="px-6 py-4">Perempuan</td>
                <td className="px-6 py-4 text-blue-600">Erdogan</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 ">4</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Farhan Alfariz
                </th>
                <td className="px-6 py-4">Jakarta Timur</td>
                <td className="px-6 py-4">Laki-laki</td>
                <td className="px-6 py-4 text-blue-600">Erdogan</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4">5</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Tantowi Yahya
                </th>
                <td className="px-6 py-4">Jakarta Pusat</td>
                <td className="px-6 py-4">Laki-laki</td>
                <td className="px-6 py-4 text-blue-600">Putin</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-xl font-bold ">
            TOTAL SUARA TERKUMPUL : 1000 Voters
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ListVoter;

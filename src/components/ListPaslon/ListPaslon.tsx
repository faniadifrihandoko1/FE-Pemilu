import React from "react";

const ListPastlon: React.FC = () => {
  return (
    <div>
      <div className="p-5 md:px-24   h-screen">
        <h1 className=" container text-center font-bold text-3xl my-5">
          LIST PASLON
        </h1>
        <div className="overflow-auto rounded-lg">
          <table className="w-full text-sm text-left  my-3 rtl:text-right text-black ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  No Urut
                </th>
                <th scope="col" className="px-3 py-3 text-black font bold">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Visi & Misi
                </th>
                <th scope="col" className="px-6 py-3 text-black font bold">
                  Koalisi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-bold">1</td>
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src="https://source.unsplash.com/50x50?computer"
                    alt="Gambar"
                  />
                </th>
                <td className="px-6 py-4">Ahmad Putin Sudrajat</td>
                <td className="px-6 py-4">
                  <ul className="list-disc">
                    <li>Memindahkan Indonesia ke Mars</li>
                    <li>Memmbangun Negri</li>
                    <li>Membangun Sekolah</li>
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc">
                    <li>PKB BEKASI</li>
                    <li>PERSIB BANDUNG</li>
                    <li>PERSIP PEKALONGAN</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPastlon;

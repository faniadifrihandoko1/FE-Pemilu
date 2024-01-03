import React from "react";
import logo from "../../assets/Dumbways.png";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex bg-black items-center px-24 py-5 gap-5">
        <img className="h-20 w-20" src={logo} alt="" />
        <div className="text-white ">
          <h3 className="font-bold">DUMBWAYS.ID</h3>
          <p className="text-sm -mt-1 text-gray-200">
            Jl. Elang IV, Sawah Lama, Kec. Ciputat,
            <p className="-mt-1"> Kota Tanggerang Selatan, Banten 15413</p>
          </p>
        </div>
      </div>
      <hr />
      <div className="text-center py-4 bg-black text-white">
        <p>Komisi Pemilihan Umum Dumbways.id | Fani Adi Frihandoko 2023</p>
      </div>
    </div>
  );
};

export default Footer;

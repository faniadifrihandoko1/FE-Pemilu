import React from "react";
import vote from "../../assets/vote3.png";
import logo from "../../assets/dumbways2.png";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="flex  bg-gradient-to-r from-red-400 via-red-600 to-orange-800  mx-4 lg:mx-24 my-10 rounded-2xl">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="">
            <img className="h-44 w-96 md:w-56 rounded-2xl" src={logo} alt="" />
          </div>
          <div className="self-end mt-7 mb-0 md:mb-4 px-0 md:px-5">
            <h1 className="font-bold text-white text-4xl text-center sm:text-left md:text-5xl">
              SELAMAT DATANG
            </h1>
            <h3 className="font-bold text-white text-center mt-4 text-xl sm:text-left md:text-xl">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI
              NAMA
            </h3>
          </div>
        </div>
        <div className="ms-48 hidden sm:block">
          <img src={vote} alt="" className="h-80 w-72 " />
        </div>
      </div>
    </div>
  );
};

export default Hero;

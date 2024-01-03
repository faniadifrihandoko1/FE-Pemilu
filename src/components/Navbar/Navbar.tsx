import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Dumbways.png";
import profile from "../../assets/profile.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar: React.FC = () => {
  const isLogin = false;
  const [open, setIsOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 px-8 md:px-24">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <Link to={"/"}>
            <img className="h-10 inline" src={logo} alt="" />
          </Link>

          <Link
            to="/"
            className="text-xl lg:text-2xl font-[Poppins]  font-medium text-white mx-4 hover:text-cyan-500"
          >
            PEMILU <span className="hidden lg:inline">PRESIDEN</span> DUMBWAYS
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!open)}
          className="text-3xl text-white absolute top-5 right-8 cursor-pointer md:hidden"
        >
          <IoMenu className={open ? "hidden" : "block"} />
          <IoClose className={open ? "block" : "hidden"} />
        </div>
        <ul
          className={`${
            open ? "block" : "hidden"
          } text-white md:flex transition-all duration-500 ease-in`}
        >
          <li className="my-6 md:my-0">
            <Link
              className="text-xl hover:text-cyan-400 duration-500"
              to="/vote"
            >
              Partai
            </Link>
            <span className="hidden md:inline text-xl mx-4">|</span>
          </li>
          <li className="my-6 md:my-0">
            <Link
              className="text-xl hover:text-cyan-400 duration-500"
              to="/vote"
            >
              Paslon
            </Link>
            <span className="hidden md:inline text-xl mx-4">|</span>
          </li>
          <li className="my-6 md:my-0 me-8">
            <Link
              className="text-xl hover:text-cyan-400 duration-500"
              to="/vote"
            >
              Voting
            </Link>
          </li>
          <button
            type="button"
            className={`${
              isLogin ? "block" : "hidden"
            }  flex text-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={profile}
              alt="user photo"
            />
          </button>
          <button
            className={`${
              isLogin ? "hidden" : "block"
            } font-semibold bg-white px-4 py-0.5 rounded  text-black hover:bg-cyan-500`}
          >
            LOGIN
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

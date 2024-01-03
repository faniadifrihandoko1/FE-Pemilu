import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <div className=" bg-white m-5 rounded-xl p-5  sm:mx-20  md:mx-15 xl:mx-24 ">
        <h1 className="text-center text-3xl font-bold">LOGIN</h1>
        <div className="max-w-md mx-auto mt-3">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="max-w-md mx-auto mt-3">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mt-4 max-w-md mx-auto ">
          <button className="bg-lime-700 w-full py-1 rounded-xl text-white font-bold hover:bg-lime-950">
            SUBMIT
          </button>
        </div>
        <p className="text-center mt-2">
          Belum memiliki akun?
          <span className="text-blue-700 italic underline">
            <a href=""> Register</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

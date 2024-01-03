import React from "react";

const CardDashboard: React.FC = () => {
  return (
    <div>
      <div className="bg-white py-5">
        <h1 className="text-center font-bold text-3xl my-5">DASHBOARD</h1>
        <div className="bg-500 place-content-center  md:flex md:gap-10">
          <div className="my-3">
            <div className="w-12 h-12 border-4 flex-col border-black rounded-full hover:bg-rose-500 bg-yellow-100 flex mx-auto ">
              <span className="text-black font-bold m-auto text-xl ">1</span>
            </div>
            <div className="h-60 w-64 mx-auto p-2 shadow-md shadow-black bg-yellow-300 mt-2 rounded-xl">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNzAzOTU1MTE2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
                alt=""
              />
              <h1 className="text-xl font-bold outline-6 mt-1">Ahmad Putin</h1>
              <p className="text-sm font-semibold">Akumulasi : 45%</p>
              <p className="text-sm font-semibold">Jumlah Vote : 45%</p>
            </div>
          </div>
          <div className="my-3">
            <div className="w-12 h-12 border-4  border-black rounded-full hover:bg-rose-500 bg-yellow-100 flex mx-auto ">
              <span className="text-black font-bold m-auto text-xl ">2</span>
            </div>
            <div className="h-60 w-64 mx-auto p-2 shadow-md shadow-black bg-yellow-300 mt-2 rounded-xl">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNzAzOTU1MTE2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
                alt=""
              />
              <h1 className="text-xl font-bold outline-6 mt-1">Ahmad Putin</h1>
              <p className="text-sm font-semibold">Akumulasi : 45%</p>
              <p className="text-sm font-semibold">Jumlah Vote : 45%</p>
            </div>
          </div>
          <div className="my-3">
            <div className="w-12 h-12 border-4  border-black rounded-full hover:bg-rose-500 bg-yellow-100 flex mx-auto ">
              <span className="text-black font-bold m-auto text-xl ">3</span>
            </div>
            <div className="h-60 w-64 mx-auto p-2 shadow-md shadow-black bg-yellow-300 mt-2 rounded-xl">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJ8fHx8fHwxNzAzOTU1MTE2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
                alt=""
              />
              <h1 className="text-xl font-bold outline-6 mt-1">Ahmad Putin</h1>
              <p className="text-sm font-semibold">Akumulasi : 45%</p>
              <p className="text-sm font-semibold">Jumlah Vote : 45%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;

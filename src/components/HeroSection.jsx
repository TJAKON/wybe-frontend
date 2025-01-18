import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* <div className="place-items-center text-center w-full">
        <img src="/banner.png" alt="Rocket" className="w-full bg-transparent" />
      </div> */}
      <div className=" text-white py-8 flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        {/* Left Section */}

        <div className="flex-1 place-items-center space-y-4 text-center">
          <img src="/wybe.svg" alt="Rocket" className="bg-black" />
          <p className="text-lg font-jetbrains text-gray-300">
            Innovative solutions at your fingertips
          </p>
        </div>

        {/* Right Section */}

        <div className="p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
          <div className="flex items-center bg-orange space-x-4 border-4 rounded-xl p-4 border-lightGray mb-3">
            <div className=" w-auto h-auto rounded-lg border-4 border-black flex items-center justify-center">
              <img src="/Rectangle1665.jpg" className="rounded-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-orange-500 uppercase">
                Created By:
              </h2>
              <h3 className="text-2xl font-bold text-white">Coin Name</h3>
              <p className="text-sm text-gray-400 mt-2">
                Coin description goes here. This is a placeholder for coin
                details.
              </p>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">
                  <strong>Market Cap:</strong> $1,000,000
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Listed On:</strong> Suplaunch
                </p>
              </div>
              <div className="mt-4">
                <button className=" bg-purple hover:bg-white hover:text-black px-4 py-2 rounded-lg text-white font-bold">
                  More Details
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-purple space-x-4 border-4 rounded-xl p-4 border-white mb-3">
            <div className=" w-auto h-auto rounded-lg border-4 border-black flex items-center justify-center">
              <img src="/Rectangle1665.jpg" className="rounded-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-orange-500 uppercase">
                Created By:
              </h2>
              <h3 className="text-2xl font-bold text-white">Coin Name</h3>
              <p className="text-sm text-gray-400 mt-2">
                Coin description goes here. This is a placeholder for coin
                details.
              </p>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">
                  <strong>Market Cap:</strong> $1,000,000
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Listed On:</strong> Suplaunch
                </p>
              </div>
              <div className="mt-4">
                <button className=" bg-orange hover:bg-white hover:text-black px-4 py-2 rounded-lg text-white font-bold">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default HeroSection;

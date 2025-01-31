import React from "react";
import { Link } from "react-router-dom";
import mockData from "./mockData"; // Importing the mock data

const HeroSection = () => {
  const highestProgressCard = mockData.reduce((max, item) =>
    item.progress > max.progress ? item : max
  );
  const lowestProgressCard = mockData.reduce((min, item) =>
    item.progress < min.progress ? item : min
  );

  return (
    <div className="text-white mb-5 border-b">
      {/* <div className="flex-1 space-y-6 text-center justify-items-center md:text-left">
        <img
          src="/wybeBanner.jpg"
          alt="Logo"
          className="mx-auto md:mx-0 w-full h-auto object-cover"
        />
      </div> */}
      {/* <div className="flex-1 relative hidden sm:block w-full text-center justify-items-center md:text-left">
        <img
          // src="/window_banner.svg"
          src="/wybeBanner.jpg"
          alt="Logo"
          className="mx-auto md:mx-0 w-full h-auto"
        />
        <div className=" absolute w-full px-4 flex flex-col md:flex-row items-center justify-center bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-1/3 justify-between">

          <Link to="/launch">
            <button className="px-8 py-3 rounded-2xl font-bold text-xl font-poppins text-white bg-transparent border border-white hover:bg-white hover:text-gray_1000 transition-all duration-300">
              How it works
            </button>
          </Link>
          <Link to="/launch">
            <button className="px-8 py-3 rounded-2xl font-bold text-xl font-poppins bg-orange border border-white hover:opacity-80 hover:text-white transition-all duration-300">
              Launch Token
            </button>
          </Link>
        </div>
        </div>
      </div> */}

      <div className="flex-1 relative hidden sm:block w-full text-center md:text-left">
        {/* Background Banner */}
        <img
          src="/banner.svg"
          alt="Logo"
          className="mx-auto md:mx-0 w-full h-auto object-cover rounded-lg"
        />

        {/* Overlay Buttons Container */}
        <div className="hidden xl:block absolute w-full px-4 items-center justify-center bottom-5 ">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-4 sm:gap-6">
            {/* How It Works Button */}
            <Link to="/launch">
              <button className="px-6 lg:px-8 py-3 rounded-xl font-bold text-sm xl:text-xl font-poppins text-white bg-transparent border border-white hover:bg-white hover:text-gray_900 transition-all duration-300">
                How it works
              </button>
            </Link>

            {/* Launch Token Button */}
            <Link to="/launch">
              <button className="px-6 lg:px-8 py-3 rounded-xl font-bold text-sm xl:text-xl font-poppins bg-orange border border-white hover:opacity-80 hover:text-white transition-all duration-300">
                Launch Token
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 block sm:hidden w-auto sm:h-[500px] text-center justify-items-center md:text-left">
        <img
          src="/banner_mobile.svg"
          // src="/wybeBanner.jpg"
          alt="Logo"
          className="w-full h-auto"
        />
      </div>

      {/* <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 space-y-6 text-center justify-items-center md:text-left">
          <img
            src="/wybe.svg"
            alt="Logo"
            className="mx-auto md:mx-0 w-72 h-auto"
          />
          <p className="text-lg font-light text-gray_300">
            Innovative solutions at your fingertips
          </p>
        </div>

        <div className="flex-1 mt-8 md:mt-0 space-y-6">
          <div className="rounded-xl border border-gray_700 p-6 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-48 h-48 rounded-lg overflow-hidden border-gray_700 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={highestProgressCard.image}
                alt={highestProgressCard.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-sm font-semibold text-orange uppercase">
                Created By: {highestProgressCard.creator}
              </h2>
              <h3 className="text-2xl font-bold text-white">
                {highestProgressCard.name} ({highestProgressCard.symbol})
              </h3>
              <p className="text-sm text-gray_400 mt-2">
                {highestProgressCard.description}
              </p>
              <div className="mt-4">
                <p className="text-gray_500 text-sm">
                  <strong>Market Cap:</strong> {highestProgressCard.marketCap}
                </p>
                <p className="text-gray_500 text-sm">
                  <strong>Listed On:</strong> Wybe
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-orange hover:bg-purple px-4 py-2 rounded-lg text-white font-bold transition">
                  More Details
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray_700 p-6 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-48 h-48 rounded-lg overflow-hidden border-gray-600 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={lowestProgressCard.image}
                alt={lowestProgressCard.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-sm font-semibold text-orange uppercase">
                Created By: {lowestProgressCard.creator}
              </h2>
              <h3 className="text-2xl font-bold text-white">
                {lowestProgressCard.name} ({highestProgressCard.symbol})
              </h3>
              <p className="text-sm text-gray_400 mt-2">
                {lowestProgressCard.description}
              </p>
              <div className="mt-4">
                <p className="text-gray_500 text-sm">
                  <strong>Market Cap:</strong> {lowestProgressCard.marketCap}
                </p>
                <p className="text-gray_500 text-sm">
                  <strong>Listed On:</strong> Wybe
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-orange hover:bg-purple px-4 py-2 rounded-lg text-white font-bold transition">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

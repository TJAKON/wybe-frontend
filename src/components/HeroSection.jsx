import React from "react";
import mockData from "./mockData"; // Importing the mock data

const HeroSection = () => {
  const highestProgressCard = mockData.reduce((max, item) =>
    item.progress > max.progress ? item : max
  );
  const lowestProgressCard = mockData.reduce((min, item) =>
    item.progress < min.progress ? item : min
  );

  return (
    <div className="text-white pb-5">
      {/* <div className="flex-1 space-y-6 text-center justify-items-center md:text-left">
        <img
          src="/wybeBanner.jpg"
          alt="Logo"
          className="mx-auto md:mx-0 w-full h-auto object-cover"
        />
      </div> */}
      <div className="flex-1 hidden sm:block w-full text-center justify-items-center md:text-left">
        <img
          src="/wybeBanner.jpg"
          alt="Logo"
          className="mx-auto md:mx-0 w-full h-auto"
        />
      </div>
      <div className="flex-1 block sm:hidden w-auto sm:h-[500px] text-center justify-items-center md:text-left">
        <img
          src="/wybeBanner.jpg"
          alt="Logo"
          className="mx-auto md:mx-0 w-auto h-[500px] sm:h-[500px] object-cover"
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

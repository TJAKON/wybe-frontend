import React from "react";
import { useNavigate } from "react-router-dom";

const LaunchCard = ({ image, name, creator, progress, id, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coins/${id}`);
  };

  return (
    <div
      className="bg-stone p-4 rounded-xl cursor-pointer hover:bg-transparent border-4 hover:border-green border-purple"
      onClick={handleClick}
    >
      <div className=" rounded-lg flex mb-3 h-32 gap-3">
        {/* <span className="text-gray-400">IMG</span> */}
        <img
          src={image}
          // alt="Rocket"
          className="rounded-xl w-24 h-24 border-4 border-orange"
        />

        <div className="text-left">
          <h3 className="text-2xl font-bold text-white">
            {name}(
            <span className="text-lg font-bold text-orange uppercase">
              {creator}
            </span>
            )
          </h3>
          {/* <h2 className="text-lg font-bold text-orange-500 uppercase">
          </h2> */}
          <p className="text-sm text-gray-400 mt-2">{description}</p>
        </div>
      </div>
      {/* <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">Creator: {creator}</p> */}

      {/* <div className="relative bg-purple h-4 mt-2 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-orange rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}
      <div className="relative bg-purple h-4 mt-2 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green via-orange  to-yellow-400 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* <div className="flex-1"> */}
      {/* <h2 className="text-lg font-bold text-orange-500 uppercase">
          {creator}
        </h2>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-gray-400 mt-2">{description}</p> */}

      {/* <div className="mb-3 mt-4">
          <div class="mb-6">
            <label for="labels-range-input" class="sr-only">
              Labels range
            </label>
            <input
              id="labels-range-input"
              type="range"
              value={progress}
              min="0"
              max="100"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div> */}
      {/* <div className="mt-4">
          <button className=" w-full bg-purple hover:bg-white hover:text-black px-4 py-2 rounded-lg text-white font-bold">
            More Details
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default LaunchCard;

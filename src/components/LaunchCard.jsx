import React from "react";
import { useNavigate } from "react-router-dom";

const LaunchCard = ({
  id,
  name,
  creator,
  image,
  progress,
  description,
  symbol,
  marketCap,
  price,
  holderDistribution,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coins/${id}`);
  };

  return (
    <div
      className="bg-gray_1000 text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border-2 border-black hover:border-yellow hover:bg-stone cursor-pointer"
      onClick={handleClick}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-xl"
        />
        <div>
          <h3 className="flex text-lg justify-between font-bold">
            <span>
              {name} <span className="text-sm text-gray_400">({symbol})</span>
            </span>
            {/* <span className="text-sm text-gray_400 border border-yellow mb-0 ">Classic bonding curve</span> */}
          </h3>
          {/* <p className="text-sm text-gray_400">Created by: {creator}</p> */}
          <p className="text-sm text-gray_300 line-clamp-3">{description}</p>
        </div>
      </div>

      {/* Description */}

      {/* Progress Bar */}
      <div className="mt-4 font-jetbrains">
        <div className="flex justify-between text-sm text-gray_400 mb-1">
          <div className="flex gap-2">
            <span>{progress}%</span>
            <span>MC ${marketCap}</span>
          </div>
          <div className="flex gap-2">
            <span>{1} day</span>
            <span>18 tsx</span>
            <span>${18} vol</span>
          </div>
        </div>
        <div className="relative bg-gray_700 h-2 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-stone via-yellow to-orange rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Additional Info */}
      {/* <div className=" flex justify-between text-sm">
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Whales:</strong> {holderDistribution.whales} |{" "}
          <strong>Investors:</strong> {holderDistribution.investors} |{" "}
          <strong>Retail:</strong> {holderDistribution.retail}
        </p>
      </div> */}
    </div>
  );
};

export default LaunchCard;

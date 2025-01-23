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
      className=" text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray_700 hover:border-yellow hover:bg-stone cursor-pointer"
      onClick={handleClick}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-yellow"
        />
        <div>
          <h3 className="text-lg font-bold">
            {name} <span className="text-sm text-gray_400">({symbol})</span>
          </h3>
          <p className="text-sm text-gray_400">Created by: {creator}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray_300 line-clamp-3">{description}</p>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray_400 mb-1">
          <span>Market Cap: {marketCap}</span>
          <span>{progress}%</span>
        </div>
        <div className="relative bg-gray_700 h-2 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-stone via-yellow to-orange rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 text-sm">
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Whales:</strong> {holderDistribution.whales} |{" "}
          <strong>Investors:</strong> {holderDistribution.investors} |{" "}
          <strong>Retail:</strong> {holderDistribution.retail}
        </p>
      </div>
    </div>
  );
};

export default LaunchCard;

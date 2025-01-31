import React, { useState } from "react";
import mockData from "../components/mockData";
import LaunchCard from "./LaunchCard";

const SearchFilter = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Tabs: Define the categories
  const tabs = ["All", "Trading", "Finalized", "MC", "New"];

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-white w-full py-3">
      {/* Search and Filter Inputs */}
      <div className="flex flex-col sm:flex-row justify-center items-center py-4 space-y-4 sm:space-y-0 sm:space-x-6">
        <input
          type="text"
          placeholder="Search new tokens"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
        />
        <select className="w-full sm:w-1/4 md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange">
          <option value="">Filter by</option>
          <option value="rank">Rank</option>
          <option value="date">Launch Date</option>
          <option value="chain">Blockchain</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto justify-center items-center py-4 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab.toLowerCase())}
            className={`px-4 py-2 rounded-2xl transition duration-300 ${
              activeTab === tab.toLowerCase()
                ? "bg-orange text-white font-bold"
                : "bg-gray_1000 hover:bg-gray_800 text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content for Tabs */}
      <div className="py-8">
        {activeTab === "all" && (
          <>
            <p className="text-center text-gray_300">All coins listing</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
              {mockData.map((coin) => (
                <LaunchCard key={coin.id} {...coin} />
              ))}
            </div>
          </>
        )}
        {activeTab === "trading" && (
          <>
            <p className="text-center text-gray_300">Top trading tokens...</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
              {mockData.map((coin) => (
                <LaunchCard key={coin.id} {...coin} />
              ))}
            </div>
          </>
        )}
        {activeTab === "finalized" && (
          <>
            <p className="text-center text-gray_300">
              Finalized projects and tokens...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
              {mockData.map((coin) => (
                <LaunchCard key={coin.id} {...coin} />
              ))}
            </div>
          </>
        )}
        {activeTab === "top mc" && (
          <>
            <p className="text-center text-gray_300">
              Top market cap tokens...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
              {mockData.map((coin) => (
                <LaunchCard key={coin.id} {...coin} />
              ))}
            </div>
          </>
        )}
        {activeTab === "new" && (
          <>
            <p className="text-center text-gray_300">
              Newly launched tokens...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
              {mockData.map((coin) => (
                <LaunchCard key={coin.id} {...coin} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

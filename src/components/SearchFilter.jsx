import React from "react";

const SearchFilter = () => {
  return (
    <div className=" text-white flex flex-col sm:flex-row justify-center items-center py-4 space-y-4 sm:space-y-0 sm:space-x-6">
      <input
        type="text"
        placeholder="Search new tokens"
        className="px-4 py-2 bg-gray text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
      />
      <select className="px-4 py-2 bg-gray text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange">
        <option value="">Filter by</option>
        <option value="rank">Rank</option>
        <option value="date">Launch Date</option>
      </select>
    </div>
  );
};

export default SearchFilter;

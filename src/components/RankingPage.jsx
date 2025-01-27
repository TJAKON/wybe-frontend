import React from "react";
import Navbar from "./Navbar";
import mockData from "./mockData"; // Import the mock data

const RankingPage = () => {
  return (
    <div className="min-h-screen text-off_white ">
      {/* Page Title */}
      <section className="text-center py-8">
        <h2 className="flex w-full justify-center items-center text-center gap-2 text-4xl font-bold text-orange">
        <img src="/wybe.svg" className="w-16 h-16" alt="Wybe Logo" />RANKING
        </h2>
        <p className="text-sm text-gray-400 mt-2 font-jetbrains">
          THE DATA WAS LAST UPDATED AT 0000/00/00 00:00:00 (UTC+5:30)
        </p>
      </section>

      {/* Ranking Tables */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16 py-8 font-jetbrains">
        {/* Launching Soon */}
        <div className="bg-gray_1000 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-light_purple">
            LAUNCHING SOON!
          </h3>
          <table className="w-full text-left text-gray_300">
            <thead>
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">NAME (SYMBOL)</th>
                <th className="py-2">MARKET CAP</th>
                <th className="py-2">PROGRESS</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="hover:bg-gray_800">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2">
                    <div className="relative bg-gray_700 h-4 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange to-red rounded"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Market Cap Ranking */}
        <div className="bg-gray_1000 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-light_green">
            MARKET CAP RANKING
          </h3>
          <table className="w-full text-left text-gray_300">
            <thead>
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">TOKEN NAME</th>
                <th className="py-2">MARKET CAP</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="hover:bg-gray_800">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 24HR Price Increase */}
        <div className="bg-gray_1000 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-dark_orange">
            24HR PRICE INCREASE
          </h3>
          <table className="w-full text-left text-gray_300">
            <thead>
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">NAME (SYMBOL)</th>
                <th className="py-2">MARKET CAP</th>
                <th className="py-2">24HR %</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="hover:bg-gray_800">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2 text-green">+0.00%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 24HR Trading Volume */}
        <div className="bg-gray_1000 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-dark_pink">
            24HR TRADING VOLUME (TRX)
          </h3>
          <table className="w-full text-left text-gray_300">
            <thead>
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">NAME (SYMBOL)</th>
                <th className="py-2">MARKET CAP</th>
                <th className="py-2">24HR TRADING VOLUME</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="hover:bg-gray_800">
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2 text-yellow">N/A</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RankingPage;

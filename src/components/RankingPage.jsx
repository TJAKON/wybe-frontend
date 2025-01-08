import React from "react";
import Navbar from "./Navbar";
import mockData from "./mockData"; // Import the mock data

const RankingPage = () => {
  return (
    <div className="min-h-screen text-white radial-gradient(ellipse at bottom left, #171717, #0f172a) bg-blur">
      {/* Page Title */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold">
          <span className="text-orange capitalize">WYBE</span> RANKING
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          THE DATA WAS LAST UPDATED AT 0000/00/00 00:00:00 (UTC+5:30)
        </p>
      </section>

      {/* Ranking Tables */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16 py-8 font-jetbrains">
        {/* Launching Soon */}
        <div className="bg-white bg-opacity-10 backdrop-blur-0 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">LAUNCHING SOON!</h3>
          <table className="w-full text-left">
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
                <tr key={item.id}>
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2">
                    <div className="relative bg-black h-4 rounded">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange via-yellow-500 to-red-500 rounded"
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
        <div className="bg-white bg-opacity-10 backdrop-blur-0 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">MARKET CAP RANKING</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">TOKEN NAME</th>
                <th className="py-2">MARKET CAP</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id}>
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
        <div className="bg-white bg-opacity-10 backdrop-blur-0 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">24HR PRICE INCREASE</h3>
          <table className="w-full text-left">
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
                <tr key={item.id}>
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2">+0.00%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 24HR Trading Volume */}
        <div className="bg-white bg-opacity-10 backdrop-blur-0 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">24HR TRADING VOLUME (TRX)</h3>
          <table className="w-full text-left">
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
                <tr key={item.id}>
                  <td className="py-2">{item.id}</td>
                  <td className="py-2">
                    {item.name} ({item.symbol})
                  </td>
                  <td className="py-2">{item.marketCap}</td>
                  <td className="py-2">N/A</td>
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

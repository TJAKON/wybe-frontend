import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockData from "./mockData";

import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "./StocksHistory";

IgrFinancialChartModule.register();

const CoinDetailsSection = () => {
  const { coinId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stocks = await StocksHistory.getMultipleStocks();
      setData(stocks);
    };
    fetchData();
  }, []);

  // Convert coinId to a number and find the coin
  const coin = mockData.find((coin) => coin.id === Number(coinId));

  if (!coin) {
    return <div className="text-center mt-10 text-white">Coin not found</div>;
  }

  return (
    <div className=" text-white min-h-screen w-full py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-4">
          <div className="bg-purple cursor-pointer border-2 border-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img src={coin.image} alt={coin.name} className="w-16 h-16" />
              <div>
                <h2 className="text-lg font-bold">Created By:</h2>
                <h3 className="text-2xl font-bold">{coin.creator}</h3>
              </div>
            </div>
            <p className="mt-4">{coin.description}</p>
            <p className="mt-2 font-bold">Contract: {coin.contractAddress}</p>
          </div>

          {/* Coin Visual */}
          <div className="bg-gray border-2 cursor-pointer hover:bg-transparent border-purple p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">{coin.name}</h2>
            <img
              src={coin.image}
              alt={coin.name}
              className="w-full h-full` object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          {/* Coin Details Card */}

          <div className=" border-2 border-purple rounded-lg shadow-lg">
            <div className=" " style={{ height: "732px" }}>
              <IgrFinancialChart
                width="100%"
                height="100%"
                // chartType="Line"
                thickness={2}
                // chartTitle="Google vs Microsoft Changes"
                // subtitle="Between 2013 and 2017"
                yAxisMode="PercentChange"
                // yAxisTitle="Percent Changed"
                dataSource={data}
              />
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-1 space-y-4">
          {/* Coin Stats */}

          {/* Buy/Sell Box */}
          <div className="bg-gray border-2 border-purple p-6 rounded-lg shadow-lg">
            {/* Buy/Sell Buttons */}
            <div className="flex justify-between">
              <button className="bg-orange px-4 py-2 rounded-lg font-bold">
                Buy
              </button>
              <button className="bg-purple px-4 py-2 rounded-lg font-bold">
                Sell
              </button>
            </div>
            {/* Amount Input */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">Enter the Amount</h3>
              <div className="flex items-center mt-2 space-x-2">
                <input
                  type="number"
                  className="bg-white text-black px-4 py-2 w-full rounded-lg focus:outline-none"
                  placeholder="0.00"
                />
                <span className="text-lg font-bold">{coin.symbol}</span>
              </div>
            </div>
            {/* Quick Amounts */}
            <div className="mt-4 space-x-2">
              <button className="px-4 py-2 bg-gray-700 rounded-lg">100</button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg">500</button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg">1000</button>
              <button className="px-4 py-2 bg-gray-700 rounded-lg">
                10000
              </button>
            </div>
            <button className="w-full bg-purple mt-4 bg-orange-500 px-4 py-2 rounded-lg font-bold">
              Connect Wallet
            </button>
          </div>

          {/* Bonding Curve */}
          <div className="bg-gray border-2 border-purple p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Bonding Curve Progress</h3>
            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
              <div
                className="bg-orange h-4"
                style={{ width: `${coin.progress}%` }}
              ></div>
            </div>
            <p className="mt-4 text-sm">
              Additional description about the bonding curve and its relevance.
            </p>
          </div>

          {/* Holder Distribution */}
          <div className="bg-gray border-2 border-purple p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Holder Distribution</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm border-b pb-2">
                <span>Whales</span>
                <span>{coin.holderDistribution.whales}</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span>Investors</span>
                <span>{coin.holderDistribution.investors}</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span>Retail</span>
                <span>{coin.holderDistribution.retail}</span>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-gray border-2 border-purple p-6 rounded-lg shadow-lg">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <h3 className="font-bold text-lg">Comments</h3>
              <h3 className="font-bold text-lg">Trade History</h3>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full bg-white text-gray p-4 rounded-lg focus:outline-none"
                placeholder="Write your comment..."
                rows={3}
              ></textarea>
              <button className="w-full mt-2 bg-orange px-4 py-2 rounded-lg font-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsSection;

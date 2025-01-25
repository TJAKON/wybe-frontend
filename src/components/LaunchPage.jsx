import React from "react";

const LaunchPage = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-black to-stone">
        <h2 className="text-3xl sm:text-4xl font-extrabold capitalize leading-tight">
          LAUNCH YOUR TOKEN ON <span className="text-orange">WYBE</span>
        </h2>
        <p className="mt-4 text-gray_400 text-base sm:text-lg">
          The fastest and most cost-effective way to launch your token.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <img
              src="/Union.svg"
              alt="No Presale"
              className="mx-auto w-20 h-20"
            />
            <p className="mt-4 text-gray_300 text-sm sm:text-base font-medium">
              NO PRESALE
            </p>
          </div>
          <div className="text-center">
            <img
              src="/Union-1.svg"
              alt="No Team Allocation"
              className="mx-auto w-20 h-20"
            />
            <p className="mt-4 text-gray_300 text-sm sm:text-base font-medium">
              NO TEAM ALLOCATION
            </p>
          </div>
          <div className="text-center">
            <img
              src="/Union-2.svg"
              alt="Lower Gas"
              className="mx-auto w-20 h-20"
            />
            <p className="mt-4 text-gray_300 text-sm sm:text-base font-medium">
              LOWER GAS
            </p>
          </div>
        </div>
      </section>

      {/* Token Form Section */}
      <section className=" bg-black mx-auto max-w-4xl w-full p-6  mb-5 sm:p-12 rounded-lg shadow-2xl mt-8">
        <form className="space-y-8">
          {/* Image Upload */}
          <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6">
            <label className="flex flex-col items-center w-40 p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray_700 transition-all">
              <img
                src="./wybe.svg"
                className="h-16 w-16 object-cover rounded-full mb-2"
                alt="Upload preview"
              />
              <input type="file" className="hidden" accept="image/*" />
              <span className="text-sm text-gray_400">Upload Image</span>
              <p className="text-xs text-gray_500">JPEG/PNG/WEBP/GIF</p>
              <p className="text-xs text-gray_500">Less than 4MB</p>
            </label>

            <div className="flex-grow space-y-6 mt-6 sm:mt-0">
              <div className="flex flex-wrap gap-6">
                <input
                  type="text"
                  placeholder="Token Name *"
                  className="flex-grow bg-black text-white p-3 border border-white hover:border-yellow rounded-lg focus:ring-2 focus:ring-orange focus:outline-none shadow-md"
                />
                <input
                  type="text"
                  placeholder="Token Symbol (Ticker) *"
                  className="flex-grow bg-black text-white p-3 border border-white hover:border-yellow rounded-lg focus:ring-2 focus:ring-orange focus:outline-none shadow-md"
                />
              </div>
              <textarea
                placeholder="Token Description *"
                className="w-full bg-black text-white p-3 border border-white hover:border-yellow rounded-lg focus:ring-2 focus:ring-orange focus:outline-none shadow-md"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Optional Links */}
          <div className="space-y-4">
            {["Website", "Telegram", "Twitter"].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={`${placeholder} (Optional)`}
                className="w-full bg-black text-white p-3 border border-white hover:border-yellow rounded-lg focus:ring-2 focus:ring-orange focus:outline-none shadow-md"
              />
            ))}
          </div>

          {/* Initial Buy Section */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray_300">
              INITIAL BUY: Be the first person to buy your token
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="Optional. Enter the amount"
                className="flex-grow bg-black text-white p-3 border border-white hover:border-yellow rounded-lg focus:ring-2 focus:ring-orange focus:outline-none shadow-md"
              />
              <span className="text-xl text-gray_400">ETH</span>
            </div>
            <p className="text-sm text-gray_500">Balance: 0 TRX</p>
          </div>

          {/* Connect Wallet Button */}
          <button
            type="submit"
            className="w-full bg-orange text-black py-4 text-lg font-bold rounded-lg hover:bg-purple hover:text-white hover:shadow-lg transition-all"
          >
            CONNECT WALLET
          </button>
        </form>
      </section>
    </div>
  );
};

export default LaunchPage;

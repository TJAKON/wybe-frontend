import React from "react";

const LaunchPage = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-extrabold capitalize">
          LAUNCH YOUR TOKEN ON <span className="text-orange">WYBE</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          The fastest and most cost-effective way to launch your token.
        </p>
        <div className="flex justify-center mt-8 space-x-32">
          <div className="text-center">
            <img src="/Union.svg" alt="No Presale" className="mx-auto" />
            <p className="mt-2">NO PRESALE</p>
          </div>
          <div className="text-center">
            <img
              src="/Union-1.svg"
              alt="No Team Allocation"
              className="mx-auto"
            />
            <p className="mt-2">NO TEAM ALLOCATION</p>
          </div>
          <div className="text-center">
            <img src="/Union-2.svg" alt="Lower Gas" className="mx-auto" />
            <p className="mt-2">LOWER GAS</p>
          </div>
        </div>
      </section>

      {/* Token Form Section */}
      <section className="bg-transparent mx-auto max-w-6xl p-8 rounded-lg shadow-xl">
        <form className="space-y-8">
          {/* Image Upload */}
          {/* <div className="flex space-x-6 items-center text-center w-full">
            <div className="bg-black  flex flex-col items-center justify-center p-6 w-48 h-48 rounded-lg border-2 border-dashed border-gray-400">
              <p className="text-sm">JPEG/PNG/WEBP/GIF</p>
              <p className="text-sm">Less than 4MB</p>
              <input type="file" className="mt-4 text-xs" />
            </div>
          </div> */}

          <div className="flex space-x-6 items-center">
            {/* <div className="bg-black  flex flex-col items-center justify-center p-6 w-48 h-48 rounded-lg border-2 border-dashed border-gray-400">
             */}
            {/* <input type="file" className="mt-4 text-lg w-32"  /> */}
            <label class="flex flex-col items-center mt-4 w-40  p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
              <img
                id="./wybe.svg"
                className="h-16 w-16 object-cover rounded-full mb-2"
                src="./wybe.svg"
                alt="Upload preview"
              />

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onchange="loadFile(event)"
              />
              <span class="text-lg text-gray-700">Upload Image</span>
              <p className="text-sm">JPEG/PNG/WEBP/GIF</p>
              <p className="text-sm">Less than 4MB</p>
            </label>
            {/* </div> */}

            {/* Token Info Inputs */}
            <div className="flex-grow space-y-6">
              <div className="flex space-x-6">
                <input
                  type="text"
                  placeholder="Token Name *"
                  className="w-1/2 bg-black text-white p-3 rounded-lg focus:outline-none shadow-md"
                />
                <input
                  type="text"
                  placeholder="Token Symbol (Ticker) *"
                  className="w-1/2 bg-black text-white p-3 rounded-lg focus:outline-none shadow-md"
                />
              </div>
              <textarea
                placeholder="Token Description *"
                className="w-full bg-black text-white p-3 rounded-lg focus:outline-none shadow-md"
                rows={5}
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
                className="w-full bg-black text-white p-3 rounded-lg focus:outline-none shadow-md"
              />
            ))}
          </div>

          {/* Initial Buy Section */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray">
              INITIAL BUY: Be the first person to buy your token
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Optional. Enter the amount"
                className="flex-grow bg-black text-white p-3 rounded-lg focus:outline-none shadow-md"
              />
              <span className="text-xl text-gray-300">ETH</span>
            </div>
            <p className="text-gray-400 text-sm">Balance: 0 TRX</p>
          </div>

          {/* Connect Wallet Button */}
          <button
            type="submit"
            className="w-full bg-orange text-black py-4 text-xl font-bold rounded-lg hover:opacity-85 transition duration-200"
          >
            CONNECT WALLET
          </button>
        </form>
      </section>
    </div>
  );
};

export default LaunchPage;

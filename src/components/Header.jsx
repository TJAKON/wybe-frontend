import React from "react";

const Header = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-orange-500">
        <h1 className="text-xl font-bold text-orange-500">SUPRLAUNCH</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-orange-500">
            HOME
          </a>
          <a href="#" className="hover:text-orange-500">
            LAUNCH
          </a>
          <a href="#" className="hover:text-orange-500">
            RANKING
          </a>
          <a href="#" className="hover:text-orange-500">
            DOCS
          </a>
          <a href="#" className="hover:text-orange-500">
            TWITTER
          </a>
          <a href="#" className="hover:text-orange-500">
            TELEGRAM
          </a>
        </nav>
        <button className="bg-orange-500 px-4 py-2 rounded-lg font-bold">
          CONNECT WALLET
        </button>
      </header>
    </div>
  );
};

export default Header;

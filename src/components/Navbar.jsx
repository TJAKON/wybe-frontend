import React from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white">
      <header className="flex justify-between items-center px-6 py-4">
        {/* <nav className="space-x-4 flex items-center justify-between font-poppins text-xl italic"> */}
        <div className="flex flex-wrap justify-between items-center space-x-6">
          {/* <div className="absolute flex flex-wrap items-center w-8">
            <img src="/rocket-2.svg" className="relative top-10 right-6" alt="" />
            <img src="/rocket1.svg" className="relative right-2 bottom-6" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-orange">
            <Link to="/" className="font-poppins italic">
              Wybe
            </Link>
          </h1> */}
          <Link to="/" className="font-poppins italic px-14 py-3">
            <img src="/wybe.svg" className="w-20" alt="" />
          </Link>
          <div className="space-x-8 flex items-center justify-between font-poppins text-2xl italic">
            <Link to="/" className="hover:text-orange underline">
              HOME
            </Link>
            {/* <Link to="/launch" className="hover:text-orange">
            LAUNCH
          </Link> */}
            <Link to="/ranking" className="hover:text-orange underline">
              RANKING
            </Link>
            <Link to="/docs" className="hover:text-orange underline">
              DOCS
            </Link>
          </div>
        </div>

        <div className="space-x-4 flex font-poppins text-xl">
          <div className="flex items-center space-x-2">
            <FaXTwitter className=" border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-16 h-16 p-2" />
            <FaTelegram className=" border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-16 h-16 p-2" />
          </div>
          <Link to="/launch">
            <button className=" px-6 py-4 rounded-lg font-bold font-poppins bg-transparent border border-orange hover:bg-orange hover:text-black">
              Launch Token
            </button>
          </Link>
          <button className=" px-6 py-4 rounded-lg font-bold font-poppins bg-orange hover:bg-white hover:text-black">
            CONNECT WALLET
          </button>
        </div>
        {/* </nav> */}
      </header>
    </nav>
  );
};

export default Navbar;

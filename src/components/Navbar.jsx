import React, { useState } from "react";
import { FaRankingStar, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { CiCircleQuestion, CiGift, CiSearch } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-Pitch_black text-white">
      <header className="flex justify-between items-center px-6 py-2">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-left font-poppins text-2xl transition-all duration-300">
          <Link to="/" className="font-poppins italic flex items-center">
            <img src="/wybe.svg" className="w-20" alt="Wybe Logo" />
          </Link>
          <Link
            to="/"
            className="hover:text-orange underline transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/ranking"
            className="hover:text-orange underline transition-all duration-300"
          >
            Ranking
          </Link>
        </div>

        {/* Social Icons and Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <FaXTwitter className="border border-orange hover:bg-purple transition-all duration-300 rounded-2xl hover:text-white hover:border-purple text-white w-12 h-12 p-2" />
          <FaTelegram className="border border-orange hover:bg-purple transition-all duration-300 rounded-2xl hover:text-white hover:border-purple text-white w-12 h-12 p-2" />
          <Link to="/launch">
            <button className="px-6 py-3 rounded-2xl font-bold font-poppins bg-transparent border border-orange hover:bg-orange hover:text-white transition-all duration-300">
              Launch Token
            </button>
          </Link>
          <button className="px-6 py-3 rounded-2xl text-xl font-bold font-poppins bg-orange hover:bg-purple hover:text-white transition-all duration-300">
            CONNECT WALLET
          </button>
        </div>

        {/* Logo for Mobile View */}
        <Link
          to="/"
          className="md:hidden font-poppins italic flex items-center"
        >
          <img src="/wybe.svg" className="w-20" alt="Wybe Logo" />
        </Link>

        <button className="md:hidden p-3 rounded-lg text-[14px] border border-white font-bold font-poppins bg-orange ">
          CONNECT WALLET
        </button>

        {/* Hamburger Menu for Mobile */}
      </header>

      {/* Mobile Menu (Fixed at Bottom) */}
      <div className="md:hidden fixed bottom-0 z-50 left-0 w-full bg-Pitch_black text-white border-t border-orange">
        <div className="flex items-center text-center justify-evenly py-4">
          <Link
            to="/launch"
            className="text-center justify-items-center m-0 self-center place-self-center items-center justify-center text-[14px]"
          >
            <CiSearch className=" w-6 h-6" />
            Explore
          </Link>

          <Link
            to="/launch"
            className="text-center justify-items-center m-0 items-center justify-center text-[14px]"
          >
            <FaRankingStar className=" w-6 h-6" />
            Ranking
          </Link>

          <Link
            to="/launch"
            className="text-center justify-items-center m-0 items-center justify-center text-[14px]"
          >
            <TfiCup className=" w-6 h-6" />
            Rewards
          </Link>
          <Link
            to="/launch"
            className="text-center justify-items-center m-0 items-center justify-center text-[14px]"
          >
            <PiRocketLaunchDuotone className=" w-6 h-6" />
            Launch Token
          </Link>
          <button
            className="md:hidden text-orange duration-300 focus:outline-none text-3xl"
            onClick={toggleMenu}
          >
            {isOpen ? "" : <AiOutlineMenu />}
          </button>

          {isOpen && (
            <>
              <div className=" absolute w-[320px] rounded-lg transition-all duration-300 bottom-16 right-0 z-50 md:hidden bg-Pitch_black text-white">
                <div className="border-b border-orange p-5">
                  <div className="flex w-full pb-3 items-center justify-between">
                    <img src="/wybe.svg" className="w-16" alt="Wybe Logo" />
                    <button
                      className="md:hidden text-orange duration-300 focus:outline-none text-3xl"
                      onClick={toggleMenu}
                    >
                      <AiOutlineClose className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="flex flex-col text-left text-[16px] font-jetbrains">
                    <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <LuWallet className="w-6 h-6" />
                      My Token
                    </Link>
                    <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <CiGift className="w-6 h-6" />
                      Referals
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-col text-left text-[16px] font-jetbrains">
                    <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <CiCircleQuestion className="w-6 h-6" />
                      How it works
                    </Link>
                    {/* <Link to="/" className="p-3 flex gap-3 items-center" onClick={toggleMenu}>
                    <FaXTwitter className="w-6 h-6"/> 
                      Youtube
                    </Link> */}
                    <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <FaXTwitter className="w-6 h-6" /> Twitter
                    </Link>
                    <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <FaTelegram className="w-6 h-6" />
                      Telegram
                    </Link>
                    {/* <Link to="/" className="p-3 " onClick={toggleMenu}>
                      
                    </Link> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
    </nav>
  );
};

export default Navbar;

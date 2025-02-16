import React, { useState } from "react";
import { FaRankingStar, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillThunderbolt } from "react-icons/ai";
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
            <img src="/1.svg" className="w-20" alt="Wybe Logo" />
          </Link>
          <Link
            to="/"
            className="hover:text-orange transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/ranking"
            className="hover:text-orange transition-all duration-300"
          >
            Ranking
          </Link>
        </div>

        {/* Social Icons and Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <FaXTwitter className="border border-white hover:bg-transparent transition-all duration-300 rounded-2xl hover:text-white text-white w-12 h-12 p-3" />
          <FaTelegram className="border text-blue border-white hover:bg-transparent transition-all duration-300 rounded-2xl hover:text-white hover:border-white w-12 h-12 p-3" />
          <Link to="/launch">
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xl font-bold font-poppins bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-300">
             Wybe Turbo  
             <AiFillThunderbolt className="w-6 h-6" />
            </button>
          </Link>
          <button className="px-6 py-3 rounded-2xl text-xl font-bold font-poppins bg-orange hover:bg-purple hover:text-white transition-all duration-300">
            Connect Wallet
          </button>
        </div>

        {/* Logo for Mobile View */}
        <Link
          to="/"
          className="md:hidden font-poppins italic flex items-center"
        >
          <img src="/1.svg" className="w-20" alt="Wybe Logo" />
        </Link>

        <button className="md:hidden p-3 rounded-lg text-[14px] border border-white font-bold font-poppins bg-orange ">
          CONNECT WALLET
        </button>

        {/* Hamburger Menu for Mobile */}
      </header>

      {/* Mobile Menu (Fixed at Bottom) */}
      <div className="lg:hidden fixed bottom-0 z-50 left-0 w-full bg-Pitch_black text-white border-t border-orange">
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
            className="text-center text-orange justify-items-center m-0 items-center justify-center text-[14px]"
          >
            <PiRocketLaunchDuotone className=" w-6 h-6" />
            Launch Token
          </Link>
          <Link
            to="/launch"
            className="text-center justify-items-center m-0 items-center justify-center text-[14px]"
          >
            <LuWallet className=" w-6 h-6" />
            My Token
          </Link>
          <button
            className="lg:hidden duration-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
               <>
               <div className="text-center transition-all duration-300 justify-items-center m-0 items-center justify-center text-[14px]">
                 <AiOutlineMenu className=" w-6 h-6" />
                 Menu
               </div>
             </>
            ) : (
              <>
                <div className="text-center transition-all duration-300 justify-items-center m-0 items-center justify-center text-[14px]">
                  <AiOutlineMenu className=" w-6 h-6" />
                  Menu
                </div>
              </>
            )}
          </button>

          {isOpen && (
            <>
              <div className=" absolute w-[356px] rounded-lg transition-all duration-300 bottom-16 right-8 z-50 lg:hidden bg-gray_1000 text-white">
                <div className="border-b border-orange p-5">
                  <div className="flex w-full pb-3 items-center justify-between">
                    <img src="/1.svg" className="w-16" alt="Wybe Logo" />
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
                      <AiFillThunderbolt className="w-6 h-6" />
                      wybe Turbo
                    </Link>
                    {/* <Link
                      to="/"
                      className="p-3 flex gap-3 items-center"
                      onClick={toggleMenu}
                    >
                      <CiGift className="w-6 h-6" />
                      Referals
                    </Link> */}
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

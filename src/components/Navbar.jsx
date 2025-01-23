import React, { useState } from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-r from-black to-stone text-white">
      <header className="flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link to="/" className="font-poppins italic flex items-center">
          <img src="/wybe.svg" className="w-20" alt="Wybe Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-poppins text-xl italic">
          <Link to="/" className="hover:text-orange underline">
            HOME
          </Link>
          <Link to="/ranking" className="hover:text-orange underline">
            RANKING
          </Link>
          <Link to="/docs" className="hover:text-orange underline">
            DOCS
          </Link>
        </div>

        {/* Social Icons and Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <FaXTwitter className="border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-12 h-12 p-2" />
          <FaTelegram className="border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-12 h-12 p-2" />
          <Link to="/launch">
            <button className="px-6 py-3 rounded-lg font-bold font-poppins bg-transparent border border-orange hover:bg-orange hover:text-black">
              Launch Token
            </button>
          </Link>
          <button className="px-6 py-3 rounded-lg font-bold font-poppins bg-orange hover:bg-white hover:text-black">
            CONNECT WALLET
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-orange focus:outline-none text-3xl"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent text-white">
          <div className="flex flex-col items-center space-y-4 py-4 text-xl">
            <Link to="/" className="hover:text-orange" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/ranking" className="hover:text-orange" onClick={toggleMenu}>
              RANKING
            </Link>
            <Link to="/docs" className="hover:text-orange" onClick={toggleMenu}>
              DOCS
            </Link>
            <div className="flex space-x-4">
              <FaXTwitter className="border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-10 h-10 p-2" />
              <FaTelegram className="border border-orange hover:bg-orange rounded-lg hover:text-black text-white w-10 h-10 p-2" />
            </div>
            <Link to="/launch">
              <button className="px-6 py-3 rounded-lg font-bold font-poppins bg-transparent border border-orange hover:bg-orange hover:text-black">
                Launch Token
              </button>
            </Link>
            <button className="px-6 py-3 rounded-lg font-bold font-poppins bg-orange hover:bg-white hover:text-black">
              CONNECT WALLET
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

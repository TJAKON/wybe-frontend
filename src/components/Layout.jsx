import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-black  to-black text-white min-h-screen flex flex-col relative">
      {/* Navbar fixed at the top */}
      <Navbar />                        

      {/* Main Content with Starry Background */}
      <div className="flex-grow relative z-10">
        {/* Starry Background */}
        <div className="absolute inset-0 z-0">
          <div className="stars-effect w-full h-full absolute top-0 left-0 z-0"></div>
          <div className="falling-stars-container absolute inset-0 z-0">
            {Array.from({ length: 1000 }).map((_, index) => (
              <div key={index} className="falling-star"></div>
            ))}
          </div>
        </div>

        {/* Render the children */}
        <div className="relative z-10">{children}</div>
        <Footer />
      </div>

      {/* Footer fixed at the bottom */}
    </div>
  );
};

export default Layout;

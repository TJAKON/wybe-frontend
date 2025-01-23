import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-stone text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Logo and description */}
          <div className="space-y-4  text-center justify-items-center">
            <img
              src="/wybe.svg"
              alt="Logo"
              className="w-40 h-auto mx-auto sm:mx-0"
            />
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>My Tokens</li>
              <li>Rewards</li>
              <li>Referrals</li>
              <li>Documentation</li>
              <li>How it works</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Twitter</li>
              <li>Telegram</li>
              <li>YouTube</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="font-semibold">Subscribe to Notifications</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
            />
            <button className="w-full px-4 py-2 mt-2 rounded-lg bg-orange text-black hover:bg-purple">
              Subscribe
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm mb-4">
          <p>
            <strong>Copyright Information & disclaimers:</strong> “Disclaimer:
            Digital assets are highly speculative and involve significant risk
            of loss. Anyone considering trading them should be fully prepared
            for the possibility of losing their entire investment. [Your Brand]
            makes no guarantees regarding the success or profitability of any
            asset created on the platform and is not liable for any losses,
            damages, or complications that may arise from trading. We strongly
            encourage users to assess their financial situation, evaluate their
            risk tolerance, and conduct thorough research (DYOR) before engaging
            with any digital assets. [Your Brand] assumes no responsibility for
            content added by users of the service, including but not limited to
            token names, descriptions, images, animations, and other media. All
            content is the sole responsibility of the user who submitted it.
          </p>
        </div>

        {/* Copyright Info */}
        <div className="text-center text-sm">
          <p>© 2025 [Your Brand]. All rights reserved</p>
          <p>
            Willisdens Group LP | Address: 71-75 Shelton Street, Covent Garden,
            London, WC2H 9JQ
          </p>
        </div>

        {/* Terms of Use Link */}
        <div className="text-center text-sm mt-4">
          <a href="/terms-of-use" className="text-orange hover:text-white">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

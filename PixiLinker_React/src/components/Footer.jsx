import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d12] border-t border-white/10 py-10 relative overflow-hidden">
      
      {/* Gradient glow blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-6">
        
        {/* BRAND SECTION */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow">
            PixiLinker
          </h2>
          <p className="text-gray-300 mt-1 text-sm">
            Smarter, faster & beautiful URL shortening.
          </p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} PixiLinker. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-300 hover:text-purple-400 transition-all hover:scale-110"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

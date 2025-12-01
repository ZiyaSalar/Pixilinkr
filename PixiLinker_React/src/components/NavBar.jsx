import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-[#0d0d12] border-b border-white/10 backdrop-blur-md sticky top-0 z-50 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center h-full">

        {/* BRAND LOGO */}
        <Link to="/">
          <h1 className="font-extrabold text-3xl italic bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow">
            PixiLinker
          </h1>
        </Link>

        {/* MENU LIST */}
        <ul
          className={`
            flex sm:gap-10 gap-4 sm:items-center 
            font-medium text-white
            sm:static absolute left-0 top-16
            sm:bg-transparent bg-[#0d0d12]/95 backdrop-blur-xl
            w-full sm:w-fit sm:flex-row flex-col
            transition-all duration-200 overflow-hidden 
            ${navbarOpen ? "h-fit py-4 px-5" : "h-0 px-5"}
          `}
        >
          {/* HOME */}
          <li>
            <Link
              to="/"
              className={`${
                path === "/" 
                  ? "text-purple-400 font-semibold" 
                  : "hover:text-purple-300"
              } transition-all`}
            >
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link
              to="/about"
              className={`${
                path === "/about" 
                  ? "text-purple-400 font-semibold" 
                  : "hover:text-purple-300"
              } transition-all`}
            >
              About
            </Link>
          </li>

          {/* DASHBOARD (ONLY IF LOGGED IN) */}
          {token && (
            <li>
              <Link
                to="/dashboard"
                className={`${
                  path === "/dashboard" 
                    ? "text-purple-400 font-semibold" 
                    : "hover:text-purple-300"
                } transition-all`}
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* SIGN UP (ONLY IF LOGGED OUT) */}
          {!token && (
            <Link to="/register" className="w-full sm:w-fit">
              <li className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center font-semibold px-4 py-2 rounded-md mt-2 sm:mt-0 shadow-md hover:scale-105 transition-all">
                Sign Up
              </li>
            </Link>
          )}

          {/* LOGOUT (ONLY IF LOGGED IN) */}
          {token && (
            <button
              onClick={onLogOutHandler}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-4 py-2 rounded-md mt-2 sm:mt-0 shadow-md hover:scale-105 transition-all"
            >
              Logout
            </button>
          )}
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-white text-3xl"
        >
          {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const authuser = false; // Change this to true to see the authenticated links

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the navbar color based on scroll position
  const navbarColor = scrollPosition > 30 ? "bg-gray-900" : "bg-[#0055ff]";

  return (
    <nav
      className={`flex items-center justify-between px-24 ${navbarColor} text-white p-2 w-full shadow-lg fixed top-0 left-0 z-50 transition-colors duration-300`}
    >
      <Link to="/" className="flex items-center">
        <img className="h-8 pr-3" src="/github.svg" alt="Github Logo" />
        <h8 className="text-orange-400 font-semibold flex items-center bg-transparent py-2 px-6 h-[44px] justify-center rounded-[50px] transition-transform transform hover:scale-110">
          <span className="text-white pr-0.5">Us</span>Together
        </h8>
      </Link>

      <div className="flex space-x-4">
        <Link
          to="/"
          className="flex items-center p-2 transition-colors duration-200 rounded-lg"
        >
          <IoHomeSharp size={20} />
        </Link>

        {authuser && (
          <Link
            to="/likes"
            className="flex items-center p-2 transition-colors duration-200 rounded-lg"
          >
            <FaHeart size={22} />
          </Link>
        )}

        {authuser && (
          <Link
            to="/explore"
            className="flex items-center p-2 transition-colors duration-200 rounded-lg"
          >
            <MdOutlineExplore size={25} />
          </Link>
        )}

        {!authuser && (
          <Link
            to="/login"
            className="flex items-center p-2 transition-colors duration-200 rounded-lg"
          >
            <button className="bg-transparent text-white font-[600] py-2 px-6 h-[44px] flex items-center justify-center rounded-[50px] transition-transform transform hover:scale-110">
              Sign in
            </button>
          </Link>
        )}

        {!authuser && (
          <Link
            to="/signup"
            className="flex items-center p-2 transition-colors duration-200 rounded-lg"
          >
            <button className="bg-transparent border border-white py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-[#A433EC] hover:border-transparent transition duration-300">
              Signup
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

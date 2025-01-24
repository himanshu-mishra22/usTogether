import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { FiMenu, FiX, FiSearch } from "react-icons/fi"; // Menu, Close, and Search icons

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const authuser = true; // Change this to true to see the authenticated links

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
    <>
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-24 ${navbarColor} text-white p-2 w-full shadow-lg fixed top-0 left-0 z-50 transition-colors duration-300`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img className="h-8 pr-2" src="/github.svg" alt="Github Logo" />
          <h8 className="text-orange-400 font-semibold flex items-center bg-transparent py-2 px-6 h-[44px] justify-center rounded-[50px] transition-transform transform hover:scale-110">
            <span className="text-white pr-0.5">Us</span>Together
          </h8>
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <div className="sm:block md:hidden lg:hidden">
          {isSidebarOpen ? (
            <FiX
              size={28}
              className="cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            />
          ) : (
            <FiMenu
              size={28}
              className="cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          )}
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex lg:flex space-x-4 items-center">
          {/* Search Bar for Large Screens */}
          {authuser && (
            <div className="flex items-center relative">
              {/* Search Icon */}
              <button
                className="flex items-center p-2 transition-colors duration-200 rounded-lg"
                onClick={() => setSearchOpen(!isSearchOpen)}
              >
                <FiSearch
                  size={22}
                  className="hover:text-orange-400 transition-colors duration-200"
                />
              </button>

              {/* Smooth Expanding Search Bar */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-full mr-4 transition-all duration-500 ease-in-out ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                } overflow-hidden rounded-lg`}
              >
                <input
                  type="text"
                  placeholder="Type to Search ..."
                  className="px-4 py-2 bg-white text-gray-800 text-sm rounded-full w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>
          )}

          <Link
            to="/"
            className="flex items-center p-2 transition-colors duration-200 rounded-lg hover:text-orange-400"
          >
            <IoHomeSharp size={20} />
          </Link>

          {authuser && (
            <Link
              to="/likes"
              className="flex items-center p-2 transition-colors duration-200 rounded-lg hover:text-orange-400"
            >
              <FaHeart size={22} />
            </Link>
          )}

          {authuser && (
            <Link
              to="/explore"
              className="flex items-center p-2 transition-colors duration-200 rounded-lg hover:text-orange-400"
            >
              <MdOutlineExplore size={25} />
            </Link>
          )}

          {/* Profile Photo */}
          {authuser && (
            <Link
              to="/profile"
              className="flex items-center p-2 transition-colors duration-200 rounded-lg"
            >
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-teal-400"
              />
            </Link>
          )}
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-6 pt-20 space-y-6">
          {/* Profile Photo in Sidebar */}
          {authuser && (
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:text-orange-400"
              onClick={() => setSidebarOpen(false)}
            >
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span>Profile</span>
            </Link>
          )}

          <Link
            to="/"
            className="block text-lg font-semibold hover:text-orange-400"
            onClick={() => setSidebarOpen(false)}
          >
            <IoHomeSharp size={20} className="inline-block mr-2" />
            Home
          </Link>

          {authuser && (
            <Link
              to="/likes"
              className="block text-lg font-semibold hover:text-orange-400"
              onClick={() => setSidebarOpen(false)}
            >
              <FaHeart size={20} className="inline-block mr-2" />
              Likes
            </Link>
          )}

          {authuser && (
            <Link
              to="/explore"
              className="block text-lg font-semibold hover:text-orange-400"
              onClick={() => setSidebarOpen(false)}
            >
              <MdOutlineExplore size={20} className="inline-block mr-2" />
              Explore
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

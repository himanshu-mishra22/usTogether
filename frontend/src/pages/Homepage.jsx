// src/components/HomePage.jsx
import React from "react";
import image from "/Purple.png";

const HomePage = () => {
  return (
    <div className="pt-36 min-h-screen grid grid-rows-[auto,1fr,auto]">
      {/* Hero Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 md:pb-24 lg:px-24 items-center">
        <div className="space-y-8 max-w-lg mx-auto lg:max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left leading-tight">
            Shaping Tomorrow with{" "}
            <span className="text-orange-500 font-extrabold">Collaboration</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center lg:text-left">
            Unite your development and deployment on one collaborative platform.
            Accelerate software delivery with seamless teamwork.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center lg:justify-start">
            <button className="bg-transparent border border-white text-white py-2 px-8 font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-[#FFFF] hover:text-gray-900 hover:border-transparent transition duration-300">
              Sign In
            </button>
            <button className="hover:bg-transparent hover:border hover:border-white py-2 px-8 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] bg-[#A433EC] hover:border-transparent transition duration-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src={image}
            alt="Collaboration illustration"
            className="max-w-full"
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-teal-200 py-10">
        <div className="grid grid-cols-3 gap-4 justify-center max-w-md mx-auto">
          <button className="bg-white px-6 py-2 rounded-md shadow text-teal-600">
            Code
          </button>
          <button className="bg-white px-6 py-2 rounded-md shadow text-teal-600">
            Plan
          </button>
          <button className="bg-purple-500 px-6 py-2 rounded-md shadow text-white">
            Collaborate
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

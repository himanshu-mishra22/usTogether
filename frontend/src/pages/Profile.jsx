import React from "react";
import image from "/avatar.jpg"; // Assuming the image is in the same directory

const Profile = () => {
  return (
    <div className="pt-36 min-h-screen grid grid-rows-[auto,1fr]">
      {/* Content Section */}
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 md:px-12 lg:px-24 items-center">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
          <img
            src={image}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-orange-500"
          />
          <div className="text-center sm:text-left w-full">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-gray-300">
                <b>Mayank Singh</b>
              </h1>
            </div>

            {/* Wrapper for Username and Button */}
            <div className="mt-2 flex flex-col items-start">
              <p className="text-gray-300 inline-block">@mayank_singh12</p>
              <button
                className="bg-orange-500 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-orange-600 mt-2 inline-block border-none"
              >
                Edit Profile
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mt-2">
              An aspiring Full-Stack Developer. GLA University,
            </p>
            <p className="text-sm text-gray-300">Mathura, Uttar Pradesh</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold">
                <b>32</b>
              </span>{" "}
              followers ·{" "}
              <span className="font-semibold">
                <b>5</b>
              </span>{" "}
              following
            </p>
          </div>
        </div>

        {/* Stats and Pinned Repositories Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch"> 
          {/* Stats Section */}
          <div className="w-48 bg-gray-900 p-6 rounded-lg shadow-md border-2 border-white h-full">
            <div className="flex flex-col items-start mb-6">
              <div className="flex justify-between mb-2 w-full">
                <p className="text-gray-300">Stars</p>
                <span className="text-xl font-semibold text-white ml-auto">
                  6
                </span>
              </div>
              <div className="flex justify-between mb-2 w-full">
                <p className="text-gray-300">Skills</p>
                <span className="text-xl font-semibold text-white ml-auto">
                  4
                </span>
              </div>
              <div className="flex justify-between mb-2 w-full">
                <p className="text-gray-300">
                  <b>Languages</b>
                </p>
                <span className="text-xl font-semibold text-white ml-auto">
                  5
                </span>
              </div>
            </div>

            {/* Languages Section with Box */}
            <div className="w-full bg-gray-800 p-4 rounded-lg mt-2">
              <ul className="list-disc pl-6 text-gray-300">
                <li>Java</li>
                <li>JavaScript</li>
                <li>HCL</li>
                <li>C</li>
                <li>Python</li>
              </ul>
            </div>

            {/* Contributions Section */}
            <div className="flex justify-between mt-4 w-full">
              <p className="text-gray-300">Contributions</p>
              <span className="text-xl font-semibold text-white ml-auto">
                1
              </span>
            </div>

            {/* "Connect With Me" as text */}
            <p className="text-gray-300 mt-2">
              <b>Connect With Me</b>
            </p>
          </div>

          {/* Pinned Repositories Section */}
          <div className="flex-grow"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"> 
              {[1, 2, 3, 4].map((repo) => (
                <div
                  key={repo}
                  className="w-full bg-gray-900 h-full border-2 border-white p-6 rounded-lg shadow-md flex flex-col" 
                >
                  <div className="flex items-center justify-between mb-2"> 
                    <h5 className="text-lg font-semibold text-purple-300">
                      Multi-cloud-Deployment-System
                    </h5>
                    <button 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full" 
                    >
                      Public
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    Automated multi-cloud infrastructure deployments across AWS
                    and Azure.
                  </p>
                  <div className="flex gap-2 text-xs mt-auto">
                    <span className="bg-gray-800 px-2 py-1 rounded">Terraform</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">GitHub</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">AWS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Repositories Heading */}
        <h3
          className="absolute top-0 right-0 text-2xl font-semibold text-purple-900"
        >
          Pinned Repositories
        </h3>
      </div>
    </div>
  );
};

export default Profile;
import React from "react";
import avatar from "/avatar.jpg";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Main Content */}
      <div className="grid grid-cols-1 pt-16 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 md:col-span-2 sm:col-span-1 w-full">
          <div
            className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-8"
          >
            {/* Top Repositories Section */}
            <div className="w-full ">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">
                Top Repositories
              </h2>
              <input
                type="text"
                placeholder="Find your repo . ."
                className="px-3 py-2 text-sm w-full rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring focus:ring-teal-300 mb-4"
              />
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <img
                    src={avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white text-sm">
                    mayank_singh12/multi_cloudDeployment
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src={avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white text-sm">
                    mayank_singh12/JavaScript
                  </span>
                </li>
                <li className="text-gray-400 text-sm cursor-pointer">
                  Show more...
                </li>
              </ul>
            </div>

            {/* Stars Section */}
            <div className="w-full">
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">
                Stars (6)
              </h2>
              <input
                type="text"
                placeholder="Your favorites . ."
                className="px-3 py-2 text-sm w-full rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring focus:ring-teal-300 mb-4"
              />
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <img
                    src={avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white text-sm">
                    mayank_singh12/multi_cloudDeployment
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    src={avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white text-sm">
                    mayank_singh12/JavaScript
                  </span>
                </li>
                <li className="text-gray-400 text-sm cursor-pointer">
                  Show more...
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-3 md:col-span-2 space-y-8">
          {/* Trending Repositories */}
          <div
            className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-gray-600"
          >
            <div className="flex pb-1 justify-between items-center mb-4">
              <h2 className="text-4xl font-bold text-white">
                Trending Repositories{" "}
                <a
                  href="#"
                  className="text-teal-600 pl-2 font-normal text-sm md:text-base"
                >
                  See more...
                </a>
              </h2>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-white px-4 py-2 rounded-full shadow text-gray-800 text-sm hover:bg-gray-100">
                Java
              </button>
              <button className="bg-white px-4 py-2 rounded-full shadow text-gray-800 text-sm hover:bg-gray-100">
                DevOps
              </button>
              <button className="bg-white px-4 py-2 rounded-full shadow text-gray-800 text-sm hover:bg-gray-100">
                Web Development
              </button>
            </div>

            <div className="space-y-1">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-transparent p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="font-bold text-white">
                        mayank_singh12/multi_cloudDeployment
                      </h3>
                      <p className="text-sm text-gray-300 pt-1 pb-1">
                        This Terraform project is designed to manage
                        infrastructure across multiple cloud providers,
                        including AWS and Azure. It automates the deployment of
                        various resources.
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <span className="text-xs bg-red-300 text-red-800 px-2 py-1 rounded-full">
                          Terraform
                        </span>
                        <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                          GitHub
                        </span>
                        <span
                          className="text-xs bg-lime-100
                        text-lime-600 px-2 py-1 rounded-full"
                        >
                          AWS
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center space-x-2 text-teal-600 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white md:text-sm">
                      <span><FaStar className="text-yellow-400"/></span>
                      <span>Star</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>
          {/* Recommended Section */}
          <div
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              Recommended for you
            </h2>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white">
                  himanshu12/Amazon_assessment_questions
                </h3>
                <p className="text-sm pt-1 text-gray-300">
                  This Terraform project is designed to manage infrastructure
                  across multiple cloud providers.
                </p>
                <div className="flex space-x-2 mt-2">
                  <span className="text-xs bg-stone-300 text-stone-800 px-2 py-1 rounded-full">
                    Java
                  </span>
                  <span className="text-xs bg-rose-300 text-red-800 px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="text-xs bg-blue-300 text-blue-800 px-2 py-1 rounded-full">
                    Git
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center space-x-2 text-teal-600 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white md:text-sm">
                <span><FaStar className="text-yellow-400"/></span>
                <span>Star</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

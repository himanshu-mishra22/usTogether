import React from "react";
import image from "/avatar.jpg";

const Likes = () => {
  return (
    <div className="pt-8 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl overflow-hidden bg-gray-800 rounded-lg shadow-lg">
        <table className="w-full text-left text-white table-auto">
          <thead className="bg-gray-700">
            <tr className="text-center">
              <th className="px-6 py-3">NO</th>
              <th className="px-6 py-3 text-center">USERNAME</th> {/* Added text-center */}
              <th className="px-6 py-3">DATE</th>
              <th className="px-6 py-3 text-center">ACTION</th> {/* Added text-center */}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600 text-center h-16">
              <td className="px-6 py-4 align-middle">1</td>
              <td className="px-6 py-4 relative">
                <div className="flex items-center gap-3 absolute inset-0 h-full justify-center"> {/* Added justify-center */}
                  <img
                    src={image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold">asaprogrammertest</span>
                </div>
              </td>
              <td className="px-6 py-4 align-middle">February 14th, 2024</td>
              <td className="px-6 py-4 relative">
                <div className="flex items-center gap-2 absolute inset-0 h-full justify-center"> {/* Added justify-center */}
                  <span>❤️</span> <span>Liked your profile</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 md:px-12 lg:px-24 items-center"></div>
    </div>
  );
};

export default Likes;
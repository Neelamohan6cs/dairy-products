import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../img/notprofile.png";
 // adjust path if needed

function Profilepop({ user, navigate, popupRef}) {
  const phone = useSelector((state) => state.auth.phone);

  return (
    <div
      ref={popupRef}
      className="absolute top-16 right-4 bg-white shadow-xl rounded-2xl p-5 w-72 z-50 border border-gray-100 transition-all duration-200"
    >
      {/* Profile Image */}
      <div className="flex flex-col items-center border-b border-gray-200 pb-4">
        <img
          src={Profile}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <h2 className="mt-2 text-lg font-semibold text-gray-800">
          {user.name || "User Name"}
        </h2>
      </div>

      {/* Info List */}
      <div className="mt-4 space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium text-gray-500">Phone:</span>
          <span>{phone || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-500">State:</span>
          <span>{user.state || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-500">District:</span>
          <span>{user.district || "N/A"}</span>
        </div>
        <div className="flex flex-col items-start">
            <span className="font-medium text-gray-500">Address:</span>
            <span className="text-gray-700 break-words mt-1">
                {user.address || "N/A"}
            </span>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-5 border-t border-gray-200 pt-3 flex flex-col gap-2">
        <button
          onClick={() => navigate("/dashbord/profile") }
          className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition"
        >
          Edit Profile
        </button>
        <button
          onClick={() => console.log("Logout")}
          className="w-full text-center bg-red-50 hover:bg-red-100 text-red-500 font-semibold py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profilepop;

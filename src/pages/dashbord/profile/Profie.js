import React from "react";
import profileImg from "../../../img/profile.jpg"; // Replace with actual image path

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-green-700">Profile</h1>
          <button className="text-green-600 hover:underline font-medium">Edit Profile</button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={profileImg}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-green-200 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Neela Mohan</h2>
            <p className="text-gray-600">📱 +91 98765 43210</p>
            <p className="text-gray-600">🏠 123, Agri Street, Perambalur, Tamil Nadu - 621212</p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 bg-green-100 rounded-lg hover:bg-green-200 font-medium text-green-800">
            🛒 My Orders
          </button>
          <button className="w-full text-left px-4 py-3 bg-green-100 rounded-lg hover:bg-green-200 font-medium text-green-800">
            🆘 Help & Support
          </button>
          <button className="w-full text-left px-4 py-3 bg-green-100 rounded-lg hover:bg-green-200 font-medium text-green-800">
            🌐 Language Settings
          </button>
          <button className="w-full text-left px-4 py-3 bg-red-100 rounded-lg hover:bg-red-200 font-medium text-red-700">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

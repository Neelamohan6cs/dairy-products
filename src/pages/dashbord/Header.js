import { useState, useEffect, useRef } from "react";
import Logo from "../../img/logo.jpeg";
import notProfile from "../../img/notprofile.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Profilepop from "./Profilepop";
import { FaBell, FaShoppingCart, FaSearch } from "react-icons/fa";

function Header() {
  
  const user = useSelector((state) => state.userdetails);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const popupRef = useRef();

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowProfilePopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => setShowProfilePopup((prev) => !prev);
  const Myorders = () => navigate("/dashbord/myorders");

  return (
    <header className="flex items-center justify-between bg-white shadow-md px-4 py-3 sticky top-0 z-50 w-full">
      {/* --- Left: Logo + Company Name --- */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <img src={Logo} alt="logo" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-lg sm:text-xl font-bold text-green-600 whitespace-nowrap">
          Suwasthika
        </span>
      </div>

      {/* --- Center: Search Bar --- */}
      <div className="flex items-center justify-center flex-1 mx-2 sm:mx-6 max-w-xs relative">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1.5 sm:py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <FaSearch className="absolute right-3 text-gray-500 text-sm sm:text-base" />
      </div>

      {/* --- Right: Icons --- */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notification Icon */}
        <button className="relative text-lg sm:text-xl text-gray-700 hover:text-green-600 transition">
          <FaBell />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </button>

        {/* Cart Icon */}
        <button
          onClick={Myorders}
          className="text-lg sm:text-xl text-gray-700 hover:text-green-600 transition"
        >
          <FaShoppingCart />
        </button>

        {/* Profile */}
        <button
          onClick={handleProfileClick}
          className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full p-0.5 sm:p-1 transition"
        >
          <img src={notProfile} alt="profile" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full" />
        </button>

        {/* Popup */}
        {showProfilePopup && (
          <Profilepop user={user} navigate={navigate} popupRef={popupRef} />
        )}
      </div>
    </header>
  );
}

export default Header;

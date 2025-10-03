import { useState } from "react";
import Logo from "../../img/logo.jpeg"; 
import Profile from "../../img/profile.jpg";
import { useNavigate } from "react-router-dom";
// Adjust the path as necessary


function Header() {
  const navigate=useNavigate()
  const [search, setSearch] = useState("");


  function handleProfileClick(){
    navigate("/dashbord/profile")

  }
  function Myorders(){
    navigate("/dashbord/myorders")
  }

  return (
    <header className="header">
      {/* Left - Logo + Company Name */}
      <div className="left-section">
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
        <span className="company-name">Suwasthika</span>
      </div>

      {/* Center - Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right - Icons */}
      <div className="right-section">
        <button className="icon-btn">
          🔔
          <span className="badge">3</span>
        </button>
        <button
          onClick={Myorders}
          className="w-full bg-green-400 text-black py-2 rounded-lg hover:bg-green-200 transition font-semibold shadow-md">
     
          🛒my Orders
        </button>
        <button 
          onClick={handleProfileClick}
          className="profile-btn">
          <img
            src={Profile}
            alt="profile"
            className="avatar"
          />
          <span className="username">Neela</span>
        </button>
      </div>
    </header>
  );
}

export default Header;

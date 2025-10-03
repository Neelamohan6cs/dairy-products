import React from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function Ongoing() {
    navigate("/dashbord/myorders/ongoing");
  }
  function Deliverd() {
    navigate("/dashbord/myorders/deliverd");
  }
  function Cancelled() {
    navigate("/dashbord/myorders/cancelled");
  }
  function goHome() {
    navigate("/dashbord");
  }

  return (
    <div className="orders-header">
      {/* Back Button */}
      <button onClick={goHome} className="back-btn">
        ← Back to Home
      </button>

      {/* Heading below search bar */}
      <h1 className="orders-title">My Orders</h1>

      {/* Search bar */}
      <input
        type="text"
        className="orders-search"
        placeholder="Search orders..."
      />

      {/* Buttons */}
      <div className="orders-buttons">
        <button onClick={Ongoing} className="order-btn active">
          Ongoing
        </button>
        <button onClick={Deliverd} className="order-btn">
          Delivered
        </button>
        <button onClick={Cancelled} className="order-btn">
          Cancelled
        </button>
      </div>
    </div>
  );
}

export default Header;

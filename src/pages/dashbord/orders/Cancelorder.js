import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css";
import Kambu from "../../../img/kambu.png";

function Cancelorder() {
    const navigate = useNavigate();
  const [reason, setReason] = useState("");

  const order = {
    id: "ORD12345",
    productName: "Kambu Pack (500g)",
    productImage: Kambu, // replace with actual image
    price: 120,
  };

  const handleCancel = () => {
    if (!reason) {
      alert("Please select a reason for cancellation.");
      return;
    }
    alert(`Order ${order.id} cancelled.\nReason: ${reason}`);
    navigate("/dashbord/myorders/ongoing")
    // 🔥 In real app, call API here to cancel order
  };

  return (
    <div className="cancel-container">
      <h1>Cancel Order</h1>
      <p className="cancel-orderid">Order ID: {order.id}</p>

      {/* Product Info */}
      <div className="cancel-item">
        <img src={order.productImage} alt={order.productName} />
        <div className="cancel-item-info">
          <h2>{order.productName}</h2>
          <p>₹ {order.price}</p>
        </div>
      </div>

      {/* Reason Selection */}
      <div className="cancel-reasons">
        <h3>Reason for Cancellation</h3>
        <label>
          <input
            type="radio"
            name="reason"
            value="Found cheaper elsewhere"
            onChange={(e) => setReason(e.target.value)}
          />
          Found cheaper elsewhere
        </label>
        <label>
          <input
            type="radio"
            name="reason"
            value="Ordered by mistake"
            onChange={(e) => setReason(e.target.value)}
          />
          Ordered by mistake
        </label>
        <label>
          <input
            type="radio"
            name="reason"
            value="Product not needed"
            onChange={(e) => setReason(e.target.value)}
          />
          Product not needed
        </label>
        <label>
          <input
            type="radio"
            name="reason"
            value="Delivery is too late"
            onChange={(e) => setReason(e.target.value)}
          />
          Delivery is too late
        </label>
        <label>
          <input
            type="radio"
            name="reason"
            value="Other"
            onChange={(e) => setReason(e.target.value)}
          />
          Other
        </label>
      </div>

      {/* Cancel Button */}
      <button className="btn-cancel-final" onClick={handleCancel}>
        Confirm Cancellation
      </button>
    </div>
  );
}

export default Cancelorder;

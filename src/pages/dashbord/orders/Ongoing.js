import React from "react";
import Kambu from "../../../img/kambu.png";
import "./Orders.css"; 
import { useNavigate } from "react-router-dom";// keep styles separate

function Ongoing() {
    const navigate = useNavigate();
    function Trackorder(){
        navigate("/dashbord/myorders/trackorders")
    }
    function Canceloreder(){
        navigate("/dashbord/myorders/cancelorder")
    }

  // Example order data (in real app this comes from API or props)
  const order = {
    id: "ORD12345",
    productName: "Kambu Pack (500g)",
    productImage: Kambu, // sample image
    bookedDate: "2025-10-01",
    price: 120,
    status: "Ongoing",
  };

  return (
    <div className="order-card">
      {/* Product Info */}
      <div className="order-top">
        <img
          src={order.productImage}
          alt={order.productName}
          className="order-img"
        />
        <div className="order-info">
          <h2 className="order-title">{order.productName}</h2>
          <p className="order-id">Order ID: {order.id}</p>
          <p className="order-date">Booked on: {order.bookedDate}</p>
          <p className="order-price">₹ {order.price}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="order-actions">
        <button onClick={Canceloreder} className="btn-cancel">Cancel Order</button>
        <button  onClick={Trackorder} className="btn-track">Track Order</button>
      </div>
    </div>
  );
}

export default Ongoing;

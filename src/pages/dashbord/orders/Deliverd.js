import React from "react";
import "./Orders.css";
import Kambu from "../../../img/kambu.png";

function Deliverd() {
  const order = {
    id: "ORD12345",
    productName: "Kambu Pack (500g)",
    productImage: Kambu ,// replace with actual image
    price: 1200,
    deliveredDate: "28 Sept 2025",
    paymentStatus: "Paid (UPI)",
    deliveryStatus: "Delivered",
    deliveryAgent: "Rajesh Kumar",
    contact: "+91 9876543210"
  };

  return (
    <div className="delivered-container">
      <h1>Delivered Product</h1>

      <div className="delivered-card">
        {/* Product Image */}
        <img
          src={order.productImage}
          alt={order.productName}
          className="delivered-img"
        />

        {/* Product Details */}
        <div className="delivered-info">
          <h2>{order.productName}</h2>
          <p className="order-id">Order ID: {order.id}</p>
          <p className="delivered-date">
            Delivered on: <strong>{order.deliveredDate}</strong>
          </p>
          <p className="order-price">Price: ₹ {order.price}</p>
          <p className="payment-status">Payment: {order.paymentStatus}</p>
          <p className="delivery-status">Status: {order.deliveryStatus}</p>
          <p className="delivered-agent">
            Delivered by: {order.deliveryAgent} ({order.contact})
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="delivered-actions">
        <button className="btn-return">Return</button>
        <button className="btn-buy-again">Buy Again</button>
      </div>
    </div>
  );
}

export default Deliverd;

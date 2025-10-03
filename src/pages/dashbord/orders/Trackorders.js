import React from "react";
import "./Orders.css";
import Kambu from "../../../img/kambu.png";

function Trackorders() {
  const order = {
    id: "ORD12345",
    productName: "Kambu Pack (500g)",
    productImage: Kambu, // replace with your actual image
    bookedDate: "2025-10-01",
    outForDelivery: "2025-10-02",
    deliveredDate: "2025-10-03",
    deliveryContact: "+91 98765 43210",
    price: 120,
    status: "Out for Delivery", // current status
  };

  return (
    <div className="track-container">
      <h1 className="track-title">Track Order</h1>
      <p className="track-orderid">Order ID: {order.id}</p>

      {/* Timeline */}
      <div className="timeline">
        <div className={`step ${order.status === "Placed" || order.status !== "" ? "completed" : ""}`}>
          <div className="circle">✓</div>
          <p>Order Placed</p>
          <span>{order.bookedDate}</span>
        </div>

        <div className={`step ${order.status === "Out for Delivery" || order.status === "Delivered" ? "completed" : ""}`}>
          <div className="circle">✓</div>
          <p>Out for Delivery</p>
          <span>{order.outForDelivery}</span>
        </div>

        <div className={`step ${order.status === "Delivered" ? "completed" : ""}`}>
          <div className="circle">✓</div>
          <p>Delivered</p>
          <span>{order.deliveredDate}</span>
        </div>
      </div>

      {/* Delivery Contact */}
      <div className="delivery-contact">
        <h3>Delivery Contact</h3>
        <p>{order.deliveryContact}</p>
      </div>

      {/* Ordered Items */}
      <div className="ordered-item">
        <h3>Ordered Item</h3>
        <div className="item-card">
          <img src={order.productImage} alt={order.productName} />
          <div className="item-info">
            <p className="item-name">{order.productName}</p>
            <p className="item-price">₹ {order.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackorders;

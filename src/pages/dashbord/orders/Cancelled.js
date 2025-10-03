import React from "react";
import "./Orders.css";
import Kambu from "../../../img/kambu.png";
import Cholam from "../../../img/colam.png";

function Cancelled() {
  // Example cancelled order
  const cancelledOrders = [
    {
      id: "ORD67890",
      productName: "Kambu Pack (500g)",
      productImage: Kambu, // replace with your image
      price: 120,
      cancelledDate: "25 Sept 2025",
      cancelReason: "Customer changed mind",
    },
    {
      id: "ORD67891",
      productName: "Ragi Flour (1kg)",
      productImage: Cholam,
      price: 150,
      cancelledDate: "20 Sept 2025",
      cancelReason: "Payment failed",
    },
  ];

  return (
    <div className="cancelled-container">
      <h1>Cancelled Orders</h1>

      {cancelledOrders.map((order) => (
        <div key={order.id} className="cancelled-card">
          {/* Product image */}
          <img src={order.productImage} alt={order.productName} />

          {/* Product details */}
          <div className="cancelled-info">
            <h2>{order.productName}</h2>
            <p>₹ {order.price}</p>
            <p className="cancelled-date">
              Cancelled on <strong>{order.cancelledDate}</strong>
            </p>
            <p className="cancelled-reason">
              Reason: <em>{order.cancelReason}</em>
            </p>
            <p className="order-id">Order ID: {order.id}</p>
          </div>

          {/* Action */}
          <div className="cancelled-actions">
            <button className="btn-rebook">Rebook</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cancelled;

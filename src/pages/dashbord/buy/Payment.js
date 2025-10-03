import React, { useState } from "react";
import "../Dashbord.css"; // Optional: for separate styling
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/dashbord");
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Payment</h1>

        {/* Payment Method */}
        <div className="payment-field">
          <label className="payment-label">Select Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="payment-input"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        {/* Card Details */}
        {method === "card" && (
          <>
            <div className="payment-field">
              <label className="payment-label">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="payment-input"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="payment-field">
              <label className="payment-label">Card Holder Name</label>
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                className="payment-input"
                placeholder="Neela Mohan"
              />
            </div>
            <div className="payment-field-row">
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="payment-input half"
                placeholder="MM/YY"
              />
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="payment-input half"
                placeholder="CVV"
              />
            </div>
          </>
        )}

        {/* Confirm Button */}
        <button onClick={handlePayment} className="payment-button">
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default Payment;

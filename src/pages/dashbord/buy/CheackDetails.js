import React, { useState } from "react";
import "../Dashbord.css"; 
import { useNavigate } from "react-router-dom";// Import the CSS file

function CheackDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState("Neela Mohan");
  const [address, setAddress] = useState("123, Agri Street, Perambalur, Tamil Nadu - 621212");
  const [newAddress, setNewAddress] = useState("");

  const handleContinue = () => {
    navigate("/payment");
  };

  return (
    <div className="check-container">
      <div className="check-card">
        <h1 className="check-title">Check Details</h1>

        <div className="check-field">
          <label className="check-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="check-input"
          />
        </div>

        <div className="check-field">
          <label className="check-label">Current Address</label>
          <textarea
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="check-input"
          ></textarea>
        </div>

        <div className="check-field">
          <label className="check-label">Add New Address</label>
          <textarea
            rows="3"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Enter new address"
            className="check-input"
          ></textarea>
        </div>

        <button onClick={handleContinue} className="check-button">
          Continue
        </button>
      </div>
    </div>
  );
}

export default CheackDetails;

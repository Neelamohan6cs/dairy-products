import { useState } from "react";
import { useSelector } from "react-redux";
import "./Demo.css";

function Products() {
  // Provide a fallback to avoid undefined errors
  const user = useSelector((state) => state.user?.userdetails || {});
  
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="demo">
      <button className="demobtn" onClick={() => setShowPopup(true)}>
        Profile
      </button>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            {user.image ? (
              <img
                src={user.image}
                alt={user.name || "Profile"}
                className="popup-img"
              />
            ) : (
              <div className="popup-img placeholder">No Image</div>
            )}
            <h2>{user.name || "No Name"}</h2>
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
            <p><strong>Address:</strong> {user.address || "N/A"}</p>

            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
// filepath: d:\react projects\dairy-products\src\pages\demo\Profilepop.js
import { useState, useEffect } from "react";
import "./Demo.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Pop() {
  const navigate = useNavigate();
  const { products = [] } = useSelector((state) => state.product);
  const [single_product, setSingleProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setSingleProduct(products[0]); // store first product safely
    }
  }, [products]);

  return (
    <div className="demo">
      <button className="demobtn" onClick={() => setShowPopup(true)}>
        Click me
      </button>

      {showPopup && single_product && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={single_product.image}
              alt={single_product.name}
              className="popup-img"
            />
            <h2>{single_product.name}</h2>
            <p>{single_product.description}</p>

            <button
              className="demobtn"
              onClick={() => navigate("/dashbord/buy")}
            >
              Buy
            </button>
            <button className="demobtn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pop;

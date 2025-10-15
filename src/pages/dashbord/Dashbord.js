import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Dashbord.css";
import { useSelector } from "react-redux";
import { VscFeedback } from "react-icons/vsc";
import { FaShareSquare } from "react-icons/fa";

function Dashboard() {
  const { products = [], banners = [] } = useSelector((state) => state.product || {});
  const navigate = useNavigate();

  // Carousel
  const images = banners;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Likes and Comments state
 
  // Update likes/comments state if products change
  
  function handleBuyClick() {
    navigate("/dashbord/buy");
  }

  
  

  return (
    <div className="dashboard">
      {/* Carousel */}
      <div className="carousel">
        {images.length > 0 && (
          <img src={images[index]} alt={`banner-${index}`} className="banner-img" />
        )}
      </div>

      {/* Product Cards */}
      <div>
        <h1 className="section-title">Our Products</h1>
        <div className="categories">
          {products.map((product, idx) => (
            <div key={idx} className="category-card">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                <p className="caption">{product.caption}</p>
              </div>

              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <div className="action-row">
                <button  className="icon-button"><VscFeedback /></button>
                <button className="icon-button"><FaShareSquare/></button>
                <button onClick={handleBuyClick} className="buy-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

     
     
    </div>
  );
}

export default Dashboard;
// filepath: d:\react projects\dairy-products\src\pages\dashbord\Dashbord.js

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Dashbord.css";
import Header from "./Header";

import product1 from "../../img/kambu.png";
import product2 from "../../img/punaku.png";
import product3 from "../../img/colam.png";
import Footer from "./Footer";


function Dashboard() {
  // Carousel Images
  const navigate = useNavigate();
  const images = [
    product3,
    product1,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Dairy Categories
  const categories = [
    { id: 1, name: "Kambu", img: product1 },
    { id: 2, name: "Kelvaragu", img: product2 },
    { id: 3, name: "Punnaku", img: product3 },
  ];

  function Addcard(){
    navigate("/dashbord/buy")
    
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <Header />

      {/* Carousel */}
      <div className="carousel">
        <img src={images[index]} alt="banner" />
      </div>

      {/* Categories */}
     <div className="categories">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
            <button 
              onClick={Addcard}
              className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import kambuImg from "../../../img/kambu.png"; // Replace with actual image path

function Buy() {
 const navigate = useNavigate();

    
  function Cheackout(){
    navigate("/dashbord/buy/cheackdetails");
    
  } 
  const item = {
    name: "Kambu",
    img: kambuImg,
    quantityKg: 200,
    pricePerKg: 4000,
  };

  const totalPrice = item.quantityKg * item.pricePerKg;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 border border-green-200">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Your Cart</h1>

        {/* Item Card */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={item.img}
            alt={item.name}
            className="w-24 h-24 rounded-lg object-cover border border-green-300"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">Quantity: {item.quantityKg} kg</p>
            <p className="text-gray-600">Price: ₹{item.pricePerKg} / kg</p>
            <p className="text-green-700 font-bold mt-1">Total: ₹{totalPrice}</p>
          </div>
        </div>

        {/* Checkout Button */}
        <button 
            onClick={Cheackout}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold shadow-md">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Buy;

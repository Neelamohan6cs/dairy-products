import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const correctOtp = "1234";

  const [phNo, setPhNo] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === correctOtp) {
      navigate("/personldetails");
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm border border-green-200">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2">
           Login
        </h2>
        
        {/* Mobile Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            value={phNo}
            onChange={(e) => setPhNo(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* OTP Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            OTP
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
        >
          Login
        </button>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("✅")
                ? "text-green-600 font-medium"
                : "text-red-600 font-medium"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;

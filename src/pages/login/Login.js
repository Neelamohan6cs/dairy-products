import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhone,
  setOtp,
  generateOtpStart,
  generateOtpSuccess,
  generateOtpFail,
  verifyOtp,
} from "../../features/auth/authSlice";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { phone, otp, generatedOtp, message, otpEnabled, loading } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !otp) {
      dispatch(generateOtpFail());
      return;
    }

    dispatch(verifyOtp(otp));
    if (otp === generatedOtp) {
      setTimeout(() => navigate("/personldetails"), 1000);
    }
  };

  const GenerateOtp = () => {
    if (phone.length === 10 && /^[0-9]+$/.test(phone)) {
      dispatch(generateOtpStart());

      const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();

      setTimeout(() => {
        dispatch(generateOtpSuccess(randomOtp));
        alert(`Your OTP is: ${randomOtp}`); // Testing purpose only
      }, 1000);
    } else {
      dispatch(generateOtpFail());
    }
  };

  return (
    <div className="login-container">
      <div className="login-card animate-fadeIn">
        <h2 className="login-title">🔐 Verification</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="input-label">Mobile Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              placeholder="Enter 10-digit mobile number"
              className="input-field"
              required
            />
          </div>

          <button
            type="button"
            onClick={GenerateOtp}
            className="otp-btn"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

          <div className="mb-6 mt-4">
            <label className="input-label">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => dispatch(setOtp(e.target.value))}
              placeholder="Enter OTP"
              className={`input-field ${!otpEnabled ? "disabled-input" : ""}`}
              disabled={!otpEnabled}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("✅")
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
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

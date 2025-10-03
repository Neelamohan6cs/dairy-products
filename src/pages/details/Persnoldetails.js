import { useNavigate } from "react-router-dom";
import "./PersonalDetails.css"; // Import the CSS file

function PersonalDetails() {
  const navigate = useNavigate();

  const handlecontinue = () => {
    navigate("/dashbord");
  };

  return (
    <div className="personal-container">
      <div className="personal-card">
        <h2 className="personal-title">Personal Details</h2>

        <div className="personal-field">
          <label className="personal-label">Full Name</label>
          <input type="text" placeholder="Enter full name" className="personal-input" />
        </div>

        <div className="personal-field">
          <label className="personal-label">Mobile Number</label>
          <input type="tel" placeholder="Enter mobile number" className="personal-input" />
        </div>

        <div className="personal-field">
          <label className="personal-label">State</label>
          <input type="text" placeholder="Enter state" className="personal-input" />
        </div>

        <div className="personal-field">
          <label className="personal-label">District</label>
          <input type="text" placeholder="Enter district" className="personal-input" />
        </div>

        <div className="personal-field">
          <label className="personal-label">Pincode</label>
          <input type="number" placeholder="Enter pincode" className="personal-input" />
        </div>

        <div className="personal-field">
          <label className="personal-label">Full Address</label>
          <textarea rows="3" placeholder="Enter full address" className="personal-input"></textarea>
        </div>

        <button onClick={handlecontinue} className="personal-button">
          Continue
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;

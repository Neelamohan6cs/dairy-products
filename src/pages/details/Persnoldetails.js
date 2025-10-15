import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setName,

  setState,
  setDistrict,
  setPincode,
  setAddress,
} from "../../features/details/userdetailsSlice";
import "./PersonalDetails.css";

function PersonalDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userdetails);

  const handleContinue = () => {
    if (!user.name ||  !user.state || !user.district || !user.pincode || !user.address) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    alert("✅ Details saved successfully!");
    navigate("/dashbord");
  };

  return (
    <div className="personal-container">
      <div className="personal-card">
        <h2 className="personal-title">Personal Details</h2>

        <div className="personal-field">
          <label className="personal-label">Full Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => dispatch(setName(e.target.value))}
            placeholder="Enter full name"
            className="personal-input"
          />
        </div>

        

        <div className="personal-field">
          <label className="personal-label">State</label>
          <input
            type="text"
            value={user.state}
            onChange={(e) => dispatch(setState(e.target.value))}
            placeholder="Enter state"
            className="personal-input"
          />
        </div>

        <div className="personal-field">
          <label className="personal-label">District</label>
          <input
            type="text"
            value={user.district}
            onChange={(e) => dispatch(setDistrict(e.target.value))}
            placeholder="Enter district"
            className="personal-input"
          />
        </div>

        <div className="personal-field">
          <label className="personal-label">Pincode</label>
          <input
            type="number"
            value={user.pincode}
            onChange={(e) => dispatch(setPincode(e.target.value))}
            placeholder="Enter pincode"
            className="personal-input"
          />
        </div>

        <div className="personal-field">
          <label className="personal-label">Full Address</label>
          <textarea
            rows="3"
            value={user.address}
            onChange={(e) => dispatch(setAddress(e.target.value))}
            placeholder="Enter full address"
            className="personal-input"
          ></textarea>
        </div>

        <button onClick={handleContinue} className="personal-button">
          Continue
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;

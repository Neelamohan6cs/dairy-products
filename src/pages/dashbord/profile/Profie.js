import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setName,
  setState,
  setDistrict,
  setPincode,
  setAddress,
} from "../../../features/details/userdetailsSlice";
import "./Profile.css";

function Profile() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userdetails);

  const handleContinue = () => {
    if (!user.name || !user.state || !user.district || !user.pincode || !user.address) {
      alert("⚠️ Please fill all fields!");
      return;
    }
    alert("✅ Details saved successfully!");
    navigate("/dashbord");
  };

  return (
    <div className="profile-container">
      <div className="profile-frame">
        <h2 className="profile-title">Edit Your Details</h2>

        <div className="profile-row">
          <label>Name :</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => dispatch(setName(e.target.value))}
            placeholder="Enter name "
          />
        </div>

        <div className="profile-row">
          <label>State :</label>
          <input
            type="text"
            value={user.state}
            onChange={(e) => dispatch(setState(e.target.value))}
            placeholder="Enter state (e.g., Tamil Nadu)"
          />
        </div>

        <div className="profile-row">
          <label>District :</label>
          <input
            type="text"
            value={user.district}
            onChange={(e) => dispatch(setDistrict(e.target.value))}
            placeholder="Enter district"
          />
        </div>

        <div className="profile-row">
          <label>Pincode :</label>
          <input
            type="number"
            value={user.pincode}
            onChange={(e) => dispatch(setPincode(e.target.value))}
            placeholder="Enter pincode"
          />
        </div>

        <div className="profile-row">
          <label>Address :</label>
          <textarea
            rows="2"
            value={user.address}
            onChange={(e) => dispatch(setAddress(e.target.value))}
            placeholder="Enter full address"
          ></textarea>
        </div>

        <button onClick={handleContinue} className="profile-btn">Continue</button>
      </div>
    </div>
  );
}

export default Profile;

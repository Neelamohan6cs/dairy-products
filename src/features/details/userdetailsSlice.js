// src/features/userdetails/userdetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  state: "",
  district: "",
  pincode: "",
  address: "",
  loading: false,
  message: "",
};

const userdetailsSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    
    setState: (state, action) => {
      state.state = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    resetDetails: () => initialState,
  },
});

export const {
  setName,
  setState,
  setDistrict,
  setPincode,
  setAddress,
  resetDetails,
} = userdetailsSlice.actions;

export default userdetailsSlice.reducer;

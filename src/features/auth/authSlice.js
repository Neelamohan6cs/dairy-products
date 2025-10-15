import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  otp: "",
  generatedOtp: "",
  otpEnabled: false,
  loading: false,
  message: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    generateOtpStart: (state) => {
      state.loading = true;
      state.message = "";
    },
    generateOtpSuccess: (state, action) => {
      state.loading = false;
      state.generatedOtp = action.payload;
      state.otpEnabled = true;
      state.message = "✅ OTP sent successfully!";
    },
    generateOtpFail: (state) => {
      state.loading = false;
      state.message = "⚠️ Enter a valid 10-digit mobile number!";
    },
    verifyOtp: (state, action) => {
      if (action.payload === state.generatedOtp) {
        state.isAuthenticated = true;
        state.message = "✅ Login Successful!";
      } else {
        state.isAuthenticated = false;
        state.message = "❌ Invalid OTP. Please try again.";
      }
    },
    resetAuth: () => initialState,
  },
});

export const {
  setPhone,
  setOtp,
  generateOtpStart,
  generateOtpSuccess,
  generateOtpFail,
  verifyOtp,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;

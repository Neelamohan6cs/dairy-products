import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userdetailsReducer from "../features/details/userdetailsSlice";
import productReducer from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userdetails: userdetailsReducer,
    product:productReducer,
  },
});

export default store;

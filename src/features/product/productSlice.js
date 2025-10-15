import { createSlice } from "@reduxjs/toolkit";

import product1 from "../../img/kambu.png";
import product2 from "../../img/punaku.png";
import product3 from "../../img/colam.png";


import banner4 from "../../img/banner4.png";
import banner1 from "../../img/banner1.png";
import banner2 from "../../img/banner2.png";



const initialState = {
  products: [
    {
      name: "Kambu",
      image: product1,
      description:
        "High energy and protein: Kambu provides a good source of energy for weight gain in beef cattle and high performance in dairy cows. "
    },
    {
      name: "Punnaku",
      image: product2,
      description:
        "Boosts milk production and quality: In dairy cows, oil cakes can significantly increase milk yield and improve the milk's protein and fat content."
    },
    {
      name: "Cholam",
      image: product3,
      description:
        "High energy source: Sorghum grain is rich in starch, making it an excellent source of energy for cattle."
    }
  ],
  banners: [banner1,banner2,banner4], // ✅ fixed here
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (_product, index) => index !== action.payload
      );
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  removeProduct,
} = productSlice.actions;

export default productSlice.reducer;

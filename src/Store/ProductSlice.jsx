import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Base_Url } from "../utilities/Base_Url";
import { STATUS } from "../utilities/StatusComponent";

const initialState = {
  products: [],
  productsStatus: STATUS.Idle,
  productsSingle: [],
  productsSingleStatus: STATUS.Idle,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProducts.pending, (state, action) => {
        state.productsStatus = STATUS.Loading;
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.Idle;
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.Error;
      })
      //SingleProducts
      .addCase(fetchAsyncProductsSingle.pending, (state, action) => {
        state.productsSingleStatus = STATUS.Loading;
      })
      .addCase(fetchAsyncProductsSingle.fulfilled, (state, action) => {
        state.productsSingleStatus = STATUS.Idle;
        state.productsSingle = action.payload;
      })
      .addCase(fetchAsyncProductsSingle.rejected, (state, action) => {
        state.productsSingleStatus = STATUS.Error;
      });
  },
});

// For getting the Products list with Limited items
export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async (limit) => {
    const response = await fetch(`${Base_Url}products?limit=${limit}`);
    const data = await response.json();
    return data.products;
  }
);
// Getting the single product items
export const fetchAsyncProductsSingle = createAsyncThunk(
  "productsingle/fetch",
  async (id) => {
    const response = await fetch(`${Base_Url}products/${id}`);
    const data = await response.json();
    return data;
  }
);

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productsSingle;
export const getSingleProductStatus = (state) =>
  state.product.productsSingleStatus;

export default productSlice.reducer;

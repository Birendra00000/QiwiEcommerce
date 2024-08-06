import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Base_Url } from "../utilities/Base_Url";
import { STATUS } from "../utilities/StatusComponent";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.Idle,
  categoryProducts: [],
  categoryProductsStatus: STATUS.Idle,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.pending, (state, action) => {
      state.categoriesStatus = STATUS.Loading;
    });
    builder.addCase(fetchAsyncCategories.fulfilled, (state, action) => {
      state.categoriesStatus = STATUS.Idle;
      state.categories = action.payload;
    });
    builder.addCase(fetchAsyncCategories.rejected, (state, action) => {
      state.categoriesStatus = STATUS.Error;
    });

    ///Category with Product

    builder.addCase(fetchAsyncProductsOfCategory.pending, (state, action) => {
      state.categoryProductsStatus = STATUS.Loading;
    });
    builder.addCase(fetchAsyncProductsOfCategory.fulfilled, (state, action) => {
      state.categoryProductsStatus = STATUS.Idle;
      state.categoryProducts = action.payload;
    });

    builder.addCase(fetchAsyncProductsOfCategory.rejected, (state, action) => {
      state.categoryProductsStatus = STATUS.Error;
    });
  },
});

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await fetch(`${Base_Url}products/categories`);
    const data = await response.json();
    console.log("slice data", data);

    return data;
  }
);

export const fetchAsyncProductsOfCategory = createAsyncThunk(
  "categoryproducts/fetch",
  async (category) => {
    const response = await fetch(`${Base_Url}products/category/${category}`);
    const data = await response.json();
    return data.products;
  }
);

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategories = (state) =>
  state.category.categoryProducts;
export const getCategoryProductsStatus = (state) =>
  state.category.categoryProductsStatus;
export default categorySlice.reducer;

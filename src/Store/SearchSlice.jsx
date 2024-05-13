import React, { createElement } from "react";

import { STATUS } from "../utilities/StatusComponent";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Base_Url } from "../utilities/Base_Url";

const initialState = {
  searchProducts: [],
  seachProductStatus: STATUS.Idle,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.searchProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncSearchProduct.pending, (state, action) => {
        state.seachProductStatus = STATUS.Loading;
      })
      .addCase(fetchAsyncSearchProduct.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.seachProductStatus = STATUS.Idle;
      })
      .addCase(fetchAsyncSearchProduct.rejected, (state, action) => {
        state.seachProductStatus = STATUS.Error;
      });
  },
});

export const fetchAsyncSearchProduct = createAsyncThunk(
  "product-search/fetch",
  async (searchItems) => {
    const response = await fetch(`${Base_Url}products/search?q=${searchItems}`);
    const data = await response.json();
    console.log(data);
    return data.products;
  }
);

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export const getSearchProduct = (state) => state.search.searchProducts;
export const getSearchProductStatus = (state) =>
  state.search.seachProductStatus;

export default searchSlice.reducer;

import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBaron: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setSideBaron: (state) => {
      state.isSideBaron = true;
    },
    setSideBaroff: (state) => {
      state.isSideBaron = false;
    },
  },
});

export const { setSideBaron, setSideBaroff } = sideBarSlice.actions;

export const getsideBarSliceStatus = (state) => state.sideBar.isSideBaron;

export default sideBarSlice.reducer;

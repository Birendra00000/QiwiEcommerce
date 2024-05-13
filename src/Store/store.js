import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./SidebarSlice";
import categoryReducer from "./CategorySlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
import searchReducer from "./SearchSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;

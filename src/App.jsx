import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CartPage,
  CategoryPage,
  HomePage,
  SearchProduct,
  SingleProductPage,
} from "./Pages/index";
import store from "./Store/store";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Login from "./Pages/login";
import Register from "./Pages/Register";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* SingleProductPage Route */}
            <Route path="/product/:id" element={<SingleProductPage />} />

            {/* Category wise Page listing Route */}
            <Route path="/category/:category" element={<CategoryPage />} />

            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />
            {/* Search term */}

            <Route path="search/:searchTerm" element={<SearchProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;

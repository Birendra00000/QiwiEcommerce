import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { ImSearch } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getsideBarSliceStatus } from "../Store/SidebarSlice";
import {
  getAllCarts,
  getCartsItemsCount,
  getCartTotal,
} from "../Store/CartSlice";
import { getAllCategories } from "../Store/CategorySlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);

  const itemsCount = useSelector(getCartsItemsCount);

  const [searchTerm, setSearch] = useState("");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <>
      <div className="Navbar--maincontainer">
        <div className="nav-container">
          <div className="nav--card">
            <ul className="list--wrapper">
              <li className="listitem ">SAVE MORE ON APP</li>
              <li className="listitem">RECHARGE AND PAYMENTS</li>
              <li className="listitem">SELL ON QIWI</li>
              <li className="listitem">CUSTOMER CARE</li>
              <li className="listitem">TRACK MY ORDER</li>
              <li className="listitem">LOGIN </li>
              <li className="listitem">SIGN UP</li>
              <li className="listitem">LANGUAGE CHANGE</li>
            </ul>
          </div>
        </div>
        <div className="secondbar">
          <div className="second-logobar">
            <Link to="/">
              <div className="img-logo">
                <img
                  src="../assests/elogo.png"
                  alt="imagetitle"
                  className="ecommerce--logo"
                />
              </div>
            </Link>
            <div className="main--searh--card">
              <div className="search--bar">
                <input
                  type="search"
                  className="search--item"
                  placeholder="Search in QiWi"
                  autoComplete="off"
                />
              </div>

              <div className="search--logo">
                <button className="search--any-item">
                  <ImSearch className="searchlogo" />
                </button>
              </div>
            </div>
            <Link to="/cart">
              <div className="cart--icon flex text-slate-500">
                <AiOutlineShoppingCart size="2.8rem" className="cart-logo" />
                <span className="no--of-qty text-2xl">{itemsCount}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

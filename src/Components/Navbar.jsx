import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getsideBarSliceStatus } from "../Store/SidebarSlice";
import {
  getAllCarts,
  getCartsItemsCount,
  getCartTotal,
} from "../Store/CartSlice";
import { getAllCategories } from "../Store/CategorySlice";
import SearchProduct from "../Pages/SearchProduct";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  console.log(click);

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);

  const itemsCount = useSelector(getCartsItemsCount);

  const [searchTerm, setSearch] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <>
      <div className="Navbar--maincontainer">
        <div className="nav-container ">
          <div className="nav--card">
            <ul
              className={
                click ? "list--wrapper show--mobile " : "list--wrapper"
              }
            >
              <Link to="/">
                <li className="listitem ">HOME</li>
              </Link>
              <Link to="/login">
                <li className="listitem">LOGIN </li>
              </Link>
              <Link to="/register">
                <li className="listitem">SIGN UP</li>
              </Link>
              <li className="listitem">CART</li>
            </ul>
            <div className="hamburg--container ">
              <GiHamburgerMenu onClick={handleClick} size={24} />
            </div>
          </div>
        </div>
        <div className="secondbar">
          <div className="second-logobar">
            <Link to="/" className="w-[20%]">
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
                  onChange={(e) => handleSearchTerm(e)}
                />
              </div>
              <Link to={`search/${searchTerm}`} className="w-[20%]">
                <div className="search--logo">
                  <button className="search--any-item">
                    <ImSearch className="searchlogo" />
                  </button>
                </div>
              </Link>
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

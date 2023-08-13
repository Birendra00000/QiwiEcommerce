import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  getAllCarts,
  removeFromCart,
  clearCart,
  getCartTotal,
  toggleCartQty,
} from "../Store/CartSlice";
import "./cart.css";
const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <>
        <div className="container--main--wrapper--first flex ml-10 mt-7 text-lg text-slate-600">
          <Link to="/">
            <span className="home--wrap">Home / </span>
          </Link>
          <span className="wrapper--one--tit ml-1"> Cart</span>
        </div>
        <div className="empty--container mt-20 ">
          <div className="cart--empty--page flex justify-center text-2xl font-bold ">
            <span className="wrapper--empty">Your Shopping Cart is empty</span>
          </div>
          <div className="button--cart flex justify-center mt-5 ">
            <Link to="/">
              <button className="buy--wrap bg-yellow-600 p-3 ">Buy Now</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container--main--wrapper--first flex ml-10 mt-7 text-lg text-slate-600">
        <Link to="/">
          <span className="home--wrap">Home / </span>
        </Link>
        <span className="wrapper--one--tit ml-1"> Cart</span>
      </div>
      <div className="main--cart--wrapper  mt-20">
        <div className="cart--conatiner">
          <div className="cart--wrapper bg-white py-2 mx-4 ">
            <div className="wrapper--cart">
              <div className="cart--header flex justify-between">
                <div className="cart--snb">
                  <span className="sn--wrap">S.N.</span>
                </div>
                <div className="product--wrap">
                  <span className="cart--product">Product</span>
                </div>
                <div className="unit--wrap">
                  <span className="priceunit--product">
                    Discount Percentage
                  </span>
                </div>
                <div className="qty--wrap">
                  <span className="cart--quantity">Quantity</span>
                </div>
                <div className="total--wrap">
                  <span className="cart--totalPrice">Total Price</span>
                </div>
                <div className="action--wrap pr-2">
                  <span className="cart--actionWrap">Action</span>
                </div>
              </div>
            </div>
          </div>

          {carts.map((item, idx) => {
            return (
              <>
                <div className="cart--item   mt-8 py-2  mx-7" key={item.id}>
                  <div className="cart--crt--wrapper mx-3" key={item.id}>
                    <div className="id--cont">{idx + 1}</div>
                  </div>
                  <div className="cart--crt--wrapper">
                    <div className="id--cont">{item.title}</div>
                  </div>
                  <div className="cart--crt--wrapper">
                    <div className="id--cont">{item.discountPercentage}%</div>
                  </div>
                  <div className="cart--crt--wrapper">
                    <div className="id--cont">{item.quantity}</div>
                  </div>
                  <div className="cart--crt--wrapper">
                    <div className="id--cont">${item.totalPrice}</div>
                  </div>
                  <div className="remove--wrap bg-orange-500 text-white">
                    <button
                      className="remove--wrap--abc"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div
          className="clear--cart--wrappper flex ml-8 mt-10"
          onClick={() => dispatch(clearCart())}
        >
          <button className="clear-cart--button flex align-middle bg-orange-500 text-white justify-center">
            <FaTrash />

            <span className="cart--items--clear p-2">Clear Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;

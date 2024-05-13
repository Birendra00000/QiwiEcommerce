import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Breadcrumb className="ml-8 mt-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

          <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
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
      <Breadcrumb className="ml-8 mt-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
      </Breadcrumb>
      <div className="main--cart--wrapper  mt-20">
        <div className="cart--conatiner">
          <div className="cart--wrapper bg-white py-2 mx-4 ">
            <div className="wrapper--cart">
              <div className="cart--header grid  grid-cols-12">
                <div className="cart--snb col-span-2">
                  <span className="sn--wrap">S.N.</span>
                </div>
                <div className="product--wrap col-span-2 text-center">
                  <span className="cart--product">Product</span>
                </div>
                <div className="unit--wrap col-span-2">
                  <span className="priceunit--product">
                    Discount Percentage
                  </span>
                </div>
                <div className="qty--wrap col-span-2 text-center">
                  <span className="cart--quantity">Quantity</span>
                </div>
                <div className="total--wrap col-span-2 text-center">
                  <span className="cart--totalPrice">Total Price</span>
                </div>
                <div className="action--wrap pr-2 col-span-2 text-center">
                  <span className="cart--actionWrap">Action</span>
                </div>
              </div>
            </div>
          </div>

          {carts.map((item, idx) => {
            return (
              <>
                <div
                  className="grid grid-cols-12 mt-8 py-2  mx-7 items-center"
                  key={item.id}
                >
                  <div
                    className="cart--crt--wrapper mx-3  col-span-2"
                    key={item.id}
                  >
                    <div className="id--cont">{idx + 1}</div>
                  </div>
                  <div className="cart--crt--wrapper  col-span-2 text-center">
                    <div className="id--cont">{item.title}</div>
                  </div>
                  <div className="cart--crt--wrapper  col-span-2 text-center">
                    <div className="id--cont">{item.discountPercentage}%</div>
                  </div>
                  <div className="cart--crt--wrapper  col-span-2 text-center">
                    <div className="id--cont">{item.quantity}</div>
                  </div>
                  <div className="cart--crt--wrapper  col-span-2 text-center">
                    <div className="id--cont">${item.totalPrice}</div>
                  </div>
                  <div className=" col-span-2 ml-auto mr-auto">
                    <button
                      className="remove--wrap--abc  bg-orange-500 text-white  flex justify-center rounded-md p-2"
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
          <button className="clear-cart--button flex align-middle bg-orange-500 text-white justify-center hover:bg-lime-500">
            <FaTrash />

            <span className="s--clear p-2">Clear Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;

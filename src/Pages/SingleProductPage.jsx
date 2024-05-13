import React from "react";
import "./SinglePage.css";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../utilities/StatusComponent";
import {
  fetchAsyncProductsSingle,
  getSingleProductStatus,
  getProductSingle,
} from "../Store/ProductSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../Store/CartSlice";
import CartMessage from "../Components/CartMessage";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const singleProductStatus = useSelector(getSingleProductStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsSingle(id));
    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  const increaseQuantity = () => {
    setQuantity((preQty) => {
      let tempQuantity = preQty + 1;
      if (tempQuantity > product.stock) tempQuantity = product.stock;
      return tempQuantity;
    });
  };
  const decreaseQuantity = () => {
    setQuantity((preQty) => {
      let tempQuantity = preQty - 1;
      if (tempQuantity < 1) tempQuantity = 1;
      return tempQuantity;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice = product.price * (product.discountPercentage / 100);

    let totalPrice = quantity * discountedPrice;
    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  if (singleProductStatus === STATUS.Loading) {
    return <Loader />;
  }

  function handleClick() {
    return alert("Playing!");
  }

  return (
    <>
      <div className="single--product--container">
        <div className="product--wrap">
          <div className="main--container--single">
            <img
              src={product.thumbnail}
              alt="img--name"
              className="img--container"
            />
          </div>

          <div className="title--wrap">
            <h2>{product.title}</h2>
          </div>
          <div className="description--wrap mt-3">
            <p className="description--container">{product.description}</p>
          </div>
          <div className="flex--container flex mt-2 text-orange-500 font-bold">
            <div className="rating--wrap">
              <small className="rating--containe mx-2">
                Rating:{product.rating}
              </small>
            </div>
            <div className="brand--container">
              <small className="brand mx-2">Brand:{product.brand}</small>
            </div>
            <div className="category mx-2">
              <small className="product--type">
                Category:{product.category}
              </small>
            </div>
          </div>
          <div className="all--price--wrap flex align-middle mt-3">
            <div className="price--wrap font-extrabold ml-5 text-orange-600">
              <p className="price--container text-2xl">${product.price}</p>
            </div>
            <div className="discount--price--wrap ml-8 bg-orange-600 text-white rounded-lg	">
              <p className="container--dicount">
                {product.discountPercentage}%
              </p>
            </div>
          </div>
        </div>
        <div className="button--container mt-20 ml-20  text-slate-700">
          <div className="all-wrap--container flex ">
            <div className="quantity--wrap font-bold text-xl text-slate-600">
              Quantity:
            </div>
            <button
              className="minus--wrap mr-3 text-xl "
              onClick={() => decreaseQuantity()}
            >
              <AiOutlineMinus />
            </button>
            <button className="quantity--container mr-3  text-xl">
              {quantity}
            </button>
            <button
              type="button"
              className="plus--wrapper mr-3  text-xl"
              onClick={() => increaseQuantity()}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <div className="addtocart--wrap mt-5 flex">
            <Link to="/cart">
              <div className="add--cart--container bg-orange-400 flex align-middle justify-center">
                <button
                  className="cart--container flex align-middle text-lg text-white"
                  type="button"
                  onClick={() => addToCartHandler(product)}
                >
                  <AiOutlineShoppingCart
                    size="2.2rem"
                    className="mx-3"
                    color="white"
                    onClick={handleClick}
                  />
                  Add to Cart
                </button>
              </div>{" "}
            </Link>
            <div className="last--wrapper ml-9 bg-orange-400 p-2">
              <button className="buy--items text-lg text-white">Buy Now</button>
            </div>
          </div>
        </div>
        {cartMessageStatus && <CartMessage />}
      </div>
    </>
  );
};

export default SingleProductPage;

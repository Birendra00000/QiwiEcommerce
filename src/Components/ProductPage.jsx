import React from "react";
import { Link } from "react-router-dom";
import "./productabc.css";

const ProductPage = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div className="card card-vertical d-flex direction-column relative shadow">
        <div className="card-image-container relative">
          <small className="c-badge bg-black text-white absolute left-0 top-0 text-3 lg:text-lg">
            {product.category}
          </small>
        </div>
        <img className="card-image" src={product.thumbnail} alt="shoes" />

        <div className="card-details">
          <div className="card-title text-[14px] lg:text-[20px]">
            {product.title.slice(0, 20)}
          </div>
          <div className="card-description">
            <p className="card-price text-[12px] lg:text-[16px]">
              {product.price}
            </p>
            <span className="discount text-[12px] lg:text-[16px]">
              {product.discountPercentage}
            </span>
          </div>

          <div className="cta-btn ">
            <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin text-[14px] lg:text-[18px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPage;

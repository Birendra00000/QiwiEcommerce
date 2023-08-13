import React from "react";
import { Link } from "react-router-dom";
import "./productabc.css";

const ProductPage = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div className="product-item">
        <div className="abc">
          <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container relative">
              <small className="c-badge bg-primary absolute left-0 top-0">
                {product.category}
              </small>
            </div>
            <div className="card-image-container">
              <img className="card-image" src={product.thumbnail} alt="shoes" />
            </div>
            <div className="card-details">
              <div className="card-title">{product.title.slice(0, 20)}</div>
              <div className="card-description">
                <p className="card-price">{product.price}</p>
                <span className="discount">{product.discountPercentage}</span>
              </div>

              <div className="cta-btn">
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPage;

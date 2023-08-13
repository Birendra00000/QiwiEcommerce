import React from "react";
import "./productabc.css";
import ProductPage from "./ProductPage";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="product--conatiner">
        {products.map((product) => {
          let discountedPrice =
            product.price - product.price * (product.discountPercentage / 100);
          return (
            <ProductPage
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

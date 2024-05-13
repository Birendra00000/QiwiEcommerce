import React from "react";
import HomePageSlider from "../Components/HomePageSlider";
import "./HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../Store/CategorySlice";
import {
  getAllProducts,
  getAllProductsStatus,
  getProductSingle,
  getSingleProductStatus,
  fetchAsyncProducts,
} from "../Store/ProductSlice";
import { STATUS } from "../utilities/StatusComponent";
import Loader from "../Components/Loader";
import ProductList from "../Components/ProductList";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts(60));
  }, []);

  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getAllProductsStatus);

  let catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );

  let catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );

  let catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );

  let catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );

  return (
    <>
      <div className="main--container-wrapper">
        <div className="main-conatiner">
          <HomePageSlider />
        </div>
        <div className="categories-conatiner">
          <div className="cat--items">
            <div className="main--conatiner--wrapper ">
              <div className="second-product-wrap">
                <h2 className="head-wrap">See Our Products</h2>
              </div>

              {productsStatus == STATUS.Loading ? (
                <Loader />
              ) : (
                <ProductList products={products} />
              )}
            </div>
            <div className="categorylist">
              <div className="cat--title">
                <h2 className="title-wrap">{categories[0]}</h2>
              </div>
              {productsStatus === productsStatus.Loading ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>
            <div className="categorylist">
              <div className="cat--title">
                <h2 className="title-wrap">{categories[1]}</h2>
              </div>
              {productsStatus === productsStatus.Loading ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>
            <div className="categorylist">
              <div className="cat--title">
                <h2 className="title-wrap">{categories[2]}</h2>
              </div>
              {productsStatus === productsStatus.Loading ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>
            <div className="categorylist">
              <div className="cat--title">
                <h2 className="title-wrap">{categories[3]}</h2>
              </div>
              {productsStatus === productsStatus.Loading ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

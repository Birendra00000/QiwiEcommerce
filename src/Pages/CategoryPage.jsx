import React from "react";
import ProductList from "../Components/ProductList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../utilities/StatusComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getAllProductsByCategories,
  getCategoryProductsStatus,
  fetchAsyncProductsOfCategory,
} from "../Store/CategorySlice";
import Loader from "../Components/Loader";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategories);
  console.log(categoryProducts);
  const categoryStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <>
      <div className="container--main--wrapper--first flex ml-10 mt-7 text-lg text-slate-600">
        <Link to="/">
          <span className="home--wrap">Home / </span>
        </Link>
        <span className="wrapper--one--tit ml-1"> Category</span>
      </div>
      <div className="category--conatiner mt-10">
        <div className="category--second--wrapper flex justify-center text-2xl text-slate-700">
          <h3 className="header--wrap">See Our {category.replace("-", " ")}</h3>
        </div>
        <div className="cat--wrap mt-5">
          {categoryStatus === STATUS.Loading ? (
            <Loader />
          ) : (
            <ProductList products={categoryProducts} />
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../Store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import "./HomePageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, []);
  console.log("categoriess.", categories);

  // Check if categories is an array
  if (!Array.isArray(categories)) {
    return <p>Unexpected data format.</p>;
  }

  return (
    <div>Home</div>
    // <div>
    //   <div className="category--wrap">

    /* {categories.length > 0 ? (
          <ul className="list--categories">
            {categories.slice(0, 10).map(({ name, slug }) => (
              <li key={slug} className="list--items">
                <Link to={`category/${slug}`}>{name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories available.</p>
    //     )} */
    //   </div>
    // </div>
  );
};

export default SliderPage;

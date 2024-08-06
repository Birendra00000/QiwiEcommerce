import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../Store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import "./HomePageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePageSlider = ({ categories }) => {
  var settings = {
    autoplay: true,
    autoplayspeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("categories", categories);
  return (
    <div className="main--slider-wrap">
      <div className="category--wrap">
        {/* {Array.isArray(categories) ? (
          categories.length > 0 ? (
            <ul className="list--categories">
              {categories.slice(0, 10).map((item, index) => {
                console.log("Rendering item:", item); // Check each item here
                return (
                  <li key={item.slug || index} className="list--items">
                    <Link to={`category/${item.slug}`}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No categories available.</p>
          )
        ) : (
          <p>Unexpected data format.</p>
        )} */}{" "}
        {categories.slice(0, 10).map((items) => (
          <ul className="list--categories">
            <Link to={`category/${items}`}>
              <li className="list--items" key={items.id}>
                {items}
              </li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="slider--wrapper">
        <Slider {...settings} className="slider--container">
          <img
            src="./assests/sliderimage/slider1.jpg"
            alt=""
            className="slider--image "
          />

          <img
            src="./assests/sliderimage/slider2.jpg"
            alt=""
            className="slider--image"
          />

          <img
            src="./assests/sliderimage/slider3.jpg"
            alt=""
            className="slider--image"
          />

          <img
            src="./assests/sliderimage/slider4.jpg"
            alt=""
            className="slider--image"
          />
        </Slider>
      </div>
    </div>
  );
};
export default HomePageSlider;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../Store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import "./HomePageSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomePageSlider = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, []);
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

  return (
    <div className="main--slider-wrap">
      <div className="category--wrap">
        <ul className="list--categories">
          {categories.slice(0, 10).map((items) => (
            <Link to={`category/${items}`}>
              <li className="list--items" key={items.id}>
                {items}
              </li>
            </Link>
          ))}
        </ul>
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

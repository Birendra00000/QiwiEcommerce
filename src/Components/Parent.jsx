import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../Store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";
import HomePageSlider from "./HomePageSlider";

const Parent = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  // useEffect(() => {
  //   dispatch(fetchAsyncCategories());
  // }, [dispatch, categories]);

  console.log("Parent", categories);

  return (
    <>
      <HomePageSlider categories={categories} />
    </>
  );
};

export default Parent;

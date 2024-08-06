import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../Store/CategorySlice";
import { useSelector, useDispatch } from "react-redux";

const Parent = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories(15));
  }, []);
  return (
    <>
      <HomePageSider categories={categories} />
    </>
  );
};

export default Parent;

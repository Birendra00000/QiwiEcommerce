import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSearchProduct,
  getSearchProductStatus,
  setSearchTerm,
  fetchAsyncSearchProduct,
  clearSearch,
} from "../Store/SearchSlice";
import { STATUS } from "../utilities/StatusComponent";
import ProductList from "../Components/ProductList";
import Loader from "../Components/Loader";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProduct);
  console.log("Search", searchProducts);
  useEffect(() => {
    dispatch(clearSearch);
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if (searchProducts.length === 0) {
    return <>No Product Founds</>;
  }

  return (
    <div className="mt-[45px]">
      <ProductList products={searchProducts} />
    </div>
  );
};

export default SearchProduct;

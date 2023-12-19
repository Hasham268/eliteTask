import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="p-28">
      <div className="m-6">
        <h3 className="m-6 font-bold text-xl">VIEW OUR PRODUCTS</h3>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="products flex flex-row justify-around">
        {products.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </div>
      <div className=" my-4">
        <Link className="cursor-pointer text-white bg-pink-800 p-2" to="/productList">
          Next Page
        </Link>
      </div>
    </div>
  );
};

export default Product;

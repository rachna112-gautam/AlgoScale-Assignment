import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const list = await fetch("https://dummyjson.com/products");
      const result = await list.json();
      console.log("result", result.products);
      setProductList(result.products);
    } catch (error) {
      console.log("error in fetchProduct", error);
    }
  };


 
  return (
    <div>
      product list
      <ul>
        {productList.map((_p, i) => {
          return (
            <li key={i}>
            <Link to={`/productDetail/${_p?.id}`}> <span>{_p?.id}</span> {_p?.brand}</Link>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Product;

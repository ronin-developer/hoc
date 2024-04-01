import React, { useEffect, useState } from "react";
import ProductService from "../services/productServices";

// custome hook
function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // reg
  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setData(res.data.products);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return { data, isLoading };
}

export default useFetch;

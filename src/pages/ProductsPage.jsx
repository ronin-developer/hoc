import React from "react";
import  useFetch  from '../hooks/useFetch';

function ProductsPage() {
  const { data, isLoading } = useFetch();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>ProductsPage</h1>
          <ul>
            {data.map(product => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;

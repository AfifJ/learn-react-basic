import React, { useState } from "react";

const ShoppingPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 9.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 14.99 },
  ]);

  const handleAddToCart = (productId) => {
    // Implement the logic to add the selected product to the cart
  };

  return (
    <div>
      <h1 className="font-bold mb-5">Shopping Page</h1>
      <ul>
        {products.map((product) => (
          <>
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product.id)}>
                Add to Cart
              </button>
            </li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingPage;

import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Product 1", price: 10, quantity: 1 },
  { id: 2, name: "Product 2", price: 20, quantity: 2 },
  { id: 3, name: "Product 3", price: 15, quantity: 1 },
];

function Checkout() {
  const [products, setProducts] = useState(initialProducts);

  const increaseQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: product.quantity + 1 } 
        : product
    ));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 } 
        : product
    ));
  };

  const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Checkout Page</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <div>
              <b>{product.name}</b> - ${product.price}
            </div>
            <div>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice}</h2>
    </div>
  );
}

export default Checkout;


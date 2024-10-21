import React, { memo, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

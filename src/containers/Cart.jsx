import React, { memo, useEffect, useState } from "react";
import { API_URLS } from "./constants";
import axios from "axios";

const Cart = ({ user, cartItems, setCartItems }) => {
  const userId = user?.id;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (userId) {
          // Use the constant for the base URL
          const response = await axios.get(`${API_URLS.CART_URL}/${userId}`);
          setCartItems(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, [userId]);

  const handlePlaceOrders = (items) => {
    console.log("items", items);
  };

  const handleRemoveFromCart = async (item) => {
    if (item) {
      const response = await axios.delete(
        `${API_URLS.CART_URL}/${userId}/${item.product_id}`
      );

      if (response.status === 200) {
        const response = await axios.get(`${API_URLS.CART_URL}/${userId}`);
        setCartItems(response?.data?.data);
      }
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems?.length > 0 ? (
        <>
          {cartItems?.map((item, index) => (
            <div key={index} className="cart-item">
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="remove-item-button"
                aria-label="Remove item"
              >
                &times;
              </button>
              <div className="cart-component">
                <div>
                  <h4>{item?.name}</h4>
                  <p>Price: ${item.total_price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <img
                  src={item?.image_url}
                  alt={item?.name}
                  className="cart-item-image"
                />
              </div>
            </div>
          ))}
          <button
            className="add-to-cart-button"
            onClick={() => handlePlaceOrders(cartItems)}
          >
            Place Order
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

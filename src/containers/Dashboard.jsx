import React, { memo, useEffect, useState } from "react";
import Header from "./Headers";
import axios from "axios";

const Dashboard = () => {
  const [mainProducts, setMainProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Array of categories
  const [cartItems, setCartItems] = useState([]); // Array of categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:4000/products")
      .then((response) => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setMainProducts(data);
        const categorys = Array.from(
          new Set(data?.map((product) => product?.category))
        );
        if (categorys?.length) {
          setCategories(categorys);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = [...prevCategories]; // Make a copy of the current categories

      // Check if the category is already in the selected categories
      if (updatedCategories.includes(category)) {
        // If it exists, remove it
        const index = updatedCategories.indexOf(category);
        updatedCategories.splice(index, 1);
      } else {
        // If it doesn't exist, add it
        updatedCategories.push(category);
      }

      return updatedCategories; // Return the new updated array
    });
  };

  console.log("e.target.value", selectedCategories);

  const filteredProducts =
    selectedCategories.length === 0
      ? mainProducts
      : mainProducts.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const handleAddToCart = (product) => {
    console.log("product", product);
  };

  return (
    <div>
      <Header />
      <div className="dashboard">
        {/* Left section: Categories */}
        <div className="categories">
          <h2>Categories</h2>
          {categories.map((category, i) => (
            <div key={i} className="category-item">
              <input
                type="checkbox"
                id={category}
                value={category}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        {/* Center section: Products */}
        <div className="products">
          <h2>Products</h2>
          {filteredProducts.length > 0 ? (
            filteredProducts
              .filter((product) =>
                selectedCategories.length === 0
                  ? true
                  : selectedCategories.includes(product.category)
              )
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>{product.category}</p>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* Right section: Cart */}
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
      </div>
    </div>
  );
};

export default Dashboard;

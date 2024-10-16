import React, { memo, useEffect, useState } from "react";
import Header from "./Headers";
import axios from "axios";

const Dashboard = () => {
  console.log("dashboard");
  const [mainProducts, setMainProducts] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.post("http://localhost:4000/products");
  //       if (response.status === 200) {
  //         console.log(response);
  //       } else {
  //       }
  //     };
  //     fetchData(); // Call the fetch function
  //   }, []);
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
        console.log("Fetched data: ", data); // Log the data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="product-list">
          {mainProducts.length > 0 ? (
            mainProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="product-image"
                />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-category">{product.category}</p>
              </div>
            ))
          ) : (
            <p>No products available.</p> // Message when there are no products
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

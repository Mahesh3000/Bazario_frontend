import React from "react";
import { Navigate } from "react-router-dom";

// Simple Protected Route Component
const ProtectedRoute = ({ path, element }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Check if the user has a token

  if (!isAuthenticated) {
    return <Navigate to="/" />; // If not authenticated, redirect to login page
  }

  return element; // Return the element to be rendered if authenticated
};

export default ProtectedRoute;

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Email = () => {
  console.log("kjhksjh");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="email-page">
      <div className="email-container">
        <div className="back-button" onClick={handleBackClick}>
          &#8592; {/* This is a left arrow character */}
        </div>
        <h2>Login with Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
        />
        <button className="email-submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Email;

import React, { memo } from "react";

const Email = () => {
  console.log("kjhksjh");

  return (
    <div className="email-page">
      <div className="email-container">
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

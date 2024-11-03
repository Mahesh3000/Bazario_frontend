import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Totp = () => {
  const navigate = useNavigate();

  const [totp, setTOTP] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
    // setLoading(true);
    // setError("");
    // setSuccess(false);
    // try {
    //   const response = await axios.post("http://localhost:4000/verify-totp", {
    //     totp,
    //   });
    //   if (response.data.success) {
    //     setSuccess(true);
    //     // Handle successful verification (e.g., redirect the user)
    //   } else {
    //     setError("Invalid TOTP. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error verifying TOTP:", error);
    //   setError("An error occurred. Please try again later.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="totp-page">
      <div className="totp-container">
        <div className="back-button" onClick={handleBackClick}>
          &#8592; Back
        </div>
        <h2>Enter Your Time-Based One-Time Password (TOTP)</h2>
        {success && (
          <p className="success-message">TOTP verified successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={totp}
            onChange={(e) => setTOTP(e.target.value)} // Update TOTP state on change
            placeholder="Enter 6-digit TOTP"
            className="totp-input"
          />
          {/* {error && <p className="error-message">{error}</p>}{" "} */}
          {/* Show error message if exists */}
          <button
            className="totp-submit-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify TOTP"}{" "}
            {/* Button text changes based on loading state */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Totp;

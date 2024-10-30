import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../constants";
import axios from "axios";

const Otp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const emailId = useSelector((state) => state.auth.email);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleOtp = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setMessage("");
    console.log("mahesh erri");
    try {
      const response = await axios.post(`${API_URLS.VERIFY_OTP_URL}`, {
        email: emailId,
        mobile: mobile,
        otp: otp,
      });

      if (response.status === 200) {
        setMessage("OTP verified successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed");
    }
  };

  const maskEmail = (emailId) => {
    if (emailId) {
      const maskedEmail = emailId.slice(0, 2) + "********" + emailId.slice(-3);
      return maskedEmail;
    }
  };

  return (
    <div className="email-page">
      <div className="email-container">
        <div className="back-button" onClick={handleBackClick}>
          &#8592;
        </div>
        <form onSubmit={handleVerifyOtp}>
          <p className="otp-header">
            Otp sent to {maskEmail(emailId)} and phone
          </p>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="email-input"
            value={otp}
            onChange={(e) => handleOtp(e)}
          />
          <p>{message}</p>
          <button className="email-submit-button" type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

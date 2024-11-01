import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../constants";
import axios from "axios";
import { setLoading } from "../../redux";

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const { email, isLoading } = useSelector((state) => state.auth);

  console.log("email", email);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleOtp = (e) => {
    setMessage("");
    setError(false);
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    dispatch(setLoading(true));

    try {
      const response = await axios.post(`${API_URLS.VERIFY_OTP_URL}`, {
        email: email,
        mobile: mobile,
        otp: otp,
      });

      if (response.status === 200) {
        setMessage("OTP verified successfully!");
        navigate("/dashboard");
        dispatch(setLoading(false));
      }
    } catch (error) {
      setError(true);
      setMessage(error.response?.data?.message || "Verification failed");
      dispatch(setLoading(false));
    }
  };

  const maskEmail = (email) => {
    if (email) {
      const maskedEmail = email.slice(0, 2) + "********" + email.slice(-3);
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
          <p className="otp-header">Otp sent to {maskEmail(email)} and phone</p>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="email-input"
            value={otp}
            onChange={(e) => handleOtp(e)}
          />
          {error ? <p>{message}</p> : <p></p>}

          <button className="email-submit-button" type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

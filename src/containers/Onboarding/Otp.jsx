import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");

  const emailId = useSelector((state) => state.auth.email);

  console.log("mahesh", emailId);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleOtp = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  // useEffect(() => {

  // }, []);

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    const users = localStorage.getItem("pavan");
    const parsedUser = JSON.parse(users);
    setUser(parsedUser);
    console.log("mahesh");
  };

  const maskEmail = (user) => {
    if (user?.email) {
      const mailId = user.email;
      const maskedEmail = mailId.slice(0, 2) + "********" + mailId.slice(-3);
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
          {/* <h2>Otp sent to {maskEmail(user)} and phone</h2> */}
          <p className="otp-header">Otp sent to {maskEmail(user)} and phone</p>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="email-input"
            value={otp}
            onChange={(e) => handleOtp(e)}
          />
          <button className="email-submit-button" type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

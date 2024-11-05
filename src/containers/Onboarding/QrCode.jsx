import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserQr } from "../../redux";
import { API_URLS } from "../constants";

const QRCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const { qrImage } = useSelector((state) => state.auth);

  console.log("qrImage", qrImage);

  // Fetch the QR code image when the component mounts
  useEffect(() => {
    if (qrImage) {
      setQrImageUrl(qrImage);
    }
  }, []);

  const handleProceedToOTP = () => {
    dispatch(setUserQr(false));
    // navigate("/totp");
  };

  // Function to skip and navigate to the home screen
  const handleSkipForNow = () => {
    navigate("/home");
  };

  return (
    <div className="qr-code-setup">
      <p>Scan this QR Code with your Authenticator App:</p>
      {loading ? (
        <p>Loading QR code...</p>
      ) : qrImageUrl ? (
        <img src={qrImageUrl} alt="QR Code" className="qr-code-image" />
      ) : (
        <p>Failed to load QR code. Please try again later.</p>
      )}

      <h3>How to Set Up Your Authenticator</h3>
      <ol className="instructions-list">
        <li>Install an Authenticator App on your mobile device.</li>
        <li>
          During sign-up, you will receive a confirmation message to enable
          Two-Factor Authentication.
        </li>
        <li>Follow the on-screen prompts to enable 2FA.</li>
        <li>Scan the QR code with your authenticator app to get your OTP.</li>
      </ol>

      <div className="button-container">
        <button onClick={handleProceedToOTP} className="primary-button">
          Proceed to TOTP
        </button>
        <button onClick={handleSkipForNow} className="secondary-button">
          Skip for Now
        </button>
      </div>
    </div>
  );
};

export default QRCode;

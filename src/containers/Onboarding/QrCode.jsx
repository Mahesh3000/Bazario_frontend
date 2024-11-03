import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserQr } from "../../redux";

const QRCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qrImageUrl, setQrImageUrl] = useState(
    "data:image/png;base64,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VE4qbnpYa13zsNa65mGtdY39wS9SOamYVE4q3lCZKn6TyknFpDJVnKi8UTGpvFHxhcpUMamcVLyhMlWcqEwVXzysta55WGtd87DWusb+4CKVmyomlaniROWNikllqphUpopJZap4Q2WqmFSmijdUpopJ5TdVnKicVJyoTBWTylTxxcNa65qHtdY1D2uta+wP/iKVLyomlZOKN1S+qHhD5Z9U8YbKVPGFyhsVJypTxaQyVdz0sNa65mGtdc3DWusa+4MPVN6omFSmijdUvqiYVKaKE5WTikllqjhRmSomlaniROXfpGJS+SdVfPGw1rrmYa11zcNa65ofPqr4TSonFTdVTCo3VUwqU8WJylQxqXxRcaJyUnGiclJxojJVnKhMFb/pYa11zcNa65qHtdY1P1ymclPFpPKGylTxRsWJyhcVk8pJxRcVk8qk8kbFpDJVnKhMFZPKTSonFV88rLWueVhrXfOw1rrmh49UpooTlTdUTlSmijdUvqiYVE5UvlA5qZhUJpWpYlI5qXhDZaqYVCaVN1SmiqniROWmh7XWNQ9rrWse1lrX/PBRxRsVb1ScqJxUTConFScqk8qJyhsVb6hMKr9JZaq4qeINlROVqeI3Pay1rnlYa13zsNa65oePVP6miqliUvlNFScqJxWTyonKVHFScVPFicpUMal8oTJVfKEyVdz0sNa65mGtdc3DWuuaHy6ruEnlRGWqeEPlROWkYqqYVL6oeEPlpGJSOVE5qTip+KLiDZWTit/0sNa65mGtdc3DWuuaH36ZyhsVN6lMFScqU8WkMqmcVEwqJyp/U8WJylRxojJVTConKl9U/JMe1lrXPKy1rnlYa13zw/8YlanipGJS+aLijYoTlaliUpkqbqp4o+KNikllqjhROVF5o+KLh7XWNQ9rrWse1lrX/PD/nMpUMancVDGpnFS8ofJGxaQyVZyovFFxUnGiMlVMKicVv+lhrXXNw1rrmoe11jU//LKK31RxonJScVJxojKpfFHxRsWkclIxqUwVk8obFZPKicpUMan8lzysta55WGtd87DWuuaHy1T+JpWp4iaV31TxhsoXKjdVvKFyovKGyknFpDJV3PSw1rrmYa11zcNa6xr7g7XWFQ9rrWse1lrXPKy1rnlYa13zsNa65mGtdc3DWuuah7XWNQ9rrWse1lrXPKy1rnlYa13zsNa65mGtdc3DWuua/wOi94ffxKatwAAAAABJRU5ErkJggg=="
  );
  const [loading, setLoading] = useState(false);

  // Fetch the QR code image when the component mounts
  //   useEffect(() => {
  //     async function fetchQRCode() {
  //       try {
  //         const response = await axios.get('/api/generate-qr');
  //         setQrImageUrl(response.data.qrImageUrl);
  //       } catch (error) {
  //         console.error("Error fetching QR code:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchQRCode();
  //   }, []);

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

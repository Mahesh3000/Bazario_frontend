import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { API_URLS } from "../constants";
import Email from "./Email";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [onSignup, setOnSignup] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    setMessage("");

    try {
      if (username && password) {
        // Send POST request to the backend
        const response = await axios.post(`${API_URLS.LOGIN_API_URL}`, {
          username,
          password,
        });
        // console.log(response);
        if (response.status === 200) {
          if (!response.data.success) {
            setError(!error);
            setMessage(response?.data?.message);
          } else if (response?.data?.success === true) {
            navigate("/dashboard");
            const userDetails = JSON.stringify(response?.data?.data[0]); // Convert user object to a JSON string
            const user = JSON.parse(userDetails);
            const username = user.username;
            localStorage.setItem("authToken", response?.data?.token);
            localStorage.setItem(username, userDetails);
          }
        } else {
        }
      } else {
        setError(true);
        setMessage("fields are required."); // Set error message if fields are empty
      }
    } catch {
      console.error("Error during login:", error);
      setMessage("Error during login. Please try again.");
    }
  };

  const handleEmailLogin = async () => {
    console.log("email");
    const email = "mahesh.sivngi@gmail.com";

    try {
      const response = await axios.post("http://localhost:4000/send-mail-otp", {
        email,
      });
      setMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      setMessage(
        error.response ? error.response.data.message : "Error sending OTP"
      );
    }
  };

  const handlePhoneLogin = () => {
    console.log("phone");
  };
  return (
    // <div className="login-main">
    //   <div className="login-left">
    //     <img src={Image} alt="" />
    //   </div>
    //   <div className="login-right">
    //     <div className="login-right-container">
    //       <div className="login-logo">
    //         <img src={Logo} alt="" />
    //       </div>
    //       <div className="login-center">
    //         <h2>Login</h2>
    //         <p>Please enter your details</p>
    //         <form onSubmit={handleLogin}>
    //           <input
    //             type="username"
    //             placeholder="Username"
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //           <div className="pass-input-div">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               placeholder="Password"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //             {showPassword ? (
    //               <FaEyeSlash
    //                 onClick={() => {
    //                   setShowPassword(!showPassword);
    //                 }}
    //               />
    //             ) : (
    //               <FaEye
    //                 onClick={() => {
    //                   setShowPassword(!showPassword);
    //                 }}
    //               />
    //             )}
    //           </div>

    //           <div className="login-center-options">
    //             {error ? (
    //               <p className="login-error-message">{message}</p>
    //             ) : (
    //               <p></p>
    //             )}
    //             <a href="#" className="forgot-pass-link">
    //               Forgot password?
    //             </a>
    //           </div>
    //           <div className="login-center-buttons">
    //             <button className="login-button" type="submit">
    //               Log In
    //             </button>
    //             {/* <button type="button">
    //               <img src={GoogleSvg} alt="" />
    //               Log In with Google
    //             </button> */}
    //             <button
    //               type="button"
    //               className="login-button"
    //               onClick={(e) => handleEmailLogin(e)}
    //             >
    //               Log In with Email
    //             </button>
    //             <button
    //               type="button"
    //               className="login-button"
    //               onClick={(e) => handlePhoneLogin(e)}
    //             >
    //               Log In with Phone
    //             </button>
    //           </div>
    //         </form>
    //       </div>

    //       <p className="login-bottom-p">
    //         Don't have an account?{" "}
    //         <a href="#" onClick={() => signUp()}>
    //           Sign Up
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <Email />
    </>
  );
};

export default Login;

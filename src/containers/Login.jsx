import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

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

  // console.log("mahesh", username, password);

  const handleLogin = async (e) => {
    // e.preventDefault();
    // setError(false);
    // setMessage("");

    try {
      if (username && password) {
        // Send POST request to the backend
        const response = await axios.post("http://localhost:4000/users", {
          username,
          password,
        });
        console.log(response);
        if (response.status === 200) {
          if (!response.data.success) {
            setError(!error);
            setMessage(response?.data?.message);
          } else if (response?.data?.success === true) {
            // setError(!error);
            // navigate("/home");
            console.log("mahesh");
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

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Login!</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                {/* <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div> */}
                {error ? <p className="error-message">{message}</p> : <p></p>}
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>
                  Log In
                </button>
                {/* <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button> */}
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account?{" "}
            <a href="#" onClick={() => signUp()}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

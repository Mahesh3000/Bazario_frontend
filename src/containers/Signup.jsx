import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "./constants";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [onSignup, setOnSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await axios.post(`${API_URLS.SIGNUP_API_URL}`, {
      username,
      password,
      email,
    });

    if (response.status === 201) {
      if (!response.data.success) {
        setError(!error);
        setMessage(response?.data?.message);
      } else if (response?.data?.success === true) {
        navigate("/");
        setLoading(false);
      }
    } else {
    }
  };

  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
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
              <h2>SignUp!</h2>
              <p>Please enter your details</p>
              <form onSubmit={handleSignUp}>
                <input
                  type="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                <div className="pass-input-div">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {showConfirmPassword ? (
                    <FaEyeSlash
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                    />
                  ) : (
                    <FaEye
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                    />
                  )}
                </div>
                <div className="login-center-buttons">
                  <button className="login-button" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <p className="login-bottom-p">
              Already Have an account?{" "}
              <a href="#" onClick={() => navigate("/")}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

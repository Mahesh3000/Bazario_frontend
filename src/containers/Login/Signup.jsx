import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../constants";
import LeftSideContainer from "./LeftSideContainer";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [onSignup, setOnSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false); // State for loading
  const { emailId, isLoading } = useSelector((state) => state.auth);

  const handlePhoneNumber = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mailValid = emailRegex.test(email);

    dispatch(setLoading(true));

    if (username && email && phoneNumber && password && confirmPassword) {
      if (mailValid) {
        const response = await axios.post(`${API_URLS.SIGNUP_API_URL}`, {
          username,
          password,
          email,
          phoneNumber,
        });

        if (response.status === 201) {
          if (!response.data.success) {
            setError(!error);
            setMessage(response?.data?.message);
          } else if (response?.data?.success === true) {
            navigate("/");
            dispatch(setLoading(false));
          }
        } else {
        }
      } else {
        setMessage("Enter Valid Email Address");
      }
    } else {
      setError(true);
      setMessage("Please Enter All Fileds");
    }
  };

  return (
    <>
      {/* {loading && <p>Loading...</p>} */}
      <div className="login-main">
        {isLoading && <Loading />}

        <LeftSideContainer />
        <div className="login-right">
          <div className="login-right-container">
            <div className="login-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="login-center">
              <h2>SignUp!</h2>
              <p>Please enter your details</p>
              <div>
                <form onSubmit={handleSignUp}>
                  <input
                    type="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => handlePhoneNumber(e)}
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
                    {/* {showConfirmPassword ? (
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
                  )} */}
                    {error ? (
                      <p className="error-message">{message}</p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                  <div className="login-center-buttons">
                    <button className="login-button" type="submit">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
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

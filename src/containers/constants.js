const MAX_USERS = 100;

const LOGIN_ERRORS = {
  INVALID_CREDENTIALS: "Invalid username or password.",
  USER_NOT_FOUND: "No user found with this email.",
  ACCOUNT_LOCKED:
    "Your account has been locked due to multiple failed login attempts.",
  PASSWORD_REQUIRED: "Password is required.",
  EMAIL_REQUIRED: "Email is required.",
};

const API_URLS = {
  SIGNUP_API_URL: "http://localhost:4000/signup",
  LOGIN_API_URL: "http://localhost:4000/login",
  ADD_TO_CART_URL: "http://localhost:4000/add-to-cart",
};

export { LOGIN_ERRORS, API_URLS };

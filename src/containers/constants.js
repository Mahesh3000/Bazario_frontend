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
  CART_URL: "http://localhost:4000/cart",
  PLACE_ORDERS_URL: "http://localhost:4000/placeorder",
  GET_PRODUCTS_URL: "http://localhost:4000/products",
  SEND_OTP_URL: "http://localhost:4000/send-otp",
  VERIFY_OTP_URL: "http://localhost:4000/verify-otp",
  GENERATE_QR_URL: "http://localhost:4000/generate-qr",
};

export { LOGIN_ERRORS, API_URLS };

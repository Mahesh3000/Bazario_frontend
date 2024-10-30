// import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

// Combine all reducers (add more as needed)
const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers can go here
  },
});

export default store;

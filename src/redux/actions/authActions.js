import { SET_EMAIL, SET_TOKEN, CLEAR_AUTH } from "./actionTypes";

// Action creators
export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const clearAuth = () => ({
  type: CLEAR_AUTH,
});

// src/redux/reducers/authReducer.js
import { SET_EMAIL, SET_TOKEN, CLEAR_AUTH } from "../actions/actionTypes";

const initialState = {
  email: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

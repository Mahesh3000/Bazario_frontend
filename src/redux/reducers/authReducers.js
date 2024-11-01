// src/redux/reducers/authReducer.js
import {
  SET_EMAIL,
  SET_TOKEN,
  CLEAR_AUTH,
  SET_LOADING,
  USER_DATA,
} from "../actions/actionTypes";

const initialState = {
  email: null,
  token: null,
  isLoading: false,
  userData: "",
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
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

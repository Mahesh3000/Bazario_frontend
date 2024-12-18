import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store"; // Ensure correct path to your store file
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

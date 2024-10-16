import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";
import Dashboard from "./containers/Dashboard";
import Orders from "./containers/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/portfolio" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

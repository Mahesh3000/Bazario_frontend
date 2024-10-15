import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUp from "./components/SignUp";
import Login from "./containers/Login";
// import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Home />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/portfolio" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

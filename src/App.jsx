import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./containers/Login/index";
import SignUp from "./containers/Login/Signup";
import Dashboard from "./containers/Dashboard";
import Orders from "./containers/Orders";
import ProtectedRoute from "./containers/ProtectedRoute";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/orders"
          element={<ProtectedRoute element={<Orders />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/signup" element={<SignUp />} />
  <Route exact path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/orders" element={<Orders />} />
</Routes> */
}

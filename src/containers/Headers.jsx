import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Your logout logic here
    console.log("User logged out");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-icon">
        <i className="fas fa-user"></i>{" "}
        {/* Example icon, use any icon library */}
      </div>
      <div className="header-logo">Bazario</div> {/* Logo Name */}
      <nav className="header-nav">
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/Orders")}>Orders</li>
        </ul>
      </nav>
      <button className="header-logout" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;

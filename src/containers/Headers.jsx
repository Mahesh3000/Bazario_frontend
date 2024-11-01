import React from "react";
import { useNavigate } from "react-router-dom";
import { clearAuth } from "../redux";
import { useDispatch } from "react-redux";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearAuth());
    localStorage.removeItem(user?.username);
    localStorage.removeItem("authToken");
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
          <li className="hover_text" onClick={() => navigate("/dashboard")}>
            Dashboard
          </li>
          <li className="hover_text" onClick={() => navigate("/Orders")}>
            Orders
          </li>
        </ul>
      </nav>
      <button className="header-logout" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;

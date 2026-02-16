import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ setIsAuthenticated }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    // ⭐ tell React user logged out
    setIsAuthenticated(false);

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h3 className="logo">My App</h3>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link onClick={() => setOpen(false)} to="/home">Home</Link>
        <Link onClick={() => setOpen(false)} to="/about">About</Link>
        <Link onClick={() => setOpen(false)} to="/product">Product</Link>
        <Link onClick={() => setOpen(false)} to="/cart">Cart</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
};

export default Navbar;

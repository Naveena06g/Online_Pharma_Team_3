
import React, { useState } from "react";
import "./Header.css";
import logoWhite from "../assets/logo.webp";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider"; 
import MediStoreCart from "./MediStoreCart"; 


const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart(); 


  const cartCount = Array.isArray(cart)
    ? cart.filter((item) => item?.qty > 0).length
    : 0;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <>
    
      <header className="header">
        <div
          className="logo"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
        >
          <img src={logoWhite} alt="KI Academy Logo" className="logo-img" />
          <span className="logo-text">Capstone</span>
        </div>

       
        <nav className="nav desktop-nav">
          <span className="under">
            <button
              className="nav-button navbar-hover"
              onClick={() => (window.location.href = "https://kiacademy.in")}
            >
              Search
            </button>
            <button
              className="nav-button navbar-hover"
              onClick={() => (window.location.href = "https://kiacademy.in")}
            >
              About 
            </button>
            <button
              className="nav-button navbar-hover"
              onClick={() => (window.location.href = "https://kiacademy.in")}
            >
              Services
            </button>
            <button
              className="nav-button navbar-hover"
              onClick={() => (window.location.href = "https://kiacademy.in")}
            >
              Contact Us
            </button>
            {/* <button className="nav-button navbar-hover" onClick={() => navigate("/cart")}>
              My Books
              {cartCount > 0 && (
                <span className="wishlist-badge">{cartCount}</span>
              )}
            </button> */}
          </span>

          <span className="icon-wrapper rounded-pill">
            {/* <button className="nav-button" onClick={() => navigate("/cart")}>
              <FaShoppingCart className="nav-icon" />
              {cartCount > 0 && (
                <span className="wishlist-badge">{cartCount}</span>
              )}
            </button> */}
            <button className="nav-button" onClick={() => navigate("/cart")}>
              <FaShoppingCart className="nav-icon" />
               {cart.length > 0 && <MediStoreCart cart={cart} />}
            </button>

            <button className="nav-button" onClick={() => navigate("/profile")}>
              <FaUser className="nav-icon" />
            </button>
          </span>
        </nav>

        {/* Mobile Hamburger */}
        <button className="hamburger-btn mobile-nav" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <FaTimes style={{ fontSize: "24px" }} />
          ) : (
            <FaBars style={{ fontSize: "24px" }} />
          )}
        </button>
      </header>

      {/* Sidebar for Mobile */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <FaTimes style={{ fontSize: "24px" }} />
        </button>
        <nav className="sidebar-nav">
          <button
            className="sidebar-btn"
            onClick={() => (window.location.href = "https://kiacademy.in/current-courses")}
          >
            Search
          </button>
          <button
            className="sidebar-btn"
            onClick={() => (window.location.href = "https://kiacademy.in/live-courses")}
          >
            About
          </button>
          <button
            className="sidebar-btn"
            onClick={() => (window.location.href = "https://kiacademy.in/ai-tutor")}
          >
            Services
          </button>
          <button
            className="sidebar-btn"
            onClick={() => (window.location.href = "https://kiacademy.in/institutes")}
          >
            Contact Us
          </button>

          <button className="sidebar-btn" onClick={() => navigate("/cart")}>
            Cart
            {cartCount > 0 && (
              <span className="wishlist-badge">{cartCount}</span>
            )}
          </button>

          {/* <button
            className="sidebar-btn"
            onClick={() => handleNavigate("/notifications")}
          >
            Notifications
          </button> */}

          <button
            className="sidebar-btn"
            onClick={() => handleNavigate("/cart")}
          >
            {/* Cart {cartCount > 0 && `(${cartCount})`} */}
          </button>

          <button
            className="sidebar-btn"
            onClick={() => handleNavigate("/profile")}
          >
            Profile
          </button>
        </nav>
      </aside>

      {/* Backdrop */}
      {sidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;

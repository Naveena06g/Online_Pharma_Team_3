import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Link } from "react-router-dom"; // 👈 Add this line

const Admin = () => {
  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="admin-bg min-vh-100">
      <nav className="navbar navbar-expand-lg admin-navbar shadow-sm mb-5">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold text-light" href="#">
            Admin Panel
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#users-section">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#products-section">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#profile-section">Profile</a>
              </li>
              <li className="nav-item ms-lg-3">
                <button className="btn btn-outline-light btn-sm px-4 rounded-pill shadow-sm" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pb-3">
        <h1 className="text-center mt-5 display-4 fw-bold text-primary">Welcome, Admin!</h1>

        {/* Users Section */}
        <div id="users-section" className="row mt-5">
          <div className="col-12">
            <div className="card admin-card shadow-lg">
              <div className="card-header admin-cardheader-users">
                <span className="fs-5">Manage Users</span>
              </div>
              <div className="card-body">
                <Link to="/users/add" className="btn admin-btn-primary me-2">Add User</Link>
                <Link to="/users/view" className="btn admin-btn-secondary me-2">View Users</Link>
                <Link to="/users/edit" className="btn admin-btn-warning me-2">Edit User</Link>
                <Link to="/users/delete" className="btn admin-btn-danger">Delete User</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products-section" className="row mt-5">
          <div className="col-12">
            <div className="card admin-card shadow-lg">
              <div className="card-header admin-cardheader-products">
                <span className="fs-5">Manage Products</span>
              </div>
              <div className="card-body">
                <Link to="/products/add" className="btn admin-btn-primary me-2">Add Product</Link>
                <Link to="/products/view" className="btn admin-btn-secondary me-2">View Products</Link>
                <Link to="/products/edit" className="btn admin-btn-warning me-2">Edit Product</Link>
                <Link to="/products/delete" className="btn admin-btn-danger">Delete Product</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div id="profile-section" className="row mt-5">
          <div className="col-md-4 mx-auto">
            <div className="card admin-card shadow-lg">
              <div className="card-header admin-cardheader-profile">
                <span className="fs-5">My Profile</span>
              </div>
              <div className="card-body text-center">
                <Link to="/profile" className="btn admin-btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div id="logout-section" className="row mt-5">
          <div className="col-md-4 mx-auto">
            <div className="card admin-card shadow-lg">
              <div className="card-header admin-cardheader-logout">
                <span className="fs-5">Logout</span>
              </div>
              <div className="card-body text-center">
                <Link to="/logout" className="btn admin-btn-danger">Logout</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;


import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <h4>Manage Users</h4>
      <button onClick={() => navigate("/users/add")} className="btn btn-primary m-2">Add User</button>
      <button onClick={() => navigate("/users/view")} className="btn btn-info m-2">View Users</button>
      <button onClick={() => navigate("/users/edit")} className="btn btn-warning m-2">Edit User</button>
      <button onClick={() => navigate("/users/delete")} className="btn btn-danger m-2">Delete User</button>

      <h4>Manage Products</h4>
      <button onClick={() => navigate("/products/add")} className="btn btn-primary m-2">Add Product</button>
      <button onClick={() => navigate("/products/view")} className="btn btn-info m-2">View Products</button>
      <button onClick={() => navigate("/products/edit")} className="btn btn-warning m-2">Edit Product</button>
      <button onClick={() => navigate("/products/delete")} className="btn btn-danger m-2">Delete Product</button>

      <h4>Admin</h4>
      <button onClick={() => navigate("/profile/view")} className="btn btn-secondary m-2">Profile</button>
      <button onClick={() => navigate("/logout/view")} className="btn btn-dark m-2">Logout</button>
    </div>
  );
}

export default Dashboard;

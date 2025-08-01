import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all your component pages
import Admin from "./components/Admin";
import AddUser from "./components/AddUser";
import ViewUsers from "./components/ViewUsers";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";

import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

import Profile from "./components/Profile";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />

        {/* User Management Routes */}
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/view" element={<ViewUsers />} />
        <Route path="/users/edit" element={<EditUser />} />
        <Route path="/users/delete" element={<DeleteUser />} />

        {/* Product Management Routes */}
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/view" element={<ViewProducts />} />
        <Route path="/products/edit" element={<EditProduct />} />
        <Route path="/products/delete" element={<DeleteProduct />} />

        {/* Admin Profile and Logout */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

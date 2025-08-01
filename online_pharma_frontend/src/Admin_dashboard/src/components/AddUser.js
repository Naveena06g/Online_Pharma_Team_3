import React from "react";

function AddUser() {
  return (
    <div className="container mt-5">
      <h2>Add User</h2>
      <form>
        <input type="text" placeholder="Name" className="form-control mb-2" />
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;

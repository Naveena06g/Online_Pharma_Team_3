import React from "react";

function AddProduct() {
  return (
    <div className="container mt-5">
      <h2>Add Product</h2>
      <form>
        <div className="mb-3">
          <label>Product Name</label>
          <input type="text" className="form-control" placeholder="Enter product name" />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input type="number" className="form-control" placeholder="Enter price" />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" placeholder="Enter description"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

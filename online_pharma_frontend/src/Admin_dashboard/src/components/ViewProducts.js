import React from "react";

function ViewProducts() {
  return (
    <div className="container mt-5">
      <h2>View Products</h2>
      <p>List of products will be shown here.</p>
    </div>
  );
}

 export default ViewProducts;

// import React, { useState, useEffect } from "react";

// function ViewProducts() {
//   const [products, setProducts] = useState([]);

//   // Load products when component mounts
//   useEffect(() => {
//     // Dummy data (later you can fetch from backend)
//     const dummyProducts = [
//       { id: 1, name: "Paracetamol", price: 50 },
//       { id: 2, name: "Cough Syrup", price: 120 },
//       { id: 3, name: "Vitamin C Tablets", price: 90 },
//     ];

//     setProducts(dummyProducts);
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">View Products</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price (₹)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewProducts;


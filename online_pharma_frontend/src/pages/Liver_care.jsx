import React, { useState } from 'react';
import './products.css';

const liverProducts = [
  { id: 1, name: "Liv-52 Hepatic Tablets", description: "Supports liver detoxification and health.", price: 480, quantity: "60 tablets", image: "💊" },
  { id: 2, name: "Milk Thistle Extract Capsules", description: "Promotes liver regeneration.", price: 750, quantity: "60 capsules", image: "🌿" },
  { id: 3, name: "LiverCare Syrup", description: "Herbal syrup for liver cleansing.", price: 320, quantity: "200ml", image: "🧴" },
  { id: 4, name: "Detox Herbal Tea", description: "Helps cleanse liver and improve digestion.", price: 180, quantity: "50g", image: "🍵" },
  { id: 5, name: "N-Acetyl Cysteine Capsules", description: "Supports antioxidant defense in liver.", price: 670, quantity: "60 capsules", image: "💊" },
  { id: 6, name: "Turmeric Curcumin Tablets", description: "Reduces liver inflammation.", price: 320, quantity: "60 tablets", image: "🌼" },
  { id: 7, name: "Artichoke Extract Capsules", description: "Supports bile production and digestion.", price: 800, quantity: "60 capsules", image: "🌱" },
  { id: 8, name: "Liver Tonic Juice", description: "Ayurvedic blend to strengthen liver.", price: 450, quantity: "1L", image: "🧃" },
  { id: 9, name: "Silymarin Capsules", description: "Powerful antioxidant for liver protection.", price: 900, quantity: "60 capsules", image: "🌿" },
  { id: 10, name: "Omega-3 Fish Oil Capsules", description: "Supports overall liver health.", price: 999, quantity: "60 capsules", image: "🐟" },
  { id: 11, name: "Bile Support Tablets", description: "Enhances bile flow and digestion.", price: 350, quantity: "30 tablets", image: "💊" },
  { id: 12, name: "Choline Supplements", description: "Supports liver fat metabolism.", price: 400, quantity: "60 tablets", image: "💊" },
  { id: 13, name: "Artichoke Leaf Extract", description: "Supports liver detoxification.", price: 780, quantity: "60 capsules", image: "🌱" },
{ id: 14, name: "Choline Bitartrate Capsules", description: "Supports liver fat metabolism.", price: 400, quantity: "60 capsules", image: "💊" },
{ id: 15, name: "Milk Thistle Tea Bags", description: "Natural liver cleansing tea.", price: 220, quantity: "20 bags", image: "🍵" },
{ id: 16, name: "Liver Detox Juice", description: "Herbal juice to support liver.", price: 450, quantity: "1L", image: "🧃" },
{ id: 17, name: "Silymarin Extract Capsules", description: "Antioxidant support for liver.", price: 900, quantity: "60 capsules", image: "🌿" },
{ id: 18, name: "N-Acetyl Cysteine Powder", description: "Supports antioxidant defense.", price: 650, quantity: "100g", image: "⚗️" },
{ id: 19, name: "Turmeric Softgels", description: "Reduces liver inflammation.", price: 400, quantity: "60 softgels", image: "🌼" },
{ id: 20, name: "Bile Flow Support Tablets", description: "Supports bile production.", price: 350, quantity: "30 tablets", image: "💊" },
{ id: 21, name: "Omega-3 Krill Oil Capsules", description: "Supports liver and heart health.", price: 1200, quantity: "60 capsules", image: "🦐" },
{ id: 22, name: "Liver Health Multivitamin", description: "Complete liver support formula.", price: 800, quantity: "60 tablets", image: "💊" },

];

const LiverCareData = () => {
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification(`${product.name} added to cart`);
  };

  const showNotification = (message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const filteredProducts = liverProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🧬 Liver Care Products</h2>
        <p>Take care of your liver with these trusted products.</p>

        <input
          type="text"
          placeholder="🔍 Search product..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-section">
        <div className="product-grid">
          {filteredProducts.length > 0 ? filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">₹{product.price}</p>
              <p className="quantity">{product.quantity}</p>
              <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          )) : (
            <p className="no-results">No products match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiverCareData;

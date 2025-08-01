import React, { useState } from 'react';
import './products.css';

const respiratoryProducts = [
  { id: 1, name: "Salbutamol Inhaler", description: "Relieves bronchospasm and wheezing.", price: 700, quantity: "1 device", image: "🌬️" },
  { id: 2, name: "Steam Inhaler Device", description: "Eases nasal congestion and breathing.", price: 2500, quantity: "1 device", image: "💨" },
  { id: 3, name: "Nasal Spray", description: "Clears nasal passages.", price: 150, quantity: "15ml", image: "👃" },
  { id: 4, name: "Cough Syrup", description: "Soothes cough and throat irritation.", price: 200, quantity: "100ml", image: "🍯" },
  { id: 5, name: "Respiratory Support Tablets", description: "Supports lung function.", price: 320, quantity: "60 tablets", image: "💊" },
  { id: 6, name: "Air Purifier Device", description: "Improves indoor air quality.", price: 8500, quantity: "1 device", image: "🏠" },
  { id: 7, name: "Vitamin C Effervescent Tablets", description: "Boosts respiratory immunity.", price: 350, quantity: "20 tablets", image: "🍊" },
  { id: 8, name: "Eucalyptus Oil", description: "Clears respiratory tract.", price: 299, quantity: "30ml", image: "🌿" },
  { id: 9, name: "Mucolytic Syrup", description: "Helps loosen mucus.", price: 270, quantity: "100ml", image: "🧴" },
  { id: 10, name: "Chest Rub Balm", description: "Relieves congestion and cough.", price: 150, quantity: "50g", image: "🧴" },
  { id: 11, name: "Nebulizer Machine", description: "Delivers medication deep into lungs.", price: 4500, quantity: "1 device", image: "🏥" },
  { id: 12, name: "Honey Lemon Cough Drops", description: "Soothes throat and cough.", price: 100, quantity: "20 pieces", image: "🍬" },
  { id: 13, name: "Vitamin C Syrup", description: "Supports respiratory immunity.", price: 250, quantity: "100ml", image: "🍊" },
{ id: 14, name: "Menthol Rub Balm", description: "Relieves nasal congestion.", price: 180, quantity: "50g", image: "🧴" },
{ id: 15, name: "Herbal Cough Syrup", description: "Soothes cough and throat.", price: 300, quantity: "100ml", image: "🍯" },
{ id: 16, name: "Nasal Decongestant Spray", description: "Clears nasal passages.", price: 150, quantity: "20ml", image: "👃" },
{ id: 17, name: "Pulmonary Support Capsules", description: "Supports lung health.", price: 450, quantity: "60 capsules", image: "💊" },
{ id: 18, name: "Steam Vaporizer", description: "Eases breathing during cold.", price: 2800, quantity: "1 device", image: "💨" },
{ id: 19, name: "Honey and Ginger Lozenges", description: "Soothes throat irritation.", price: 120, quantity: "20 pieces", image: "🍬" },
{ id: 20, name: "Eucalyptus Inhaler", description: "Clears airways naturally.", price: 350, quantity: "1 device", image: "🌿" },
{ id: 21, name: "Allergy Relief Tablets", description: "Reduces respiratory allergies.", price: 500, quantity: "30 tablets", image: "💊" },
{ id: 22, name: "Nebulizer Accessories Kit", description: "Replacement parts for nebulizers.", price: 600, quantity: "Set", image: "⚙️" },

];

const RespiratoryCareData = () => {
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

  const filteredProducts = respiratoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🌬️ Respiratory Care Products</h2>
        <p>Products to help improve your respiratory health.</p>

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

export default RespiratoryCareData;

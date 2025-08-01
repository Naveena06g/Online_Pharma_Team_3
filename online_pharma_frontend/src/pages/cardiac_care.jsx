import React, { useState } from 'react';
import './products.css';

const cardiacProducts = [
  { id: 1, name: "CardioCare Blood Pressure Monitor", description: "Track your blood pressure at home.", price: 2200, quantity: "1 device", image: "❤️" },
  { id: 2, name: "HeartGuard Omega-3 Capsules", description: "Supports heart health and cholesterol.", price: 450, quantity: "60 capsules", image: "💊" },
  { id: 3, name: "Cardiac Health Multivitamins", description: "Vitamins to support cardiovascular health.", price: 399, quantity: "30 tablets", image: "🩺" },
  { id: 4, name: "Cholesterol Control Herbal Tea", description: "Herbal blend to maintain cholesterol.", price: 180, quantity: "100g", image: "🍵" },
  { id: 5, name: "Electrolyte Replenish Drink", description: "Hydration with essential electrolytes.", price: 150, quantity: "500ml", image: "🥤" },
  { id: 6, name: "Heart Rate Monitor Watch", description: "Wearable to track heart rate 24/7.", price: 3200, quantity: "1 device", image: "⌚" },
  { id: 7, name: "Coenzyme Q10 Capsules", description: "Supports energy production in heart cells.", price: 800, quantity: "60 capsules", image: "💊" },
  { id: 8, name: "Aspirin Low Dose Tablets", description: "Helps reduce risk of blood clots.", price: 250, quantity: "30 tablets", image: "💉" },
  { id: 9, name: "Omega Cardiac Oil", description: "Heart-friendly omega fatty acids.", price: 999, quantity: "200ml", image: "🛢️" },
  { id: 10, name: "Heart Healthy Snack Mix", description: "Nuts and seeds rich in nutrients.", price: 300, quantity: "150g", image: "🥜" },
  { id: 11, name: "Blood Pressure Cuff", description: "Manual BP monitoring device.", price: 1300, quantity: "1 device", image: "🩸" },
  { id: 12, name: "Magnesium Supplements", description: "Supports heart muscle function.", price: 420, quantity: "60 tablets", image: "💊" },
  { id: 13, name: "Blood Pressure Monitor Cuff", description: "Inflatable cuff for home BP monitoring.", price: 900, quantity: "1 device", image: "🩸" },
{ id: 14, name: "Heart-Healthy Omega Bars", description: "Snack bars rich in omega-3.", price: 150, quantity: "5 bars", image: "🍫" },
{ id: 15, name: "Garlic Oil Capsules", description: "Supports heart health and circulation.", price: 380, quantity: "60 capsules", image: "🧄" },
{ id: 16, name: "CoQ10 Liquid Drops", description: "Antioxidant support for heart cells.", price: 700, quantity: "30ml", image: "💧" },
{ id: 17, name: "Potassium Supplements", description: "Helps regulate heart rhythm.", price: 400, quantity: "60 tablets", image: "💊" },
{ id: 18, name: "Omega-3 Fish Oil Softgels", description: "Supports cardiovascular function.", price: 850, quantity: "90 softgels", image: "🐟" },
{ id: 19, name: "Red Yeast Rice Capsules", description: "Supports healthy cholesterol levels.", price: 550, quantity: "60 capsules", image: "🌾" },
{ id: 20, name: "Magnesium Citrate Powder", description: "Supports heart and muscle function.", price: 480, quantity: "200g", image: "⚗️" },
{ id: 21, name: "Coenzyme Q10 Gummies", description: "Heart support in tasty gummy form.", price: 650, quantity: "60 gummies", image: "🍬" },
{ id: 22, name: "Heart Rate Chest Strap", description: "Accurate heart rate monitoring.", price: 1200, quantity: "1 device", image: "🎽" },

];

const CardiacCareData = () => {
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

  const filteredProducts = cardiacProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>❤️ Cardiac Care Products</h2>
        <p>Choose the best products to maintain your heart health.</p>

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

export default CardiacCareData;

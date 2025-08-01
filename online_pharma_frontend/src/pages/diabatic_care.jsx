import React, { useState } from 'react';
import './products.css';

const diabeticProducts = [
  { id: 1, name: "Accu-Chek Active Glucometer Kit", description: "Monitor blood sugar levels easily at home.", price: 1150, quantity: "1 device", image: "🩸" },
  { id: 2, name: "Dr. Morepen Gluco One BG-03 Strips", description: "50 strips for accurate blood glucose testing.", price: 620, quantity: "50 strips", image: "🧪" },
  { id: 3, name: "Sugar Free Natura Sweetener", description: "Low-calorie sugar substitute for diabetics.", price: 120, quantity: "100g", image: "🍬" },
  { id: 4, name: "Dabur Diabetics Care Juice", description: "Herbal juice for sugar control and energy.", price: 210, quantity: "1L", image: "🥤" },
  { id: 5, name: "BGR-34 Ayurvedic Tablets", description: "Supports healthy sugar metabolism.", price: 230, quantity: "100 tablets", image: "💊" },
  { id: 6, name: "Ensure Diabetes Care Vanilla", description: "Nutritional drink for diabetic patients.", price: 850, quantity: "1kg", image: "🥛" },
  { id: 7, name: "Kapiva Dia Free Juice", description: "Ayurvedic blend for blood sugar balance.", price: 449, quantity: "1L", image: "🧃" },
  { id: 8, name: "Himalaya Diabecon DS", description: "Herbal support for sugar management.", price: 210, quantity: "60 tablets", image: "🌿" },
  { id: 9, name: "OneTouch Select Test Strips", description: "Precise blood glucose monitoring strips.", price: 1070, quantity: "50 strips", image: "📏" },
  { id: 10, name: "BeatO Smartphone Glucometer", description: "Compact smart glucometer with app support.", price: 849, quantity: "1 device", image: "📱" },
  { id: 11, name: "Unibic Diabetic Care Cookies", description: "Sugar-free cookies for guilt-free snacking.", price: 60, quantity: "150g", image: "🍪" },
  { id: 12, name: "Neuherbs Apple Cider Vinegar", description: "Helps manage weight & blood sugar levels.", price: 299, quantity: "500ml", image: "🍎" },
  { id: 13, name: "Diabexy Atta (Low GI Flour)", description: "Diabetic-friendly flour for daily use.", price: 350, quantity: "1kg", image: "🌾" },
{ id: 14, name: "Zandu Stevia", description: "Natural sugar-free sweetener from Stevia.", price: 180, quantity: "100g", image: "🍃" },
{ id: 15, name: "Ayush Kwath Herbal Tea", description: "Immunity & sugar control herbal blend.", price: 149, quantity: "100g", image: "🍵" },
{ id: 16, name: "Diabetic Foot Cream", description: "Prevents dryness and infections in diabetic feet.", price: 199, quantity: "100g", image: "🦶" },
{ id: 17, name: "Diataal Tablets", description: "Daily nutritional supplement for diabetics.", price: 150, quantity: "30 tablets", image: "💊" },
{ id: 18, name: "Glucon-D Lite", description: "Energy drink for sugar-conscious individuals.", price: 120, quantity: "400g", image: "⚡" },
{ id: 19, name: "Sugar Knocker Capsules", description: "Natural supplement for sugar management.", price: 699, quantity: "60 capsules", image: "🌿" },
{ id: 20, name: "Diabetic Socks", description: "Non-binding socks to improve circulation.", price: 249, quantity: "1 pair", image: "🧦" },
{ id: 21, name: "Baidyanath Madhu Nashini Vati", description: "Ayurvedic medicine for sugar control.", price: 160, quantity: "60 tablets", image: "🍀" },
{ id: 22, name: "Nutriwish Diabetic Care Mix", description: "Seeds and nuts mix to support sugar control.", price: 299, quantity: "250g", image: "🥜" },

];

const DiabeticData = () => {
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

  const filteredProducts = diabeticProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🩺 Diabetic Care Products</h2>
        <p>Select the best products to manage your sugar levels.</p>

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

export default DiabeticData;
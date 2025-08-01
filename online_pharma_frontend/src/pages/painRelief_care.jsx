import React, { useState } from 'react';
import './products.css';

const painReliefProducts = [
  { id: 1, name: "Volini Pain Relief Spray", description: "Fast relief from muscle and joint pain.", price: 130, quantity: "75g", image: "💨" },
  { id: 2, name: "Moov Pain Relief Cream", description: "Soothing relief from backaches and sprains.", price: 85, quantity: "50g", image: "🌿" },
  { id: 3, name: "Himalaya Pain Relief Oil", description: "Herbal oil for quick relief from body pain.", price: 120, quantity: "100ml", image: "🛀" },
  { id: 4, name: "Dr. Ortho Ayurvedic Oil", description: "Effective for joint and muscle pain.", price: 210, quantity: "120ml", image: "🧴" },
  { id: 5, name: "Iodex Balm", description: "Powerful relief from muscular aches.", price: 65, quantity: "40g", image: "🔥" },
  { id: 6, name: "Omnigel Pain Relief Gel", description: "Quick action pain relief gel.", price: 90, quantity: "75g", image: "❄️" },
  { id: 7, name: "Relispray", description: "Spray-based formula for instant pain relief.", price: 110, quantity: "100ml", image: "🎯" },
  { id: 8, name: "Zandu Balm Ultra Power", description: "Extra strength balm for headache & body pain.", price: 75, quantity: "8ml", image: "⚡" },
  { id: 9, name: "Tiger Balm", description: "Trusted remedy for headaches & sore muscles.", price: 60, quantity: "10g", image: "🐯" },
  { id: 10, name: "Pain Relief Patches", description: "Easy-to-use patches for targeted relief.", price: 140, quantity: "Pack of 5", image: "🩹" },
  { id: 11, name: "Dolo 650", description: "Paracetamol tablet for pain and fever relief.", price: 30, quantity: "15 tablets", image: "💊" },
  { id: 12, name: "Combiflam Tablets", description: "Dual-action formula for pain and inflammation.", price: 35, quantity: "20 tablets", image: "🧪" },
  { id: 13, name: "Suthol Antiseptic Spray", description: "Soothes skin irritation and minor cuts.", price: 55, quantity: "100ml", image: "🧴" },
{ id: 14, name: "Fast&Up Reload Pain Gel", description: "Quick absorbing gel for muscular relief.", price: 165, quantity: "60g", image: "⚡" },
{ id: 15, name: "Amrutanjan Pain Balm", description: "Traditional remedy for headache and cold.", price: 40, quantity: "30g", image: "🟢" },
{ id: 16, name: "Crocine Pain Relief Tablets", description: "Common pain reliever for headaches and body pain.", price: 25, quantity: "15 tablets", image: "💊" },
{ id: 17, name: "Biofreeze Pain Relief Roll-On", description: "Menthol-based roll-on for joint pain.", price: 290, quantity: "89ml", image: "🧊" },
{ id: 18, name: "Flexabenz Gel", description: "Topical relief from sprains and spasms.", price: 85, quantity: "30g", image: "🎯" },
{ id: 19, name: "Deep Heat Rub", description: "Warming rub for arthritis and sore muscles.", price: 110, quantity: "35g", image: "🔥" },
{ id: 20, name: "JointFlex Pain Relieving Cream", description: "Clinically proven cream for arthritis pain.", price: 299, quantity: "75g", image: "🦵" },
{ id: 21, name: "Relief Patch Herbal", description: "Natural patch for menstrual cramps and pain.", price: 199, quantity: "Pack of 6", image: "🌸" },
{ id: 22, name: "Nicip Tablet", description: "Anti-inflammatory pain reliever.", price: 22, quantity: "10 tablets", image: "🧪" },

];

const PainReliefData = () => {
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

  const filteredProducts = painReliefProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🩹 Pain Relief Products</h2>
        <p>Ease pain with reliable and fast-acting relief products.</p>

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

export default PainReliefData;

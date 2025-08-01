import React, { useState } from 'react';
import './products.css';

const stomachProducts = [
  { id: 1, name: "Antacid Tablets", description: "Relieves acidity and heartburn.", price: 120, quantity: "30 tablets", image: "💊" },
  { id: 2, name: "Probiotic Yogurt Drink", description: "Supports healthy digestion.", price: 60, quantity: "200ml", image: "🥛" },
  { id: 3, name: "Ginger Herbal Tea", description: "Soothes stomach and aids digestion.", price: 150, quantity: "50g", image: "🍵" },
  { id: 4, name: "Digestive Enzyme Capsules", description: "Helps breakdown food efficiently.", price: 320, quantity: "60 capsules", image: "💊" },
  { id: 5, name: "Peppermint Oil Capsules", description: "Relieves bloating and stomach cramps.", price: 400, quantity: "30 capsules", image: "🌿" },
  { id: 6, name: "Lactose-Free Milk", description: "Good for lactose intolerance.", price: 80, quantity: "1L", image: "🥛" },
  { id: 7, name: "Fiber Supplements", description: "Improves bowel regularity.", price: 450, quantity: "60 tablets", image: "🌾" },
  { id: 8, name: "Apple Cider Vinegar", description: "Supports digestion and detox.", price: 299, quantity: "500ml", image: "🍎" },
  { id: 9, name: "Chamomile Tea", description: "Calms stomach and reduces inflammation.", price: 160, quantity: "50g", image: "🍵" },
  { id: 10, name: "Almond Snack Pack", description: "Healthy nuts for digestion.", price: 250, quantity: "150g", image: "🌰" },
  { id: 11, name: "Herbal Stomach Tonic", description: "Balances stomach acids naturally.", price: 350, quantity: "200ml", image: "🌿" },
  { id: 12, name: "Activated Charcoal Capsules", description: "Relieves gas and bloating.", price: 450, quantity: "60 capsules", image: "⚫" },
  { id: 13, name: "Simethicone Tablets", description: "Relieves gas and bloating.", price: 130, quantity: "30 tablets", image: "💊" },
{ id: 14, name: "Probiotic Yogurt Capsules", description: "Promotes healthy gut flora.", price: 400, quantity: "30 capsules", image: "🥛" },
{ id: 15, name: "Fennel Seed Tea", description: "Soothes digestion and cramps.", price: 150, quantity: "50g", image: "🍵" },
{ id: 16, name: "Antacid Liquid", description: "Neutralizes stomach acid quickly.", price: 200, quantity: "200ml", image: "🧴" },
{ id: 17, name: "Peppermint Tea Bags", description: "Calms stomach and reduces nausea.", price: 120, quantity: "20 bags", image: "🍵" },
{ id: 18, name: "Fiber Gummies", description: "Supports bowel regularity.", price: 350, quantity: "60 gummies", image: "🍬" },
{ id: 19, name: "Ginger Capsules", description: "Aids digestion and reduces nausea.", price: 380, quantity: "60 capsules", image: "🌿" },
{ id: 20, name: "Lactose Digestive Enzymes", description: "Helps digest lactose properly.", price: 420, quantity: "30 capsules", image: "🥛" },
{ id: 21, name: "Activated Charcoal Tablets", description: "Relieves gas and bloating.", price: 450, quantity: "60 tablets", image: "⚫" },
{ id: 22, name: "Digestive Bitters Tonic", description: "Stimulates digestive enzymes.", price: 300, quantity: "200ml", image: "🌿" },

];

const StomachCareData = () => {
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

  const filteredProducts = stomachProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🍽️ Stomach Care Products</h2>
        <p>Products to keep your digestive system healthy.</p>

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

export default StomachCareData;

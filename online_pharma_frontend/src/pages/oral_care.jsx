import React, { useState } from 'react';
import './products.css';

const oralProducts = [
  { id: 1, name: "Colgate Herbal Toothpaste", description: "Protects teeth and gums naturally.", price: 150, quantity: "100g", image: "🦷" },
  { id: 2, name: "Oral-B Electric Toothbrush", description: "Deep cleans teeth and gums.", price: 2200, quantity: "1 device", image: "🪥" },
  { id: 3, name: "Listerine Mouthwash", description: "Kills germs and freshens breath.", price: 350, quantity: "500ml", image: "🧴" },
  { id: 4, name: "Dental Floss", description: "Removes plaque between teeth.", price: 120, quantity: "50m", image: "🧵" },
  { id: 5, name: "Whitening Strips", description: "Brightens your smile.", price: 600, quantity: "14 strips", image: "✨" },
  { id: 6, name: "Sensitive Toothpaste", description: "Soothes sensitive teeth.", price: 180, quantity: "100g", image: "🦷" },
  { id: 7, name: "Tongue Cleaner", description: "Removes bacteria from tongue.", price: 99, quantity: "1 piece", image: "👅" },
  { id: 8, name: "Chewing Gum Sugar-Free", description: "Freshens breath and cleans teeth.", price: 50, quantity: "15 pieces", image: "🍬" },
  { id: 9, name: "Kids' Toothpaste", description: "Safe and gentle for children.", price: 120, quantity: "50g", image: "🦷" },
  { id: 10, name: "Plaque Remover Gel", description: "Helps reduce plaque buildup.", price: 320, quantity: "30ml", image: "🧴" },
  { id: 11, name: "Mouth Ulcer Gel", description: "Soothes mouth ulcers and pain.", price: 180, quantity: "15g", image: "🩹" },
  { id: 12, name: "Fluoride Rinse", description: "Strengthens tooth enamel.", price: 250, quantity: "500ml", image: "🧴" },
  { id: 13, name: "Fluoride Toothpaste", description: "Strengthens enamel and prevents cavities.", price: 120, quantity: "100g", image: "🦷" },
{ id: 14, name: "Electric Flossing Device", description: "Easy plaque removal.", price: 1500, quantity: "1 device", image: "🧵" },
{ id: 15, name: "Teeth Whitening Gel", description: "Brightens teeth safely.", price: 800, quantity: "15ml", image: "✨" },
{ id: 16, name: "Mouthwash Mint Flavor", description: "Freshens breath and kills germs.", price: 250, quantity: "500ml", image: "🧴" },
{ id: 17, name: "Interdental Brushes", description: "Cleans between teeth.", price: 200, quantity: "20 pieces", image: "🪥" },
{ id: 18, name: "Kids’ Electric Toothbrush", description: "Gentle brushing for children.", price: 1800, quantity: "1 device", image: "🦷" },
{ id: 19, name: "Sensitive Teeth Rinse", description: "Soothes sensitive teeth.", price: 300, quantity: "250ml", image: "🧴" },
{ id: 20, name: "Tongue Scraper", description: "Removes tongue bacteria.", price: 150, quantity: "1 piece", image: "👅" },
{ id: 21, name: "Dental Pain Relief Gel", description: "Reduces toothache pain.", price: 220, quantity: "15g", image: "🩹" },
{ id: 22, name: "Orthodontic Wax", description: "Protects gums from braces irritation.", price: 100, quantity: "10 pieces", image: "🦷" },

];

const OralCareData = () => {
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

  const filteredProducts = oralProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🦷 Oral Care Products</h2>
        <p>Maintain healthy teeth and gums with these products.</p>

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

export default OralCareData;

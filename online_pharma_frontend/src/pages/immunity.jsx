import React, { useState } from 'react';
import './products.css';

const immunityProducts = [
  { id: 1, name: "Vitamin C 1000mg Tablets", description: "Boosts immune system naturally.", price: 350, quantity: "60 tablets", image: "🍊" },
  { id: 2, name: "Zinc Lozenges", description: "Supports cold and flu recovery.", price: 250, quantity: "30 lozenges", image: "🍬" },
  { id: 3, name: "Ashwagandha Capsules", description: "Herbal adaptogen for stress relief.", price: 500, quantity: "60 capsules", image: "🌿" },
  { id: 4, name: "Echinacea Herbal Tea", description: "Traditional immune booster tea.", price: 180, quantity: "50g", image: "🍵" },
  { id: 5, name: "Multivitamin Syrup", description: "Complete vitamin support for kids.", price: 420, quantity: "200ml", image: "🧴" },
  { id: 6, name: "Probiotic Capsules", description: "Maintains gut health and immunity.", price: 700, quantity: "30 capsules", image: "🦠" },
  { id: 7, name: "Turmeric Curcumin Tablets", description: "Natural anti-inflammatory support.", price: 320, quantity: "60 tablets", image: "🌼" },
  { id: 8, name: "Garlic Extract Capsules", description: "Supports immune defense.", price: 400, quantity: "60 capsules", image: "🧄" },
  { id: 9, name: "Vitamin D3 2000 IU", description: "Supports bone and immune health.", price: 299, quantity: "60 tablets", image: "☀️" },
  { id: 10, name: "Herbal Immunity Booster Juice", description: "Blend of herbs to boost immunity.", price: 450, quantity: "1L", image: "🧃" },
  { id: 11, name: "Elderberry Syrup", description: "Traditional syrup for immune support.", price: 370, quantity: "250ml", image: "🍇" },
  { id: 12, name: "Honey Lemon Cough Syrup", description: "Soothes throat and boosts immunity.", price: 150, quantity: "100ml", image: "🍯" },
  { id: 13, name: "Elderberry Gummies", description: "Immune support in gummy form.", price: 400, quantity: "60 gummies", image: "🍇" },
{ id: 14, name: "Vitamin B Complex Tablets", description: "Boosts energy and immunity.", price: 320, quantity: "60 tablets", image: "💊" },
{ id: 15, name: "Reishi Mushroom Capsules", description: "Traditional immune boosting herb.", price: 700, quantity: "60 capsules", image: "🍄" },
{ id: 16, name: "Colostrum Powder", description: "Supports immune and gut health.", price: 950, quantity: "100g", image: "🥛" },
{ id: 17, name: "Andrographis Tablets", description: "Helps fight infections naturally.", price: 450, quantity: "60 tablets", image: "🌿" },
{ id: 18, name: "Beta Glucan Capsules", description: "Supports immune cell function.", price: 750, quantity: "60 capsules", image: "⚛️" },
{ id: 19, name: "Echinacea Gummies", description: "Immune support with great taste.", price: 420, quantity: "60 gummies", image: "🍬" },
{ id: 20, name: "Mushroom Immunity Blend", description: "Mix of medicinal mushrooms.", price: 900, quantity: "60 capsules", image: "🍄" },
{ id: 21, name: "Vitamin A Capsules", description: "Maintains mucosal health.", price: 320, quantity: "60 capsules", image: "🥕" },
{ id: 22, name: "Herbal Immunity Tea Pack", description: "Blend to boost immunity naturally.", price: 250, quantity: "100g", image: "🍵" },

];

const ImmunityCareData = () => {
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

  const filteredProducts = immunityProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {notifications.map((n) => (
        <div key={n.id} className="notification show">{n.message}</div>
      ))}

      <div className="product-header">
        <h2>🛡️ Immunity Care Products</h2>
        <p>Strengthen your body's natural defenses with these products.</p>

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

export default ImmunityCareData;

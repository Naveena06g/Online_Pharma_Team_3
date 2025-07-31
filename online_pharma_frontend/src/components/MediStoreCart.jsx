import React, { useState, useEffect } from 'react';

const MediStoreCart = () => {
  const [cart, setCart] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Sample initial cart data
  const initialCartData = [
    {
      id: 1,
      name: 'Elastic Bandages',
      description: 'High-quality elastic bandages for first aid and wound care. Pack of 5 bandages.',
      emoji: '🩹',
      quantity: 2,
      price: 15
    },
    {
      id: 2,
      name: 'Hand Sanitizer',
      description: '70% alcohol-based hand sanitizer for effective germ protection. 250ml bottle.',
      emoji: '🧴',
      quantity: 1,
      price: 12
    },
    {
      id: 3,
      name: 'Vitamin D3 Tablets',
      description: 'Essential vitamin D3 supplements for immunity and bone health. 30 capsules per bottle.',
      emoji: '💊',
      quantity: 1,
      price: 35
    }
  ];

  useEffect(() => {
    // Initialize cart with sample data
    setCart(initialCartData);
  }, []);

  const removeItem = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    showNotification(`${item?.name || 'Item'} removed from cart`);
  };

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      setCart([]);
      showNotification('Your cart has been cleared.');
    }
  };

  const checkoutCart = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add some items before checking out!');
      return;
    }
    setShowPaymentModal(true);
    setCart([]); // Clear cart after "checkout"
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };

  const goToProductsPage = () => {
    // Replace with your navigation logic
    console.log('Navigate to products page');
    closeModal();
  };

  const showNotification = (message) => {
    const id = Date.now();
    const newNotification = { id, message };
    setNotifications(prev => [...prev, newNotification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, 3000);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-app">
      {/* Notifications */}
      {notifications.map((notification) => (
        <div key={notification.id} className="notification show">
          {notification.message}
        </div>
      ))}

      <div className="container">
        <div className="header">
          <h1>Your Shopping Cart</h1>
          <p>Review your selected items before checkout.</p>
        </div>

        <div className="main-content">
          <div className="cart-items-container">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-content">
                  <div className="product-image">{item.emoji}</div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-description">{item.description || 'No description available'}</p>
                    <div className="product-info">
                      <span className="quantity-info">Quantity: {item.quantity}</span>
                      <span className="price-info">₹{item.price} each</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button className="btn btn-remove" onClick={() => removeItem(item.id)}>
                      <span>Remove</span> <span style={{ fontSize: '1.2em' }}>✖️</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cart.length === 0 && (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <h2>Your cart is empty!</h2>
              <p>Looks like you haven't added anything to your cart yet. <br />Go back to the products page to start shopping.</p>
              <button className="btn btn-payment" onClick={goToProductsPage}>Shop Now</button>
            </div>
          )}

          {cart.length > 0 && (
            <div className="cart-summary">
              <h2>Total: ₹{calculateTotal()}</h2>
              <div className="summary-actions">
                <button className="btn btn-payment" onClick={checkoutCart}>
                  <span>Proceed to Checkout</span> <span style={{ fontSize: '1.2em' }}>💳</span>
                </button>
                <button className="btn btn-reset" onClick={clearCart}>
                  <span>Clear Cart</span> <span style={{ fontSize: '1.2em' }}>🗑️</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Success Modal */}
      <div className={`modal-overlay ${showPaymentModal ? 'show' : ''}`} onClick={(e) => e.target === e.currentTarget && closeModal()}>
        <div className="modal">
          <div className="modal-icon"></div>
          <h3>Order Confirmed!</h3>
          <p>Your order has been placed successfully and will be delivered soon. Thank you for shopping with us!</p>
          <div className="modal-buttons">
            <button className="modal-btn modal-btn-primary" onClick={goToProductsPage}>Continue Shopping</button>
            <button className="modal-btn modal-btn-secondary" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediStoreCart;
import React, { useState, useEffect } from 'react';

const MediStoreCart = () => {
  const [cart, setCart] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [shoppingStarted, setShoppingStarted] = useState(false);

  const initialCartData = [
    {
      id: 1,
      name: 'Elastic Bandages',
      description: 'High-quality elastic bandages for first aid and wound care. Pack of 5 bandages.',
      emoji: '🩹',
      quantity: 2,
      price: 15,
    },
    {
      id: 2,
      name: 'Hand Sanitizer',
      description: '70% alcohol-based hand sanitizer for effective germ protection. 250ml bottle.',
      emoji: '🧴',
      quantity: 1,
      price: 12,
    },
    {
      id: 3,
      name: 'Vitamin D3 Tablets',
      description: 'Essential vitamin D3 supplements for immunity and bone health. 30 capsules per bottle.',
      emoji: '💊',
      quantity: 1,
      price: 35,
    }
  ];

  const handleStartShopping = () => {
    setShoppingStarted(true);
    setCart(initialCartData);
    showNotification('Welcome to MediStore! Items added to your cart.');
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 0) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0)
    );
    
    if (newQuantity === 0) {
      const item = cart.find(item => item.id === itemId);
      showNotification(`${item?.name || 'Item'} removed from cart`);
    } else {
      showNotification('Quantity updated');
    }
  };

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
    showNotification('Order placed successfully!');
    setCart([]);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };

  const goToProductsPage = () => {
    setShoppingStarted(false);
    closeModal();
    showNotification('Ready to shop again!');
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

  const styles = {
    cartApp: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    emptyCart: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem'
    },
    emptyCartIcon: {
      fontSize: '4rem',
      marginBottom: '1rem'
    },
    shopNowBtn: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginTop: '1rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#1f2937'
    },
    mainContent: {
      display: 'grid',
      gap: '2rem'
    },
    cartItemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    cartItem: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    itemContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    productImage: {
      fontSize: '3rem',
      minWidth: '80px',
      textAlign: 'center'
    },
    productDetails: {
      flex: 1
    },
    productName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      margin: '0 0 0.5rem 0'
    },
    productDescription: {
      color: '#6b7280',
      fontSize: '0.875rem',
      margin: '0 0 0.75rem 0',
      lineHeight: '1.4'
    },
    productInfo: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.875rem',
      color: '#374151'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.5rem 0'
    },
    quantityBtn: {
      backgroundColor: '#f3f4f6',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s'
    },
    quantityDisplay: {
      minWidth: '40px',
      textAlign: 'center',
      fontWeight: '600'
    },
    itemActions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'flex-end'
    },
    removeBtn: {
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    itemTotal: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#059669'
    },
    cartSummary: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    totalAmount: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#059669',
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    cartActions: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center'
    },
    btnPrimary: {
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    btnSecondary: {
      backgroundColor: '#6b7280',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s'
    },
    modalShow: {
      opacity: 1,
      visibility: 'visible'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      maxWidth: '400px',
      width: '90%',
      textAlign: 'center',
      boxShadow: '0 20px 25px rgba(0,0,0,0.2)'
    },
    notification: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1001,
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out'
    },
    notificationShow: {
      transform: 'translateX(0)'
    }
  };

  if (!shoppingStarted) {
    return (
      <div style={styles.cartApp}>
        <div style={styles.emptyCart}>
          <span style={styles.emptyCartIcon}>🛍️</span>
          <h2>Welcome to MediStore!</h2>
          <p>Your health, your priority. Click below to start shopping.</p>
          <button 
            style={styles.shopNowBtn} 
            onClick={handleStartShopping}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.cartApp}>
      {/* Notifications */}
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          style={{
            ...styles.notification,
            ...styles.notificationShow
          }}
        >
          {notification.message}
        </div>
      ))}

      <div style={styles.container}>
        <div style={styles.header}>
          <h1>Your Shopping Cart 🏥</h1>
          <p>Review your selected items before checkout.</p>
        </div>

        <div style={styles.mainContent}>
          <div style={styles.cartItemsContainer}>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div style={styles.itemContent}>
                  <div style={styles.productImage}>{item.emoji}</div>
                  <div style={styles.productDetails}>
                    <h3 style={styles.productName}>{item.name}</h3>
                    <p style={styles.productDescription}>{item.description}</p>
                    <div style={styles.productInfo}>
                      <span>₹{item.price} each</span>
                    </div>
                    <div style={styles.quantityControls}>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      >
                        −
                      </button>
                      <span style={styles.quantityDisplay}>{item.quantity}</span>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={styles.itemActions}>
                    <div style={styles.itemTotal}>
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </div>
                    <button 
                      style={styles.removeBtn} 
                      onClick={() => removeItem(item.id)}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
                    >
                      Remove ✖️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cart.length === 0 && (
            <div style={styles.emptyCart}>
              <span style={styles.emptyCartIcon}>🛒</span>
              <h2>Your cart is empty!</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <button 
                style={styles.shopNowBtn} 
                onClick={goToProductsPage}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                Shop Again
              </button>
            </div>
          )}

          {cart.length > 0 && (
            <div style={styles.cartSummary}>
              <div style={styles.totalAmount}>Total: ₹{calculateTotal()}</div>
              <div style={styles.cartActions}>
                <button 
                  style={styles.btnPrimary} 
                  onClick={checkoutCart}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
                >
                  Proceed to Checkout 💳
                </button>
                <button 
                  style={styles.btnSecondary} 
                  onClick={clearCart}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#4b5563'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#6b7280'}
                >
                  Clear Cart 🗑️
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      <div 
        style={{
          ...styles.modal,
          ...(showPaymentModal ? styles.modalShow : {})
        }} 
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div style={styles.modalContent}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h2>Order Confirmed!</h2>
          <p>Your order has been placed successfully and will be delivered soon.</p>
          <button 
            style={styles.shopNowBtn} 
            onClick={goToProductsPage}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediStoreCart;
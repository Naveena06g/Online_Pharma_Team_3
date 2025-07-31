import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3000';

function UserDrugs() {
  const [drugs, setDrugs] = useState([]);
  const [cart, setCart] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/drugs`)
      .then((res) => res.json())
      .then(setDrugs)
      .catch(console.error);
  }, []);

  const addToCart = (drug) => {
    setCart([...cart, drug]);
  };

  const handlePayment = () => {
    setResponse({ message: 'Payment Successful (Mock)' });
    setCart([]);
    setError(false);
  };

  return (
    <div className="tab-content active">
      <h2>Browse & Purchase Drugs</h2>

      <h3>Available Drugs</h3>
      <ul>
        {drugs.map((d, i) => (
          <li key={i}>
            {d.name} - ₹{d.price} ({d.company})
            <button className="btn" onClick={() => addToCart(d)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Your Cart</h3>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((c, i) => <li key={i}>{c.name} - ₹{c.price}</li>)}
        </ul>
      )}

      <button className="btn" onClick={handlePayment} disabled={cart.length === 0}>
        Pay Now
      </button>

      {response && (
        <div className={`response ${error ? 'error' : 'success'}`}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UserDrugs;

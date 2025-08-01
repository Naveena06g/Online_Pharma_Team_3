import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="dashboard">
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;

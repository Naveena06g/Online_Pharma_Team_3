import React, { useState } from 'react';

const API_BASE = 'http://localhost:3000';

function UserAuth() {
  const [userToken, setUserToken] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch(`${API_BASE}/member/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setError(!res.ok);
      setResponse(result);
    } catch (err) {
      setError(true);
      setResponse({ error: err.message });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch(`${API_BASE}/member/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setError(!res.ok);
      setResponse(result);
      if (res.ok && result.token) setUserToken(result.token);
    } catch (err) {
      setError(true);
      setResponse({ error: err.message });
    }
  };

  return (
    <div className="tab-content active">
      <h2>Member Authentication</h2>

      <h3>Register Member</h3>
      <form onSubmit={handleRegister}>
        <div className="form-row">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="btn">Register Member</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      <h3>Member Login</h3>
      <form onSubmit={handleLogin}>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
        </div>
        <button type="submit" className="btn">Login</button>
      </form>

      {userToken && (
        <div className="token-display">
          <strong>User Token:</strong>
          <div>{userToken}</div>
        </div>
      )}

      {response && (
        <div className={`response ${error ? 'error' : 'success'}`}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UserAuth;

import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate login success
    setSuccess(true);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {success ? (
          <div className="success-message">Login Successful!</div>
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? 'error' : ''}
                />
                {errors.username && <div className="error-message">{errors.username}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>

              <button type="submit" className="submit-button">Login</button>

              <div className="form-footer">
                Don't have an account? <a href="#">Register here</a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

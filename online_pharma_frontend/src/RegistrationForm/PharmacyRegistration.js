import React, { useState } from 'react';

function PharmacyRegistration() {
  // Set up state to hold form data
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: ''
  });

  // Update form data as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Registered User:', form);
    alert('Registration Successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Mobile:</label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default PharmacyRegistration;

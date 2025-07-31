import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3000';

function DrugManager() {
  const [drugs, setDrugs] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  // Load all drugs on component mount
  useEffect(() => {
    fetch(`${API_BASE}/drugs`)
      .then((res) => res.json())
      .then((data) => setDrugs(data))
      .catch((err) => console.error('Error fetching drugs:', err));
  }, []);

  const handleAddDrug = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch(`${API_BASE}/drugs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setError(!res.ok);
      setResponse(result);

      if (res.ok) {
        setDrugs([...drugs, result]); // update UI
        e.target.reset(); // clear form
      }
    } catch (err) {
      setError(true);
      setResponse({ error: err.message });
    }
  };

  return (
    <div className="tab-content active">
      <h2>Drug Management</h2>

      <h3>Add Drug</h3>
      <form onSubmit={handleAddDrug}>
        <div className="form-row">
          <div className="form-group">
            <label>Drug Name:</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Company:</label>
            <input type="text" name="company" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price (₹):</label>
            <input type="number" name="price" required />
          </div>
          <div className="form-group">
            <label>Expiry Date:</label>
            <input type="date" name="expiry" required />
          </div>
        </div>

        <button type="submit" className="btn">Add Drug</button>
      </form>

      {response && (
        <div className={`response ${error ? 'error' : 'success'}`}>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      <hr style={{ margin: '30px 0' }} />

      <h3>All Drugs</h3>
      <div className="drug-list">
        {drugs.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Drug</th>
                <th>Company</th>
                <th>Price</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug, index) => (
                <tr key={index}>
                  <td>{drug.name}</td>
                  <td>{drug.company}</td>
                  <td>₹{drug.price}</td>
                  <td>{drug.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No drugs found.</p>
        )}
      </div>
    </div>
  );
}

export default DrugManager;

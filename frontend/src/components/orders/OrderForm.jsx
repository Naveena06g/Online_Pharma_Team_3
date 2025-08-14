import React, { useState, useEffect } from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Alert,
  Autocomplete,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const OrderForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // For editing existing orders
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    selectedDrug: null,
    quantity: '',
    notes: '',
    status: 'pending',
  });

  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Mock drugs data - replace with actual API call
  useEffect(() => {
    // Simulate fetching available drugs
    setDrugs([
      { id: 1, name: 'Paracetamol 500mg', price: 5.00, stock: 100 },
      { id: 2, name: 'Amoxicillin 250mg', price: 20.00, stock: 50 },
      { id: 3, name: 'Ibuprofen 200mg', price: 8.00, stock: 75 },
      { id: 4, name: 'Aspirin 325mg', price: 3.50, stock: 120 },
      { id: 5, name: 'Metformin 500mg', price: 12.00, stock: 60 },
    ]);
  }, []);

  // Load existing order data if editing
  useEffect(() => {
    if (isEditing) {
      // Simulate loading existing order data
      setFormData({
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerPhone: '+1234567890',
        selectedDrug: { id: 1, name: 'Paracetamol 500mg', price: 5.00, stock: 100 },
        quantity: '30',
        notes: 'Take twice daily',
        status: 'pending',
      });
    }
  }, [isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDrugChange = (event, newValue) => {
    setFormData(prev => ({
      ...prev,
      selectedDrug: newValue
    }));
  };

  const calculateTotal = () => {
    if (formData.selectedDrug && formData.quantity) {
      return (formData.selectedDrug.price * parseInt(formData.quantity) || 0).toFixed(2);
    }
    return '0.00';
  };

  const validateForm = () => {
    if (!formData.customerName.trim()) {
      setError('Customer name is required');
      return false;
    }
    if (!formData.customerEmail.trim()) {
      setError('Customer email is required');
      return false;
    }
    if (!formData.selectedDrug) {
      setError('Please select a drug');
      return false;
    }
    if (!formData.quantity || parseInt(formData.quantity) <= 0) {
      setError('Please enter a valid quantity');
      return false;
    }
    if (parseInt(formData.quantity) > formData.selectedDrug.stock) {
      setError('Quantity exceeds available stock');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const orderData = {
        ...formData,
        totalAmount: calculateTotal(),
        orderDate: new Date().toISOString().split('T')[0],
      };

      console.log('Order data:', orderData);
      
      setSuccess(isEditing ? 'Order updated successfully!' : 'Order created successfully!');
      
      // Navigate back to orders list after a short delay
      setTimeout(() => {
        navigate('/orders');
      }, 2000);

    } catch (err) {
      setError('Failed to save order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/orders');
  };

  return (
    <Box maxWidth="md" mx="auto">
      <Typography variant="h4" component="h1" gutterBottom>
        {isEditing ? 'Edit Order' : 'Create New Order'}
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Customer Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Customer Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Email"
                name="customerEmail"
                type="email"
                value={formData.customerEmail}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Phone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Order Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Order Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Autocomplete
                fullWidth
                options={drugs}
                getOptionLabel={(option) => `${option.name} - $${option.price} (Stock: ${option.stock})`}
                value={formData.selectedDrug}
                onChange={handleDrugChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Drug"
                    required
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleInputChange}
                inputProps={{ min: 1, max: formData.selectedDrug?.stock || 999 }}
                required
              />
            </Grid>

            {formData.selectedDrug && (
              <Grid item xs={12}>
                <Box sx={{ p: 2, backgroundColor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h6">Order Summary</Typography>
                  <Typography>Drug: {formData.selectedDrug.name}</Typography>
                  <Typography>Unit Price: ${formData.selectedDrug.price}</Typography>
                  <Typography>Quantity: {formData.quantity || 0}</Typography>
                  <Typography variant="h6" color="primary">
                    Total Amount: ${calculateTotal()}
                  </Typography>
                </Box>
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                name="notes"
                multiline
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any special instructions or notes..."
              />
            </Grid>

            {isEditing && (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    label="Status"
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="processing">Processing</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}

            {/* Action Buttons */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : (isEditing ? 'Update Order' : 'Create Order')}
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default OrderForm;
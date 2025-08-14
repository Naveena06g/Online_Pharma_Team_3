import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const navigate = useNavigate();

  // Mock data - replace with actual API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          orderNumber: 'ORD-001',
          customerName: 'John Doe',
          drugName: 'Paracetamol 500mg',
          quantity: 30,
          totalAmount: 150.00,
          status: 'completed',
          orderDate: '2024-01-15',
        },
        {
          id: 2,
          orderNumber: 'ORD-002',
          customerName: 'Jane Smith',
          drugName: 'Amoxicillin 250mg',
          quantity: 20,
          totalAmount: 400.00,
          status: 'pending',
          orderDate: '2024-01-16',
        },
        {
          id: 3,
          orderNumber: 'ORD-003',
          customerName: 'Bob Johnson',
          drugName: 'Ibuprofen 200mg',
          quantity: 50,
          totalAmount: 250.00,
          status: 'processing',
          orderDate: '2024-01-17',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'processing':
        return 'info';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setViewDialogOpen(true);
  };

  const handleEditOrder = (orderId) => {
    // Navigate to edit order form
    navigate(`/orders/edit/${orderId}`);
  };

  const handleDeleteOrder = (orderId) => {
    // Implement delete functionality
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography>Loading orders...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" component="h1">
          Orders Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/orders/new')}
        >
          Create New Order
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Drug</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.orderNumber}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.drugName}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status.toUpperCase()}
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleViewOrder(order)}
                    size="small"
                  >
                    <ViewIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleEditOrder(order.id)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteOrder(order.id)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View Order Dialog */}
      <Dialog
        open={viewDialogOpen}
        onClose={() => setViewDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Order #{selectedOrder.orderNumber}
              </Typography>
              <Typography><strong>Customer:</strong> {selectedOrder.customerName}</Typography>
              <Typography><strong>Drug:</strong> {selectedOrder.drugName}</Typography>
              <Typography><strong>Quantity:</strong> {selectedOrder.quantity}</Typography>
              <Typography><strong>Total Amount:</strong> ${selectedOrder.totalAmount.toFixed(2)}</Typography>
              <Typography>
                <strong>Status:</strong>{' '}
                <Chip
                  label={selectedOrder.status.toUpperCase()}
                  color={getStatusColor(selectedOrder.status)}
                  size="small"
                />
              </Typography>
              <Typography><strong>Order Date:</strong> {selectedOrder.orderDate}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderList;
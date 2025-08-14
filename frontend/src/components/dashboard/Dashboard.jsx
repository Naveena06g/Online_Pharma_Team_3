import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  LocalPharmacy as DrugIcon,
  ShoppingCart as OrderIcon,
  People as UserIcon,
  AttachMoney as RevenueIcon
} from '@mui/icons-material';
import { drugService } from '../../services/drugService';
import { orderService } from '../../services/orderService';
import { userService } from '../../services/userService';
import { authService } from '../../services/authService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDrugs: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const currentUser = authService.getCurrentUser();
  const isAdmin = authService.isAdmin();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [drugs, orders, users] = await Promise.all([
          drugService.getAllDrugs(),
          orderService.getUserOrders(),
          isAdmin ? userService.getAllUsers() : Promise.resolve([])
        ]);

        const totalRevenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);

        setStats({
          totalDrugs: drugs.length,
          totalOrders: orders.length,
          totalUsers: users.length,
          totalRevenue: totalRevenue
        });
      } catch (error) {
        setError('Failed to load dashboard data');
        console.error('Dashboard error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [isAdmin]);

  const StatCard = ({ title, value, icon, color }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ 
            backgroundColor: color, 
            borderRadius: '50%', 
            p: 1, 
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </Box>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome, {currentUser?.name}!
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Drugs"
            value={stats.totalDrugs}
            icon={<DrugIcon sx={{ color: 'white' }} />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Your Orders"
            value={stats.totalOrders}
            icon={<OrderIcon sx={{ color: 'white' }} />}
            color="#2e7d32"
          />
        </Grid>
        {isAdmin && (
          <>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Total Users"
                value={stats.totalUsers}
                icon={<UserIcon sx={{ color: 'white' }} />}
                color="#ed6c02"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Total Revenue"
                value={`$${stats.totalRevenue.toFixed(2)}`}
                icon={<RevenueIcon sx={{ color: 'white' }} />}
                color="#9c27b0"
              />
            </Grid>
          </>
        )}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent>
                <Typography variant="h6">Browse Drugs</Typography>
                <Typography variant="body2" color="text.secondary">
                  View and search available medications
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent>
                <Typography variant="h6">Place Order</Typography>
                <Typography variant="body2" color="text.secondary">
                  Create a new medication order
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent>
                <Typography variant="h6">View Profile</Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your account information
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

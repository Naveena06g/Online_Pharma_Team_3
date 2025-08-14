import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  Grid,
  Divider,
  Card,
  CardContent
} from '@mui/material';
import { userService } from '../../services/userService';
import { authService } from '../../services/authService';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const data = await userService.getUserProfile();
      setProfile({
        name: data.name || '',
        email: data.email || '',
        mobile: data.mobile || ''
      });
    } catch (error) {
      setError('Failed to load profile');
      console.error('Fetch profile error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError('');
    setSuccess('');

    try {
      await userService.updateProfile(profile);
      setSuccess('Profile updated successfully!');
      
      // Update local storage user data
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        const updatedUser = { ...currentUser, ...profile };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to update profile');
      console.error('Update profile error:', error);
    } finally {
      setUpdating(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }

    setUpdating(true);
    setError('');
    setSuccess('');

    try {
      await userService.changePassword(passwordData.oldPassword, passwordData.newPassword);
      setSuccess('Password changed successfully!');
      setPasswordData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to change password');
      console.error('Change password error:', error);
    } finally {
      setUpdating(false);
    }
  };

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
        User Profile
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Profile Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            
            <Box component="form" onSubmit={handleProfileUpdate}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                required
                sx={{ mb: 2 }}
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={profile.email}
                disabled
                sx={{ mb: 2 }}
                helperText="Email cannot be changed"
              />
              
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={profile.mobile}
                onChange={handleProfileChange}
                required
                sx={{ mb: 3 }}
              />
              
              <Button
                type="submit"
                variant="contained"
                disabled={updating}
                fullWidth
              >
                {updating ? <CircularProgress size={24} /> : 'Update Profile'}
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Change Password */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Change Password
            </Typography>
            
            <Box component="form" onSubmit={handlePasswordUpdate}>
              <TextField
                fullWidth
                label="Current Password"
                name="oldPassword"
                type="password"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
                required
                sx={{ mb: 2 }}
              />
              
              <TextField
                fullWidth
                label="New Password"
                name="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                required
                sx={{ mb: 2 }}
                helperText="Password must be at least 6 characters long"
              />
              
              <TextField
                fullWidth
                label="Confirm New Password"
                name="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                required
                sx={{ mb: 3 }}
              />
              
              <Button
                type="submit"
                variant="contained"
                disabled={updating}
                fullWidth
              >
                {updating ? <CircularProgress size={24} /> : 'Change Password'}
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Account Information */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Role
                  </Typography>
                  <Typography variant="body1">
                    {authService.getCurrentUser()?.role || 'MEMBER'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Account Status
                  </Typography>
                  <Typography variant="body1">
                    {authService.getCurrentUser()?.isActive ? 'Active' : 'Inactive'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Member Since
                  </Typography>
                  <Typography variant="body1">
                    {authService.getCurrentUser()?.createdAt 
                      ? new Date(authService.getCurrentUser().createdAt).toLocaleDateString()
                      : 'N/A'
                    }
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Last Updated
                  </Typography>
                  <Typography variant="body1">
                    {authService.getCurrentUser()?.updatedAt 
                      ? new Date(authService.getCurrentUser().updatedAt).toLocaleDateString()
                      : 'N/A'
                    }
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;

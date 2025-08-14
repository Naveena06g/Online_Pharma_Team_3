import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  IconButton,
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab
} from '@mui/material';
import {
  CheckCircle as ActivateIcon,
  Cancel as DeactivateIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Person as UserIcon
} from '@mui/icons-material';
import { userService } from '../../services/userService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [roleDialog, setRoleDialog] = useState({ open: false, user: null, newRole: '' });
  const [deleteDialog, setDeleteDialog] = useState({ open: false, user: null });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const [allUsers, pending] = await Promise.all([
        userService.getAllUsers(),
        userService.getPendingUsers()
      ]);
      setUsers(allUsers);
      setPendingUsers(pending);
    } catch (error) {
      setError('Failed to load users');
      console.error('User management error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleActivateUser = async (userId) => {
    try {
      await userService.activateUser(userId);
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isActive: true } : user
      ));
      setPendingUsers(pendingUsers.filter(user => user.id !== userId));
      setSuccess('User activated successfully');
    } catch (error) {
      setError('Failed to activate user');
      console.error('Activate user error:', error);
    }
  };

  const handleDeactivateUser = async (userId) => {
    try {
      await userService.deactivateUser(userId);
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isActive: false } : user
      ));
      setSuccess('User deactivated successfully');
    } catch (error) {
      setError('Failed to deactivate user');
      console.error('Deactivate user error:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await userService.deleteUser(deleteDialog.user.id);
      setUsers(users.filter(user => user.id !== deleteDialog.user.id));
      setPendingUsers(pendingUsers.filter(user => user.id !== deleteDialog.user.id));
      setDeleteDialog({ open: false, user: null });
      setSuccess('User deleted successfully');
    } catch (error) {
      setError('Failed to delete user');
      console.error('Delete user error:', error);
    }
  };

  const handleRoleUpdate = async () => {
    try {
      await userService.updateUserRole(roleDialog.user.id, roleDialog.newRole);
      setUsers(users.map(user => 
        user.id === roleDialog.user.id ? { ...user, role: roleDialog.newRole } : user
      ));
      setRoleDialog({ open: false, user: null, newRole: '' });
      setSuccess('User role updated successfully');
    } catch (error) {
      setError('Failed to update user role');
      console.error('Update role error:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getRoleColor = (role) => {
    return role === 'ADMIN' ? 'error' : 'primary';
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
        User Management
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

      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
        <Tab label={`All Users (${users.length})`} />
        <Tab label={`Pending Users (${pendingUsers.length})`} />
      </Tabs>

      {tabValue === 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      color={getRoleColor(user.role)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.isActive ? 'Active' : 'Inactive'}
                      color={user.isActive ? 'success' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{formatDate(user.createdAt)}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => setRoleDialog({ 
                        open: true, 
                        user, 
                        newRole: user.role 
                      })}
                    >
                      <EditIcon />
                    </IconButton>
                    {user.isActive ? (
                      <IconButton
                        size="small"
                        color="warning"
                        onClick={() => handleDeactivateUser(user.id)}
                      >
                        <DeactivateIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="small"
                        color="success"
                        onClick={() => handleActivateUser(user.id)}
                      >
                        <ActivateIcon />
                      </IconButton>
                    )}
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => setDeleteDialog({ open: true, user })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {tabValue === 1 && (
        <Grid container spacing={3}>
          {pendingUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <UserIcon sx={{ mr: 1 }} />
                    <Typography variant="h6">
                      {user.name}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {user.email}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {user.mobile}
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                    Registered: {formatDate(user.createdAt)}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => handleActivateUser(user.id)}
                      startIcon={<ActivateIcon />}
                    >
                      Activate
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => setDeleteDialog({ open: true, user })}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          
          {pendingUsers.length === 0 && (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6" color="text.secondary">
                  No pending users
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      )}

      {/* Role Update Dialog */}
      <Dialog
        open={roleDialog.open}
        onClose={() => setRoleDialog({ open: false, user: null, newRole: '' })}
      >
        <DialogTitle>Update User Role</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2 }}>
            Update role for {roleDialog.user?.name}
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={roleDialog.newRole}
              onChange={(e) => setRoleDialog({ ...roleDialog, newRole: e.target.value })}
              label="Role"
            >
              <MenuItem value="MEMBER">Member</MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRoleDialog({ open: false, user: null, newRole: '' })}>
            Cancel
          </Button>
          <Button onClick={handleRoleUpdate} variant="contained">
            Update Role
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, user: null })}
      >
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{deleteDialog.user?.name}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, user: null })}>
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;

import api from './api';

export const userService = {
  getUserProfile: async () => {
    const response = await api.get('/api/user/profile');
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await api.put('/api/user/profile', userData);
    return response.data;
  },

  changePassword: async (oldPassword, newPassword) => {
    const response = await api.put(`/api/user/change-password?oldPassword=${oldPassword}&newPassword=${newPassword}`);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await api.get('/api/admin/users');
    return response.data;
  },

  getUserById: async (id) => {
    const response = await api.get(`/api/admin/users/${id}`);
    return response.data;
  },

  activateUser: async (id) => {
    const response = await api.put(`/api/admin/users/${id}/activate`);
    return response.data;
  },

  deactivateUser: async (id) => {
    const response = await api.put(`/api/admin/users/${id}/deactivate`);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await api.delete(`/api/admin/users/${id}`);
    return response.data;
  },

  getPendingUsers: async () => {
    const response = await api.get('/api/admin/users/pending');
    return response.data;
  },

  updateUserRole: async (id, role) => {
    const response = await api.put(`/api/admin/users/${id}/role?role=${role}`);
    return response.data;
  }
};

import api from './api';

export const orderService = {
  createOrder: async (orderData) => {
    const response = await api.post('/api/user/orders', orderData);
    return response.data;
  },

  getUserOrders: async () => {
    const response = await api.get('/api/user/orders');
    return response.data;
  },

  getOrderById: async (id) => {
    const response = await api.get(`/api/user/orders/${id}`);
    return response.data;
  },

  cancelOrder: async (id) => {
    const response = await api.delete(`/api/user/orders/${id}`);
    return response.data;
  },

  getAllOrders: async () => {
    const response = await api.get('/api/admin/orders');
    return response.data;
  },

  getOrderByIdAdmin: async (id) => {
    const response = await api.get(`/api/admin/orders/${id}`);
    return response.data;
  },

  updateOrderStatus: async (id, status) => {
    const response = await api.put(`/api/admin/orders/${id}/status?status=${status}`);
    return response.data;
  }
};

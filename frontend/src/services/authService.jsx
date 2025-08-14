// import api from './api';

// export const authService = {
//   login: async (credentials) => {
//     const response = await api.post('/api/auth/login', credentials);
//     if (response.data.success) {
//       localStorage.setItem('token', response.data.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.data.user));
//     }
//     return response.data;
//   },

//   register: async (userData) => {
//     const response = await api.post('/api/auth/register', userData);
//     return response.data;
//   },

//   logout: async () => {
//     try {
//       await api.post('/api/auth/logout');
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     }
//   },

//   getCurrentUser: () => {
//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   },

//   isAuthenticated: () => {
//     return !!localStorage.getItem('token');
//   },

//   isAdmin: () => {
//     const user = authService.getCurrentUser();
//     return user && user.role === 'ADMIN';
//   }
// };


// src/services/authService.js
import api from './api';

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    if (response.data.success) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  register: async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed',
      };
    }
  },

  logout: async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  isAdmin: () => {
    const user = authService.getCurrentUser();
    return user && user.role === 'ADMIN';
  }
};

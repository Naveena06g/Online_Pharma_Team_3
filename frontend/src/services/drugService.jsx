import api from './api';

export const drugService = {
  getAllDrugs: async () => {
    const response = await api.get('/api/drugs');
    return response.data;
  },

  getDrugById: async (id) => {
    const response = await api.get(`/api/drugs/${id}`);
    return response.data;
  },

  searchDrugs: async (name) => {
    const response = await api.get(`/api/drugs/search?name=${name}`);
    return response.data;
  },

  addDrug: async (drugData) => {
    const response = await api.post('/api/admin/drugs', drugData);
    return response.data;
  },

  updateDrug: async (id, drugData) => {
    const response = await api.put(`/api/admin/drugs/${id}`, drugData);
    return response.data;
  },

  deleteDrug: async (id) => {
    const response = await api.delete(`/api/admin/drugs/${id}`);
    return response.data;
  },

  updateStock: async (id, quantity) => {
    const response = await api.put(`/api/admin/drugs/${id}/stock?quantity=${quantity}`);
    return response.data;
  }
};

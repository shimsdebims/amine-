// api/providerService.js
import apiClient from './apiClient';

export const getAllProviders = async (params) => {
  try {
    const response = await apiClient.get('/providers', { params });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const getProviderById = async (id) => {
  try {
    const response = await apiClient.get(`/providers/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Add more provider-related API calls

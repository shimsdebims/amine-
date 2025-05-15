import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Use localhost for iOS simulator, use your machine IP for Android
const API_BASE_URL = 'http://localhost:3001/api'; // For iOS
// const API_BASE_URL = 'http://192.168.1.X:5000/api'; // For Android - replace with your IP

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error accessing token from storage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, data } = error.response || {};
    
    if (status === 401) {
      // Handle unauthorized access - can be handled by AuthContext
      console.log('Authentication error, redirecting to login');
      // We'll let the AuthContext handle logout
    }
    
    return Promise.reject({
      ...error,
      message: data?.message || error.message || 'An error occurred',
      status
    });
  }
);

export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
  },
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
  },
  logout: async () => {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('user');
  },
  getProfile: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/updateprofile', userData)
};

export const providerAPI = {
  getProviders: (params) => api.get('/providers', { params }),
  getProviderById: (id) => api.get(`/providers/${id}`),
  createProvider: (data) => api.post('/providers', data),
  updateProvider: (id, data) => api.put(`/providers/${id}`, data),
  deleteProvider: (id) => api.delete(`/providers/${id}`),
};

export const bookingAPI = {
  createBooking: (data) => api.post('/bookings', data),
  getBookings: (params) => api.get('/bookings', { params }),
  getBookingById: (id) => api.get(`/bookings/${id}`),
  updateBooking: (id, data) => api.put(`/bookings/${id}`, data),
  deleteBooking: (id) => api.delete(`/bookings/${id}`),
};

export const paymentAPI = {
  createPayment: (data) => api.post('/payments', data),
  getPayments: (params) => api.get('/payments', { params }),
  getPaymentById: (id) => api.get(`/payments/${id}`),
  updatePaymentStatus: (id, status) => api.put(`/payments/${id}`, { status }),
  // Add Orange Money specific methods if needed
  processOrangeMoneyPayment: (data) => api.post('/payments/orange-money', data),
};

export default api;

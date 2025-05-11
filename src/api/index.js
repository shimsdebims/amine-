import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API base URL

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
    const { user } = useAuth();
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
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
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., logout user)
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
};

export const serviceAPI = {
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
  updateBookingStatus: (id, status) => api.patch(`/bookings/${id}/status`, { status }),
};

export const paymentAPI = {
  initiateOrangeMoneyPayment: (data) => api.post('/payments/orange-money', data),
  verifyPayment: (paymentId) => api.get(`/payments/verify/${paymentId}`),
};

export default api;
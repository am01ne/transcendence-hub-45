import api from './api';
import { InternalAxiosRequestConfig } from 'axios';

// Add a request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get the JWT token from localStorage instead of cookies
    const token = localStorage.getItem('jwt_token');

    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // If the response includes a token, save it
    const token = response.headers['authorization'];
    if (token) {
      localStorage.setItem('jwt_token', token.replace('Bearer ', ''));
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login on unauthorized
      localStorage.removeItem('jwt_token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
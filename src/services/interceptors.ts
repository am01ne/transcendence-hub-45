import api from './api';

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // The cookie will be automatically included in requests
    // due to withCredentials: true
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
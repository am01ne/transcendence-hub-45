import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true, // This is important for handling cookies
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;
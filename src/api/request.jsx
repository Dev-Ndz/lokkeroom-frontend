import axios from 'axios';

const token = localStorage.getItem('jwtToken');

export const axiosAuthInstance = axios.create({
  baseURL: 'https://example.com/api',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
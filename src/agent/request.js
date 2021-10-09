import axios from 'axios';

const request = axios.create({
  baseURL: 'https://612cd1bcab461c00178b5ee4.mockapi.io/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;

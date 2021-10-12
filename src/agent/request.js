import axios from 'axios';

const params = new URLSearchParams([['key', process.env.REACT_APP_API_KEY]]);

const request = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  params,
});

export default request;

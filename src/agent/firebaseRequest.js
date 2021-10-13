import axios from 'axios';

const firebaseRequest = axios.create({
  baseURL:
    'https://ecommerce-c67f7-default-rtdb.europe-west1.firebasedatabase.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default firebaseRequest;

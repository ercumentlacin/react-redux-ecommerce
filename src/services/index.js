import firebaseRequest from 'agent/firebaseRequest';
import { getCookie } from 'helpers';

import request from '../agent/request';

export const UsersService = {
  getAllUsersCarts: () => firebaseRequest.get('/users.json'),
  createUserCart: (userCart) => firebaseRequest.post('/users.json', userCart),
};

export const signUpService = async (formData) => {
  const response = await request.post('/accounts:signUp', formData);
  return response;
};

const userId = getCookie('email').split('@')[0];

export const CartService = {
  deleteCartById: (cartId) => firebaseRequest.delete(`/users/${cartId}.json`),
  updateCartById: (cart) =>
    firebaseRequest.put(`/users/${userId}/cart.json`, cart),
  getCart: () => firebaseRequest.get(`/users/${userId}/cart.json`),
  addCartItem: (cartItem) =>
    firebaseRequest.post(`/users/${userId}/cart.json`, cartItem),
};

import firebaseRequest from 'agent/firebaseRequest';

import request from '../agent/request';

export const UsersService = {
  getAllUsersCarts: () => firebaseRequest.get('/users.json'),
  createUserCart: (userCart) => firebaseRequest.post('/users.json', userCart),
};

export const signUpService = async (formData) => {
  const response = await request.post('/accounts:signUp', formData);
  return response;
};

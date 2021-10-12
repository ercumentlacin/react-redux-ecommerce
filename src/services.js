import request from './agent/request';

// eslint-disable-next-line import/prefer-default-export
export const signUpService = async (formData) => {
  const response = await request.post('/accounts:signUp', formData);
  return response;
};

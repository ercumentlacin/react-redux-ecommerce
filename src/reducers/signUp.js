import SIGN_UP from 'constants/signUp';
import { setCookie } from 'helpers';

const initialState = {
  userData: {
    email: '',
    password: '',
    returnSecureToken: true,
  },
  isFetching: false,
  isError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP.SIGN_UP_REQUEST:
      return { ...state, isFetching: true, userData: {}, isError: false };
    case SIGN_UP.SIGN_UP_SUCCESS: {
      const { idToken, expiresIn, email } = action.payload;
      setCookie('token', idToken, expiresIn);
      setCookie('email', email, expiresIn);

      return {
        ...state,
        userData: action.payload,
        isFetching: false,
        isError: false,
      };
    }
    case SIGN_UP.SIGN_UP_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default user;

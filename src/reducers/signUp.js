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
      const { idToken, expiresIn } = action.payload;
      setCookie('token', idToken, expiresIn);

      return {
        ...state,
        userData: action.data,
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

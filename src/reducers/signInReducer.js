import SIGN_IN_TYPE from 'constants/signInType';
import { setCookie } from 'helpers';

const INITIAL_STATE = {
  isSignIn: false,
  user: {},
  error: null,
  loading: false,
};

const signInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_TYPE.PENDING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_TYPE.SUCCESS: {
      const { email, expiresIn, idToken } = action.payload;
      setCookie('token', idToken, expiresIn);
      setCookie('email', email, expiresIn);

      return {
        ...state,
        loading: false,
        isSignIn: true,
        user: action.payload,
      };
    }
    case SIGN_IN_TYPE.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signInReducer;

import SIGN_IN_TYPE from 'constants/signInType';
import { UsersService } from 'services';

const signInPending = () => ({
  type: SIGN_IN_TYPE.PENDING,
});

const signInSuccess = (user) => ({
  type: SIGN_IN_TYPE.SUCCESS,
  payload: user,
});

const signInError = (error) => ({
  type: SIGN_IN_TYPE.ERROR,
  payload: error,
});

const signInRequest = (user) => async (dispatch) => {
  dispatch(signInPending());
  try {
    const response = await UsersService.signIn(user);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};
export default signInRequest;

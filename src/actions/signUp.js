import SIGN_UP from 'constants/signUp';
import { signUpService } from 'services';

const signUpPendding = () => ({
  type: SIGN_UP.SIGN_UP_REQUEST,
});

const signUpSuccess = (payload) => ({
  type: SIGN_UP.SIGN_UP_SUCCESS,
  payload,
});

const signUpFailure = (payload) => ({
  type: SIGN_UP.SIGN_UP_FAILURE,
  payload,
});

const signUpAction = (formdata) => async (dispatch) => {
  dispatch(signUpPendding());
  try {
    const { data } = await signUpService(formdata);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(signUpFailure(error.response.data.error.errors[0].message));
  }
};

export default signUpAction;

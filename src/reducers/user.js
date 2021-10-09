import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from 'constants/user';

const initialState = {
  userData: {},
  isFetching: false,
  isError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isFetching: true, userData: {}, isError: false };
    case FETCHED_USER:
      return {
        ...state,
        userData: action.data,
        isFetching: false,
        isError: false,
      };
    case RECEIVE_ERROR:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default user;

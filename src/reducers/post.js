import { FETCH_POST, FETCHED_POST, RECEIVE_ERROR } from 'constants/post';

const initialState = {
  postData: {},
  isFetching: false,
  isError: false,
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, isFetching: true, postData: {}, isError: false };
    case FETCHED_POST:
      return {
        ...state,
        postData: action.data,
        isFetching: false,
        isError: false,
      };
    case RECEIVE_ERROR:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default post;

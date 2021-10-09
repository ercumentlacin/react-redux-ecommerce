import { FETCH_USER, FETCHED_USER, RECEIVE_ERROR } from 'constants/user';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const receiveUser = (post) => ({
  type: FETCHED_USER,
  data: post,
});

export const receiveError = () => ({
  type: RECEIVE_ERROR,
});

export const fetchUserInfo = (username) => {
  const user = username.replace(/\s/g, '');
  return async (dispatch) => {
    dispatch(fetchUser());
    return fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.message === 'Not Found') {
          throw new Error('No such user found!!');
        } else dispatch(receiveUser(data));
      })
      .catch(() => dispatch(receiveError()));
  };
};

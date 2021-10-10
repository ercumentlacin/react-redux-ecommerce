import CHARACTERS from 'constants/characters';

const fetchSuccess = (data) => ({
  type: CHARACTERS.FETCH_CHARACTERS_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: CHARACTERS.FETCH_CHARACTERS_FAILURE,
  payload: error,
});

const fetchPending = () => ({
  type: CHARACTERS.FETCH_CHARACTERS_PENDING,
});

const fetchCharacters = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data.results)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCharacters;

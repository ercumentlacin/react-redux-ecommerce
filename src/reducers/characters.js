import CHARACTERS from 'constants/characters';

const initialState = {
  charactersData: {},
  isFetching: false,
  isError: false,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS.FETCH_CHARACTERS_PENDING:
      return { ...state, isFetching: true, charactersData: {}, isError: false };
    case CHARACTERS.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersData: action.payload,
        isFetching: false,
        isError: false,
      };
    case CHARACTERS.FETCH_CHARACTERS_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default charactersReducer;

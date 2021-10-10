import { combineReducers } from 'redux';

import CartReducer from './cart';
import CharactersReducer from './characters';
import PostReducer from './post';
import UserReducer from './user';

export default combineReducers({
  posts: PostReducer,
  users: UserReducer,
  characters: CharactersReducer,
  cart: CartReducer,
});

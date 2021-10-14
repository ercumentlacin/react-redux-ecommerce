import { combineReducers } from 'redux';

import CartReducer from './cart';
import CharactersReducer from './characters';
import SignInReducer from './signInReducer';
import SignUpReducer from './signUp';

export default combineReducers({
  characters: CharactersReducer,
  cart: CartReducer,
  signUp: SignUpReducer,
  signIn: SignInReducer,
});

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, middleware);

export default store;

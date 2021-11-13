import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer.js';
import { customerReducer } from './customReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

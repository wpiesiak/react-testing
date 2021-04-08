import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import character from './character/reducers';

const rootReducer = combineReducers({
  character,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;

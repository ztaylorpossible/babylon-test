import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { babylonJSMiddleware } from 'react-babylonjs'

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, babylonJSMiddleware),
  );
  return store;
}

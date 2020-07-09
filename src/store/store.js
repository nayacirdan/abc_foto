import reducer from './reducers/index';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(reducer,
  compose(applyMiddleware(thunk), reduxDevTools)
);

export default store;
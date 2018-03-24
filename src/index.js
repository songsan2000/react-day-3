import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
import './index.css';
import rootSaga from './sagas/rootSaga';
import initialState from './initialState.json';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Hello from './containers/Hello';

import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { EnthusiasmAction } from './actions/index';
import logger from 'redux-logger'
const middlewares = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
}, applyMiddleware(...middlewares));
ReactDOM.render(
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

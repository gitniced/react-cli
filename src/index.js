import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import getRouter from 'router/router';
import combineReducers from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from 'pages/App/App'; 
import './index.scss';
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('pages/App/App', () => {
      const getRouter = require('pages/App/App').default;
      renderWithHotReload(getRouter);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
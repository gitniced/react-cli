import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import getRouter from 'router/router';
import combineReducers from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from 'pages/Home/Home'; 
import './index.scss';
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

renderWithHotReload(Home);

/*热更新*/
if (module.hot) {
  module.hot.accept('pages/Home/Home', () => {
      const getRouter = require('pages/Home/Home').default;
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
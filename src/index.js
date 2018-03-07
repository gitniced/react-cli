import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

import getRouter from 'router/router';
import combineReducers from './reducers/reducers';
import thunkMiddleware from 'redux-thunk';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
      const getRouter = require('./router/router').default;
      renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        { RootElement }
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
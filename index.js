import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import PostReducer from './reducer/PostReducer';

import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const store = createStore(PostReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
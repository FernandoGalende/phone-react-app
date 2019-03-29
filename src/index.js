import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import  { globalState }  from './reducers'

const store = createStore(globalState)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

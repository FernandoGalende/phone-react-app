import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers  from './reducers/index'

import { shallow } from 'enzyme'

const store = createStore(reducers)

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
});

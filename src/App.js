import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './text.componet'
import Contador from './contador.component'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <Contador/>
          <Text
            arrayOfNumbers={[1,2,3,4]}
            objetEjemplo={
              {
                key1: 'Value1',
                key2: 'Value2'
              }
            }
            multiply={(number) => number*2}
            title="Component Text"
            value={0}
          />

        </header>
      </div>
    );
  }
}

export default App;

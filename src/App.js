import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './text.componet'

class Contador extends Component {
  constructor(){
    super()
    this.state = {contador: 1}
   setInterval (() => {
     this.setState({
      contador: this.state.contador +1
    })
    },1000)
  }
  render(){
    return(
      <h1>{this.state.contador}</h1>
    )
  }
}


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

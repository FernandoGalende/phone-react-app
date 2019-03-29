import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Logo extends Component {
  render() {
    return (
      <div>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
    </div>
    )
  }
}

export default Logo

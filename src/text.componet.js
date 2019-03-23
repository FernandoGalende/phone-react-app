import React, { Component } from 'react';

class Text extends Component {
  render(){
    const {
      arrayOfNumbers,
      objetEjemplo,
      multiply,
      title,
      title2
    } = this.props
    const mappedArray = arrayOfNumbers.map(n => multiply(n) )
    return(
      <div>
        <h1>{title}</h1>
        <h2>{mappedArray}</h2>
        <h3>{objetEjemplo.key1}</h3>
        <h4>{title2}</h4>
      </div>
    );
  }
}

Text.defaultProps = {
  title2: "hola pepe"
}

export default Text;
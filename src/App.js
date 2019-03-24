import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

//components
import Logo from './Components/Logo.component'
import { SearchForm } from './Components/SearchForm.component'
import { Title } from './Components/common/Tittle.component'

class App extends Component {
  state = { results:[] }

  _handleResults = (results) => {
    this.setState({results})
    console.log(results)

  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Title>Phone Luxury</Title>
        <div className="search-for--Wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
        ? <p>Sin Resultados</p>
        : <p>Con Resultados</p>
        }
      </div>
    );
  }
}

export default App;

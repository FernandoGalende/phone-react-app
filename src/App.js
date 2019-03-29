import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

//Components
import  DetailContainer  from './containers/detailContainer'
import  HomeContainer  from './containers/homeContainer'
import { NotFound } from './pages/notFound'

//Styles
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return <div className="App">
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route path="/detail/:id" component={ DetailContainer } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  }
}

export default App;

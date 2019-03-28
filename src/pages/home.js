import React, { Component } from 'react';

//Components
import Logo from '../Components/Logo'
import { PhoneList } from '../Components/PhoneList'
import { SearchForm } from '../Components/SearchForm'
import { Title } from '../Components/Tittle.component'

export class Home extends Component {
  state = {
    results:[]
  }

  _renderResults = () => {
    return this.state.results.length === 0
      ? <small>Sorry! Not resutls</small>
      : <PhoneList
        phones={this.state.results} />
  }

  _handleResults = (results) => {
    console.log('togle', this.props.usedSearch)
    this.props.togleSearch()
    console.log('togle', this.props.usedSearch)

    this.setState({ results })
  }

  render(){
    return  (
      <div>
        <Logo />
        <Title>Phone Luxury</Title>
            <div className="search-for--Wrapper">
              <SearchForm onResults={this._handleResults} />
            </div>
            {this.props.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
            }
      </div>
    )
  }

}
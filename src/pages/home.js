import React, { Component } from 'react';

//Components
import Logo from '../Components/Logo'
import { PhoneList } from '../Components/PhoneList'
import { SearchForm } from '../Components/SearchForm'
import { Title } from '../Components/Tittle.component'

export class Home extends Component {
   _renderResults = () => {
    return this.props.results.length === 0
      ? <small>Sorry! Not resutls</small>
      : <PhoneList
        phones={this.props.results} />
  }

  _handleResults = (results) => {
    this.props.togleSearch()
    this.props.updateResults(results)
  }

  render(){
    return  (
      <div>
        <Logo />
        <Title>Phone Luxury</Title>
            <div className="search-for--Wrapper">
              <SearchForm onResults={this._handleResults} />
            </div>
            {this.props.isUsedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
            }
      </div>
    )
  }

}
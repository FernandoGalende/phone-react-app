import React, { Component } from 'react';

const BASE_URL=process.env.REACT_APP_BASEURL

export class SearchForm extends Component {
  options = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*'}
  }

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${BASE_URL}/phones`,this.options)
    .then( res => res.json() )
    .then( results => {
       this.props.onResults( results.data )
    })
  }

  render () {
    return(
      <form onSubmit={ this._handleSubmit } id="search-form">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={ this._handleChange }
              type="text"
              placeholder="Find a phone"/>
          </div>
          <div className="control">
            <button id="search-button"
              className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

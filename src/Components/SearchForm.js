import React, { Component } from 'react';

const BASE_URL=process.env.REACT_APP_BASEURL

export class SearchForm extends Component {
  options = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*'}
  }
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    // const {inputMovie} = this.state
    fetch(`http://localhost:3000/phones`,this.options)
    .then( res => res.json() )
    .then( results => {
      console.log(results)
       //const { Search=[] } = results
       // this.props.onResults(Search)
    })
  }

  render () {
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Find a phone"/>
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

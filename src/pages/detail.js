import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../Components/ButtonBackToHome'

const BASE_URL=process.env.REACT_APP_BASEURL

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  _fetchPhone(id){
    fetch(`${BASE_URL}i=${id.id}`)
    .then( res => res.json() )
    .then( phone => {
      this.props.updateResult(phone)
    })
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this._fetchPhone({ id })
  }

  render(){
    const { Title, Poster, Actors, Metascore, Plot, imdbID } = this.props.onDetailResult
    return(
      <div>
        <h1>{ Title }</h1>
        <img src={ Poster }
          alt={ imdbID }
          />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p> {Plot} </p>
        <ButtonBackToHome/>
      </div>
    )
  }
}
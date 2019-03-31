import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../Components/ButtonBackToHome'

const BASE_URL=process.env.REACT_APP_BASEURL

export class Detail extends Component {
  options = {
    method: 'GET',
    headers: { 'Access-Control-Allow-Origin': '*'}
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  _fetchPhone(id){
    fetch(`${BASE_URL}/phone/${id.id}`, this.options)
    .then( res => res.json() )
    .then( phone => {
      this.props.updateResult(phone[0])
    })
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this._fetchPhone({ id })
  }

  render(){
    const { title, image, description, id } = this.props.onDetailResult
    return(
      <div>
        <h1 className="title-detail">{ title }</h1>
        <img className="image-detail"
          src={ image }
          alt={ id }
          />
        <p className="description-detail"> { description } </p>
        <ButtonBackToHome/>
      </div>
    )
  }
}
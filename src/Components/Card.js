import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Card extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
  }

  render(){
    const { id, title, image, color } = this.props
    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={image}
              alt={title}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{ title }</p>
              <p className="subtitle is-6">{ color }</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

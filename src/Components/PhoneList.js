import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Card } from '../Components/Card'

export class PhoneList extends Component {
  static propTypes = {
    phones: PropTypes.array,
  }

  render(){
    const { phones } = this.props
    return(
      <div className="PhonesList">

      {
        phones.map(movie => {
          return (
            <div
              key={movie.imdbID}
              className="PhonesList-Item">
                <Card
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  image={movie.Poster}
                />
            </div>
          )
        })
      }
      </div>
    )
  }
}
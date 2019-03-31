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
        phones.map(phone => {
          return (
            <div
              key={ phone.id }
              className="PhonesList-Item">
                <Card
                  id = { phone.id }
                  title = { phone.title }
                  color = { phone.color }
                  image = { phone.thumbnails }
                />
            </div>
          )
        })
      }
      </div>
    )
  }
}
import React from 'react';
import { shallow } from 'enzyme'

//Components
import { Card } from '../Components/Card'

describe('Card component', () => {
  it('should render Card component', () => {
    const cardComponent = shallow(<Card debug/>)
    expect(cardComponent).toMatchSnapshot()
  });

  it('should render Card component with properly elements', () => {
    const id = "01"
    const title = "iPhone XS Max"
    const color = "Gold"
    const image = "https://s.tmocache.com//images/png/products/phones/Apple-iPhone-XS-Gold/170x250.png"

    const cardComponent = shallow(<Card
        id = { id }
        title = { title }
        color = { color }
        image = { image }
      />
    )

    expect(cardComponent).toMatchSnapshot()
  });
})

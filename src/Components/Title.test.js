import React from 'react';
import { shallow } from 'enzyme'

//Components
import Title from '../Components/Logo'

describe('Title component', () => {
  it('should render Title component correctly', () => {
    const Logocomponent = shallow(<Title />)
    expect(Logocomponent).toMatchSnapshot()
  });
})
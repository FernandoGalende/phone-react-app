import React from 'react';
import { shallow } from 'enzyme'

//Components
import Logo from '../Components/Logo'

describe('Logo component', () => {
  it('should render logo component correctly', () => {
    const LogoComponent = shallow(<Logo />)
    expect(LogoComponent).toMatchSnapshot()
  });
})

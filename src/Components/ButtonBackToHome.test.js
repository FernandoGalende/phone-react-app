import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';


import { ButtonBackToHome } from '../Components/ButtonBackToHome';

describe('Logo component', () => {
  it('should render ButtonBack component correctly', () => {
    const ButtonComponent = shallow(<ButtonBackToHome debug/>)
    expect(ButtonComponent).toMatchSnapshot()
  });

  it('should includes link to home', () => {
    const wrapper = shallow(<ButtonBackToHome/>)
    expect(wrapper.find(Link).props().to).toBe('/')
  });
});
import React from 'react';
import { shallow } from 'enzyme'

//Components
import { PhoneList } from '../Components/PhoneList'

//assets
import mockResults from '../assets/mockDataTest'


describe('PhoneList component', () => {
  it('should render PhoneList component with properly elements', () => {
    const PhoneListComponent = shallow(<PhoneList phones = { mockResults.data } />
    )
    expect(PhoneListComponent).toMatchSnapshot()
  });
})

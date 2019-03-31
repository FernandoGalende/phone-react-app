import React from 'react';
import { shallow } from 'enzyme'

//Components
import { SearchForm }  from '../Components/SearchForm'

//assets
import mockResults from '../assets/mockDataTest'

describe('SearchForm component', () => {
  it('should render SearchForm component correctly', () => {
    const searchComponent = shallow(<SearchForm debug/>)
    expect(searchComponent).toMatchSnapshot()
  });

  it('should render SearchForm component with properly arguments', () => {
    const searchComponent = shallow(<SearchForm onResults={ mockResults.data }/>);
    expect(searchComponent).toMatchSnapshot()
  });

  it('button click should have been called correctly', () => {
    const searchComponent = shallow(<SearchForm onResults={ mockResults.data } />)
    const preventDefault = jest.fn()
    const fakeEvent = { preventDefault, target:{ value: '000'} };
    expect(searchComponent.find('#search-form').length).toBe(1);
    searchComponent.find('.input').simulate('change', { target: { value: '000' } });
    searchComponent.find('#search-form').simulate('submit', fakeEvent );
    expect(preventDefault).toBeCalled();
  });


})

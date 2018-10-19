import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
const initialState = {}; 
const mockStore = configureStore();
let wrapper;
let store;
it('renders without crashing', () => {
  const div = document.createElement('div');
  store = mockStore(initialState);
  wrapper = shallow(<App store={store}/>);
});
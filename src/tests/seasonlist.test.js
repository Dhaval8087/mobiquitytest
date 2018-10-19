import React from 'react';
import thunk from 'redux-thunk';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import SeasonList from '../components/season/seasonlist';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import seasonReducer from '../reducers/seasonreducer';
Enzyme.configure({ adapter: new Adapter() });
let wrapper;
let store;
it('renders without crashing', () => {
    store = setupStore();
    wrapper = mount(<Provider store={store}><SeasonList isLoading={false}/></Provider>);
    expect(wrapper.find('MainContainer').find("a").text()).toEqual('F1 Race App');
});
function setupStore() {
    return createStore(
      combineReducers({ seasonReducer }),
      applyMiddleware(thunk)
    );
  }
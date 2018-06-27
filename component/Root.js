// root就是对App组件包装个redux
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../Redux/Store/configureStore';
import App from './App';

const store = configureStore();
console.log(store.getState())
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

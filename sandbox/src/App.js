import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

export default App;

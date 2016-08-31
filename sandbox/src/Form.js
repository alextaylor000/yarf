import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { handleFormChange } from './yarf';

function Form({ form}) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          onChange={(evt) => handleFormChange(evt.target.value, 'name')}
          value={form.name}
         />
      </p>
      <p>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          onChange={(evt) => handleFormChange(evt.target.value, 'email')}
          value={form.email}
        />
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    form: state.form
  }
}

export default connect(mapStateToProps)(Form);

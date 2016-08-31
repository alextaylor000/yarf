import { createStore, combineReducers, compose } from 'redux';
import { fromJS } from 'immutable';
const set = require('lodash.set');

const initialState = {
  contactInfo: {
    name: 'Alex',
    email: ''
  }
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_FORM_CHANGE':
      let newState = Object.assign({}, state);
      return set(newState, action.payload.path, action.payload.value);
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    form: formReducer
  }),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
  )
);

export default store;

import { createStore, combineReducers, compose } from 'redux';
import { fromJS } from 'immutable';

const initialState = {
  contactInfo: {
    name: 'Alex',
    email: ''
  }
};

function formReducer(state = fromJS(initialState), action) {
  switch (action.type) {
    case 'HANDLE_FORM_CHANGE':
      return state.mergeDeep(action.payload)
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

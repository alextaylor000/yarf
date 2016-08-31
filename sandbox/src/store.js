import { createStore, combineReducers, compose } from 'redux';

const initialState = {
  name: 'Alex',
  email: ''
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_FORM_CHANGE':
      return {
        ...state,
        [action.payload.dest]: action.payload.value
      }
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

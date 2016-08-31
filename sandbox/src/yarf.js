import store from './store';

export function handleFormChange(value, dest) {
  console.log('[yarf] handleFormChange', value);
  store.dispatch({
    type: 'HANDLE_FORM_CHANGE',
    payload: { value, dest }
    }
  );
}

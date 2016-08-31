import store from './store';

export function handleFormChange(change) {
  console.log('[yarf] handleFormChange', change);
  store.dispatch({
    type: 'HANDLE_FORM_CHANGE',
    payload: change
    }
  );
}

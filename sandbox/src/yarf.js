import store from './store';

export function handleFormChange(path, value) {
  console.log('[yarf] handleFormChange', path, value);
  store.dispatch({
    type: 'HANDLE_FORM_CHANGE',
    payload: { path, value }
    }
  );
}

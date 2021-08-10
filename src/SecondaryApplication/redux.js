import { createStore, combineReducers } from 'redux';

const count = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return (state += 1);
    default:
      return state;
  }
};

export const increment = () => ({ type: 'increment' });

export const configureStore = () =>
  createStore(
    combineReducers({ count }),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authMiddleware from 'src/middlewares/auth';
import playersMiddleware from 'src/middlewares/players';
import registerMiddleware from 'src/middlewares/register';
import editMiddleware from 'src/middlewares/edit';

import reducer from 'src/reducers';

export const loadState = () => {
  // We need the try block because user may not permit our accessing localStorage.
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) { // The key 'state' does not exist.
      return undefined;// Let our reducer initialize the app.
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;// Let our reducer initialize the app.
  }
};

export const saveState = (state) => {
  try {
    // Serialize the state. Redux store is recommended to be serializable.
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const persistedState = loadState();

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    playersMiddleware,
    registerMiddleware,
    editMiddleware,
    // ... d'autres middlewares
  ),
);

export const store = createStore(
  // reducer
  reducer,
  persistedState,
  // enhancer
  enhancers,
);

store.subscribe(() => saveState(store.getState()));

export default store;

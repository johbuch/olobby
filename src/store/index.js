import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authMiddleware from 'src/middlewares/auth';
import registerMiddleware from 'src/middlewares/register';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    registerMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;

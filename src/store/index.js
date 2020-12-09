import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import authMiddleware from 'src/middlewares/auth';
import playersMiddleware from 'src/middlewares/players';
import registerMiddleware from 'src/middlewares/register';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    playersMiddleware,
    registerMiddleware,
    // ... d'autres middlewares
  ),
);

export const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export const persistor = persistStore(store);

export default { store, persistor };

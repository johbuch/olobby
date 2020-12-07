import axios from 'axios';

import { FETCH_PLAYERS, savePlayers } from 'src/actions/players';

const playersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      console.log('middleware, action FETCH_PLAYERS');
      axios.get('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/platforms', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('DATA TEST', response);
          store.dispatch(savePlayers(response.data));
        })
        .catch((error) => {
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default playersMiddleware;

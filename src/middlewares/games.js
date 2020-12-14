import axios from 'axios';

import { FETCH_GAMES, saveGames } from 'src/actions/games';

const gamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      console.log('middleware, action FETCH_GAMES');
      axios.get('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/videogames', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default gamesMiddleware;

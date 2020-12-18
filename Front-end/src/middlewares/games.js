import axios from 'axios';

import { FETCH_GAMES, saveGames } from 'src/actions/players';

const gamesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get('http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/videogames', {
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

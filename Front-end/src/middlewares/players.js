import axios from 'axios';

import { FETCH_PLAYERS, savePlayers, FETCH_PLAYERS_MATCHMAKING, saveMatchMaking, saveMatchMakingLevel, FETCH_LEVELS_MATCHMAKING } from 'src/actions/players';

const playersMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      axios.get('http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/users', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(savePlayers(response.data));
          console.log('TESTTTT', response);
        })
        .catch((error) => {
        });
      next(action);
      break;
    case FETCH_PLAYERS_MATCHMAKING: {
      const {
        id,
      } = store.getState().user;
      axios.get(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/matchmaking/platformandvideogame/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveMatchMaking(response.data));
          console.log('TEST', response);
        })
        .catch((error) => {
        });
      next(action);
      break;
    }
    case FETCH_LEVELS_MATCHMAKING: {
      const {
        id,
      } = store.getState().user;
      axios.get(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/matchmaking/frequencyandplatformandvideogame/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveMatchMakingLevel(response.data));
          console.log('TESTO', response);
        })
        .catch((error) => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default playersMiddleware;

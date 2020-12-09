import axios from 'axios';

import {
  LOG_IN,
  saveUserInfo,
  LOG_OUT,
  FETCH_GAMES,
  saveGames,
  FETCH_PLATFORMS,
  savePlatforms,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { isActive, email, password } = store.getState().user;
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/login', {
        isActive,
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('refresh_token', response.data.refresh_token);
          store.dispatch(saveUserInfo(
            response.data.data.isActive,
            response.data.data.pseudo,
            response.data.data.avatar,
          ));
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case LOG_OUT: {
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/logout', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('deco', response);
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_GAMES:
      axios.get('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/videogames', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveGames(response.data));
          console.log('YOLO', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_PLATFORMS:
      axios.get('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/platforms', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(savePlatforms(response.data));
          console.log('SWAG', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default authMiddleware;

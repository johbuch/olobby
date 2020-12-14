import axios from 'axios';

import {
  FETCH_GAMES,
  saveGames,
  FETCH_PLATFORMS,
  savePlatforms,
  EDIT_USER,
  FETCH_USER,
  saveUser,
} from 'src/actions/edit';

import {
  saveUserInfo,
} from 'src/actions/user';

const editMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GAMES:
      axios.get('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/videogames', {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveGames(response.data));
          console.log('GAMES', response);
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
          console.log('PLATFORMS', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case FETCH_USER: {
      const {
        id,
      } = store.getState().user;
      axios.get(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/users/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          console.log('USER', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case EDIT_USER: {
      const {
        pseudo,
        pseudoPlatform,
        email,
        avatar,
        description,
        radio,
        checkbox,
        id,
      } = store.getState().user;
      axios.patch(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/users/edit/${id}`, {
        pseudo,
        pseudoPlatform,
        email,
        avatar,
        description,
        platform: radio,
        videogames: checkbox,
      }, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(
            response.data.id,
            true,
            response.data.pseudo,
            response.data.avatar,
            response.data.email,
            response.data.level,
            response.data.description,
            response.data.pseudoPlatform,
            response.data.platform,
            response.data.videogames,
          ));
          console.log('EDIT PROFILE', response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default editMiddleware;

import axios from 'axios';

import {
  FETCH_GAMES,
  saveGames,
  FETCH_PLATFORMS,
  savePlatforms,
  EDIT_USER,
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
    case EDIT_USER: {
      const {
        pseudo,
        pseudoOlobbien,
        email,
        avatar,
        description,
        radio,
        checkbox,
        id,
      } = store.getState().user;
      console.log('edit', id);
      axios.patch(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/users/edit/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
        pseudo,
        pseudoOlobbien,
        email,
        avatar,
        description,
        radio,
        checkbox,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(
            response.data.pseudo,
            response.data.avatar,
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

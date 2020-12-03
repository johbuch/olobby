import axios from 'axios';

import {
  LOG_IN,
  saveUserInfo,
  CHECK_LOGGED,
  LOG_OUT,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post('http://localhost:3001/login', {
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case CHECK_LOGGED:
      axios.post('http://localhost:3001/isLogged', {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
          console.log('check logged', response);
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    case LOG_OUT: {
      axios.post('http://localhost:3001/logout', {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUserInfo(response.data.logged, response.data.pseudo));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;

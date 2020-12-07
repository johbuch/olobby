import axios from 'axios';

import {
  LOG_IN,
  saveUserInfo,
  LOG_OUT,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/login', {
        //headers: { Authorization: `Bearer ${JWTToken}` },
        email,
        password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          store.dispatch(saveUserInfo(
            true,
            response.data.token,
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
          store.dispatch(saveUserInfo(
            false,
            response.data.token,
            response.data.data.pseudo,
            response.data.data.avatar,
          ));
          console.log('deco', response);
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

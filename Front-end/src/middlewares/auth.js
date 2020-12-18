import axios from 'axios';

import {
  LOG_IN,
  saveUserInfo,
  LOG_OUT,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { isActive, email, password } = store.getState().user;
      axios.post('http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/login', {
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
            response.data.data.id,
            response.data.data.isActive,
            response.data.data.pseudo,
            response.data.data.avatar,
          ));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case LOG_OUT:
      localStorage.clear();
      next(action);
      break;
    default:
      next(action);
  }
};

export default authMiddleware;

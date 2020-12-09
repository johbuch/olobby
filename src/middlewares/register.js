import axios from 'axios';

import {
  ADD_USER,
  saveUserInfo,
} from 'src/actions/user';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_USER: {
      const { emailRegister, passwordRegister, pseudo } = store.getState().user;
      console.log(store.getState().user);
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/register', {
        email: emailRegister,
        plainPassword: passwordRegister,
        pseudo,
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
          console.log('DATA', response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default registerMiddleware;

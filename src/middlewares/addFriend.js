import axios from 'axios';

import {
  ADD_FRIEND,
  addFriendSuccess,
} from 'src/actions/addFriend';

const addFriendMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      const {
        friendReceiver,
      } = store.getState().addFriend;
      console.log('ADD_FRIEND', friendReceiver);
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/friends/add', {
        friendReceiver,
      }, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(addFriendSuccess(response.data));
          console.log('ADD_FRIEND', response);
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

export default addFriendMiddleware;

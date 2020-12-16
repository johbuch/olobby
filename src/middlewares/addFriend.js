import axios from 'axios';

import {
  ADD_FRIEND,
  addFriendSuccess,
  FETCH_FRIENDS,
  saveFriends,
  ACCEPT_FRIEND,
  acceptFriendSuccess,
  REFUSE_FRIEND,
  refuseFriendSuccess,
} from 'src/actions/addFriend';

const addFriendMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      axios.post('http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/friends/add', {
        receiver: action.value,
      }, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(addFriendSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_FRIENDS: {
      const {
        id,
      } = store.getState().user;
      axios.get(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/friends/pending-for-confirmation/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveFriends(response.data));
          console.log('FETCH_FRIEND', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case ACCEPT_FRIEND: {
      const {
        idSender,
      } = store.getState().addFriend;
      axios.patch(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/friends/accept/${idSender}`, {
        id: action.value,
      }, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(acceptFriendSuccess(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case REFUSE_FRIEND: {
      const {
        idSender,
      } = store.getState().addFriend;
      axios.delete(`http://ec2-52-3-54-243.compute-1.amazonaws.com/api/v1/friends/delete/${idSender}`, {
        id: action.value,
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(refuseFriendSuccess(response.data));
          console.log('REFUSE_FRIEND', response);
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

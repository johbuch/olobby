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
  LIST_FRIENDS,
  displayFriends,
} from 'src/actions/addFriend';

const addFriendMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      axios.post('http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/friends/add', {
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
    case LIST_FRIENDS: {
      const {
        id,
      } = store.getState().user;
      axios.get(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/friends/list/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(displayFriends(response.data));
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
      axios.get(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/friends/pending-for-confirmation/${id}`, {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveFriends(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case ACCEPT_FRIEND: {
      axios.patch(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/friends/accept/${action.value}`, {
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
      axios.delete(`http://ec2-3-83-161-43.compute-1.amazonaws.com/api/v1/friends/delete/${action.value}`, {
        id: action.value,
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(refuseFriendSuccess(response.data));
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

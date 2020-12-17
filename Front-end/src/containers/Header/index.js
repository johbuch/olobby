import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logOut } from 'src/actions/user';
import { fetchFriends, acceptFriend, refuseFriend } from 'src/actions/addFriend';

const mapStateToProps = (state) => ({
  isActive: state.user.isActive,
  pseudo: state.user.pseudo,
  avatar: state.user.avatar,
  friends: state.addFriend.friendsList,
  idSender: state.addFriend.idSender,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
  launchFetchFriends: () => {
    dispatch(fetchFriends());
  },
  acceptFriend: (newValue) => {
    dispatch(acceptFriend(newValue));
  },
  refuseFriend: (newValue) => {
    dispatch(refuseFriend(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);

import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logOut } from 'src/actions/user';
import { fetchFriends } from 'src/actions/addFriend';

const mapStateToProps = (state) => ({
  isActive: state.user.isActive,
  pseudo: state.user.pseudo,
  avatar: state.user.avatar,
  friends: state.addFriend.friendsList,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logOut());
  },
  launchFetchFriends: () => {
    dispatch(fetchFriends());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);

import { connect } from 'react-redux';

import CardProfile from 'src/components/CardProfile';

import {
  editAddFriend,
} from 'src/actions/addFriend';

const mapStateToProps = (state) => ({
  friendReceiver: state.addFriend.friendReceiver,
});

const mapDispatchToProps = (dispatch) => ({
  changeAddFriend: (newValue) => {
    dispatch(editAddFriend(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardProfile);

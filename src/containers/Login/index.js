import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { createUpdateUserFieldAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUpdateUserFieldAction(newValue, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

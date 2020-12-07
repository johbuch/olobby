import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { createUpdateUserFieldAction, logIn } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUpdateUserFieldAction(newValue, name));
  },
  handleLogin: () => {
    // console.log('handleLogin');
    dispatch(logIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

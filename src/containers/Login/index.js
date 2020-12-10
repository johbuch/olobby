import { connect } from 'react-redux';

import Login from 'src/components/Login';

import {
  createUpdateUserFieldAction,
  logIn,
  addProfile,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  emailRegister: state.user.emailRegister,
  passwordRegister: state.user.passwordRegister,
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  games: state.user.gamesList,
  platforms: state.user.platformsList,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUpdateUserFieldAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },

  handleRegister: () => {
    dispatch(addProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

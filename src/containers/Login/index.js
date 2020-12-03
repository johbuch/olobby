import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { createUpdateUserFieldAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(createUpdateUserFieldAction(newValue, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import { connect } from 'react-redux';

import Olobby from 'src/components/Olobby';


const mapStateToProps = (state) => ({
  isActive: state.user.isActive,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Olobby);

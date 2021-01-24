import { connect } from 'react-redux';

import MainSplash from './main_splash';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
       
    };
};

export default connect(mSTP, mDTP)(MainSplash);
import { connect } from 'react-redux';

import Following from './following';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch, ownProps) => {
    return {
    };
};

export default connect(msp, mdp)(Following);
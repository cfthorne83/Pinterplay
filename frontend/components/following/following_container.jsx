import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { fetchPins } from '../../actions/pin_actions';

import Following from './following';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchPins: (data) => dispatch(fetchPins(data))
    };
};

export default connect(msp, mdp)(Following);
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavLinks from './nav_links'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(NavLinks);
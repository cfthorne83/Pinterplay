import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        url: window.location.href.split("/").pop()
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(NavBar);
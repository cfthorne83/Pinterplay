import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

import Profile from './profile'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: modal => dispatch(closeModal(modal)) 
    };
};

export default connect(mSTP, mDTP)(Profile);
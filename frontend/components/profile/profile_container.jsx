import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

import Profile from './profile';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        last_board: Object.values(state.entities.boards)[0]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()) 
    };
};

export default connect(mSTP, mDTP)(Profile);
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchFollows } from '../../actions/follow_actions';

import BrowseProfile from './browse_profile';

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        closeModal: () => dispatch(closeModal()),
        fetchUsers: () => dispatch(fetchUsers()) 
    };
};

export default connect(mSTP, mDTP)(BrowseProfile);
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchFollows } from '../../actions/follow_actions';


import Profile from './profile';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        lastBoard: Object.values(state.entities.boards)[0]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        closeModal: () => dispatch(closeModal()),
        fetchFollows: () => dispatch(fetchFollows()) 
    };
};

export default connect(mSTP, mDTP)(Profile);
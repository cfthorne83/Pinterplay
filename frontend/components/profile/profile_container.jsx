import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchFollows } from '../../actions/follow_actions';


import Profile from './profile';

const mSTP = (state, ownProps) => {
    let followers = [];
    let following = [];
    if (state.entities.follows.followers && state.entities.follows.following){
        followers = Object.values(state.entities.follows.followers);
        following = Object.values(state.entities.follows.following);
    } else if (state.entities.follows.followers && !state.entities.follows.following) {
        followers = Object.values(state.entities.follows.followers);
    } else if (state.entities.follows.following && !state.entities.follows.followers) {
        following = Object.values(state.entities.follows.following);
    }

    return {
        currentUser: state.entities.users[state.session.id],
        lastBoard: Object.values(state.entities.boards)[0],
        following: following,
        followers: followers
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        // fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        closeModal: () => dispatch(closeModal()),
        fetchFollows: () => dispatch(fetchFollows()),
        fetchUsers: () => dispatch(fetchUsers()) 
    };
};

export default connect(mSTP, mDTP)(Profile);
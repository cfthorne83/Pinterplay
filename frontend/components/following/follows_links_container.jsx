import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchFollows } from '../../actions/follow_actions';

import FollowLinks from './follows_links';

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
        user: ownProps.user,
        following: following,
        followers: followers
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        // fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: (modal, options) => dispatch(openModal(modal, options)),
        closeModal: () => dispatch(closeModal()),
        fetchFollows: (data) => dispatch(fetchFollows(data)),
        // fetchUsers: () => dispatch(fetchUsers()) 
    };
};

export default connect(mSTP, mDTP)(FollowLinks);
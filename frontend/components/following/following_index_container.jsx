import { connect } from "react-redux";

import Following from "./following_index";

// import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import {createFollow, fetchFollows,
    deleteFollow
} from '../../actions/follow_actions';
// import { deleteFollow } from "../../util/follow_api_util";

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    let following = [];
    if (state.entities.follows.following){
        following = Object.values(state.entities.follows.following);
    }
    return {
        // following: state.ui.modal.options,
        following: following,
        currentUser: currentUser,
        // user: state.entities.users[ownProps.match.params.userId]
        // user: s1tate.ui.modal.options
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal()),
        deleteFollow: (friendship, followId) => dispatch(deleteFollow(friendship, followId)),
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchFollows: () => dispatch(fetchFollows()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(msp, mdp)(Following);
import { connect } from "react-redux";

import Followers from "./followers_index";
import { closeModal } from "../../actions/modal_actions";
import {createFollow, fetchFollows,
    deleteFollow
} from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    return {
        // followers: state.ui.modal.options
        // followers: state.entities.users[state.sesssion.id].followers
        followers: Object.values(state.entities.follows.followers),
        following: Object.values(state.entities.follows.following),
        // currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal()),
        deleteFollow: (friendship, followId) => dispatch(deleteFollow(friendship, followId)),
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(Followers);
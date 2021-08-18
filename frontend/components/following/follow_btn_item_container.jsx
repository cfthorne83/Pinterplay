import { connect } from "react-redux";

import FollowBtnItem from "./follow_btn_item";
// import { closeModal } from "../../actions/modal_actions";
import {createFollow, fetchFollows,
    deleteFollow
} from '../../actions/follow_actions';

const msp = (state, ownProps) => {
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
        // followers: state.ui.modal.options
        // followers: state.entities.users[state.sesssion.id].followers
        followers: followers,
        following: following,
        currentUser: state.entities.users[state.session.id],
        user: ownProps.user
        // followIds: following.map(follow => (follow.id)) 
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        deleteFollow: (friendship, followId) => dispatch(deleteFollow(friendship, followId)),
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(FollowBtnItem);
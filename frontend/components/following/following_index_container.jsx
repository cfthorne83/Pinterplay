import { connect } from "react-redux";

import Following from "./following_index";

// import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser } from '../../actions/user_actions';
import {createFollow, deleteFollow, fetchFollows, receiveFollow } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    let following = null;
    const currentUser = state.entities.users[state.session.id];
    if (state.entities.follows){
        debugger
        following = Object.values(state.entities.follows);
    }
    debugger
    return {
        // following: state.ui.modal.options,
        following: following,
        currentUser: currentUser
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal()),
        // deleteFollow: (friendship) => {
        //     return (
        //         $.ajax ({
        //             url: "/api/friendships",
        //             method: "POST",
        //             data: {
        //                 friendship
        //             }
        //         })
        //     )
        // },
        deleteFollow: (friendship) => dispatch(createFollow(friendship)),
        createFollow: (friendship) => dispatch(deleteFollow(friendship)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(Following);
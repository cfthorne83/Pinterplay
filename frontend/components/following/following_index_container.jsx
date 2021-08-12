import { connect } from "react-redux";

import Following from "./following_index";

// import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser } from '../../actions/user_actions';
import {createFollow, deleteFollow, fetchFollows } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    // if (state.entities.follows){
    //     following = Object.values(state.entities.follows);
    // }
    return {
        // following: state.ui.modal.options,
        following: Object.values(state.entities.follows),
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
        deleteFollow: (friendship, i) => dispatch(deleteFollow(friendship, i)),
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(Following);
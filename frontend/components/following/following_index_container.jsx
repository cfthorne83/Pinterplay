import { connect } from "react-redux";

import Following from "./following_index";

// import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { closeModal } from "../../actions/modal_actions";
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return {
        // following: state.ui.modal.options,
        following: currentUser.following,
        currentUser: currentUser
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        closeModal: () => dispatch(closeModal()),
        deleteFollow: (friendship) => {
            return (
                $.ajax ({
                    url: "/api/friendships",
                    method: "POST",
                    data: {
                        friendship
                    }
                })
            )
        },
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(msp, mdp)(Following);
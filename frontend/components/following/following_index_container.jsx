import { connect } from "react-redux";

import Following from "./following_index";

// import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
    return {
        following: state.ui.modal.options,
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch, ownProps) => {
    // $.ajax ({
    //                 url: "/api/friendships",
    //                 method: "POST",
    //                 data: {
    //                     follower_id: this.props.currentUser.id,
    //                     followed_id: this.props.pin.user.id
    //                 }
    //             })
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
        }
    }
}

export default connect(msp, mdp)(Following);
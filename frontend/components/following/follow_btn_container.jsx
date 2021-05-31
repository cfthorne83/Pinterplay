import { connect } from "react-redux";

import FollowBtn from "./follow_btn";
import { createFollow, deleteFollow } from "../../actions/follow_actions";

const msp = (state, ownProps) => {
    return {
        friendship: {follower_id: state.session.id, followed_id: ownProps.pin.user.id},
        pin: ownProps.pin,
        currentUser: ownProps.currentUser,
        followers: ownProps.pin.followers.length
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        deleteFollow: (friendship) => dispatch(deleteFollow(friendship))
    }
}

export default connect(msp, mdp)(FollowBtn);
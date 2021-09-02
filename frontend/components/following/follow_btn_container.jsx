import { connect } from "react-redux";

import FollowBtn from "./follow_btn";
import { createFollow, deleteFollow, fetchFollows} from "../../actions/follow_actions";

const msp = (state, ownProps) => {
    debugger
    if (ownProps.pin){
        let pin = ownProps.pin;
        followers: ownProps.pin.followers.length
        followIds: ownProps.currentUser.following.map( follow => {
            return follow.id
        })
    }
    return {
        // friendship: {follower_id: state.session.id, followed_id: ownProps.pin.user.id},
        friendship: {follower_id: state.session.id, followed_id: ownProps.pin.user.id},
        // follower_id: state.sesssion.id,
        // followed_id: ownProps.pin.user.id,
        pin: ownProps.pin,
        currentUser: ownProps.currentUser,
        followers: ownProps.pin.followers.length,
        followIds: ownProps.currentUser.following.map( follow => {
            return follow.id
        })
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        deleteFollow: (friendship) => dispatch(deleteFollow(friendship)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(FollowBtn);
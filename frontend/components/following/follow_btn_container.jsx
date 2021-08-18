import { connect } from "react-redux";

import FollowBtn from "./follow_btn";
import { createFollow, deleteFollow, fetchFollows} from "../../actions/follow_actions";

const msp = (state, ownProps) => {
    let pin;
    let followers;
    let followed_id;
    if (ownProps.pin){
        pin = ownProps.pin;
        followers = ownProps.pin.followers.length;
        followed_id = ownProps.pin.user.id
    }

    return {
        // friendship: {follower_id: state.session.id, followed_id: ownProps.pin.user.id},
        friendship: { follower_id: state.session.id, followed_id: followed_id },
        // follower_id: state.sesssion.id,
        // followed_id: ownProps.pin.user.id,
        pin: pin,
        currentUser: ownProps.currentUser,
        followers: followers,
        followIds: ownProps.currentUser.following.map( follow => {
            return follow.id
        })
    }
}

const mdp = (dispatch, ownProps) => {
    return  {
        createFollow: (friendship) => dispatch(createFollow(friendship)),
        deleteFollow: (friendship, followId) => dispatch(deleteFollow(friendship, followId)),
        fetchFollows: () => dispatch(fetchFollows())
    }
}

export default connect(msp, mdp)(FollowBtn);
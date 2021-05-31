import React from "react";

class FollowBtn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.friendship;

        this.followBtn = this.followBtn.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }
    
    followBtn() {
        const followIds = this.props.currentUser.following.map( follow => {
            return follow.id
        })
        if (this.props.pin.user && this.props.pin.user.id !== this.props.currentUser.id) {
            if (followIds.includes(this.props.pin.user.id)){
                return <button onClick={this.handleUnfollow}>Unfollow</button>
            } else {
                return <button onClick={this.handleFollow}>Follow</button>
            }
        }
    }

    handleFollow() {
        // $.ajax ({
        //             url: "/api/friendships",
        //             method: "POST",
        //             data: {
        //                 follower_id: this.props.currentUser.id,
        //                 followed_id: this.props.pin.user.id
        //             }
        //         })
        // this.props.createFollow(this.props.currentUser.id, this.props.pin.user.id);
        this.props.createFollow(this.state);
    }

    handleUnfollow() {
        // const that = this;
        // $.ajax ({
        //             url: "/api/friendships",
        //             method: "DELETE",
        //             data: that.state
        //         })
        this.props.deleteFollow(this.state)
    }

    render() {
        return (
            <div>
                {this.followBtn()}
            </div>
        )
    }
}

export default FollowBtn;
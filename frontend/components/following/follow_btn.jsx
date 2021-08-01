import React from "react";

class FollowBtn extends React.Component {
    constructor(props) {
        super(props);
        
        const followIds = this.props.currentUser.following.map( follow => {
            return follow.id
        })
        
        // this.state = { followers: this.props.followers, followIds: followIds }
        this.state = { friendship: this.props.friendship, followers: this.props.followers, followIds: followIds}

        this.followBtn = this.followBtn.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.userDisplay = this.userDisplay.bind(this);
    }
    

    userDisplay() {
        if (this.props.pin && this.props.pin.user && this.props.pin.user.fname && this.props.pin.user.lname){
            return (
                <h2>{this.props.pin.user.fname}&nbsp;{this.props.pin.user.lname}</h2>
            )
        } else if (this.props.pin && this.props.pin.user && this.props.pin.user.username){
            return (
                <h2>{this.props.pin.user.username}</h2>
            )
        } else if (this.props.pin && this.props.pin.user) {
            return (
                <h2>{this.props.pin.user.email}</h2>
            )
        }
    }
    
    followBtn() {
        if (this.props.pin.user && this.props.pin.user.id !== this.props.currentUser.id) {
            if (this.state.followIds.includes(this.props.pin.user.id)){
                return <button onClick={this.handleUnfollow}>Unfollow</button>
            } else {
                return <button onClick={this.handleFollow}>Follow</button>
            }
        }
    }

    handleFollow() {
        $.ajax ({
                    url: "/api/friendships",
                    method: "POST",
                    data: {
                        follower_id: this.props.currentUser.id,
                        followed_id: this.props.pin.user.id
                    }
                }).then(this.setState({ 
                                        followIds: this.state.followIds.concat([this.props.pin.user.id]),
                                        followers: this.state.followers + 1
                                    }))
        // this.props.createFollow(this.state.friendship);
    }

    handleUnfollow() {
        $.ajax ({
                    url: "/api/friendships",
                    method: "DELETE",
                    data: {
                        follower_id: this.props.currentUser.id,
                        followed_id: this.props.pin.user.id
                    }
                }).then(this.setState({ 
                                        followIds: this.props.currentUser.following.map( follow => {
                                            return follow.id
                                        }),
                                        followers: this.state.followers - 1
                                    })
                        )
        // this.props.deleteFollow(this.state.friendship).then(this.setState({ 
        //                                 followIds: this.props.currentUser.following.map( follow => {
        //                                     return follow.id
        //                                 }),
        //                                 followers: this.state.followers - 1
        //                             })
        //                 )
    }

    displayFollow() {
        if (this.props.pin.followers.length === 1){
            return (
                <span>follower</span>
            )
        } else {
            return (
                <span>followers</span>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="pin-show__follow">
                    {this.userDisplay()}
                    {this.followBtn()}
                </div>
                <h3>{this.state.followers}&nbsp;{this.displayFollow()}</h3>

            </div>
        )
    }
}

export default FollowBtn;
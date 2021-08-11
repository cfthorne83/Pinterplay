import React from "react";

const Following = (props) => {
    const follows = props.following.map( follow => {
        debugger
        return (
                <li>
                    <span>      
                        {follow.username}
                    </span>                    
                    <button onClick={ () => ($.ajax ({
                                                        url: "/api/friendships",
                                                        method: "DELETE",
                                                        data: {
                                                            follower_id: props.currentUser.id,
                                                            followed_id: follow.id
                                                        }
                                                    })
                                            )
                                    }
                    >Unfollow</button>
                </li>
        )
    })
    return (
        <div className="following-index">
            <h1>Following</h1>
            <ul>
                {follows}
            </ul>
        </div>
    )
}

export default Following;

// handleFollow() {
//         $.ajax ({
//                     url: "/api/friendships",
//                     method: "POST",
//                     data: {
//                         follower_id: this.props.currentUser.id,
//                         followed_id: this.props.pin.user.id
//                     }
//                 })
                
//         // this.props.createFollow(this.state.friendship)
//                 .then(this.setState({ 
//                                         followIds: this.state.followIds.concat([this.props.pin.user.id]),
//                                         followers: this.state.followers + 1
//                                     }))
//     }
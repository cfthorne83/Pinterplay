import React from "react";
import { fetchBoards } from "../../actions/board_actions";

class Following extends React.Component {
    constructor(props){
        super(props);

        this.state = { following: this.props.following.map((follow, i) => {
             return follow.username;
        })};

        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    // componentDidUpdate(){
    //     debugger
    //     this.props.fetchUser(this.props.currentUser.id);
    // }

    handleUnfollow(e, friendship, i){
        e.stopPropagation();
         $.ajax ({
                    url: "/api/friendships",
                    method: "DELETE",
                    data: friendship
                })
                .then(this.props.fetchUser(this.props.currentUser.id))
        
    }

    updateState(){
        let following = this.state.following;
        following = following.splice(i, 1);
        this.setState({following: following});
    }



    render() {
        if (!this.props.following) return null;
        const follows = this.state.following.map( (follow, i) => {
            return (
                <li key={i}>
                    <span>      
                        {/* {follow.username} */}
                        {/* {this.state.following[i]} */}
                        {follow}
                    </span>                    
                    {/* <button onClick={(e) => {this.handleUnfollow(e, {
                            follower_id: this.props.currentUser.id,
                            followed_id: follow.id
                        }, i)
                    }}
                    >Unfollow
                    </button> */}
                </li>
        )
    })
    debugger
    
    return (
        <div className="following-index">
            <h1>Following</h1>
            <ul>
                {follows}
            </ul>
        </div>
    )
    }

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
import React from "react";
import { fetchBoards } from "../../actions/board_actions";

class Following extends React.Component {
    constructor(props){
        super(props);

        this.state = { length: this.props.following.length};

        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    componentDidUpdate(){
        debugger
    }

    handleUnfollow(friendship){
         $.ajax ({
                    url: "/api/friendships",
                    method: "DELETE",
                    data: friendship
                });
        
        // this.state.length
    }



    render() {
        const follows = this.props.following.map( follow => {
            return (
                <li key={follow.id}>
                    <span>      
                        {follow.username}
                    </span>                    
                    <button onClick={this.handleUnfollow({
                            follower_id: this.props.currentUser.id,
                            followed_id: follow.id
                        })
                    }
                    >Unfollow
                    </button>
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
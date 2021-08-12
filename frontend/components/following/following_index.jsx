import React from "react";
import { fetchBoards } from "../../actions/board_actions";

class Following extends React.Component {
    constructor(props){
        super(props);

        this.state = { following: this.props.following.map((follow, i) => {
             return [follow.username, follow.id];
        })};

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){
        
    }
    // componentDidUpdate(){
    //     this.props.fetchUser(this.props.currentUser.id);
    // }

    handleUnfollow(e, friendship, i){
        e.stopPropagation();
         $.ajax ({
                    url: "/api/friendships",
                    method: "DELETE",
                    data: friendship
                })
        // this.props.deleteFollow({follower_id: this.props.currentUser.id, follower_id:  })
                // .then(this.updateState(i))
                // .then(this.props.fetchUser(this.props.currentUser.id))
        
    }

    updateState(i){
        console.log(this.state);
        let following = this.state.following;
        following = following.splice(i, 1);
        this.setState({following: following});
        console.log(this.state);
    }

    followBtn(followId, i) {
        const followIds = this.state.following.map( follow => {
            return follow[1];
        });
        // if (this.props.pin.user && this.props.pin.user.id !== this.props.currentUser.id) {
            if (followIds.includes(followId)){
    
            return (
                    <button onClick={(e) => {this.handleUnfollow(e, {
                            follower_id: this.props.currentUser.id,
                            followed_id: followId
                        }, i)
                    }}
                    >Unfollow
                    </button>
                )
            } else {
    
                return <button >Follow</button>
            }
        
    }



    render() {
        if (!this.props.following) return null;
        const follows = this.state.following.map( (follow, i) => {
            return (
                <li key={i}>
                    <span>      
                        {/* {follow.username} */}
                        {/* {this.state.following[i]} */}
                        {follow[0]}
                    </span>
                    {this.followBtn(follow[1], i)}                    
                    {/* <button onClick={(e) => {this.handleUnfollow(e, {
                            follower_id: this.props.currentUser.id,
                            followed_id: follow[1]
                        }, i)
                    }}
                    >Unfollow
                    </button> */}
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
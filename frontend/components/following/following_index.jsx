import React from "react";
import { fetchBoards } from "../../actions/board_actions";

class Following extends React.Component {
    constructor(props){
        super(props);

        // this.state = { following: this.props.following.map((follow, i) => {
        //      return [follow.username, follow.id];
        // })};
        this.state = {following: this.props.following, mounted: false};

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){
        
        this.props.fetchFollows().then(this.setState({mounted: true}));
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

    followBtn() {
        return (
            <button>Unfollow</button>
        )
        
    }



    render() {
        
        if (!this.state.mounted) return null;
        
        const follows = this.state.following.map( (follow, i) => {
            return (
                <li>
                    <span>
                        {follow.username}
                    </span>
                    {this.followBtn()}
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
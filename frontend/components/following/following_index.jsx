import React from "react";
import { fetchBoards } from "../../actions/board_actions";

class Following extends React.Component {
    constructor(props){
        super(props);

        // this.state = { following: this.props.following.map((follow, i) => {
        //      return [follow.username, follow.id];
        // })};
        this.state = {following: this.props.following};

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchFollows().then(this.setState({mounted: true}));
    // }
    componentDidUpdate(){
        debugger
        // this.props.fetchUser(this.props.currentUser.id);
    }

    handleUnfollow(e, followId){
        e.stopPropagation();
        //  $.ajax ({
        //             url: "/api/friendships",
        //             method: "DELETE",
        //             data: 
        //         })
        // this.props.deleteFollow({follower_id: this.props.currentUser.id, follower_id:  })
                // .then(this.updateState(i))
                // .then(this.props.fetchUser(this.props.currentUser.id))
        this.props.deleteFollow({follower_id: this.props.currentUser.id, followed_id: followId }, followId);
        
    }

    updateState(i){
        console.log(this.state);
        let following = this.state.following;
        following = following.splice(i, 1);
        this.setState({following: following});
        console.log(this.state);
    }

    followBtn(followId) {
        return (
            <button
                onClick={ (e) => {this.handleUnfollow(e, followId)}}>
                Unfollow
            </button>
        )
        
    }



    render() {
        
        const follows = this.state.following.map( (follow, i) => {
            return (
                <li key={follow.id}>
                    <span>
                        {follow.username}
                    </span>
                    {this.followBtn(follow.id)}
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
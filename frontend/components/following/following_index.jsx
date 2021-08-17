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
    componentDidUpdate(prevProps){
        // this.props.fetchUser(this.props.currentUser.id);
        // this.props.fetchFollows();
        if (this.props.following != this.state.following){
            this.setState({
                following: this.props.following
            })
        }
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
        this.props.deleteFollow({follower_id: this.props.currentUser.id, followed_id: followId }, followId)
            .then(this.props.fetchFollows());
        
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
            <button className="following-index__unfollow-btn"
                onClick={ (e) => {this.handleUnfollow(e, followId)}}>
                Unfollow
            </button>
        )
        
    }

    profilePic(follow) {
        if (follow.image_url) {
            return (
                    <img className="following-index__pic" src={follow.image_url} alt=""/>
            )
        } else {
            return (
                <div className="following-index__initial-con">
                    <h3 id='folowing-index__initial'>
                        {follow.email[0].toUpperCase()}
                    </h3>
                </div>
            )
        }
    }



    render() {

        let follows;
        if (this.state.following.length > 0){

            follows = this.state.following.map( (follow, i) => {
                return (
                    <li key={follow.id}>
                        <span className="following-index__image-name">
                            {this.profilePic(follow)}
                            <span>
                                {follow.username}
                            </span>
                        </span>
                        {this.followBtn(follow.id)}
                    </li>
                )
            })
        } else {
            follows = <h2>You are not following anyone...</h2>
        }
    
    
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
import React from "react";
import { Link } from 'react-router-dom';

class FollowBtnItem extends React.Component {
    constructor(props){
        super(props);
        this.state = { following: this.props.following,
            followers: this.props.followers }

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleUnfollow(e, followId){
        e.stopPropagation();
        this.props.deleteFollow({follower_id: this.props.currentUser.id, followed_id: followId }, followId)
            .then(this.props.fetchUsers());
            // .then(this.props.fetchFollows());
        
    }

    handleFollow(e, followId){
        e.stopPropagation();
        this.props.createFollow({follower_id: this.props.currentUser.id, followed_id: followId })
            .then(this.props.fetchUsers());
            // .then(this.props.fetchFollows());
    }

    followBtn(follower) {
        const followingIds = this.props.following.map(follow => { return follow.id });
                // if(this.state.followIds.includes(follower.id)){
                    
                if(followingIds.includes(follower.id)){
                    return (
                        <button className="unfollow-btn-item"
                            onClick={ (e) => {this.handleUnfollow(e, follower.id)}}
                            >
                            Unfollow
                        </button>
                    )
                }else if(!followingIds.includes(follower.id)){
                    return(
                        <button className="follow-btn-item"
                            onClick={ (e) => {this.handleFollow(e, follower.id)}}
                            >Follow
                        </button>
                    )
                }
    }

    render(){
     
        return (
            <div >
                {this.followBtn(this.props.user)}
            </div>
        )
    }
}


export default FollowBtnItem;
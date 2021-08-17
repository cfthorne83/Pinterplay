import React from "react";
import { Link } from 'react-router-dom';

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = { following: this.props.following,
            followers: this.props.followers, 
            followIds: this.props.followIds }

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleUnfollow(e, followId){
        e.stopPropagation();
        this.props.deleteFollow({follower_id: this.props.currentUser.id, followed_id: followId }, followId)
            .then(this.props.fetchFollows());
        
    }

    handleFollow(e, followId){
        e.stopPropagation();
        this.props.createFollow({follower_id: this.props.currentUser.id, followed_id: followId })
            .then(this.props.fetchFollows());
    }

    followBtn(follower) {
        const followingIds = this.props.following.map(follow => { return follow.id });
                // if(this.state.followIds.includes(follower.id)){
                if(followingIds.includes(follower.id)){
                    return (
                        <button className="following-index__unfollow-btn"
                            onClick={ (e) => {this.handleUnfollow(e, follower.id)}}
                            >
                            Unfollow
                        </button>
                    )
                }else if(!followingIds.includes(follower.id)){
                    return(
                        <button className="following-index__follow-btn"
                            onClick={ (e) => {this.handleFollow(e, follower.id)}}
                            >Follow
                        </button>
                    )
                }
    }

    profilePic(follower) {
        if (follower.image_url) {
            return (
                    <img className="following-index__pic" src={follower.image_url} alt=""/>
            )
        } else {
            return (
                <div className="following-index__initial-con">
                    <h3 id='folowing-index__initial'>
                        {follower.email[0].toUpperCase()}
                    </h3>
                </div>
            )
        }
    }

    render(){
        
        const followers = this.props.followers.map( follower => {

            return (
                    <li>
                        <Link to={`/users/${follower.id}/browse`}>
                        {/* <Link to="/"> */}
                            <span className="following-index__image-name">
                                {this.profilePic(follower)}
                                <span>
                                    {follower.username}
                                </span>
                            </span>
                        </Link>
                        {this.followBtn(follower)}
                    </li>
            )
        })

        return (
            <div className="following-index">
                <h1>Followers</h1>
                <ul>
                    {followers}
                </ul>
            </div>
        )
    }
}


export default Followers;
import React from "react";

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = { following: this.props.following,
            followers: this.props.followers, 
            followIds: this.props.following.map(follow => (follow.id)) }

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidUpdate(){
        if ( (this.props.following != this.state.following) || (this.props.followers != this.state.followers) ){
            this.props.fetchFollows()
            .then(
                this.setState({following: this.props.following, 
                                followers: this.props.followers,
                                followIds: this.props.following.map(follow => (follow.id))})
            )
        }
    }

    // componentDidMount(){
    //     this.props.fetchFollows();
    // }

    handleUnfollow(e, followId){
        e.stopPropagation();
        this.props.deleteFollow({follower_id: this.props.currentUser.id, followed_id: followId }, followId)
            .then(this.props.fetchFollows());
        
    }

    handleFollow(e, followId){
        e.stopPropagation();
        debugger
        this.props.createFollow({follower_id: this.props.currentUser.id, followed_id: followId })
            .then(this.props.fetchFollows());
        
    }

    followBtn(follower) {
                if(this.state.followIds.includes(follower.id)){
                    return (
                        <button
                            onClick={ (e) => {this.handleUnfollow(e, follower.id)}}
                            >
                            Unfollow
                        </button>
                    )
                }else if(!this.state.followIds.includes(follower.id)){
                    return(
                        <button
                            onClick={ (e) => {this.handleFollow(e, follower.id)}}
                            >Follow
                        </button>
                    )
                }
    }

    render(){
        
        const followers = this.state.followers.map( follower => {

            return (
                    <li>
                        <h2>
                            {follower.username}
                        </h2>
                        {this.followBtn(follower)}
                    </li>
            )
        })
        const followersTwo = this.state.followers.map( follower => {

            return (
                    <li>
                        <h3>
                            {follower.username}
                        </h3>
                    </li>
            )
        })
        const following = this.state.following.map( follower => {

            return (
                    <li>
                        <h3>
                            {follower.username}
                        </h3>
                        {/* {this.followBtn(follower)} */}
                    </li>
            )
        })
        debugger

        return (
            <div className="following-index">
                <h1>{this.state.followers.length} Followers</h1>
                <ul>
                    {followers}
                </ul>
                <ul>
                    <h2>Following</h2>
                    {following}

                </ul>
            </div>
        )
    }
}


export default Followers;
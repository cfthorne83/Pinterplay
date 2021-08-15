import React from "react";

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = { followIds: this.props.following.map(follow => (follow.id)) }

    }

    followBtn(follower) {
                if(this.state.followIds.includes(follower.id)){
                    return (
                        <button>unfollow</button>
                    )
                }else if(!this.state.followIds.includes(follower.id)){
                    return(
                        <button>follow</button>
                    )
                }
    }

    render(){
        const followers = this.props.followers.map( follower => {

            return (
                    <li>
                        <h2>
                            {follower.username}
                        </h2>
                        {this.followBtn(follower)}
                    </li>
            )
        })
        const following = this.props.following.map( follower => {

            return (
                    <li>
                        <h2>
                            {follower.username}
                        </h2>
                        {/* {this.followBtn(follower)} */}
                    </li>
            )
        })

        return (
            <div className="following-index">
                <h1>{this.props.followers.length} Followers</h1>
                <ul>
                    {followers}
                    {/* {following} */}
                </ul>
            </div>
        )
    }
}


export default Followers;
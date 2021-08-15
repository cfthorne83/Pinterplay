import React from "react";

class Followers extends React.Component {
    constructor(props){
        super(props);
        this.state = { following: this.props.following }

    }

    followBtn() {
                // debugger
                if(this.props.following.includes(follower)){
                    return (
                        <button>unfollow</button>
                    )
                }else {
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
                        {followBtn()}
                    </li>
            )
        })

        return (
            <div className="following-index">
                <h1>{this.props.followers.length} Followers</h1>
                <ul>
                    {followers}
                </ul>
            </div>
        )
    }
}


export default Followers;
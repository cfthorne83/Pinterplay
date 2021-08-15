import React from "react";

class Followers extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
    // debugger
        const followers = this.props.followers.map( follower => {
            return (
                    <li>
                        <h2>
                            {follower.username}
                        </h2>
                        <button>unfollow</button>
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
import React from "react";

const Followers = (props) => {
    const followers = props.followers.map( follower => {
        return (
                <li>{follower.username}</li>
        )
    })
    return (
        <div className="followers-index">
            <h1>{props.followers.length} Followers</h1>
            <ul>
                {followers}
            </ul>
        </div>
    )
}

export default Followers;
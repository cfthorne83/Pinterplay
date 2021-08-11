import React from "react";

const Following = (props) => {
    const follows = props.following.map( follow => {
        return (
                <li>
                    <span>      
                        {follow.username}
                    </span>                    
                    <button>Unfollow</button>
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

export default Following;
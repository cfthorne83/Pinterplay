import React from "react";

class Followers extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
    debugger
        // const followers = this.props.followers.map( follower => {
        //     return (
        //             <li>{follower.username}</li>
        //     )
        // })

        return (
            <div className="followers-index">
                <h1>{props.followers.length} Followers</h1>
                <ul>
                    {followers}
                </ul>
            </div>
        )
    }
}


export default Followers;
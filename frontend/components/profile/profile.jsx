import React from 'react'
import { Redirect } from 'react-router-dom';

class Profile extends React.Component{


    render() {

        if (this.props.currentUser) {
            return <h1>Profile Page</h1>
        } else {
            return <Redirect to='/'/>
        }
    }
}

export default Profile;
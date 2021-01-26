import React from 'react'
import { Redirect } from 'react-router-dom';

import BoardIndexContainer from '../boards/board_index_container';

class Profile extends React.Component{


    render() {

        if (this.props.currentUser) {
            return <BoardIndexContainer />
            // return <h1>Profile Page</h1>
        } else {
            return <Redirect to='/'/>
        }
    }
}

export default Profile;
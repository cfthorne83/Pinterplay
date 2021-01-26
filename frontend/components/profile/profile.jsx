import React from 'react'
import { Redirect } from 'react-router-dom';

import BoardIndexContainer from '../boards/board_index_container';

class Profile extends React.Component{


    render() {

        if (!this.props.currentUser) {
            return <Redirect to='/'/>
        } 
            
        return (
            <div>
                
                {/* <button onClick={() => this.props.openModal('createBoard')}>+</button> */}
                <BoardIndexContainer />
            </div>

        )

        
    }
}

export default Profile;
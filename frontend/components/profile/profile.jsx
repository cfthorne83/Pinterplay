import React from 'react'
import { Redirect } from 'react-router-dom';

import BoardIndexContainer from '../boards/board_index_container';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.props.openModal('createBoard');
    }

    render() {
        if (!this.props.currentUser) {
            return <Redirect to='/'/>
        } 
            
        return (
            <div className='profile-page'>
                <section className='heading'>
                    <h1 className='initial-container'>
                        <p>{this.props.currentUser.email[0].toUpperCase()}</p>
                    </h1>
                    <h2>{this.props.currentUser.email}</h2>
                </section>
                <section className='mid'>
                    <div className='create-button-container'>
                        <button onClick={this.handleSubmit}>+</button>
                    </div>
                </section>
                <BoardIndexContainer />
            </div>

        );   
    }
}

export default Profile;
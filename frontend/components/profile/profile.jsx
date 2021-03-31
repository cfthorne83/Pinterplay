import React from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import BoardIndexContainer from '../boards/board_index_container';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
    }

    handleSubmit(e){
        this.props.openModal('createBoard');
    }

    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    name() {
        if (this.state.fname && this.state.lname) {
            return (
                <h2>
                    {this.capitalize(this.state.fname)}&nbsp;
                    {this.capitalize(this.state.lname)}
                </h2>
            )
        } else {
            return (
                <h2>{this.state.email}</h2>
            )
        }
    }

    image() {
        if (this.state.image_url) {
            return (
                <img src={this.state.image_url} alt="profile-image"/>
            )
        } else {
            return (
                <h1 className='initial-container'>
                    <p>{currentUser.email[0].toUpperCase()}</p>
                </h1>
            )
        }
    }


    render() {

        const { currentUser } = this.props;
        
        if (!this.props.currentUser) {
            return <Redirect to='/'/>
        } 
            
        return (
            <div className='profile-page'>

                <section className='heading'>
                    {/* <h1 className='initial-container'>
                        <p>{currentUser.email[0].toUpperCase()}</p>
                    </h1> */}
                    {this.image()}
                    {this.name()}
                    <h3>@{currentUser.username}</h3>
                </section>

                <section className='mid'>
                    <Link to={`/users/${currentUser.id}/settings`}>Edit Profile</Link>
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
import React from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import BoardIndexContainer from '../boards/board_index_container';

// import { editIcon } from "../../../app/assets/images/edit_pen.png";
// import { editIcon } from "./edit_pen.png";
// import { sky } from "./sky2.jpg";

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
        this.username = this.username.bind(this);
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

    username() {
        if (this.state.username){
            return (
                <h3>@{this.state.username}</h3>
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
                    {this.image()}
                    {this.name()}
                    {this.username()}
                </section>

                <section className='mid'>
                    
                    <img src="/images/edit_pen.png" alt=""/>
                    <Link to={`/users/${currentUser.id}/settings`}>Edit Profile</Link>
                        <button 
                            className='create-button'
                            onClick={this.handleSubmit}>
                                +
                        </button>
                </section>
                
                <BoardIndexContainer />
            </div>

        );   
    }
}

export default Profile;
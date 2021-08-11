import React from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import BoardIndexContainer from '../boards/board_index_container';
import CreateDropdown from "../dropdowns/create_board_pin_dropdown";

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
        this.username = this.username.bind(this);
        this.followers = this.followers.bind(this);
        this.handleFollowers = this.handleFollowers.bind(this);
        this.handleFollowing = this.handleFollowing.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
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
                    <p>{this.props.currentUser.email[0].toUpperCase()}</p>
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

    handleFollowers() {
        console.log("followers");
        this.props.openModal("followers", this.props.currentUser.followers);
    }

    handleFollowing() {
        console.log("following");
        this.props.openModal("following", this.props.currentUser.following);
    }

    followers() {
        if (this.props.currentUser.followers.length == 1){
            return (
                    <h4>
                        <span
                            onClick={this.handleFollowers}>
                            {this.props.currentUser.followers.length} follower |&nbsp;
                        </span>
                        <span
                            onClick={this.handleFollowing}>
                            {this.props.currentUser.following.length} following
                        </span>
                    </h4>
            )
        } else {
            return (
                    <h4>
                        <span
                            onClick={this.handleFollowers}>
                            {this.props.currentUser.followers.length} followers |&nbsp;
                        </span>
                        <span
                            onClick={this.handleFollowing}>
                            {this.props.currentUser.following.length} following
                        </span>
                    </h4>
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
                    {this.followers()}
                </section>

                <section className='mid'>
                    <div className="edit-link">
                        <Link to={`/users/${currentUser.id}/settings`}>
                            <img src="/images/edit_pen.png" alt=""/>
                        </Link>
                    </div>

                    <CreateDropdown 
                        className="board-pin-drop"
                        openModal={this.props.openModal}
                        board={this.props.lastBoard}
                    />
                </section>
                <BoardIndexContainer currentUser={this.props.currentUser}/>
            </div>

        );   
    }
}

export default Profile;
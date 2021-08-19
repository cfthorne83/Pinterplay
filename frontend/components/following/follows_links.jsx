import React from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import BoardIndexContainer from '../boards/board_index_container';
import CreateDropdown from "../dropdowns/create_board_pin_dropdown";

class FollowLinks extends React.Component{
    constructor(props){
        super(props);

        this.state = {user: this.props.user, following: this.props.following, followers: this.props.followers};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
        this.username = this.username.bind(this);
        this.followers = this.followers.bind(this);
        this.handleFollowers = this.handleFollowers.bind(this);
        this.handleFollowing = this.handleFollowing.bind(this);
    }

    componentDidUpdate(prevProps){
        // if ((this.state.following != this.props.following) || (this.state.followers != this.props.followers)){
        //     this.setState({ following: this.props.following, followers: this.props.following  })
        // }
        // if(this.props.following != prevProps.following){
        //     // debugger
        //     this.props.fetchFollows({userId: this.props.user.id});
        // }
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.currentUser.id);
        // this.props.fetchUsers();
        this.props.fetchFollows({userId: this.props.user.id});
    }

    handleSubmit(e){
        this.props.openModal('createBoard');
    }

    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    name() {
        if (this.state.currentUser.fname && this.state.currentUser.lname) {
            return (
                <h2>
                    {this.capitalize(this.state.currentUser.fname)}&nbsp;
                    {this.capitalize(this.state.currentUser.lname)}
                </h2>
            )
        } else {
            return (
                <h2>{this.state.currentUser.email}</h2>
            )
        }
    }

    image() {
        if (this.state.currentUser.image_url) {
            return (
                <img src={this.state.currentUser.image_url} alt="profile-image"/>
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
        if (this.state.currentUser.username){
            return (
                <h3>@{this.state.currentUser.username}</h3>
            )
        }
    }

    handleFollowers() {
        this.props.openModal("followers", this.props.followers);
    }

    handleFollowing() {
        this.props.openModal("following", this.props.following);
    }

    followers() {
        if (this.props.followers.length == 1){
            return (
                    <h4>
                        <span
                            onClick={this.handleFollowers}>
                            {this.props.followers.length} follower |&nbsp;
                        </span>
                        <span
                            onClick={this.handleFollowing}>
                            {this.props.following.length} following
                        </span>
                    </h4>
            )
        } else {
            return (
                    <h4>
                        <span
                            onClick={this.handleFollowers}>
                            {/* {this.props.currentUser.followers.length} followers |&nbsp; */}
                            {this.props.followers.length} followers |&nbsp;
                        </span>
                        <span
                            onClick={this.handleFollowing}>
                            {/* {this.state.following.length} following */}
                            {this.props.following.length} following
                        </span>
                    </h4>
            )
        }
    }

    render() {

        const { user } = this.props;
        
        if (!this.props.user) {
            return <Redirect to='/'/>
        } 
            
        return (
            <div className='profile-page'>
                    {this.followers()}
                    {/* follow links */}
            </div>

        );   
    }
}

export default FollowLinks;
import React from 'react'
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import BoardIndexContainer from '../boards/board_index_container';
import CreateDropdown from "../dropdowns/create_board_pin_dropdown";
import PinIndexContainer from "../pins/pin_index_container";
import FollowBtnItemContainer from "../following/follow_btn_item_container";
import FollowLinksContainer from "../following/follows_links_container";

class BrowseProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {user: this.props.user, 
            // following: this.props.following, followers: this.props.followers
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
        this.username = this.username.bind(this);
        // this.followers = this.followers.bind(this);
        // this.handleFollowers = this.handleFollowers.bind(this);
        // this.handleFollowing = this.handleFollowing.bind(this);
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.user.id != prevProps.user.id){
    //         // debugger
    //         // this.props.fetchUsers();
    //     }
    // }

    componentDidMount() {
        this.props.fetchUsers();
    }

    capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    name() {
        if (this.props.user.fname && this.props.user.lname) {
            return (
                <h2>
                    {this.capitalize(this.props.user.fname)}&nbsp;
                    {this.capitalize(this.props.user.lname)}
                </h2>
            )
        } else {
            return (
                <h2>{this.props.user.email}</h2>
            )
        }
    }

    image() {
        if (this.props.user.image_url) {
            return (
                <img src={this.props.user.image_url} alt="profile-image"/>
            )
        } else {
            return (
                <h1 className='initial-container'>
                    <p>{this.props.user.email[0].toUpperCase()}</p>
                </h1>
            )
        }
    }

    username() {
        if (this.props.user.username){
            return (
                <h3>@{this.props.user.username}</h3>
            )
        }
    }

    render() {

        const { user } = this.props;
        
        if (!this.props.user) {
            return null;
        } 
        return (
            <div className='profile-page'>

                <section className='heading'>
                    {this.image()}
                    {this.name()}
                    {this.username()}
                    <FollowBtnItemContainer user={this.props.user}/>
                    <FollowLinksContainer user={this.props.user} />
                </section>

                <section className="browse-pin-index">
                    <PinIndexContainer  userPinIndex={true} currentUser={this.props.user}/>
                </section>

            </div>

        );   
    }
}

export default BrowseProfile;
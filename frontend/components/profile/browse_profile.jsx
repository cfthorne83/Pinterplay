import React from 'react'

import PinIndexContainer from "../pins/pin_index_container";
import FollowBtnItemContainer from "../following/follow_btn_item_container";
import FollowLinksContainer from "../following/follows_links_container";

class BrowseProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {user: this.props.user};

        this.capitalize = this.capitalize.bind(this);
        this.name = this.name.bind(this);
        this.image = this.image.bind(this);
        this.username = this.username.bind(this);
    }

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
    
    followBtn = () => {
        if (this.props.currentUser.id != this.props.user.id){
            return (
            <FollowBtnItemContainer user={this.props.user}/>
            )
        }
    }

    render() {
        const { user } = this.props;
        
        if (!this.props.user) {
            return null;
        } 

        if (this.props.searchTerm === ""){

            return (
                <div className='profile-page'>
    
                    <section className='heading'>
                        {this.image()}
                        {this.name()}
                        {this.username()}
                        {/* <FollowBtnItemContainer user={this.props.user}/> */}
                        {this.followBtn()}
                        <FollowLinksContainer user={this.props.user} />
                    </section>
    
                    <section className="browse-pin-index">
                        <PinIndexContainer  userPinIndex={true} currentUser={this.props.user}/>
                    </section>
    
                </div>
            );   
        } else {
            return (
                <PinIndexContainer shuffle={true}/> 
            ) 
        }
    }
}

export default BrowseProfile;
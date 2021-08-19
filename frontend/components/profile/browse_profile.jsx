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

    // componentDidUpdate(){
    //     if ((this.state.following != this.props.following) || (this.state.followers != this.props.followers)){
    //         this.setState({ following: this.props.following, followers: this.props.following  })
    //     }
    // }

    componentDidMount() {
        this.props.fetchUsers()
        // .then(this.props.fetchFollows({user_id: this.props.currentUser.id}));
    }

    // handleSubmit(e){
    //     this.props.openModal('createBoard');
    // }

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

    // handleFollowers() {
    //     this.props.openModal("followers", this.props.followers);
    // }

    // handleFollowing() {
    //     this.props.openModal("following", this.props.following);
    // }

    // followers() {
    //     if (this.props.followers.length == 1){
    //         return (
    //                 <h4>
    //                     <span
    //                         onClick={this.handleFollowers}>
    //                         {this.props.followers.length} follower |&nbsp;
    //                     </span>
    //                     <span
    //                         onClick={this.handleFollowing}>
    //                         {this.props.following.length} following
    //                     </span>
    //                 </h4>
    //         )
    //     } else {
    //         return (
    //                 <h4>
    //                     <span
    //                         onClick={this.handleFollowers}>
    //                         {/* {this.props.currentUser.followers.length} followers |&nbsp; */}
    //                         {this.props.followers.length} followers |&nbsp;
    //                     </span>
    //                     <span
    //                         onClick={this.handleFollowing}>
    //                         {/* {this.state.following.length} following */}
    //                         {this.props.following.length} following
    //                     </span>
    //                 </h4>
    //         )
    //     }
    // }

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
                    {/* {this.followers()} */}
                </section>

                <section className="browse-pin-index">
                    <PinIndexContainer  userPinIndex={true} currentUser={this.props.user}/>
                </section>

                {/* <section className='mid'>
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
                </section> */}
                {/* <BoardIndexContainer currentUser={this.props.currentUser}/> */}
            </div>

        );   
    }
}

export default BrowseProfile;
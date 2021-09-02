import React from "react";
import { Redirect } from 'react-router-dom';

import PinIndexContainer from "../pins/pin_index_container";

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;

        this.updateFname = this.updateFname.bind(this);
        this.updateLname = this.updateLname.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidUpdate() {
        if ((this.props.currentUser) && (this.state.image_url !== this.props.currentUser.image_url)){
            this.setState({ image_url: this.props.currentUser.image_url })
        }
    }


    updatePhoto(e) {
        e.preventDefault();
        this.props.openModal( "editPhoto", this.props.currentUser )
    }

    updateFname(e) {
        this.setState({ fname: e.currentTarget.value });
    }

    updateLname(e) {
        this.setState({ lname: e.currentTarget.value });
    }

    updateUsername(e) {
        this.setState({ username: e.currentTarget.value });
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ image_url: this.props.currentUser.image_url})
        this.props.updateUser(this.state);
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    handleReset(e) {
        e.preventDefault();
        this.setState(this.props.currentUser);
    }

    profilePic() {
        const currentUser = this.props.currentUser;
        if (this.props.imageUrl) {
            return (
                <img src={this.props.imageUrl} alt="profile-pic"/>
            );
        } else if (currentUser.fname) {
            return (
                <span className="edit-profile-form__initial">
                    {currentUser.fname[0].toUpperCase()}
                </span>
            );
        } else {
            return (
                <span className="edit-profile-form__initial">
                    {currentUser.email[0].toUpperCase()}
                </span>     
            );
        }
    }

    render() {

        if (!this.props.currentUser) {
            return <Redirect to='/' />
        }

        if (this.props.searchTerm === ""){

            return (
                <div className="edit-profile-form">
                    <form onSubmit={this.handleSubmit}>
                        <section>
                            <h1>Edit profile</h1>
                            <h2>People visiting your profile will see the following info</h2>
                        </section>
                        
                        <section className="photo-con">
                            <h3>Photo</h3>
                            <div className="photo-change">
                                {this.profilePic()}
                                <button onClick={this.updatePhoto}>Change</button>
                            </div>
                        </section>
    
                        <section className="name-input-con">
                            <div>  
                                <h3>First Name</h3>
                                    <input 
                                        type="text"
                                        value={this.state.fname || ""}
                                        onChange={this.updateFname}/>
                            </div>
                            
                            <div className="lname__input">
                                <h3>Last Name</h3>
                                    <input 
                                        type="text"
                                        value={this.state.lname || ""}
                                        onChange={this.updateLname}/>
                            </div>
                        </section>
                        
    
                        <section>
                            <h3>Username</h3>
                                <input 
                                    className="username__input"
                                    type="text"
                                    value={this.state.username || ""}
                                    onChange={this.updateUsername}/>
                                    <h4>www.mypin.com/{this.state.username}</h4>
                        </section>
                        
                        <section>
                            <h3>About your profile</h3>
                                <textarea 
                                    className="about__input"
                                    type="text"
                                    placeholder="Write a little bit about yourself here"
                                    onChange={this.updateDescription}/>        
                        </section>
    
                        <section className="btn-con">
                            <button onClick={this.handleReset}>Reset</button>
                            <button className="red-btn">Save</button>
                        </section>
                    </form>
                </div>
            );
        } else {
            return (
                <PinIndexContainer shuffle={true}/> 
            );        
        }
    }
}

export default ProfileSettings;
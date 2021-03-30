import React from "react";

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
    }


    updatePhoto(e) {
        e.preventDefault();
        this.props.openModal( "editPhoto", this.props.currentUser );
        this.setState({ image_url: this.props.currentUser.image_url})
    }

    updateFname(e) {
        this.setState({ fname: e.currentTarget.value });
        console.log(this.state);
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
        this.props.updateUser(this.state);
    }

    render() {

        if (!this.props.currentUser) return null;

        return (
            <div className="edit-profile-form">
                <form onSubmit={this.handleSubmit}>
                <h1>Edit profile</h1>
                <h2>People visiting your profile will see the following info</h2>
                    <h3>Photo</h3>
                    <div className="photo-change">
                        <img src={this.props.imageUrl} alt="profile-pic"/>
                        <button onClick={this.updatePhoto}>Change</button>
                    </div>

                    <div className="name-input-con">
                        <div>  
                            <h3>First Name</h3>
                                <input 
                                    type="text"
                                    value={this.state.fname}
                                    onChange={this.updateFname}/>
                        </div>
                        
                        <div className="lname__input">
                            <h3>Last Name</h3>
                                <input 
                                    type="text"
                                    value={this.state.lname}
                                    onChange={this.updateLname}/>
                        </div>
                    </div>
                    


                    <h3>Username</h3>
                        <input 
                            className="username__input"
                            type="text"
                            value={this.state.username}
                            onChange={this.updateUsername}/>
                    

                    <h3>About your profile</h3>
                        <textarea 
                            className="about__input"
                            type="text"
                            placeholder="Write a little bit about yourself here"
                            onChange={this.updateDescription}/>
                    

                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default ProfileSettings;
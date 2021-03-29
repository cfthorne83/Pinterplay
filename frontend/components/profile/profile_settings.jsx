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
    }

    updatePhoto(e) {
        this.props.openModal("editPhoto", this.props.currentUser.id );
    }

    updateFname(e) {
        this.setState({ fname: e.currentTarget.value })
    }

    updateLname(e) {
        this.setState({ lname: e.currentTarget.value })
    }

    updateUsername(e) {
        this.setState({ username: e.currentTarget.value })
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value })
    }

    render() {
        const { currentUser } = this.props;

        return (
            <div>
                <h1>Edit profile</h1>
                <h2>People visiting your profile will see the following info</h2>

                <img src={this.state.image_url}/>
                <button onClick={this.updatePhoto}>Change</button>

                <label>First Name
                    <input 
                        type="text"
                        value={this.state.fname}
                        onChange={this.updateFname}/>
                </label>

                <label>Last Name
                    <input 
                        type="text"
                        value={this.state.lname}
                        onChange={this.updateLname}/>
                </label>

                <label>Username
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.updateUsername}/>
                </label>

                <label>About your profile
                    <textarea 
                        placeholder="Write a little bit about yourself here"
                        value={this.state.description}
                        onChange={this.updateDescription}/>
                </label>
            </div>
        )
    }
}

export default ProfileSettings;
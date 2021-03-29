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

    updatePhoto() {
        this.props.openModal( "editPhoto", this.props.currentUser );
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

        if (!this.props.currentUser){
            return null;
        }

        return (
            <div>
                <h1>Edit profile</h1>
                <h2>People visiting your profile will see the following info</h2>

                <form>
                    {/* <img src={this.state.image_url}/> */}
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
                            onChange={this.updateDescription}/>
                    </label>
                </form>
                    <br/>
                    <br/>
                <h1>{this.state.email}</h1>
                <h1>{this.state.id}</h1>
                <h1>{this.state.fname}</h1>
                <h1>{this.state.lname}</h1>
                <h1>{this.state.image_url}</h1>

            </div>
        )
    }
}

export default ProfileSettings;
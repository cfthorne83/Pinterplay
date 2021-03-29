import React from "react";

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;

        this.updateFname = this.updateFname.bind(this);
        this.updateLname = this.updateLname.bind(this);
    }

    updateFname(e) {
        this.setState({ fname: e.currentTarget.value })
    }

    updateLname(e) {
        this.setState({ lname: e.currentTarget.value })
    }

    render() {
        const { currentUser } = this.props;

        return (
            <div>
                <h1>Edit profile</h1>
                <h2>People visiting your profile will see the following info</h2>

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
            </div>
        )
    }
}

export default ProfileSettings;
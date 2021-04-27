import React from "react";

class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign( this.props.currentUser, {image: false})
        // this.state = { 
        //                 email: this.props.currentUser.email,
        //                 fname: this.props.currentUser.fname,
        //                 lname: this.props.currentUser.lname, 
        //                 username: this.props.currentUser.username,
        //                 description: this.props.currentUser.description
        //             }

        this.updateFname = this.updateFname.bind(this);
        this.updateLname = this.updateLname.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }


    updatePhoto(e) {
        e.preventDefault();
        this.props.openModal( "editPhoto", this.props.currentUser )
        this.setState({ image: !this.state.image})
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
        this.props.updateUser(this.state);
    }

    handleReset(e) {
        e.preventDefault();
        this.setState(this.props.currentUser);
        console.log(this.state);
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

        if (!this.props.currentUser) return null;

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
        )
    }
}

export default ProfileSettings;
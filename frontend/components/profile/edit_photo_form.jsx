import React from "react";

class EditPhotoForm extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.currentUser;

        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick() {
        let input = document.querySelector(".profile-photo__input")
        input.click();
    }

    handleInput(e) {
        let that = this;

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            let image = reader.result;
            that.setState({ image_url: image });
            // console.log(that.props.updateUser);
            that.props.updateUser(that.state);
        }
    }

    render() {
        return (
            <div>
                <h1>Change your picture</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleInput}
                        type="file" 
                        className="profile-photo__input"/>
                    <button onClick={this.handleClick}>Choose photo</button>
                </form>
            </div>
        )
    }
}

export default EditPhotoForm;
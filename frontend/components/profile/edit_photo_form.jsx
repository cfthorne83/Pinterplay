import React from "react";
import { BeatLoader } from "react-spinners";


class EditPhotoForm extends React.Component{
    constructor(props){
        super(props);

        this.state = Object.assign(this.props.currentUser, { loading: false })

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
            const button = document.querySelector(".choose-photo--btn");
            button.style.display = "none";
            
            let image = reader.result;
            that.setState({ image_url: image });
            that.setState({ loading: true });
            this.props.updateUser(this.state).then(this.props.closeModal);
        }
    }
    
    render() {
        return (
            <div>
                <h1>Change your picture</h1>

                <form>
                    <input 
                        onChange={this.handleInput}
                        type="file" 
                        className="profile-photo__input"/>
                    <button 
                        className="choose-photo--btn"
                        onClick={this.handleClick}>
                            Choose photo
                    </button>
                    <BeatLoader size={25} color="red" loading={this.state.loading}/>
                </form>
            </div>
        )
    }
}

export default EditPhotoForm;
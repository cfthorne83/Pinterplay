import React from "react";

class EditPhotoForm extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick() {
        let input = document.querySelector(".profile-photo__input")

        input.click();
    }

    handleInput(e) {

        console.log(e.target.files[0]);
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);

        // reader.onload = () => {
        //     image = reader.result;
        //     // that.setState({ image_url: image });
        //     console.log(image);
        // }
    }

    render() {
        return (
            <div>
                <h1>edit photo</h1>
                <input 
                    onChange={this.handleInput}
                    type="file" 
                    className="profile-photo__input"/>
                <button onClick={this.handleClick}>Choose photo</button>
            </div>
        )
    }
}

export default EditPhotoForm;
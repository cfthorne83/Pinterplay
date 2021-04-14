import React from "react";
import { BeatLoader } from "react-spinners";

import BoardDropdown from "../boards/board_dropdown";

class CreatePinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = Object.assign(this.props.pin, {loading: false});        // {
        //     title: "",
        //     description: "", 
        //     board_id: null, 
        //     photoFile: null 
        // }

        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        // this.addDeleteBtn = this.addDeleteBtn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    handleDragOver(e) {
        e.preventDefault();
        
        let dropZone = document.querySelector(".drop-zone");
        dropZone.classList.add("drop-zone--over");
    }
    
    handleDragLeave() {
        let dropZone = document.querySelector(".drop-zone");
        dropZone.classList.remove("drop-zone--over");
    }
    
    handleDragEnter() {
        let dropZone = document.querySelector(".drop-zone");
        dropZone.classList.remove("drop-zone--over");
    }

    // adds delete btn and displays file image
    handleFile(e) {
        let dropZone = document.querySelector(".drop-zone");
        let deleteBtn = document.querySelector(".drop-zone__delete");
        let dropZoneInner = document.querySelector(".drop-zone__inner");
        let dropZoneImg = document.querySelector(".drop-zone__img");
        let deleteIcon;

        let that = this;


        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            let image = reader.result;
            this.setState({ image_url: file });
            dropZoneImg.src = `${image}`;
        }
        if (file) {
            reader.readAsDataURL(file);
        }


        if (dropZoneInner) {
            dropZoneInner.style.display = "none";
        }

       
        // reader.onload = () => {
        //     let image = reader.result;
        //     this.setState({ image_url: image });
        //         dropZoneImg.src = `${image}`;
        // };
        
        if (!deleteBtn){
            deleteBtn = document.createElement("button");
            deleteBtn.classList.add("drop-zone__delete");
            deleteBtn.addEventListener("click", that.handleDelete);

            deleteIcon = document.createElement("img");
            deleteIcon.classList.add("drop-zone__delete-icon");
            deleteIcon.src = "/images/delete.png";

            dropZone.append(deleteBtn);
            deleteBtn.append(deleteIcon);

            dropZone.style.padding = "0px";
            dropZone.style.backgroundColor = "transparent";
            dropZone.style.position = "relative";
            
            dropZoneImg.style.width = "90%";
            dropZoneImg.style.borderRadius = "1rem";
        }
        this.dropZoneReset();
    }

    handleClick() {
        let inputElement = document.querySelector(".drop-zone__input")
        let dropZone = document.querySelector(".drop-zone");

        inputElement.click();
        // this.setState({ image_url: inputElement.files[0] }, () => {
        //     console.log(this.state);
        // });
        
        // inputElement.addEventListener("change", e => {
        //     if (inputElement.files.length) {
        //         this.addDeleteBtn(dropZone, inputElement.files[0]);
        //     }
        // });
    }

    // handleInput(e) {
    //     let files = e.target.files;
    //     let image;
    //     let that = this;

    //     let reader = new FileReader();
    //     reader.readAsDataURL(files[0]);

    //     reader.onload = () => {
    //         image = reader.result;
    //         that.setState({ image_url: image });
    //     }
    // }
    
    handleDelete(e) {
        e.stopPropagation();
        
        let dropZoneImg = document.querySelector(".drop-zone__img");
        dropZoneImg.src = "";
      
        let dropZoneInner = document.querySelector(".drop-zone__inner");
        dropZoneInner.style.display = "inline-block";

        let dropZone = document.querySelector(".drop-zone");
        dropZone.style.backgroundColor = "var(--lt-grey)";
        dropZone.style.padding = "10px";

        this.setState(this.props.pin);

        let deleteBtn = document.querySelector(".drop-zone__delete");
        deleteBtn.remove();
    }

    handleDrop(e) {
        e.preventDefault();
        
        let dropZone = document.querySelector(".drop-zone");
        let inputElement = document.querySelector(".drop-zone__input")
        
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            this.addDeleteBtn(dropZone, inputElement.files[0]);
        }
        
        dropZone.classList.remove("drop-zone--over");
    }
    
    updateTitle(e) {
        const inputError = document.querySelector(".create-pin-form__input-error");
            inputError.innerText = "";

        this.setState({ title: e.currentTarget.value });
    }
    
    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.stopPropagation();

        let board = document.querySelector(".selected-board");        
        this.setState({ board_id: board.dataset.id}, () => {
                // console.log(this.state);
            if (!this.state.title && !this.state.image_url){
                this.pinError();
                this.inputError();
                
            } else if (!this.state.image_url){
                this.pinError();
                
            } else if (!this.state.title) {
                this.inputError();
                
            } else {

                this.setState({ loading: true});

                const formData = new FormData();
                formData.append("pin[title]", this.state.title);
                formData.append("pin[board_id]", this.state.board_id);
                if (this.state.image_url) {
                    formData.append("pin[photo]", this.state.image_url);
                }
                formData.append("pin[description]", this.state.description);

                // this.props.createPin(this.state);
                // console.log(Array.from(formData)); 

                // $.ajax ({
                //     url: "/api/pins",
                //     method: "POST",
                //     data: formData,
                //     contentType: false, 
                //     processData: false
                // }).then(
                //     // (response) => console.log(response.message),
                //     // (response) => console.log(response.responseJSON),
                //     // this.setState({loading: true})   
                // ).then(console.log("done"))
                
                this.setState({ loading: true });
                this.props.createPin(formData);
                this.handleDelete();
            }
        });
    }

    handleLoading()  {
        let loader = document.querySelector(".loader");
        loader.remove();
    }
 
    pinError() {
        const dropZone = document.querySelector(".drop-zone");
            dropZone.style.border = "1px solid red";
            dropZone.style.backgroundColor = "#fef7f8";

            const dropZoneImg = document.querySelector(".drop-zone__arrow");
            dropZoneImg.src = "/images/exclamation.png";
            dropZoneImg.style.filter = "invert(50%) sepia(1) saturate(10000%)";

            const dropZonePrompt1 = document.querySelector(".drop-zone__prompt1");
            dropZonePrompt1.innerText = "An image is required to create a Pin.";
            dropZonePrompt1.style.color = "red";

            const dropZonePrompt = document.querySelector(".drop-zone__prompt");
            dropZonePrompt.style.color = "red"; 
    }

    dropZoneReset() {
        const dropZone = document.querySelector(".drop-zone");
            dropZone.style.border = "none";

        const dropZoneImg = document.querySelector(".drop-zone__arrow");
            dropZoneImg.src = "/images/arrow.png";
            dropZoneImg.style.filter = "invert(50%)";

        const dropZonePrompt1 = document.querySelector(".drop-zone__prompt1");
            dropZonePrompt1.innerText = "Drag and drop or click to upload";
            dropZonePrompt1.style.color = "var(--font-drk-grey)";

        const dropZonePrompt = document.querySelector(".drop-zone__prompt");
            dropZonePrompt.style.color = "#949494";
    }

    inputError() {
        const inputError = document.querySelector(".create-pin-form__input-error");
            inputError.innerText = "Pins must have a title.";
            inputError.style.color = "red";
    }

    render() {
        
        return (
            
            <div className="create-pin-form-con">                    

                <form 
                    // onSubmit={this.handleSubmit} 
                    className="create-pin-form">
                        
                    <div className="loader">
                        <BeatLoader 
                            className="create-pin-form__loader"
                            size={25} color="red" 
                            loading={this.state.loading}/>
                    </div>

                    <div className="create-pin-form__drop">
                        {/* <img 
                            src="https://static.thenounproject.com/png/384290-200.png"
                            className="ellipsis"
                        /> */}
                        <div className="create-pin-form__drop-inner">
                            <BoardDropdown boards={this.props.boards}/>
                            <button 
                                className="create-pin-form__save"
                                onClick={this.handleSubmit}>
                                    Save
                            </button>
                        </div>
                    </div>

                    <div className="create-pin-form__inner">
                        <div className="drop-zone"
                            onDragOver={this.handleDragOver}
                            onDragLeave={this.handleDragLeave}
                            onDragEnd={this.handleDragEnter}
                            onDrop={this.handleDrop}
                            onClick={this.handleClick}> 

                            <div className="drop-zone__inner">
                                <div className="drop-zone__text">
                                    <img 
                                        className="drop-zone__arrow"
                                        src="/images/arrow.png"/>
                                    <h1 className="drop-zone__prompt1">
                                        Drag and drop or click to upload
                                    </h1>
                                </div>
                                <h2 className="drop-zone__prompt">
                                    Recommendation: Use high-quality .jpg files less than 20MB
                                </h2>
                            </div>

                                <img className="drop-zone__img" src="" alt=""/>
                                <input 
                                    type="file"
                                    className="drop-zone__input"
                                    multiple accept="image/*"
                                    onChange={this.handleFile} 
                                />
                        </div>

                        <div className="create-pin-form__text">
                            <div className="create-pin-form__text-inner">
                                <input 
                                    className="create-pin-form__input"
                                    type="text"
                                    value={this.state.title}  
                                    onChange={this.updateTitle} 
                                    onClick={this.updateTitle} 
                                    placeholder='Add your title'/> 

                                <h3 className="create-pin-form__input-error"></h3>

                                <textarea 
                                    className="create-pin-form__textarea"
                                    onChange={this.updateDescription}
                                    placeholder="Tell everyone what your Pin is about"/>
                                <div className="create-pin-form__border"></div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}

export default CreatePinForm;
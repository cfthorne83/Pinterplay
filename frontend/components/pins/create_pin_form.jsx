import React from "react";
import { BeatLoader } from "react-spinners";
import { Redirect } from "react-router-dom";

import BoardDropdown from "../boards/board_dropdown";
import PinIndexContainer from "./pin_index_container";

class CreatePinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = Object.assign(this.props.pin, {loading: false, newPinId: null});

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
        let file;
        
        if (e.currentTarget && e.currentTarget.files[0]){
            
            file = e.currentTarget.files[0];
        } else if (e.files[0]){
            
            file = e.files[0];
        }
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
    }
    
    handleDelete(e) {
        // e.stopPropagation();
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
            
            // this.addDeleteBtn(dropZone, inputElement.files[0]);
            this.handleFile(inputElement);
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
        const that = this;
        let board = document.querySelector(".selected-board");   

        this.setState({ board_id: board.dataset.id}, () => {
            if (!this.state.title && !this.state.image_url){
                this.pinError();
                this.inputError();
                
            } else if (!this.state.image_url){
                this.pinError();
                
            } else if (!this.state.title) {
                this.inputError();
                
            } else {
                this.setState({ loading: true});

                const screen = document.querySelector(".create-pin-form__screen");
                screen.style.display = "flex";
                screen.style.justifyContent = "center";
                screen.style.alignItems = "center";

                const formData = new FormData();
                formData.append("pin[title]", this.state.title);
                // formData.append("pin[board_id]", this.state.board_id);
                if (this.state.image_url) {
                    formData.append("pin[photo]", this.state.image_url);
                }
                // this.props.createPin(formData)//.then(
                // $.ajax ({
                //     url: "/api/pins",
                //     method: "POST",
                //     data: formData,
                //     contentType: false, 
                //     processData: false
                // })
                this.props.createPin(formData)
                .then(
                    (response) => {
                        $.ajax({
                            url: "/api/board_pins",
                            method: "POST",
                            data: { board_pin: { pin_id: response.pin.id, board_id: that.state.board_id}}
                        })
                        screen.style.display = "none";
                        this.setState({loading: false});
                        // this.props.openModal("pinShowLink", response.pin.id);
                        this.props.openModal("pinShowLink", { 
                                                                id: response.pin.id, 
                                                                board: board.innerText,
                                                                image: response.pin.image_url
                                                            });
                        this.handleDelete();
                        const input = document.querySelector(".drop-zone__input");
                        input.value = null;
                    } 
                )
            }
        });
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
        if (!this.props.currentUser) {
            return <Redirect to='/' />
        } 
        
        if (this.props.searchTerm === ""){

            return (
                
                <div className="create-pin-form-con">
    
                    {/* <form className="create-pin-form">   */}
                    <div className="create-pin-form">  
    
                        <div className="create-pin-form__drop">
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
                                        onInput={this.handleFile} 
                                    />
                            </div>
    
                            <div className="create-pin-form__text">
                                <div className="create-pin-form__text-inner">
                                    
                                    <div className="create-pin-form__screen">
                                        <div className="create-pin-form__loader">
                                            <BeatLoader 
                                                className="create-pin-form__loader"
                                                size={30} color="red" 
                                                loading={this.state.loading}/>
                                        </div>
                                    </div>
    
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
                    {/* </form> */}
                    </div>
                </div>
    
            )
        } else {
            return (
                <PinIndexContainer shuffle={true}/> 
            );
        } 
    }
}

export default CreatePinForm;
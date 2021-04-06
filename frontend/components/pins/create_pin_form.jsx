import React from "react";
// import arrow from "../../../images/up_arrow.png";
import PinIndexContainer from "./pin_index_container";
// import BoardDropdownContainer from "../boards/board_dropdown_container";
import BoardDropdown from "../boards/board_dropdown";

class CreatePinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.pin;

        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.addDeleteBtn = this.addDeleteBtn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
    addDeleteBtn(dropZone, file) {
        let deleteBtn = document.querySelector(".drop-zone__delete");
        let dropZoneInner = document.querySelector(".drop-zone__inner");
        let dropZoneImg = document.querySelector(".drop-zone__img");
        let deleteIcon;

        let that = this;

        if (dropZoneInner) {
            dropZoneInner.style.display = "none";
        }

       
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let image = reader.result;
            this.setState({ image_url: image });
                dropZoneImg.src = `${image}`;
        };
        

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
    }
    
    handleDelete(e) {
        e.stopPropagation();
        
        let dropZoneImg = document.querySelector(".drop-zone__img");
        dropZoneImg.src = "";
        // debugger
        
        // debugger
        let dropZoneInner = document.querySelector(".drop-zone__inner");
        dropZoneInner.style.display = "inline-block";

        let dropZone = document.querySelector(".drop-zone");
        dropZone.style.backgroundColor = "var(--lt-grey)";
        dropZone.style.padding = "10px";

        this.setState(this.props.pin);

        let deleteIcon = document.querySelector(".drop-zone__delete-icon");
        // deleteIcons.forEach( icon => {
        //     icon.remove();
        // });

        // deleteIcon.remove();
        let deleteBtn = document.querySelector(".drop-zone__delete");
        deleteBtn.remove();
    }
    
    handleClick() {
        let inputElement = document.querySelector(".drop-zone__input")
        let dropZone = document.querySelector(".drop-zone");

        inputElement.click();

        inputElement.addEventListener("change", e => {
            if (inputElement.files.length) {
                this.addDeleteBtn(dropZone, inputElement.files[0]);
            }
        });
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
    
    handleInput(e) {
        let files = e.target.files;
        let image;
        let that = this;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = () => {
            image = reader.result;
            that.setState({ image_url: image });
        }
    }
    
    updateTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }
    
    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.stopPropagation();

        if (!this.state.image_url){

            const dropZone = document.querySelector(".drop-zone");
            dropZone.style.border = "1px solid red";
                    
            const dropZoneImg = document.querySelector(".drop-zone__arrow");
            dropZoneImg.src = "/images/exclamation.png";
            
            const dropZonePrompt1 = document.querySelector(".drop-zone__prompt1");
            dropZonePrompt1.innerText = "An image is required to create a Pin.";
            dropZonePrompt1.style.color = "red";

            const dropZonePrompt = document.querySelector(".drop-zone__prompt");
            dropZonePrompt.style.color = "red";
            
            // dropZoneImg.style.width = ""
            
        }
        let board = document.querySelector(".selected-board");        
        this.setState({ board_id: board.dataset.id});
        
        this.props.createPin(this.state);
    }

    handleImageError() {

    }

    render() {

        return (
            <div className="create-pin-form-con">                    

                <form 
                    // onSubmit={this.handleSubmit} 
                    className="create-pin-form">

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
                                />
                        </div>

                        <div className="create-pin-form__text">
                            <div className="create-pin-form__text-inner">
                                <input 
                                    className="create-pin-form__input"
                                    type="text"
                                    value={this.state.title}  
                                    onChange={this.updateTitle} 
                                    placeholder='Add your title'/>                            
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
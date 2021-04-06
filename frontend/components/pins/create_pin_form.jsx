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
        this.updateBoardId = this.updateBoardId.bind(this);
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
        let thumbnail = document.querySelector(".drop-zone__thumb");
        let dropZoneInner = document.querySelector(".drop-zone__inner");
        let dropZoneImg = document.querySelector(".drop-zone__img");


        let that = this;
        let image;

        // if (dropZone.querySelector(".drop-zone__prompt")){
        //     dropZone.querySelector(".drop-zone__prompt").remove();
        //     dropZone.querySelector(".drop-zone__text").remove();
        // }
        if (dropZoneInner) {
            dropZoneInner.remove();
        }

        if (!dropZoneImg) {
            dropZoneImg = document.createElement("img");
            dropZone.append(dropZoneImg);

            deleteBtn = document.createElement("button");
            deleteBtn.classList.add("drop-zone__delete");
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", that.handleDelete);
            dropZone.append(deleteBtn);

            dropZone.style.padding = "0px";
            dropZone.style.backgroundColor = "pink";
            dropZone.style.position = "relative";
            
            dropZoneImg.style.width = "90%";
            dropZoneImg.style.borderRadius = "1rem";
        }

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                let image = reader.result;
                that.setState({ image_url: image });
                    // thumbnail.style.backgroundImage = `url(${reader.result})`;
                    // dropZone.style.backgroundImage = `url(${reader.result})`;
                    dropZoneImg.src = `${image}`;
            };
        } else {
            dropZone.style.backgroundImage = null;
        }

    }
    
    handleDelete(e) {
        e.stopPropagation();
        
        let thumbnail = document.querySelector(".drop-zone__thumb");
        this.setState(this.props.pin);
        thumbnail.remove();
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPin(this.state)
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
    }

    updateBoardId(e) {
        e.stopPropagation();
        let board = document.querySelector(".selected-board");        
        this.setState({ board_id: board.dataset.id});
    }

    render() {

        return (
            <div className="create-pin-form-con">                    

                <form 
                    onSubmit={this.handleSubmit} 
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
                                onClick={this.updateBoardId}>
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
                                        className="drop-zone__img"
                                        src="/images/arrow.png"/>
                                    <h1>
                                        Drag and drop or click to upload
                                    </h1>
                                </div>
                                <h2 className="drop-zone__prompt">
                                    Recommendation: Use high-quality .jpg files less than 20MB
                                </h2>

                            </div>
                                <input 
                                    type="file" 
                                    className="drop-zone__input" 
                                    multiple/>
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
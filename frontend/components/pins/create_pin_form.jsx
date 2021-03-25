import React from "react";
// import arrow from "../../../images/up_arrow.png";
import PinIndexContainer from "./pin_index_container";
import BoardDropdownContainer from "../boards/board_dropdown_container";

class CreatePinForm extends React.Component{
    constructor(props){
        super(props);

        // this.state = { selectedFile: null}
        this.state = this.props.pin;

        // this.handleFileSelected = this.handleFileSelected.bind(this);
        // this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.addDeleteBtn = this.addDeleteBtn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        // this.updateImageUrl = this.updateImageUrl.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }
    
    // handleFileSelected(e) {
    //     // console.log(e.target);
    //     this.setState({ selectedFile: e.target })
    // }

    // handleFileUpload() {
    //     return null;
    // }

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

        let that = this;
        let image;

        // console.log(file.name);

        if (dropZone.querySelector(".drop-zone__prompt")){
            dropZone.querySelector(".drop-zone__prompt").remove();
        }

        if (!thumbnail) {
            thumbnail = document.createElement("div");
            thumbnail.classList.add("drop-zone__thumb"); 
            dropZone.append(thumbnail);

            deleteBtn = document.createElement("button");
            deleteBtn.classList.add("drop-zone__delete");
            deleteBtn.innerText = "Delete";
            thumbnail.append(deleteBtn);
        }

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                // console.log(reader.result);
            image = reader.result;
            // console.log(image);
            that.setState({ image_url: image });
            console.log(that.state);
                thumbnail.style.backgroundImage = `url(${reader.result})`;
            };
        } else {
            thumbnail.style.backgroundImage = null;
        }
    }
    
    handleClick() {
        let inputElement = document.querySelector(".drop-zone__input")
        let dropZone = document.querySelector(".drop-zone");

        inputElement.click();

        inputElement.addEventListener("change", e => {
            // console.log(e.target.files)
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
            // console.log(dropZone);
            // console.log(inputElement.files[0]);
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
            // const image = e.target.result;
            image = reader.result;
            // console.log(image);
            that.setState({ image_url: image });
            console.log(that.state);
        }
        // console.log(image);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPin(this.state)
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value, board_id: 98 });
            console.log(this.state);
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
            console.log(this.state);
    }

    updateBoard(e) {
        this.setState({ board_id: e.currentTarget.value });
            console.log(this.state);
    }

    // updateImageUrl(e) {
    //     this.setState({ image_url: "image" });
    // }
    

    render() {

        let boards = this.props.boards.map( board => {
            return (
                <option key={board.id} value={board.title}> 
                    {board.title}
                </option>
            )
        })

        return (
            <div className="create-pin-form-con">
                
                <form 
                    onSubmit={this.handleSubmit} 
                    className="create-pin-form">

                    <div className="drop-zone-con"> 
                        <div 
                            className="drop-zone"  
                            onDragOver={this.handleDragOver}
                            onDragLeave={this.handleDragLeave}
                            onDragEnd={this.handleDragEnter}
                            onDrop={this.handleDrop}
                            onClick={this.handleClick}
                        >
                            <span className="drop-zone__prompt">Drag and drop or click to upload</span>
                            <input 
                                // onChange={this.handleInput}
                                type="file" 
                                // name="myFile" 
                                className="drop-zone__input" 
                                multiple/>
                        </div>
                    </div>

                    <div className="pin-title-con">

                        {/* <select 
                            value={this.state.board_id}
                            onChange={this.updateBoard}>
                            {boards}
                        </select> */}
                        <BoardDropdownContainer/>
                            <br/>
                            <br/>
                        <input 
                            type="text"
                            value={this.state.title}  
                            onChange={this.updateTitle} 
                            placeholder='Add your title'/>
                            <br/>
                            <br/>
                        <textarea 
                            onChange={this.updateDescription}
                            placeholder="Tell everyone what your Pin is about"/>
                            <br/>
                            <br/>
                        <button>Save</button>
                    </div>

                </form>
                
            </div>

        )
    }
}

export default CreatePinForm;
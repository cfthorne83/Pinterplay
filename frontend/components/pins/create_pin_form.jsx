import React from "react";
// import arrow from "../../../images/up_arrow.png";

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
        this.updateImageUrl = this.updateImageUrl.bind(this);
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
        // let image;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = () => {
            // const image = e.target.result;
            const image = reader.result;
            // console.log(image);
        }
        this.setState({ imageUrl: "image" });
        // debugger
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.createPin(this.state)
    }

    updateTitle(e) {
        this.setState({ 
            title: e.currentTarget.value, 
            image_url: "image" });
            console.log(this.state);
    }

    updateImageUrl(e) {
        this.setState({ image_url: "image" });
        // debugger
    }
    

    render() {
        return (
            // <div>
            //     <form>
            //         
            //             <br/>
            //             <br/>
            //         <input 
            //             style={{display: "none"}} 
            //             type="file" 
            //             onChange={this.handleFileSelected}
            //             ref={ fileInput => this.fileInput = fileInput }/>
            //         <button onClick={ () => this.fileInput.click() }>Drag and drop or click to upload</button>
            //             <br/>
            //             <br/>
            //         <button onClick={this.handleFileUpload}>Save</button>
            //     </form>
            //             <br/>
            //             <br/>
            // </div>
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
                                name="myFile" 
                                className="drop-zone__input" 
                                multiple/>
                        </div>
                    </div>

                    <div className="pin-title-con">
                        <input 
                            type="text"
                            value={this.state.title}  
                            onChange={this.updateTitle} 
                            placeholder='Add your title'/>
                            <br/>
                            <br/>
                        <textarea placeholder="Tell everyone what your Pin is about"/>
                            <br/>
                            <br/>
                        <input type="file" 
                                // onChange={this.handleInput}
                                onChange={this.updateImageUrl}
                        />
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
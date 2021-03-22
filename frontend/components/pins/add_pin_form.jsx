import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = { selectedFile: null}

        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.addDeleteBtn = this.addDeleteBtn.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleFileSelected(e) {
        // console.log(e.target);
        this.setState({ selectedFile: e.target })
    }

    handleFileUpload() {
        return null;
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
                thumbnail.style.backgroundImage = `url(${reader.result})`;
            };
        } else {
            thumbnail.style.backgroundImage = null;
        }
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
    
    

    render() {
        return (
            // <div>
            //     <form>
            //         <input 
            //             type="text"   
            //             placeholder='Add your title'/>
            //             <br/>
            //             <br/>
            //         <textarea placeholder="Tell everyone what your Pin is about"/>
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
                <form >

                    <div 
                        className="drop-zone"  
                        onDragOver={this.handleDragOver}
                        onDragLeave={this.handleDragLeave}
                        onDragEnd={this.handleDragEnter}
                        onDrop={this.handleDrop}
                        onClick={this.handleClick}
                        // onDrop={this.addDeleteBtn}
                    >
                        <span className="drop-zone__prompt">Drag and drop or click to upload</span>
                        {/* <div className="drop-zone__thumb" data-label="myfile-txt"></div> */}
                        <input type="file" name="myFile" className="drop-zone__input" multiple/>
                    </div>
                </form>
            // </div>
        )
    }
}

export default AddPinForm;
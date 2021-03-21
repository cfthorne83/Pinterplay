import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = { selectedFile: null}

        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
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
        dropZone.classList.add("drop-zone--over")
    }
    
    handleDragLeave() {
        let dropZone = document.querySelector(".drop-zone");
        dropZone.classList.remove("drop-zone--over")
    }
    
    handleDragEnter() {
        let dropZone = document.querySelector(".drop-zone");
        dropZone.classList.remove("drop-zone--over")
    }

    handleDrop(e) {
        e.preventDefault();

        console.log(e.dataTransfer.files);
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"   
                        placeholder='Add your title'/>
                        <br/>
                        <br/>
                    <textarea placeholder="Tell everyone what your Pin is about"/>
                        <br/>
                        <br/>
                    <input 
                        style={{display: "none"}} 
                        type="file" 
                        onChange={this.handleFileSelected}
                        ref={ fileInput => this.fileInput = fileInput }/>
                    <button onClick={ () => this.fileInput.click() }>Drag and drop or click to upload</button>
                        <br/>
                        <br/>
                    <button onClick={this.handleFileUpload}>Save</button>
                </form>
                        <br/>
                        <br/>
                <form action="">

                    <div 
                        className="drop-zone"  
                        onDragOver={this.handleDragOver}
                        onDragLeave={this.handleDragLeave}
                        onDragEnd={this.handleDragEnter}
                        onDrop={this.handleDrop}
                    >
                        {/* <span className="drop-zone__prompt">Drag and drop or click to upload</span> */}
                        <div className="drop-zone__thumb" data-label="myfile-txt"></div>
                        <input type="file" name="myFile" className="drop-zone__input" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPinForm;
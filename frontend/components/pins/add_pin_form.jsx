import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

        this.state = { selectedFile: null}

        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }


    handleFileSelected(e) {
        // console.log(e.target);
        this.setState({ selectedFile: e.target })
    }

    handleFileUpload() {
        return null;
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
                        <br/>
                        <br/>
                    <div className="drop-zone">
                        <span className="drop-zone__prompt">Drag and drop or click to upload</span>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPinForm;
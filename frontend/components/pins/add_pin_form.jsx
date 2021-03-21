import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

        state = { selectedFile: null}

        this.handleFileSelected = this.handleFileSelected.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }


    handleFileSelected(e) {
        // console.log(e.target);
        this.setState({ selectedFile = e.target })
    }

    handleFileUpload() {

    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"   
                        placeholder='Add your title'/>
                    <textarea />
                    <input type="file" onChange={this.handleFileSelected}/>
                    <button onClick={this.handleFileUpload}>Save</button>
                </form>
            </div>
        )
    }
}

export default AddPinForm;
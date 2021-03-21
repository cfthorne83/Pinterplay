import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"   
                        placeholder='Add your title'/>
                    <h2>Description</h2>
                    <textarea />
                </form>
            </div>
        )
    }
}

export default AddPinForm;
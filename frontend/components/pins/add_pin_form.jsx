import React from "react";

class AddPinForm extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className='create-board-form'>
                <h1>Create Board</h1>
                <h2>Name</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" value={this.state.title} 
                        onChange={this.updateTitle} 
                        placeholder='Like "Places to go"'/>
                    <h2>Description</h2>
                    <textarea 
                        type="text"
                        onChange={this.updateDescription}
                        />

                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPinForm;
import React from 'react';
import { Redirect } from 'react-router-dom';

class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state).then(this.props.closeModal)     
    }

    updateTitle(e) {
        let that = this;
        let button = document.querySelector(".create-board-form__btn");

        this.setState({ title: e.currentTarget.value });

            if (e.currentTarget.value === ""){
                button.disabled = true;
                button.classList.remove("abled");
                button.classList.add("disabled");
            } else {
                button.disabled = false;
                button.classList.add("abled");
                button.classList.remove("disabled");
            }
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value })
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
                        placeholder='Like "Places to Go" ro "Recipes to Make"'/>
                    <h2>Description</h2>
                    <textarea 
                        type="text"
                        onChange={this.updateDescription}
                        />

                    <div>
                        <button className="create-board-form__btn disabled" disabled>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateBoardForm;
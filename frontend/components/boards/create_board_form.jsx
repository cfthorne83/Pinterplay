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
        this.setState({ title: e.currentTarget.value })
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value })
    }


    render() {
        return (
            <div>
                <h1>Create Board</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    <textarea value={this.state.description} onChange={this.updateDescription} />
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default CreateBoardForm;
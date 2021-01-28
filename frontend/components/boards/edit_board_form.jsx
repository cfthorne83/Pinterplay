import React from 'react';
import { Redirect } from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateBoard(this.state).then(this.props.closeModal);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteBoard(this.props.board.id).then(this.props.closeModal);
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value })
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value })
    }

    render() {
        // if (!this.props.board) return null;
        if (!this.props.board) {
            // return <Redirect to='/' />
            return <Redirect to={`/users/${this.props.currentUser.id}`} />
        }

        return (
            <div>
                <h1>Edit your board</h1>

                <form >
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    <textarea value={this.state.description} onChange={this.updateDescription} />
                    <button onClick={this.handleUpdate}>Done</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        );
    }
}

export default EditBoardForm;
import React from 'react';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state);
    }

    updateDescription(e) {
        this.setState({ body: e.currentTarget.value })
    }

    updateTitle(e) {
        this.setState({ description: e.currentTarget.value })
    }

    render() {
        // if (!board) return null;

        return (
            <div>
                <h1>Edit your board</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    <textarea value={this.state.description} onChange={this.updateDescription} />
                    <button>Done</button>
                </form>
            </div>
        );
    }
}

export default EditBoardForm;
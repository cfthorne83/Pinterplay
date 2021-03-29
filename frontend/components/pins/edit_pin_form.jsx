import React from "react";

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.pin;

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchPin(this.props.pinId);
    }

    handleDelete() {
        debugger
        this.props.deletePin(this.props.pinId);
    }

    render() {
        debugger

        const { closeModal } = this.props;

        if (!this.props.pin) return null;

        return (
            <div>
                <h1>Edit this pin</h1>

                <form>
                    <label>Title
                        <input 
                            type="text"
                            value={this.state.title}
                            />
                    </label>

                    <label>Description
                        <textarea
                            value={this.state.description}
                            />
                    </label>

                    <button>Save</button>
                    <button onClick={() => closeModal}>Cancel</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </form>

            </div>
        )
    }
}

export default EditPinForm;
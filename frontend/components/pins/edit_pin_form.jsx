import React from "react";

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updatePin(this.state).then(this.props.closeModal);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePin(this.props.pin.id).then(this.props.closeModal);
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    updateTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    updateDescription(e) {
        this.setState({ description: e.currentTarget.value });
        console.log(this.state);
    }

    render() {

        if (!this.props.pin) return null;

        return (
            <div className="edit-pin-form">
                <h1>Edit this pin</h1>

                <form className="edit-pin-form__inner">

                    <section className="edit-pin-form__mid">
                        <div>
                            <label>Title
                                <input 
                                    type="text"
                                    onChange={this.updateTitle}
                                    />
                            </label>

                            <label>Description
                                <textarea
                                    placeholder="Tell us about this Pin..."
                                    onChange={this.updateDescription}
                                    />
                            </label>
                        </div>
                        
                        <img src={this.props.pin.image_url} alt=""/>
                    </section>

                    <section className="edit-pin-form__btns">
                            <button onClick={this.handleDelete}>Delete</button>
                        <div>
                            <button onClick={this.handleCancel}>Cancel</button>
                            <button 
                                className="red"
                                onClick={this.handleUpdate}>Save
                            </button>
                        </div>
                    </section>
                </form>

            </div>
        )
    }
}

export default EditPinForm;
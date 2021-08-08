import React from "react";
import BoardDropdown from "../boards/board_dropdown";
import { Redirect } from 'react-router-dom';

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
        this.props.fetchBoards();
    }

    handleUpdate(e) {
        if (e){
            e.preventDefault();
        }
        let board = document.querySelector(".selected-board");        
        // this.setState({ board_id: board.dataset.id});
        debugger
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

    handleSubmit(e) {
        e.preventDefault();
        // e.stopPropagation();
        if (this.state != this.props.pin){
            this.handleUpdate();
        } else {
            this.closeModal();
        }     
    }

    render() {
        if (!this.state.id) return null;

        return (
            <div className="edit-pin-form">
                <h1>Edit this pin</h1>
                    <label >
                        <h3>Board</h3>
                        <BoardDropdown
                            class="edit-pin-board-drop" 
                            boards={this.props.boards}/>
                    </label>
                <form className="edit-pin-form__inner"
                    onSubmit={this.handleSubmit}
                    >

                    <section className="edit-pin-form__mid">
                        <div className="edit-pin-form__mid-inner">
                            {/* <label >
                                <h3>Board</h3>
                                <BoardDropdown
                                    class="edit-pin-board-drop" 
                                    boards={this.props.boards}/>
                            </label> */}
                            <label>
                                <h3>Title</h3>
                                <input 
                                    className="edit-pin-form__input"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.updateTitle}
                                    />
                            </label>

                            <label>
                                <h3>Description</h3>
                                <textarea
                                    placeholder="Tell us about this Pin..."
                                    onChange={this.updateDescription}
                                    value={this.state.description}
                                    />
                            </label>
                        </div>
                        
                        <img 
                            className="edit-pin-form__pin-img"
                            src={this.state.image_url} 
                            alt="pin-image"/>
                    </section>
                </form>

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

            </div>
        )
    }
}

export default EditPinForm;
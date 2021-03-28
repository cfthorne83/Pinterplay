import React from "react";

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.state.pin;
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId);
    }

    render() {

        if (!this.props.pin) return null;

        return (
            <div>
                <h1>Edit this pin</h1>

                <form action="">
                    <label>Edit Title
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={}/>
                    </label>

                    <label>Description
                        <textarea
                            value={this.state.description}
                            onChange={}/>
                    </label>
                </form>

            </div>
        )
    }
}

export default EditPinForm;